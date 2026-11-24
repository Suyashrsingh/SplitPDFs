'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import { 
  Upload, 
  FileText, 
  CheckCircle2, 
  Download, 
  Trash2, 
  Scissors, 
  Layers, 
  HardDrive, 
  FileCheck, 
  RefreshCw, 
  ShieldCheck, 
  Zap, 
  AlertCircle 
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { 
  renderThumbnail, 
  extractPages, 
  splitAllPagesToZip, 
  splitEveryNPagesToZip, 
  splitBySizeToZip, 
  parseRangeString,
  splitOddEven,
  PageInfo 
} from '@/lib/pdf-engine';
import { formatBytes, downloadBlob } from '@/lib/utils';
import { PDFDocument } from 'pdf-lib';

type SplitMode = 'extract' | 'all' | 'every-n' | 'by-size' | 'odd-even';

interface PdfSplitterProps {
  initialMode?: SplitMode;
  targetSizeDefault?: number;
  highlightTitle?: string;
  subtitle?: string;
}

export function PdfSplitter({
  initialMode = 'extract',
  targetSizeDefault = 10,
  highlightTitle,
  subtitle,
}: PdfSplitterProps) {
  const [file, setFile] = useState<File | null>(null);
  const [arrayBuffer, setArrayBuffer] = useState<ArrayBuffer | null>(null);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [pages, setPages] = useState<PageInfo[]>([]);
  const [mode, setMode] = useState<SplitMode>(initialMode);
  
  // Settings for modes
  const [rangeInput, setRangeInput] = useState<string>('');
  const [pagesPerChunk, setPagesPerChunk] = useState<number>(2);
  const [targetSizeMB, setTargetSizeMB] = useState<number>(targetSizeDefault);
  const [thumbnailZoom, setThumbnailZoom] = useState<'sm' | 'md' | 'lg'>('md');

  // Status & processing
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [progressMsg, setProgressMsg] = useState<string>('');
  const [errorMsg, setErrorMsg] = useState<string>('');
  const [successResult, setSuccessResult] = useState<{ name: string; blob: Blob; size: number } | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

  // Handle file upload
  const handleFile = async (selectedFile: File) => {
    if (selectedFile.type !== 'application/pdf' && !selectedFile.name.endsWith('.pdf')) {
      setErrorMsg('Please select a valid PDF document (.pdf).');
      return;
    }

    setErrorMsg('');
    setSuccessResult(null);
    setIsLoading(true);
    setProgressMsg('Loading PDF in browser memory...');

    try {
      const buffer = await selectedFile.arrayBuffer();
      const pdfDoc = await PDFDocument.load(buffer, { ignoreEncryption: true });
      const count = pdfDoc.getPageCount();

      if (count === 0) {
        throw new Error('PDF has no pages.');
      }

      setFile(selectedFile);
      setArrayBuffer(buffer);
      setTotalPages(count);

      // Initialize pages
      const initialPages: PageInfo[] = Array.from({ length: count }, (_, idx) => ({
        pageNumber: idx + 1,
        selected: true,
      }));
      setPages(initialPages);
      setRangeInput(`1-${count}`);

      setIsLoading(false);

      // Lazily load thumbnails in background
      loadThumbnails(buffer, count);
    } catch (err: unknown) {
      console.error(err);
      const message = err instanceof Error ? err.message : 'Error reading PDF';
      setErrorMsg(message.includes('password') ? 'This PDF is password-protected. Please remove the password first.' : 'Failed to parse PDF.');
      setIsLoading(false);
    }
  };

  const loadThumbnails = async (buffer: ArrayBuffer, count: number) => {
    // Render first 24 thumbnails eagerly, rest lazily
    const limit = Math.min(count, 40);
    for (let i = 1; i <= limit; i++) {
      try {
        const thumb = await renderThumbnail(buffer, i, 0.4);
        setPages(prev => prev.map(p => p.pageNumber === i ? { ...p, thumbnailUrl: thumb } : p));
      } catch (e) {
        console.warn('Thumbnail generation failed for page', i, e);
      }
    }
  };

  // Sync range input with selected pages
  const handleRangeInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setRangeInput(value);
    const parsed = parseRangeString(value, totalPages);
    setPages(prev => prev.map(p => ({
      ...p,
      selected: parsed.includes(p.pageNumber),
    })));
  };

  // Toggle single page selection
  const togglePageSelection = (pageNum: number) => {
    setPages(prev => {
      const updated = prev.map(p => p.pageNumber === pageNum ? { ...p, selected: !p.selected } : p);
      const selectedNumbers = updated.filter(p => p.selected).map(p => p.pageNumber);
      
      // Update range input representation
      if (selectedNumbers.length === 0) {
        setRangeInput('');
      } else {
        setRangeInput(selectedNumbers.join(', '));
      }
      return updated;
    });
  };

  // Quick selection helpers
  const selectAll = () => {
    setPages(prev => prev.map(p => ({ ...p, selected: true })));
    setRangeInput(`1-${totalPages}`);
  };

  const deselectAll = () => {
    setPages(prev => prev.map(p => ({ ...p, selected: false })));
    setRangeInput('');
  };

  const selectOdd = () => {
    setPages(prev => prev.map(p => ({ ...p, selected: p.pageNumber % 2 !== 0 })));
    const odd = Array.from({ length: totalPages }, (_, i) => i + 1).filter(n => n % 2 !== 0);
    setRangeInput(odd.join(', '));
  };

  const selectEven = () => {
    setPages(prev => prev.map(p => ({ ...p, selected: p.pageNumber % 2 === 0 })));
    const even = Array.from({ length: totalPages }, (_, i) => i + 1).filter(n => n % 2 === 0);
    setRangeInput(even.join(', '));
  };

  const invertSelection = () => {
    setPages(prev => {
      const updated = prev.map(p => ({ ...p, selected: !p.selected }));
      const selectedNumbers = updated.filter(p => p.selected).map(p => p.pageNumber);
      setRangeInput(selectedNumbers.length === 0 ? '' : selectedNumbers.join(', '));
      return updated;
    });
  };

  // Trigger Split execution
  const executeSplit = async () => {
    if (!arrayBuffer || !file) return;

    setIsProcessing(true);
    setErrorMsg('');
    setProgressMsg('Processing split in browser...');

    try {
      const baseName = file.name.replace(/\.pdf$/i, '');

      if (mode === 'extract') {
        const selectedPageNumbers = pages.filter(p => p.selected).map(p => p.pageNumber);
        if (selectedPageNumbers.length === 0) {
          throw new Error('Please select at least 1 page to extract.');
        }

        const res = await extractPages(arrayBuffer, selectedPageNumbers, `${baseName}_extracted.pdf`);
        setSuccessResult({
          name: res.name,
          blob: res.blob,
          size: res.sizeBytes,
        });
      } else if (mode === 'all') {
        setProgressMsg(`Splitting ${totalPages} pages into individual files...`);
        const zipBlob = await splitAllPagesToZip(arrayBuffer, baseName, (curr, tot) => {
          setProgressMsg(`Splitting page ${curr} of ${tot}...`);
        });

        setSuccessResult({
          name: `${baseName}_single_pages.zip`,
          blob: zipBlob,
          size: zipBlob.size,
        });
      } else if (mode === 'every-n') {
        setProgressMsg(`Grouping every ${pagesPerChunk} pages...`);
        const zipBlob = await splitEveryNPagesToZip(arrayBuffer, pagesPerChunk, baseName, (chunk, tot) => {
          setProgressMsg(`Generating part ${chunk} of ${tot}...`);
        });

        setSuccessResult({
          name: `${baseName}_split_every_${pagesPerChunk}_pages.zip`,
          blob: zipBlob,
          size: zipBlob.size,
        });
      } else if (mode === 'by-size') {
        setProgressMsg(`Calculating page density to target ~${targetSizeMB} MB...`);
        const zipBlob = await splitBySizeToZip(arrayBuffer, targetSizeMB, baseName);
        setSuccessResult({
          name: `${baseName}_split_${targetSizeMB}MB.zip`,
          blob: zipBlob,
          size: zipBlob.size,
        });
      } else if (mode === 'odd-even') {
        setProgressMsg('Separating odd and even pages...');
        const { oddBlob, evenBlob } = await splitOddEven(arrayBuffer, baseName);
        
        // Bundle in zip for single click convenience
        const JSZip = (await import('jszip')).default;
        const zip = new JSZip();
        zip.file(`${baseName}_odd_pages.pdf`, oddBlob);
        zip.file(`${baseName}_even_pages.pdf`, evenBlob);
        const zipBlob = await zip.generateAsync({ type: 'blob' });

        setSuccessResult({
          name: `${baseName}_odd_even_split.zip`,
          blob: zipBlob,
          size: zipBlob.size,
        });
      }

      setIsProcessing(false);
      setProgressMsg('');

      // Trigger celebration confetti
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
        });
      } catch (e) {
        // Confetti fallback
      }
    } catch (err: unknown) {
      console.error(err);
      setErrorMsg(err instanceof Error ? err.message : 'An error occurred during splitting.');
      setIsProcessing(false);
      setProgressMsg('');
    }
  };

  const resetTool = () => {
    setFile(null);
    setArrayBuffer(null);
    setPages([]);
    setTotalPages(0);
    setSuccessResult(null);
    setErrorMsg('');
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const selectedCount = pages.filter(p => p.selected).length;

  return (
    <div className="w-full max-w-5xl mx-auto">
      {/* Upload Box when no file selected */}
      {!file ? (
        <div className="relative">
          <div
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => {
              e.preventDefault();
              if (e.dataTransfer.files && e.dataTransfer.files[0]) {
                handleFile(e.dataTransfer.files[0]);
              }
            }}
            onClick={() => fileInputRef.current?.click()}
            className="relative bg-white rounded-2xl border-2 border-dashed border-slate-300 hover:border-indigo-600 p-8 sm:p-14 text-center cursor-pointer transition-all shadow-sm hover:shadow-md flex flex-col items-center justify-center group"
          >
            <input
              ref={fileInputRef}
              type="file"
              accept=".pdf,application/pdf"
              className="hidden"
              onChange={(e) => {
                if (e.target.files && e.target.files[0]) {
                  handleFile(e.target.files[0]);
                }
              }}
            />

            <div className="w-16 h-16 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-5 group-hover:bg-indigo-600 group-hover:text-white transition-all shadow-sm">
              <Upload className="w-7 h-7" />
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-2">
              {highlightTitle || 'Drop PDF document here or browse'}
            </h2>
            <p className="text-sm sm:text-base text-slate-600 max-w-md mb-6 leading-relaxed">
              {subtitle || 'Visual page selector with zero server uploads. Files are processed locally inside your browser.'}
            </p>

            <button
              type="button"
              className="px-8 py-3 rounded-xl font-semibold text-white bg-indigo-600 hover:bg-indigo-700 shadow-sm hover:shadow transition-all flex items-center gap-2 text-sm"
            >
              <FileText className="w-4 h-4" />
              <span>Select PDF Document</span>
            </button>

            {/* Privacy Badges */}
            <div className="flex flex-wrap items-center justify-center gap-6 mt-8 pt-6 border-t border-slate-100 text-xs text-slate-500">
              <span className="flex items-center gap-1.5 text-emerald-700 font-medium">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                Processed in your browser memory
              </span>
              <span className="flex items-center gap-1.5 text-slate-700 font-medium">
                <Zap className="w-4 h-4 text-indigo-600" />
                Zero network upload latency
              </span>
              <span className="flex items-center gap-1.5 text-slate-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-blue-600" />
                Unlimited document size
              </span>
            </div>
          </div>
        </div>
      ) : (
        /* Interactive Split Interface when file is loaded */
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-2xl overflow-hidden animate-in fade-in duration-200">
          {/* Top Bar: File Details & Reset */}
          <div className="bg-slate-50 px-6 py-4 border-b border-slate-200 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-bold text-sm shadow-sm">
                PDF
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-sm sm:text-base line-clamp-1 max-w-sm sm:max-w-md">
                  {file.name}
                </h3>
                <div className="flex items-center gap-3 text-xs text-slate-500">
                  <span>{formatBytes(file.size)}</span>
                  <span>•</span>
                  <span className="font-semibold text-indigo-600">{totalPages} Pages</span>
                </div>
              </div>
            </div>

            <button
              onClick={resetTool}
              className="px-3 py-1.5 text-xs font-semibold text-slate-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors flex items-center gap-1.5 border border-slate-200"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>Change File</span>
            </button>
          </div>

          {/* Mode Tabs */}
          <div className="px-6 pt-5 pb-3 border-b border-slate-100 bg-white">
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setMode('extract')}
                className={`px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm flex items-center gap-2 transition-all ${
                  mode === 'extract'
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/25'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                <Scissors className="w-4 h-4" />
                <span>Extract Pages (Visual)</span>
              </button>

              <button
                onClick={() => setMode('all')}
                className={`px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm flex items-center gap-2 transition-all ${
                  mode === 'all'
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/25'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                <Layers className="w-4 h-4" />
                <span>Split into 1-Page Files</span>
              </button>

              <button
                onClick={() => setMode('every-n')}
                className={`px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm flex items-center gap-2 transition-all ${
                  mode === 'every-n'
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/25'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                <FileCheck className="w-4 h-4" />
                <span>Split Every N Pages</span>
              </button>

              <button
                onClick={() => setMode('by-size')}
                className={`px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm flex items-center gap-2 transition-all ${
                  mode === 'by-size'
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/25'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                <HardDrive className="w-4 h-4" />
                <span>Split by Size (MB)</span>
              </button>
            </div>
          </div>

          {/* Mode Settings Control Panel */}
          <div className="p-6 bg-slate-50/60 border-b border-slate-200">
            {mode === 'extract' && (
              <div className="space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
                      Page Range Selection:
                    </label>
                    <p className="text-xs text-slate-500">
                      Click thumbnails below or type page ranges (e.g., <code className="bg-slate-200 px-1 py-0.5 rounded font-mono">1-3, 5, 8</code>).
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <button
                      onClick={selectAll}
                      className="px-2.5 py-1 text-xs font-semibold rounded-md bg-white border border-slate-300 text-slate-700 hover:bg-slate-100"
                    >
                      Select All
                    </button>
                    <button
                      onClick={deselectAll}
                      className="px-2.5 py-1 text-xs font-semibold rounded-md bg-white border border-slate-300 text-slate-700 hover:bg-slate-100"
                    >
                      Clear
                    </button>
                    <button
                      onClick={selectOdd}
                      className="px-2.5 py-1 text-xs font-semibold rounded-md bg-white border border-slate-300 text-slate-700 hover:bg-slate-100"
                    >
                      Odd Pages
                    </button>
                    <button
                      onClick={selectEven}
                      className="px-2.5 py-1 text-xs font-semibold rounded-md bg-white border border-slate-300 text-slate-700 hover:bg-slate-100"
                    >
                      Even Pages
                    </button>
                    <button
                      onClick={invertSelection}
                      className="px-2.5 py-1 text-xs font-semibold rounded-md bg-white border border-slate-300 text-slate-700 hover:bg-slate-100"
                    >
                      Invert
                    </button>

                    {/* Thumbnail Zoom Controls */}
                    <div className="hidden sm:flex items-center gap-1 border-l border-slate-200 pl-2 ml-1 text-xs text-slate-500">
                      <span className="text-[11px] font-medium text-slate-400">View:</span>
                      {(['sm', 'md', 'lg'] as const).map((z) => (
                        <button
                          key={z}
                          onClick={() => setThumbnailZoom(z)}
                          className={`w-6 h-6 rounded flex items-center justify-center font-bold text-[10px] uppercase transition-colors ${
                            thumbnailZoom === z ? 'bg-indigo-600 text-white shadow-xs' : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
                          }`}
                        >
                          {z}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <input
                    type="text"
                    value={rangeInput}
                    onChange={handleRangeInputChange}
                    placeholder="e.g. 1-4, 7, 9-12"
                    className="flex-1 px-4 py-2 text-sm font-mono border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white shadow-sm"
                  />
                  <span className="text-xs font-semibold text-slate-600 bg-indigo-50 px-3 py-2 rounded-xl border border-indigo-100 whitespace-nowrap">
                    {selectedCount} of {totalPages} pages selected
                  </span>
                </div>
              </div>
            )}

            {mode === 'all' && (
              <div className="text-sm text-slate-600">
                <p className="font-semibold text-slate-800">
                  Every page of this document will be saved as an independent, single-page PDF.
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  You will download a single compressed <strong>ZIP file</strong> containing all {totalPages} individual PDF files.
                </p>
              </div>
            )}

            {mode === 'every-n' && (
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <div>
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
                    Split into parts of:
                  </label>
                  <p className="text-xs text-slate-500">
                    Each chunk will contain this many pages.
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <input
                    type="number"
                    min={1}
                    max={totalPages}
                    value={pagesPerChunk}
                    onChange={(e) => setPagesPerChunk(Math.max(1, parseInt(e.target.value) || 1))}
                    className="w-24 px-3 py-2 text-sm font-bold text-center border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white"
                  />
                  <span className="text-xs font-semibold text-slate-600">
                    Pages per file (Total ~{Math.ceil(totalPages / pagesPerChunk)} files)
                  </span>
                </div>
              </div>
            )}

            {mode === 'by-size' && (
              <div className="space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
                      Target File Size Limit (MB):
                    </label>
                    <p className="text-xs text-slate-500">
                      Auto-slices pages so each resulting document stays under your target size.
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    {[5, 10, 20, 25].map((size) => (
                      <button
                        key={size}
                        onClick={() => setTargetSizeMB(size)}
                        className={`px-3 py-1 text-xs font-bold rounded-lg border transition-all ${
                          targetSizeMB === size
                            ? 'bg-indigo-600 text-white border-indigo-600'
                            : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-100'
                        }`}
                      >
                        {size} MB {size === 25 ? '(Gmail/Outlook)' : ''}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <input
                    type="number"
                    min={1}
                    max={100}
                    value={targetSizeMB}
                    onChange={(e) => setTargetSizeMB(Math.max(1, parseInt(e.target.value) || 1))}
                    className="w-28 px-3 py-2 text-sm font-bold text-center border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white"
                  />
                  <span className="text-xs font-semibold text-slate-600">
                    Megabytes (MB) max per chunk
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Interactive Thumbnail Visual Grid (Extract Mode) */}
          {mode === 'extract' && (
            <div className="p-6 max-h-[500px] overflow-y-auto bg-slate-50/30">
              <div
                className={`grid transition-all duration-200 ${
                  thumbnailZoom === 'sm'
                    ? 'grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2.5'
                    : thumbnailZoom === 'lg'
                    ? 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'
                    : 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4'
                }`}
              >
                {pages.map((p) => (
                  <div
                    key={p.pageNumber}
                    onClick={() => togglePageSelection(p.pageNumber)}
                    className={`group relative rounded-xl border-2 p-2 cursor-pointer transition-all duration-150 flex flex-col items-center ${
                      p.selected
                        ? 'border-indigo-600 bg-indigo-50/50 shadow-md ring-2 ring-indigo-500/20'
                        : 'border-slate-200 bg-white hover:border-slate-400 opacity-60 hover:opacity-100'
                    }`}
                  >
                    {/* Checkbox indicator */}
                    <div className="absolute top-2 right-2 z-10">
                      <div
                        className={`w-5 h-5 rounded-md flex items-center justify-center text-white text-xs font-bold transition-all ${
                          p.selected ? 'bg-indigo-600 shadow' : 'border border-slate-300 bg-white'
                        }`}
                      >
                        {p.selected && '✓'}
                      </div>
                    </div>

                    {/* Page Thumbnail Preview */}
                    <div className="w-full aspect-[1/1.4] bg-white rounded-lg shadow-sm border border-slate-100 overflow-hidden flex items-center justify-center relative">
                      {p.thumbnailUrl ? (
                        <img
                          src={p.thumbnailUrl}
                          alt={`Page ${p.pageNumber}`}
                          className="w-full h-full object-contain"
                        />
                      ) : (
                        <div className="flex flex-col items-center justify-center p-2 text-slate-400">
                          <FileText className="w-6 h-6 mb-1 text-slate-300" />
                          <span className="text-[10px]">Loading preview...</span>
                        </div>
                      )}
                    </div>

                    {/* Page Number Label */}
                    <span className="mt-2 text-xs font-bold text-slate-700">
                      Page {p.pageNumber}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Error Message */}
          {errorMsg && (
            <div className="mx-6 mt-4 p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm flex items-center gap-3">
              <AlertCircle className="w-5 h-5 shrink-0 text-red-600" />
              <span>{errorMsg}</span>
            </div>
          )}

          {/* Action Footer: Processing State & Download Button */}
          <div className="p-6 bg-white border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-slate-500 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Processed locally on your device in real-time</span>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              {!successResult ? (
                <button
                  onClick={executeSplit}
                  disabled={isProcessing || (mode === 'extract' && selectedCount === 0)}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold text-white bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/50 transition-all flex items-center justify-center gap-2 text-base"
                >
                  {isProcessing ? (
                    <>
                      <RefreshCw className="w-5 h-5 animate-spin" />
                      <span>{progressMsg || 'Processing...'}</span>
                    </>
                  ) : (
                    <>
                      <Scissors className="w-5 h-5" />
                      <span>
                        {mode === 'extract'
                          ? `Extract ${selectedCount} Page${selectedCount !== 1 ? 's' : ''}`
                          : 'Split PDF Now'}
                      </span>
                    </>
                  )}
                </button>
              ) : (
                <button
                  onClick={() => downloadBlob(successResult.blob, successResult.name)}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold text-white bg-emerald-600 hover:bg-emerald-700 shadow-lg shadow-emerald-600/30 hover:shadow-emerald-600/50 transition-all flex items-center justify-center gap-2 text-base animate-pulse"
                >
                  <Download className="w-5 h-5" />
                  <span>Download {successResult.name.endsWith('.zip') ? 'ZIP Archive' : 'PDF'} ({formatBytes(successResult.size)})</span>
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
