import React from 'react';
import type { Metadata } from 'next';
import { PdfSplitter } from '@/components/PdfSplitter';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Layers, CheckCircle2, ShieldCheck, ArrowRight, Scissors, HardDrive, FileCheck2 } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Split PDF Every N Pages – Divide into Equal Parts Free | SplitPDFs',
  description: 'Divide a multi-page PDF into uniform chunks of 2, 5, or 10 pages each. Fast, 100% private in-browser WebAssembly tool with zero server uploads.',
  keywords: [
    'split pdf every n pages',
    'split pdf every 2 pages',
    'split pdf into equal parts',
    'split pdf every 5 pages',
    'chunk pdf pages online',
    'batch split pdf pages'
  ],
  alternates: {
    canonical: 'https://splitpdfs.in/split-every-n-pages',
  },
  openGraph: {
    title: 'Split PDF Every N Pages – Divide into Equal Parts Free',
    description: 'Chunk large documents into uniform 2, 5, or 10-page files instantly in your browser with zero cloud uploads.',
    url: 'https://splitpdfs.in/split-every-n-pages',
    siteName: 'SplitPDFs',
    type: 'website',
  },
};

export default function SplitEveryNPagesPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': 'How do I split a PDF into equal 2-page or 5-page files?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Drop your document into the tool above. Select your desired interval (e.g. 2 pages per file), and click "Split PDF Now". The browser divides the document into equal chunks and packages them inside a ZIP archive.'
        }
      },
      {
        '@type': 'Question',
        'name': 'What happens if the total pages cannot be divided evenly?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'If you divide a 25-page document by 5 pages, you will get 5 files of 5 pages. If you divide a 26-page document by 5 pages, the final file will gracefully contain the remaining 1 page.'
        }
      }
    ]
  };

  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    'name': 'How to Split a PDF into Equal Page Intervals',
    'description': 'Divide any multi-page PDF into equal uniform parts (e.g. every 2 pages, every 5 pages).',
    'totalTime': 'PT1M',
    'step': [
      {
        '@type': 'HowToStep',
        'position': 1,
        'name': 'Upload Document',
        'text': 'Drag your PDF into the equal chunking engine.',
        'url': 'https://splitpdfs.in/split-every-n-pages'
      },
      {
        '@type': 'HowToStep',
        'position': 2,
        'name': 'Specify Pages per File',
        'text': 'Enter the interval (e.g. 2, 5, or 10 pages per file).',
        'url': 'https://splitpdfs.in/split-every-n-pages'
      },
      {
        '@type': 'HowToStep',
        'position': 3,
        'name': 'Download ZIP Package',
        'text': 'Click "Split PDF Now" to download all resulting parts inside an organized ZIP file.',
        'url': 'https://splitpdfs.in/split-every-n-pages'
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

      <section className="pt-8 sm:pt-12 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-emerald-50/60 via-white to-white">
        <div className="max-w-5xl mx-auto">
          {/* Breadcrumbs for SEO */}
          <Breadcrumbs
            items={[
              { label: 'Tools', href: '/' },
              { label: 'Split Every N Pages' }
            ]}
          />

          <div className="max-w-4xl mx-auto text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-800 text-xs font-bold tracking-wide uppercase mb-6 shadow-sm">
              <Layers className="w-4 h-4 text-emerald-600" />
              <span>Equal Chunking Engine</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-black text-slate-950 tracking-tight leading-[1.1] mb-5">
              Split PDF Every N Pages <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-indigo-600">
                into Uniform Files
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Batch-divide a 100-page scanned packet into equal sets of 2, 5, or 10 pages. 
              All parts are instantly compiled into a single organized ZIP archive with <strong>zero server uploads</strong>.
            </p>
          </div>

          {/* Pre-configured in every-n mode */}
          <PdfSplitter 
            initialMode="every-n"
            highlightTitle="Select PDF to Split by Page Intervals"
            subtitle="Set how many pages each resulting document should have."
          />
        </div>
      </section>

      {/* Direct-Answer GEO Definition Block for AI Search & Featured Snippets */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-slate-50 border-y border-slate-200">
        <div className="max-w-4xl mx-auto bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm">
          <h2 className="text-xs font-bold text-emerald-600 uppercase tracking-wider mb-2">
            Direct Answer: What is Equal Interval PDF Splitting?
          </h2>
          <p className="text-sm text-slate-700 leading-relaxed">
            Equal interval PDF splitting automatically divides a multi-page document into uniform subsets based on a fixed page increment (e.g. every 2 pages for 2-page invoice forms, or every 10 pages for chapter study guides). Rather than manually selecting ranges one-by-one, <strong>SplitPDFs</strong> splits the entire document in a single pass directly in client-side memory, outputting sequentially labeled files like <code>document_part_1_(pages_1-2).pdf</code>, <code>document_part_2_(pages_3-4).pdf</code> in a ZIP archive.
          </p>
        </div>
      </section>

      {/* Common Use-Cases */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">
            Popular Scenarios for Equal Interval Slicing
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm hover:border-emerald-300 transition-colors">
              <h3 className="font-bold text-slate-900 text-sm mb-2">2-Page Invoices & Bills</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Accounting systems often generate a single 200-page batch of 2-page customer invoices. Split every 2 pages to separate each invoice for email dispatch.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm hover:border-emerald-300 transition-colors">
              <h3 className="font-bold text-slate-900 text-sm mb-2">Test Papers & Assignments</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Teachers and professors can divide an 80-page compiled exam packet into 4-page individual student question sets in one click.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm hover:border-emerald-300 transition-colors">
              <h3 className="font-bold text-slate-900 text-sm mb-2">Book Chapters & Readings</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Break large scanned textbooks into readable 10 or 20-page reading sections that load faster on mobile tablets and e-readers.
              </p>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
            <Link
              href="/extract-pages"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-indigo-600 hover:text-indigo-800"
            >
              <Scissors className="w-4 h-4" />
              <span>Need custom page ranges instead?</span>
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
