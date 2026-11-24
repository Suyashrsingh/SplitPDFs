import React from 'react';
import type { Metadata } from 'next';
import { PdfSplitter } from '@/components/PdfSplitter';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Scissors, CheckCircle2, ShieldCheck, FileText, ArrowRight, BookOpen, HardDrive } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Extract Pages from PDF Online Free – Visual Page Selector | SplitPDFs',
  description: 'Extract specific pages or custom page ranges from your PDF into a brand-new document. 100% private in-browser WebAssembly tool with live visual thumbnail previews.',
  keywords: [
    'extract pages from pdf',
    'extract specific pages from pdf online',
    'save certain pages of pdf',
    'pull pages from pdf free',
    'separate pages from pdf',
    'pdf page range extractor'
  ],
  alternates: {
    canonical: 'https://splitpdfs.in/extract-pages',
  },
  openGraph: {
    title: 'Extract Pages from PDF Online Free – Visual Page Selector',
    description: 'Pull exact pages from multi-page documents with live visual thumbnail previews. Zero cloud uploads.',
    url: 'https://splitpdfs.in/extract-pages',
    siteName: 'SplitPDFs',
    type: 'website',
  },
};

export default function ExtractPagesPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': 'How do I extract only certain pages from a PDF?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Drop your PDF into the tool above. Click the visual thumbnails of the pages you want to keep, or type ranges like "1-3, 5, 8". Click "Split PDF Now" to generate a brand new PDF containing only your selected pages in under 0.5 seconds.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Does extracting pages lower the quality of scanned documents?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'No. SplitPDFs copies the exact binary stream of each selected page without re-compressing or rasterizing vector text or images. Your extracted document retains 100% original DPI and signature validity.'
        }
      }
    ]
  };

  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    'name': 'How to Extract Specific Pages from a PDF',
    'description': 'Select and extract arbitrary page ranges from any multi-page PDF document online.',
    'totalTime': 'PT1M',
    'step': [
      {
        '@type': 'HowToStep',
        'position': 1,
        'name': 'Drop Document',
        'text': 'Select or drop your PDF document into the visual workspace.',
        'url': 'https://splitpdfs.in/extract-pages'
      },
      {
        '@type': 'HowToStep',
        'position': 2,
        'name': 'Select Desired Pages',
        'text': 'Click visual thumbnails or type page numbers (e.g. 1-4, 7, 9) in the range input.',
        'url': 'https://splitpdfs.in/extract-pages'
      },
      {
        '@type': 'HowToStep',
        'position': 3,
        'name': 'Download Extracted File',
        'text': 'Click "Extract Pages". The browser generates a trimmed PDF instantly without uploading any data to remote servers.',
        'url': 'https://splitpdfs.in/extract-pages'
      }
    ]
  };

  return (
    <div className="flex flex-col min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />

      <section className="pt-8 sm:pt-12 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-purple-50/60 via-white to-white">
        <div className="max-w-5xl mx-auto">
          {/* Breadcrumbs for SEO */}
          <Breadcrumbs
            items={[
              { label: 'Tools', href: '/' },
              { label: 'Extract Specific Pages' }
            ]}
          />

          <div className="max-w-4xl mx-auto text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100 border border-purple-200 text-purple-800 text-xs font-bold tracking-wide uppercase mb-6 shadow-sm">
              <Scissors className="w-4 h-4 text-purple-600" />
              <span>Interactive Visual Extractor</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-black text-slate-950 tracking-tight leading-[1.1] mb-5">
              Extract Specific Pages <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">
                from Any PDF Document
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Need only pages 3 to 7 from a 200-page report? 
              Select pages visually with real-time thumbnail previews and generate a clean, trimmed PDF instantly with <strong>zero server uploads</strong>.
            </p>
          </div>

          {/* Pre-configured in extract mode */}
          <PdfSplitter 
            initialMode="extract"
            highlightTitle="Select PDF to Extract Pages"
            subtitle="Click page thumbnails or enter custom ranges (e.g., 1-4, 8, 12)."
          />
        </div>
      </section>

      {/* Direct-Answer GEO Definition Block for AI Search & Featured Snippets */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-slate-50 border-y border-slate-200">
        <div className="max-w-4xl mx-auto bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm">
          <h2 className="text-xs font-bold text-purple-600 uppercase tracking-wider mb-2">
            Direct Answer: How PDF Page Extraction Works
          </h2>
          <p className="text-sm text-slate-700 leading-relaxed">
            PDF page extraction isolates specific pages from an existing multi-page file and re-compiles them into a new, smaller document. With <strong>SplitPDFs</strong>, users can visually click high-definition page thumbnails or type complex range formulas (such as <code>1-3, 7, 10-15</code>). The client-side WebAssembly engine copies the exact binary objects, fonts, and vector paths directly into a new document structure in milliseconds—guaranteeing 100% confidentiality because zero bytes leave your device.
          </p>
        </div>
      </section>

      {/* SEO Content: Step-by-step extraction guide */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">
            When Should You Extract Specific Pages?
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm hover:border-purple-300 transition-colors">
              <h3 className="font-bold text-slate-900 text-sm mb-2">Legal & Court Exhibits</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Pull signature declarations, exhibit addendums, and contracts from massive court dockets without disclosing irrelevant client data.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm hover:border-purple-300 transition-colors">
              <h3 className="font-bold text-slate-900 text-sm mb-2">Tax & Financial Records</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Extract W-2 forms or specific monthly balance sheets from annual 100-page bank statements to send to your accountant safely.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm hover:border-purple-300 transition-colors">
              <h3 className="font-bold text-slate-900 text-sm mb-2">Academic Transcripts</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Separate degree certificates, syllabus outlines, and grade cards into clean individual files for university portal applications.
              </p>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
            <Link
              href="/blog/how-to-extract-pages-from-scanned-pdf-free"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-indigo-600 hover:text-indigo-800"
            >
              <BookOpen className="w-4 h-4" />
              <span>Tutorial: How to Extract Pages from Scanned PDFs</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            <Link
              href="/split-by-size"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-600 hover:text-slate-900"
            >
              <HardDrive className="w-4 h-4" />
              <span>Need to split by 25MB file size instead?</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
