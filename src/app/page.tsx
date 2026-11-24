import React from 'react';
import type { Metadata } from 'next';
import { PdfSplitter } from '@/components/PdfSplitter';
import { 
  ShieldCheck, 
  Zap, 
  Lock, 
  CheckCircle2, 
  Scissors, 
  HardDrive, 
  Layers, 
  Eye, 
  ArrowRight,
  Code2,
  Palette
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Free Split PDF Online – Fast, 100% Private, Zero Server Uploads',
  description: 'Split, extract, and divide PDF pages in seconds directly in your browser. 100% private in-browser tool with zero server uploads, no sign-up, and no file size limits.',
  keywords: [
    'split pdf',
    'split pdf online free',
    'how to split pdf into multiple files',
    'extract pages from pdf',
    'split pdf without adobe',
    'split pdf by size',
    'split pdf for email 25mb',
    'split pdf without uploading',
    'free pdf splitter'
  ],
  alternates: {
    canonical: 'https://splitpdfs.in/',
  },
  openGraph: {
    title: 'Free Split PDF Online – Fast, 100% Private, Zero Server Uploads',
    description: 'Split PDF pages instantly in your browser. No files uploaded to servers. Designed by Mahesh Mailapure, Developed by Suyash Singh.',
    url: 'https://splitpdfs.in/',
    siteName: 'SplitPDFs',
    type: 'website',
  },
};

