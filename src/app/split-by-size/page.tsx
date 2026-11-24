import React from 'react';
import type { Metadata } from 'next';
import { PdfSplitter } from '@/components/PdfSplitter';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { HardDrive, Mail, ShieldCheck, CheckCircle2, ArrowRight, Zap, Scissors, BookOpen } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Split PDF by File Size (10MB, 25MB for Email) – Free Online Tool | SplitPDFs',
  description: 'Split large PDF files into smaller chunks of 5MB, 10MB, or 25MB to fit strict Gmail, Outlook, and portal upload limits. 100% private in-browser WebAssembly tool.',
  keywords: [
    'split pdf by size',
    'split pdf to 10mb',
    'split pdf into 25mb',
    'split large pdf for email',
    'split pdf by mb',
    'divide pdf by file size',
    'split pdf gmail 25mb limit'
  ],
  alternates: {
    canonical: 'https://splitpdfs.in/split-by-size',
  },
  openGraph: {
    title: 'Split PDF by File Size (10MB, 25MB) – Free Online Tool',
    description: 'Auto-slice large PDFs to fit Gmail & Outlook email limits with zero quality loss. 100% private in-browser execution.',
    url: 'https://splitpdfs.in/split-by-size',
    siteName: 'SplitPDFs',
    type: 'website',
  },
};

