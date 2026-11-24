import { PDFDocument } from 'pdf-lib';
import JSZip from 'jszip';

export interface SplitResult {
  name: string;
  blob: Blob;
  pageCount: number;
  sizeBytes: number;
}

export interface PageInfo {
  pageNumber: number; // 1-indexed
  thumbnailUrl?: string;
  selected: boolean;
}

/**
 * Parses user input like "1-3, 5, 8-10" into a set of 1-based page numbers.
 */
export function parseRangeString(input: string, maxPages: number): number[] {
  const selected = new Set<number>();
  if (!input.trim()) return [];

  const parts = input.split(/[,;\s]+/).map(p => p.trim()).filter(Boolean);

  for (const part of parts) {
    if (part.includes('-')) {
      const [startStr, endStr] = part.split('-');
      const start = parseInt(startStr, 10);
      const end = parseInt(endStr, 10);
      if (!isNaN(start) && !isNaN(end)) {
        const from = Math.max(1, Math.min(start, end));
        const to = Math.min(maxPages, Math.max(start, end));
        for (let i = from; i <= to; i++) {
          selected.add(i);
        }
      }
    } else {
      const num = parseInt(part, 10);
      if (!isNaN(num) && num >= 1 && num <= maxPages) {
        selected.add(num);
      }
    }
  }

  return Array.from(selected).sort((a, b) => a - b);
}

/**
 * Render a page of a PDF as a thumbnail data URL using PDF.js in the browser
 */