export default function HomePage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': 'How do I split a PDF into multiple files for free?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'To split a PDF for free, drop your file into the SplitPDFs tool above. Choose your mode: extract custom pages, split every page into separate individual PDFs, or split by file size. Click "Split PDF Now" to download your files instantly with zero fees and no registration.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Is it safe to split confidential PDFs online?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Yes, SplitPDFs is completely secure because your documents are never uploaded to any remote server. The entire file slicing runs locally in your web browser memory via WebAssembly. Your confidential contracts, tax returns, and medical records never leave your device.'
        }
      },
      {
        '@type': 'Question',
        'name': 'How do I split a large PDF to send via Gmail (under 25MB)?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Select our "Split by Size" mode, choose the 25MB preset, and our engine automatically groups consecutive pages into files that strictly fit inside Gmail and Outlook email attachment limits.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Can I split a PDF on Windows, Mac, iPhone, or Android?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Yes. SplitPDFs works natively inside any modern web browser (Chrome, Safari, Edge, Firefox) across desktop and mobile devices without requiring software installation.'
        }
      }
    ]
  };

  const softwareSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    'name': 'SplitPDFs',
    'url': 'https://splitpdfs.in',
    'applicationCategory': 'UtilitiesApplication',
    'operatingSystem': 'All (Web Browser)',
    'creator': [
      {
        '@type': 'Person',
        'name': 'Mahesh Mailapure',
        'jobTitle': 'Product Designer'
      },
      {
        '@type': 'Person',
        'name': 'Suyash Singh',
        'jobTitle': 'Software Engineer'
      }
    ],
    'offers': {
      '@type': 'Offer',
      'price': '0',
      'priceCurrency': 'USD'
    },
    'featureList': 'Client-side processing, Visual page thumbnails, Split by file size, Extract page ranges, Zero server uploads'
  };

  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    'name': 'How to Split a PDF Online for Free with Complete Privacy',
    'description': 'Step-by-step instructions to extract pages or split a PDF document into multiple files in your browser with zero server uploads.',
    'totalTime': 'PT1M',
    'step': [
      {
        '@type': 'HowToStep',
        'position': 1,
        'name': 'Select or Drop Document',
        'text': 'Drag and drop your PDF into the SplitPDFs tool or click to choose a file from your device memory.',
        'url': 'https://splitpdfs.in/'
      },
      {
        '@type': 'HowToStep',
        'position': 2,
        'name': 'Choose Slicing Mode',
        'text': 'Click visual page thumbnails to select page ranges, choose Split into 1-Page Files, or set a target file size (e.g. 25MB for Gmail/Outlook).',
        'url': 'https://splitpdfs.in/'
      },
      {
        '@type': 'HowToStep',
        'position': 3,
        'name': 'Download Split Files Instantly',
        'text': 'Click "Split PDF Now". The browser slices the binary stream locally via WebAssembly and triggers an instant download with zero server uploads.',
        'url': 'https://splitpdfs.in/'
      }
    ]
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />

      {/* Hero Section */}
      <section className="relative pt-12 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 via-white to-white overflow-hidden">
        <div className="max-w-4xl mx-auto text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-semibold uppercase tracking-wider mb-5">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>100% Private In-Browser Document Processing</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.15] mb-5">
            Split PDF Pages Online <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-blue-600 to-indigo-800">
              Free, Fast & Secure
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Extract pages, separate single pages, or split documents by file size. 
            All processing runs <strong>locally in your browser</strong>—your files are never uploaded to any remote server.
          </p>
        </div>

        {/* The Interactive Tool (Above the fold) */}
        <PdfSplitter />
      </section>

      {/* Featured Snippet Direct Answer Box (Google AI / SGE Optimization) */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-slate-50 border-y border-slate-200">
        <div className="max-w-4xl mx-auto bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm">
          <h2 className="text-sm font-bold text-indigo-600 uppercase tracking-wider mb-2">
            Quick Guide: How to Split a PDF for Free
          </h2>
          <div className="text-slate-700 text-sm leading-relaxed space-y-3">
            <p>
              To split a PDF document without downloading software or paying for Adobe Acrobat:
            </p>
            <ol className="list-decimal pl-5 space-y-1.5 font-medium text-slate-800">
              <li><strong>Select your PDF:</strong> Drag and drop your file into the tool above.</li>
              <li><strong>Choose your split option:</strong> Click thumbnails to extract specific pages, choose &quot;Split Every Page&quot; to get individual single-page files, or select &quot;Split by Size&quot; for email attachments.</li>
              <li><strong>Download:</strong> Click &quot;Split PDF Now&quot;. The browser generates your split PDF in under 0.5 seconds without uploading any data to the cloud.</li>
            </ol>
          </div>
        </div>
      </section>

      {/* Technical Architecture Comparison: Why Client-Side Beats Cloud */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-bold uppercase tracking-wider text-indigo-600 mb-2">
              The Engineering Difference
            </h2>
            <p className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Why We Process Files In-Browser Instead of on Servers
            </p>
            <p className="text-sm sm:text-base text-slate-600 mt-3">
              Traditional PDF converters upload your confidential documents to server farms in Europe or the US. 
              Here is how our client-side architecture directly protects you:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group p-8 rounded-3xl bg-slate-50/70 hover:bg-white border border-slate-200/90 hover:border-emerald-300 hover:shadow-xl hover:shadow-emerald-500/5 hover:-translate-y-1.5 transition-all duration-300 ease-out">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Lock className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                100% Confidential
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Your PDF is parsed directly in your computer&apos;s memory (RAM). 
                Lawyers, healthcare providers, and accountants can safely split NDAs, patient charts, and tax audits without violating data privacy laws.
              </p>
            </div>

            <div className="group p-8 rounded-3xl bg-slate-50/70 hover:bg-white border border-slate-200/90 hover:border-indigo-300 hover:shadow-xl hover:shadow-indigo-500/5 hover:-translate-y-1.5 transition-all duration-300 ease-out">
              <div className="w-12 h-12 rounded-2xl bg-indigo-100 text-indigo-700 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Visual Page Grid
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Designed by Mahesh Mailapure, the interface generates crisp visual thumbnails of every page. 
                Click to select exactly what you need instead of guessing page numbers blindly.
              </p>
            </div>

            <div className="group p-8 rounded-3xl bg-slate-50/70 hover:bg-white border border-slate-200/90 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-500/5 hover:-translate-y-1.5 transition-all duration-300 ease-out">
              <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Zero Bandwidth Latency
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Engineered by Suyash Singh using WebAssembly, splitting executes in milliseconds. 
                There are no upload progress bars, no download queues, and no file size limits.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Head-to-Head Comparison Table */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 border-t border-slate-200">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-xs font-bold uppercase tracking-wider text-indigo-600 mb-2">
              Side-by-Side Comparison
            </h2>
            <p className="text-3xl font-extrabold text-slate-900 tracking-tight">
              SplitPDFs vs. Legacy PDF Converters
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm bg-white">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-slate-700">
                  <th className="p-4 font-bold">Feature</th>
                  <th className="p-4 font-bold text-indigo-600 bg-indigo-50/50">SplitPDFs</th>
                  <th className="p-4 font-bold text-slate-600">iLovePDF</th>
                  <th className="p-4 font-bold text-slate-600">Smallpdf</th>
                  <th className="p-4 font-bold text-slate-600">Adobe Acrobat Online</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-600">
                <tr className="hover:bg-slate-50/80 transition-colors">
                  <td className="p-4 font-semibold text-slate-900">Document Privacy</td>
                  <td className="p-4 font-bold text-emerald-600 bg-indigo-50/30">100% In-Browser (Never uploaded)</td>
                  <td className="p-4">Uploaded to remote cloud</td>
                  <td className="p-4">Uploaded to AWS server</td>
                  <td className="p-4">Uploaded to Adobe Cloud</td>
                </tr>
                <tr className="hover:bg-slate-50/80 transition-colors">
                  <td className="p-4 font-semibold text-slate-900">File Size Limit</td>
                  <td className="p-4 font-bold text-emerald-600 bg-indigo-50/30">No limits (500MB+)</td>
                  <td className="p-4">Capped on free tier</td>
                  <td className="p-4">Strict paywall</td>
                  <td className="p-4">Requires Adobe account</td>
                </tr>
                <tr className="hover:bg-slate-50/80 transition-colors">
                  <td className="p-4 font-semibold text-slate-900">Splitting Speed</td>
                  <td className="p-4 font-bold text-emerald-600 bg-indigo-50/30">&lt; 0.5s (Zero upload delay)</td>
                  <td className="p-4">15 – 35s upload delay</td>
                  <td className="p-4">20 – 40s upload delay</td>
                  <td className="p-4">30s + account login</td>
                </tr>
                <tr className="hover:bg-slate-50/80 transition-colors">
                  <td className="p-4 font-semibold text-slate-900">Split by File Size (25MB)</td>
                  <td className="p-4 font-bold text-emerald-600 bg-indigo-50/30">Yes (Auto-cut 10MB/25MB)</td>
                  <td className="p-4 text-rose-500 font-semibold">No</td>
                  <td className="p-4 text-rose-500 font-semibold">No</td>
                  <td className="p-4 text-rose-500 font-semibold">No</td>
                </tr>
                <tr className="hover:bg-slate-50/80 transition-colors">
                  <td className="p-4 font-semibold text-slate-900">Sign-up Required?</td>
                  <td className="p-4 font-bold text-emerald-600 bg-indigo-50/30">No (Instant 1-Click)</td>
                  <td className="p-4">Optional / Gated</td>
                  <td className="p-4">Forced after 2 tasks</td>
                  <td className="p-4">Mandatory</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Programmatic Tool Links */}
      <section className="py-14 bg-slate-900 text-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-bold tracking-tight mb-1">
              Need a specific splitting mode?
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm">
              Use our dedicated tools built for email limits, portal guidelines, and print imposition.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/split-by-size"
              className="px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm bg-indigo-600 hover:bg-indigo-500 text-white transition-colors"
            >
              Split by File Size (MB)
            </Link>
            <Link
              href="/extract-pages"
              className="px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors border border-slate-700"
            >
              Extract Pages
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-xs font-bold uppercase tracking-wider text-indigo-600 mb-2">
              Common Questions
            </h2>
            <p className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Frequently Asked Questions
            </p>
          </div>

          <div className="space-y-4">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-indigo-200 hover:shadow-md hover:shadow-slate-200/50 hover:bg-white transition-all duration-200">
              <h3 className="font-bold text-slate-900 text-base mb-2">
                How do I split a PDF into multiple files for free?
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Drop your file into the tool above. Select &quot;Split into 1-Page Files&quot; or choose custom page ranges, then click &quot;Split PDF Now&quot;. The tool divides your document and downloads all resulting files inside a clean ZIP archive with zero fees.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-indigo-200 hover:shadow-md hover:shadow-slate-200/50 hover:bg-white transition-all duration-200">
              <h3 className="font-bold text-slate-900 text-base mb-2">
                Is it safe to split confidential PDFs online?
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Yes. Unlike other websites that send your document to third-party cloud servers, SplitPDFs processes files 100% locally on your computer via client-side WebAssembly. No PDF text, images, or metadata are ever transmitted or saved.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-indigo-200 hover:shadow-md hover:shadow-slate-200/50 hover:bg-white transition-all duration-200">
              <h3 className="font-bold text-slate-900 text-base mb-2">
                How do I split a large PDF to send via Gmail (under 25MB)?
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Use our &quot;Split by Size&quot; option and set the limit to 25MB. The tool automatically divides the document into parts that fit comfortably inside Gmail and Outlook attachment limits without losing print quality.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-indigo-200 hover:shadow-md hover:shadow-slate-200/50 hover:bg-white transition-all duration-200">
              <h3 className="font-bold text-slate-900 text-base mb-2">
                Can I split a PDF on Windows, Mac, iPhone, or Android?
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Yes. SplitPDFs works natively inside Chrome, Safari, Edge, and Firefox across Windows, macOS, iOS, Android, and Linux without downloading or installing any desktop software.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