export default function SplitBySizePage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': 'What is the maximum attachment size for Gmail and Outlook?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Gmail and Google Workspace allow up to 25MB total attachments. Outlook and Yahoo Mail generally cap attachments at 20MB to 25MB. SplitPDFs allows you to automatically split files to stay under these exact limits.'
        }
      },
      {
        '@type': 'Question',
        'name': 'How does Split by Size work without losing pages?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'SplitPDFs estimates the byte density per page of your document and groups consecutive pages into separate PDF files designed to stay below your chosen megabyte threshold.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Why split by file size instead of compressing the PDF?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Lossy compression reduces DPI and blurs text, often invalidating legal signatures or making architectural blueprints unreadable. Splitting by size keeps 100% original print resolution and vector clarity across all divided parts.'
        }
      }
    ]
  };

  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    'name': 'How to Split a Large PDF for Email (Under 25MB)',
    'description': 'Step-by-step instructions to divide an oversized PDF into parts smaller than 25MB for Gmail or Outlook.',
    'totalTime': 'PT1M',
    'step': [
      {
        '@type': 'HowToStep',
        'position': 1,
        'name': 'Upload or Drop PDF',
        'text': 'Drop your large PDF into the Split by Size drop zone.',
        'url': 'https://splitpdfs.in/split-by-size'
      },
      {
        '@type': 'HowToStep',
        'position': 2,
        'name': 'Choose Target Size Limit',
        'text': 'Select the 25MB preset for Gmail/Outlook, or specify 5MB or 10MB for government or employer portals.',
        'url': 'https://splitpdfs.in/split-by-size'
      },
      {
        '@type': 'HowToStep',
        'position': 3,
        'name': 'Download Divided Parts',
        'text': 'Click "Split PDF Now". The browser creates organized files (Part 1, Part 2, etc.) inside a ZIP archive with zero data uploaded to any server.',
        'url': 'https://splitpdfs.in/split-by-size'
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

      <section className="pt-8 sm:pt-12 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50/60 via-white to-white">
        <div className="max-w-5xl mx-auto">
          {/* Breadcrumbs for SEO */}
          <Breadcrumbs
            items={[
              { label: 'Tools', href: '/' },
              { label: 'Split by File Size (MB)' }
            ]}
          />

          <div className="max-w-4xl mx-auto text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 border border-blue-200 text-blue-800 text-xs font-bold tracking-wide uppercase mb-6 shadow-sm">
              <HardDrive className="w-4 h-4 text-blue-600" />
              <span>Target Exact MB Thresholds</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-black text-slate-950 tracking-tight leading-[1.1] mb-5">
              Split PDF by File Size <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                (5MB, 10MB, 25MB for Email)
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Stuck with a &quot;File exceeds maximum upload size&quot; error? 
              Split your document into exact megabyte chunks so it effortlessly sends through Gmail, Outlook, and portal upload gates with <strong>zero server uploads</strong>.
            </p>
          </div>

          {/* Pre-configured in by-size mode */}
          <PdfSplitter 
            initialMode="by-size"
            targetSizeDefault={25}
            highlightTitle="Select PDF to Split by File Size"
            subtitle="Preset for 25MB email attachments or custom portal limits (5MB, 10MB)."
          />
        </div>
      </section>

      {/* Direct-Answer GEO Definition Block for AI Search & Featured Snippets */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-slate-50 border-y border-slate-200">
        <div className="max-w-4xl mx-auto bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm">
          <h2 className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-2">
            Direct Answer: How to Fit Oversized PDFs into Email Attachments
          </h2>
          <p className="text-sm text-slate-700 leading-relaxed">
            To send a PDF larger than 25MB without compressing images or generating external cloud links, divide the document into chronological parts. <strong>SplitPDFs automatically calculates the byte density per page</strong> and groups consecutive pages into separate PDF files that each remain strictly below your chosen threshold (e.g., 25MB for Gmail/Outlook or 10MB for applicant portals). All processing runs locally inside browser RAM via WebAssembly with zero data transmitted to third-party servers.
          </p>
        </div>
      </section>

      {/* Educational Content Section for SEO Authority */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Common Email and Portal File Size Limits (2026 Reference)
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-6">
            When sharing legal briefs, architectural designs, tax folders, or scanned contracts, file sizes can easily exceed 50MB to 200MB. Most email providers and web portals strictly reject files larger than their set quotas:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 shadow-sm hover:border-blue-300 transition-colors">
              <div className="text-xs font-bold text-blue-600 uppercase mb-1">Gmail / Google Workspace</div>
              <div className="text-2xl font-black text-slate-900">25 MB</div>
              <div className="text-xs text-slate-500 mt-1">Files above 25MB trigger mandatory Google Drive upload</div>
            </div>
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 shadow-sm hover:border-blue-300 transition-colors">
              <div className="text-xs font-bold text-blue-600 uppercase mb-1">Outlook / Microsoft 365</div>
              <div className="text-2xl font-black text-slate-900">20 MB</div>
              <div className="text-xs text-slate-500 mt-1">Direct attachment limit per outgoing message</div>
            </div>
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 shadow-sm hover:border-blue-300 transition-colors">
              <div className="text-xs font-bold text-blue-600 uppercase mb-1">Govt & Job Portals</div>
              <div className="text-2xl font-black text-slate-900">5 – 10 MB</div>
              <div className="text-xs text-slate-500 mt-1">Strict upload error ceiling on legacy applicant systems</div>
            </div>
          </div>

          <h3 className="text-xl font-bold text-slate-900 mb-3">
            Why Use Split by Size Instead of Lossy Compression?
          </h3>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            Standard PDF compressors work by downscaling image resolution, dropping DPI, and degrading font clarity. For official documents, legal signatures, and fine blueprints, excessive compression renders the document unreadable or legally invalid. 
            <strong> Splitting by file size preserves 100% vector quality and image clarity</strong> while dividing the pages into convenient parts that guarantee email delivery.
          </p>

          <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
            <Link
              href="/blog/how-to-split-large-pdf-for-email-25mb"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-indigo-600 hover:text-indigo-800"
            >
              <BookOpen className="w-4 h-4" />
              <span>Read the full in-depth guide: How to Split Large PDFs for Email</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            <Link
              href="/extract-pages"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-600 hover:text-slate-900"
            >
              <Scissors className="w-4 h-4" />
              <span>Need to extract specific pages instead?</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