export async function renderThumbnail(
  pdfBuffer: ArrayBuffer,
  pageNumber: number, // 1-indexed
  scale = 0.5
): Promise<string> {
  if (typeof window === 'undefined') return '';

  try {
    const pdfjs = await import('pdfjs-dist');
    // Configure worker
    if (!pdfjs.GlobalWorkerOptions.workerSrc) {
      pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version || '4.10.38'}/build/pdf.worker.min.mjs`;
    }

    const loadingTask = pdfjs.getDocument({ data: pdfBuffer.slice(0) });
    const pdf = await loadingTask.promise;
    const page = await pdf.getPage(pageNumber);

    const viewport = page.getViewport({ scale });
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    if (!context) throw new Error('Could not get 2D context');

    canvas.height = viewport.height;
    canvas.width = viewport.width;

    await page.render({
      canvasContext: context,
      viewport: viewport,
    }).promise;

    return canvas.toDataURL('image/jpeg', 0.85);
  } catch (err) {
    console.warn(`Failed to render thumbnail for page ${pageNumber}:`, err);
    return '';
  }
}

/**
 * Extract selected 1-indexed pages into a single new PDF document.
 */
export async function extractPages(
  sourceBuffer: ArrayBuffer,
  pageNumbers: number[],
  outputName = 'extracted_document.pdf'
): Promise<SplitResult> {
  const srcDoc = await PDFDocument.load(sourceBuffer);
  const newDoc = await PDFDocument.create();

  // Convert 1-indexed to 0-indexed
  const zeroIndexed = pageNumbers
    .map(p => p - 1)
    .filter(p => p >= 0 && p < srcDoc.getPageCount());

  const copiedPages = await newDoc.copyPages(srcDoc, zeroIndexed);
  for (const page of copiedPages) {
    newDoc.addPage(page);
  }

  const pdfBytes = await newDoc.save();
  const blob = new Blob([pdfBytes as unknown as BlobPart], { type: 'application/pdf' });

  return {
    name: outputName,
    blob,
    pageCount: copiedPages.length,
    sizeBytes: pdfBytes.byteLength,
  };
}

/**
 * Split every single page into its own individual PDF and pack into a ZIP.
 */
export async function splitAllPagesToZip(
  sourceBuffer: ArrayBuffer,
  baseName: string,
  onProgress?: (current: number, total: number) => void
): Promise<Blob> {
  const srcDoc = await PDFDocument.load(sourceBuffer);
  const totalPages = srcDoc.getPageCount();
  const zip = new JSZip();

  const cleanBase = baseName.replace(/\.pdf$/i, '');

  for (let i = 0; i < totalPages; i++) {
    const singleDoc = await PDFDocument.create();
    const [copiedPage] = await singleDoc.copyPages(srcDoc, [i]);
    singleDoc.addPage(copiedPage);

    const pdfBytes = await singleDoc.save();
    const padDigits = String(totalPages).length;
    const pageNumStr = String(i + 1).padStart(padDigits, '0');
    zip.file(`${cleanBase}_page_${pageNumStr}.pdf`, pdfBytes);

    if (onProgress) {
      onProgress(i + 1, totalPages);
    }
  }

  return await zip.generateAsync({ type: 'blob' });
}

/**
 * Split into chunks of N pages each and pack into a ZIP.
 */
export async function splitEveryNPagesToZip(
  sourceBuffer: ArrayBuffer,
  n: number,
  baseName: string,
  onProgress?: (chunkIndex: number, totalChunks: number) => void
): Promise<Blob> {
  const srcDoc = await PDFDocument.load(sourceBuffer);
  const totalPages = srcDoc.getPageCount();
  const totalChunks = Math.ceil(totalPages / n);
  const zip = new JSZip();
  const cleanBase = baseName.replace(/\.pdf$/i, '');

  for (let chunk = 0; chunk < totalChunks; chunk++) {
    const start = chunk * n;
    const end = Math.min(start + n, totalPages);
    const pageIndices = [];
    for (let i = start; i < end; i++) {
      pageIndices.push(i);
    }

    const chunkDoc = await PDFDocument.create();
    const copiedPages = await chunkDoc.copyPages(srcDoc, pageIndices);
    for (const page of copiedPages) {
      chunkDoc.addPage(page);
    }

    const pdfBytes = await chunkDoc.save();
    zip.file(`${cleanBase}_part_${chunk + 1}_(pages_${start + 1}-${end}).pdf`, pdfBytes);

    if (onProgress) {
      onProgress(chunk + 1, totalChunks);
    }
  }

  return await zip.generateAsync({ type: 'blob' });
}

/**
 * Split by target file size in MB.
 * Estimates page density and creates chunks that attempt to stay under the size limit.
 */
export async function splitBySizeToZip(
  sourceBuffer: ArrayBuffer,
  targetSizeMB: number,
  baseName: string,
  onProgress?: (current: number, total: number) => void
): Promise<Blob> {
  const srcDoc = await PDFDocument.load(sourceBuffer);
  const totalPages = srcDoc.getPageCount();
  const totalBytes = sourceBuffer.byteLength;
  const targetBytes = targetSizeMB * 1024 * 1024;

  const zip = new JSZip();
  const cleanBase = baseName.replace(/\.pdf$/i, '');

  // Calculate pages per chunk based on average page size
  const avgPageBytes = totalBytes / totalPages;
  const estimatedPagesPerChunk = Math.max(1, Math.floor(targetBytes / avgPageBytes));

  return await splitEveryNPagesToZip(sourceBuffer, estimatedPagesPerChunk, `${cleanBase}_under_${targetSizeMB}MB`, onProgress);
}

/**
 * Split odd and even pages.
 */
export async function splitOddEven(
  sourceBuffer: ArrayBuffer,
  baseName: string
): Promise<{ oddBlob: Blob; evenBlob: Blob }> {
  const srcDoc = await PDFDocument.load(sourceBuffer);
  const totalPages = srcDoc.getPageCount();

  const oddDoc = await PDFDocument.create();
  const evenDoc = await PDFDocument.create();

  const oddIndices = [];
  const evenIndices = [];

  for (let i = 0; i < totalPages; i++) {
    if ((i + 1) % 2 !== 0) {
      oddIndices.push(i);
    } else {
      evenIndices.push(i);
    }
  }

  if (oddIndices.length > 0) {
    const oddPages = await oddDoc.copyPages(srcDoc, oddIndices);
    oddPages.forEach(p => oddDoc.addPage(p));
  }

  if (evenIndices.length > 0) {
    const evenPages = await evenDoc.copyPages(srcDoc, evenIndices);
    evenPages.forEach(p => evenDoc.addPage(p));
  }

  const [oddBytes, evenBytes] = await Promise.all([oddDoc.save(), evenDoc.save()]);

  return {
    oddBlob: new Blob([oddBytes as unknown as BlobPart], { type: 'application/pdf' }),
    evenBlob: new Blob([evenBytes as unknown as BlobPart], { type: 'application/pdf' }),
  };
}
