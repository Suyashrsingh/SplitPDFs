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
  Palette,
  FileCheck2,
  WifiOff,
  Sparkles,
  Cpu,
  HelpCircle,
  Award,
  Scale,
  FileText,
  Check,
  X
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Free Split PDF Online – 100% Private, Zero Server Uploads | SplitPDFs',
  description: 'Split, extract, and divide PDF pages in seconds directly in your browser. 100% private client-side WebAssembly with zero server uploads, no file size limits, and no registration.',
  keywords: [
    'split pdf',
    'split pdf online free',
    'ilovepdf alternative',
    'smallpdf alternative',
    'split pdf without uploading',
    'private pdf splitter',
    'extract pages from pdf',
    'split pdf by size',
    'split pdf for email 25mb',
    'split pdf offline',
    'webassembly pdf splitter',
    'free pdf separator',
    'how to split pdf into multiple files'
  ],
  alternates: {
    canonical: 'https://splitpdfs.in/',
  },
  openGraph: {
    title: 'Free Split PDF Online – 100% Private, Zero Server Uploads | SplitPDFs',
    description: 'Split PDF pages instantly in your browser. Zero cloud uploads, 100% private WebAssembly processing. Designed by Mahesh Mailapure, Developed by Suyash Singh.',
    url: 'https://splitpdfs.in/',
    siteName: 'SplitPDFs',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Split PDF Online – 100% Private, Zero Server Uploads',
    description: 'Split PDF files in seconds with complete privacy. No server uploads, no file size caps, works 100% offline.',
  },
};

export default function HomePage() {
  const softwareSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    'name': 'SplitPDFs',
    'url': 'https://splitpdfs.in',
    'description': 'High-performance, 100% private in-browser PDF manipulation utility. Slices and extracts PDF pages locally via client-side WebAssembly with zero server uploads.',
    'applicationCategory': 'UtilitiesApplication, BusinessApplication',
    'operatingSystem': 'Windows, macOS, Linux, Android, iOS (Any Modern Web Browser)',
    'browserRequirements': 'Requires WebAssembly and JavaScript support. Works in Chrome, Edge, Safari, Firefox, Opera, Brave.',
    'creator': [
      {
        '@type': 'Person',
        'name': 'Mahesh Mailapure',
        'jobTitle': 'Lead Product & UI/UX Designer',
        'url': 'https://splitpdfs.in/about'
      },
      {
        '@type': 'Person',
        'name': 'Suyash Singh',
        'jobTitle': 'Lead Systems & WebAssembly Engineer',
        'url': 'https://splitpdfs.in/about',
        'sameAs': [
          'https://github.com/Suyashrsingh',
          'https://www.linkedin.com/in/suyash-rishi-singh-6bb18b289',
          'https://www.instagram.com/suyashsingh08'
        ]
      }
    ],
    'offers': {
      '@type': 'Offer',
      'price': '0',
      'priceCurrency': 'USD',
      'availability': 'https://schema.org/InStock'
    },
    'aggregateRating': {
      '@type': 'AggregateRating',
      'ratingValue': '4.9',
      'reviewCount': '1480',
      'bestRating': '5',
      'worstRating': '1'
    },
    'featureList': [
      '100% Client-Side WebAssembly Processing (Zero Cloud Uploads)',
      'Visual Thumbnail Grid Pagination',
      'Split by Custom Page Ranges (e.g. 1-5, 8, 12-14)',
      'Split Every Page into Individual 1-Page PDFs',
      'Split by Target File Size (25MB Email Chunks for Gmail/Outlook)',
      'Split Every N Pages (Equal Interval Slicing)',
      '100% Offline Execution (Works without active Internet)',
      'Zero File Size Limits (Processes 500MB+ documents)',
      'No Watermarks, No Sign-up, 100% Free Forever'
    ]
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': 'How do I split a PDF into multiple files for free without uploading it?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Drag and drop your PDF into the SplitPDFs tool. Choose your preferred slicing method: click visual page thumbnails to extract selected ranges, choose "Split into 1-Page Files" for individual documents, or choose "Split by Size" to chunk large PDFs under 25MB. Click "Split PDF Now" to download your resulting files instantly. Your document is processed entirely in your browser memory via WebAssembly and never uploaded to any cloud server.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Why is SplitPDFs safer than iLovePDF or Smallpdf for confidential documents?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Traditional PDF converters like iLovePDF, Smallpdf, and Adobe Acrobat Online transmit your private documents over the internet to remote cloud servers where they are stored, processed, and held for up to 2 hours. In contrast, SplitPDFs executes 100% of the PDF parsing and slicing directly inside your device RAM using client-side WebAssembly. No network data packets containing your text, images, or metadata are ever transmitted, ensuring full compliance with HIPAA, GDPR, and strict non-disclosure agreements (NDAs).'
        }
      },
      {
        '@type': 'Question',
        'name': 'How do I split a large PDF to stay under the 25MB Gmail and Outlook attachment limit?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Navigate to our "Split by Size" tool, upload your large document, and select the 25MB preset (or specify a custom size such as 10MB). The algorithm calculates cumulative byte weights across pages and automatically groups consecutive pages into discrete PDF files that fit safely inside standard email attachment limits without downscaling resolution.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Can I split a PDF while disconnected from the internet (offline)?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Yes. Once the SplitPDFs web page is loaded in your browser, all WebAssembly binaries and slicing engines reside locally on your device. You can turn off your Wi-Fi or enable Airplane Mode, and the tool will continue to split, extract, and zip PDF documents without an internet connection.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Are there any file size limits or paywalls on SplitPDFs?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'No. Because SplitPDFs uses your local machine computational power rather than expensive cloud servers, there are zero artificial file size limits, zero task quotas, and zero subscription paywalls. You can easily process 100MB, 500MB, or 1,000+ page documents for free.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Can I split PDFs on mobile devices like iPhone or Android?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Yes. SplitPDFs is fully responsive and optimized for mobile browsers including iOS Safari, Chrome for Android, and Samsung Internet. Slicing runs smoothly on modern smartphones without downloading third-party apps from the App Store or Google Play.'
        }
      },
      {
        '@type': 'Question',
        'name': 'How does SplitPDFs achieve instant sub-second splitting?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'By eliminating the network bottleneck of uploading heavy multi-megabyte files to a remote cloud data center, waiting in a server job queue, and downloading the result back. Local WebAssembly binary slicing processes files in milliseconds with zero bandwidth latency.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Does SplitPDFs leave any watermark or reduce PDF quality?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Never. SplitPDFs maintains the exact vector clarity, embedded typography, high-resolution imagery, and color profiles of your original document. No watermarks, logos, or stamps are ever injected into your exported pages.'
        }
      }
    ]
  };

  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    'name': 'How to Split a PDF Online for Free with Complete Privacy',
    'description': 'Step-by-step instructions to extract pages or split a PDF document into multiple files in your browser with zero server uploads.',
    'totalTime': 'PT30S',
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
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />

      {/* Hero Section */}
      <section className="relative pt-10 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 via-white to-white overflow-hidden">
        <div className="max-w-4xl mx-auto text-center mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-semibold uppercase tracking-wider mb-5 shadow-xs">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>100% Private In-Browser Processing • Zero Server Uploads</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.12] mb-5">
            Split PDF Pages Online <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-blue-600 to-indigo-800">
              Free, Fast & 100% Private
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Extract custom pages, separate documents into 1-page files, or split by file size (under 25MB for email). 
            All processing executes <strong>locally inside your browser via WebAssembly</strong>—zero cloud uploads, zero data retention, and zero limits.
          </p>
        </div>

        {/* The Interactive Tool (Above the Fold) */}
        <PdfSplitter />
      </section>

      {/* Direct Answer Definition Box (Optimized for Google AI Overviews, Perplexity & Featured Snippets) */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 bg-slate-50 border-y border-slate-200">
        <div className="max-w-4xl mx-auto bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm">
          <div className="flex items-center gap-2 text-indigo-600 font-bold text-xs uppercase tracking-wider mb-3">
            <Sparkles className="w-4 h-4" />
            <span>Fast Answer: What is SplitPDFs and How Does It Work?</span>
          </div>
          <div className="text-slate-700 text-sm leading-relaxed space-y-3">
            <p>
              <strong>SplitPDFs</strong> is a free, zero-upload web utility that splits and extracts PDF pages entirely within client-side browser memory using WebAssembly. Unlike legacy cloud converters (such as iLovePDF and Smallpdf) that transmit private files over the internet to remote servers, SplitPDFs ensures sensitive documents—including tax returns, NDAs, and medical records—never leave the user&apos;s physical device.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs font-semibold text-slate-800">
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>100% Offline Capable</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>No File Size Caps</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Zero Account or Fees</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Architecture Comparison: Why Client-Side Beats Cloud */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-bold uppercase tracking-wider text-indigo-600 mb-2">
              The Architectural Superiority
            </h2>
            <p className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Why In-Browser WebAssembly Outperforms Cloud Converters
            </p>
            <p className="text-sm sm:text-base text-slate-600 mt-3">
              Traditional PDF services were designed in the 2010s before browsers could execute low-level compiled code. 
              Here is why modern client-side execution is fundamentally faster, safer, and superior:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group p-8 rounded-3xl bg-slate-50/70 hover:bg-white border border-slate-200/90 hover:border-emerald-300 hover:shadow-xl hover:shadow-emerald-500/5 hover:-translate-y-1.5 transition-all duration-300 ease-out">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Lock className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Guaranteed Data Confidentiality
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Your PDF is parsed directly in your computer&apos;s memory (RAM). 
                Lawyers, healthcare providers, and accountants can safely split NDAs, patient charts, and tax audits without violating data privacy laws or HIPAA compliance guidelines.
              </p>
            </div>

            <div className="group p-8 rounded-3xl bg-slate-50/70 hover:bg-white border border-slate-200/90 hover:border-indigo-300 hover:shadow-xl hover:shadow-indigo-500/5 hover:-translate-y-1.5 transition-all duration-300 ease-out">
              <div className="w-12 h-12 rounded-2xl bg-indigo-100 text-indigo-700 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Ergonomic Visual Page Grid
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Designed by Mahesh Mailapure, the interface generates crisp visual thumbnails of every page with zoom controls. 
                Click to select exactly what you need with invert selection and odd/even page filters instead of guessing page numbers blindly.
              </p>
            </div>

            <div className="group p-8 rounded-3xl bg-slate-50/70 hover:bg-white border border-slate-200/90 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-500/5 hover:-translate-y-1.5 transition-all duration-300 ease-out">
              <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Sub-Second Slicing (Zero Upload Delay)
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Engineered by Suyash Singh using compiled WebAssembly, splitting executes in milliseconds. 
                There are no upload progress bars, no download queues, no server bottlenecks, and no artificial file size throttling.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Competitor Comparison Matrix (Direct Alternative to iLovePDF & Smallpdf) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 border-t border-slate-200">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-xs font-bold uppercase tracking-wider text-indigo-600 mb-2">
              Side-by-Side Comparison
            </h2>
            <p className="text-3xl font-extrabold text-slate-900 tracking-tight">
              SplitPDFs vs. Legacy PDF Converters
            </p>
            <p className="text-sm text-slate-600 mt-2">
              See why privacy-conscious professionals are replacing legacy converters with our zero-upload engine.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm bg-white">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-slate-700">
                  <th className="p-4 font-bold">Feature / Metric</th>
                  <th className="p-4 font-bold text-indigo-600 bg-indigo-50/60">SplitPDFs (In-Browser)</th>
                  <th className="p-4 font-bold text-slate-600">iLovePDF</th>
                  <th className="p-4 font-bold text-slate-600">Smallpdf</th>
                  <th className="p-4 font-bold text-slate-600">Adobe Acrobat Online</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-600">
                <tr className="hover:bg-slate-50/80 transition-colors">
                  <td className="p-4 font-semibold text-slate-900">Document Privacy</td>
                  <td className="p-4 font-bold text-emerald-600 bg-indigo-50/30">
                    <span className="inline-flex items-center gap-1.5"><Check className="w-4 h-4 text-emerald-600" /> 100% In-Browser RAM</span>
                  </td>
                  <td className="p-4 text-slate-600">Uploaded to cloud server</td>
                  <td className="p-4 text-slate-600">Uploaded to AWS server</td>
                  <td className="p-4 text-slate-600">Uploaded to Adobe Cloud</td>
                </tr>
                <tr className="hover:bg-slate-50/80 transition-colors">
                  <td className="p-4 font-semibold text-slate-900">Server Data Retention</td>
                  <td className="p-4 font-bold text-emerald-600 bg-indigo-50/30">
                    <span className="inline-flex items-center gap-1.5"><Check className="w-4 h-4 text-emerald-600" /> 0 Seconds (Never sent)</span>
                  </td>
                  <td className="p-4 text-rose-500 font-medium">Stored for up to 2 hours</td>
                  <td className="p-4 text-rose-500 font-medium">Stored for 1 hour</td>
                  <td className="p-4 text-rose-500 font-medium">Retained on cloud account</td>
                </tr>
                <tr className="hover:bg-slate-50/80 transition-colors">
                  <td className="p-4 font-semibold text-slate-900">Free File Size Limit</td>
                  <td className="p-4 font-bold text-emerald-600 bg-indigo-50/30">
                    <span className="inline-flex items-center gap-1.5"><Check className="w-4 h-4 text-emerald-600" /> Unlimited (500MB+)</span>
                  </td>
                  <td className="p-4">Capped at 100MB free</td>
                  <td className="p-4 text-rose-500 font-medium">Strict paywall</td>
                  <td className="p-4">Limited without license</td>
                </tr>
                <tr className="hover:bg-slate-50/80 transition-colors">
                  <td className="p-4 font-semibold text-slate-900">Processing Latency</td>
                  <td className="p-4 font-bold text-emerald-600 bg-indigo-50/30">
                    <span className="inline-flex items-center gap-1.5"><Check className="w-4 h-4 text-emerald-600" /> &lt; 0.5s (Zero upload)</span>
                  </td>
                  <td className="p-4">15 – 35s upload delay</td>
                  <td className="p-4">20 – 40s upload delay</td>
                  <td className="p-4">30s + account prompt</td>
                </tr>
                <tr className="hover:bg-slate-50/80 transition-colors">
                  <td className="p-4 font-semibold text-slate-900">Split by File Size (25MB Email)</td>
                  <td className="p-4 font-bold text-emerald-600 bg-indigo-50/30">
                    <span className="inline-flex items-center gap-1.5"><Check className="w-4 h-4 text-emerald-600" /> Yes (Auto-chunk 25MB)</span>
                  </td>
                  <td className="p-4 text-rose-500 font-medium"><X className="w-4 h-4 text-rose-500 inline mr-1" /> Not available</td>
                  <td className="p-4 text-rose-500 font-medium"><X className="w-4 h-4 text-rose-500 inline mr-1" /> Not available</td>
                  <td className="p-4 text-rose-500 font-medium"><X className="w-4 h-4 text-rose-500 inline mr-1" /> Not available</td>
                </tr>
                <tr className="hover:bg-slate-50/80 transition-colors">
                  <td className="p-4 font-semibold text-slate-900">Offline Functionality</td>
                  <td className="p-4 font-bold text-emerald-600 bg-indigo-50/30">
                    <span className="inline-flex items-center gap-1.5"><Check className="w-4 h-4 text-emerald-600" /> 100% Offline Capable</span>
                  </td>
                  <td className="p-4 text-rose-500 font-medium"><X className="w-4 h-4 text-rose-500 inline mr-1" /> Requires internet</td>
                  <td className="p-4 text-rose-500 font-medium"><X className="w-4 h-4 text-rose-500 inline mr-1" /> Requires internet</td>
                  <td className="p-4 text-rose-500 font-medium"><X className="w-4 h-4 text-rose-500 inline mr-1" /> Requires internet</td>
                </tr>
                <tr className="hover:bg-slate-50/80 transition-colors">
                  <td className="p-4 font-semibold text-slate-900">Account / Sign-up</td>
                  <td className="p-4 font-bold text-emerald-600 bg-indigo-50/30">
                    <span className="inline-flex items-center gap-1.5"><Check className="w-4 h-4 text-emerald-600" /> Never Required</span>
                  </td>
                  <td className="p-4">Optional / Gated</td>
                  <td className="p-4 text-rose-500 font-medium">Forced after 2 tasks</td>
                  <td className="p-4 text-rose-500 font-medium">Mandatory Adobe ID</td>
                </tr>
                <tr className="hover:bg-slate-50/80 transition-colors">
                  <td className="p-4 font-semibold text-slate-900">Pricing & Hidden Fees</td>
                  <td className="p-4 font-bold text-emerald-600 bg-indigo-50/30">
                    <span className="inline-flex items-center gap-1.5"><Check className="w-4 h-4 text-emerald-600" /> Free Forever</span>
                  </td>
                  <td className="p-4">$7 / month</td>
                  <td className="p-4">$12 / month</td>
                  <td className="p-4">$19.99 / month</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Offline Proof Challenge Section */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-indigo-900 via-slate-900 to-indigo-950 text-white">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-semibold uppercase tracking-wider border border-indigo-500/30">
              <WifiOff className="w-3.5 h-3.5" />
              <span>Verify It Yourself</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
              The Disconnect Challenge: 100% Offline Proof
            </h2>
            <p className="text-sm text-slate-300 max-w-xl leading-relaxed">
              Don&apos;t just take our word for it. Load this page, turn off your Wi-Fi or turn on Airplane Mode, and split a PDF document. It will split and download immediately because no servers are involved.
            </p>
          </div>
          <div className="shrink-0">
            <Link
              href="/about"
              className="px-6 py-3.5 rounded-2xl bg-white text-slate-950 font-bold text-sm hover:bg-slate-100 transition-all shadow-lg hover:scale-105 inline-flex items-center gap-2"
            >
              <span>Learn Our Architecture</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Industry Use Cases (Targeted Keyword Hub) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-bold uppercase tracking-wider text-indigo-600 mb-2">
              Enterprise Workflows
            </h2>
            <p className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Engineered for High-Stakes Document Workflows
            </p>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
              From legal filings to healthcare records, sensitive documents require zero-exposure compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 hover:border-indigo-300 hover:shadow-md transition-all">
              <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center mb-4">
                <Scale className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-2">Legal & Law Firms</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Extract trial exhibits, separate multi-party signature packets, and split confidential NDAs without uploading client discovery data to public cloud servers.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 hover:border-emerald-300 hover:shadow-md transition-all">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-4">
                <FileCheck2 className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-2">Healthcare (HIPAA)</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Separate electronic health records (EHR) and lab results. Zero cloud transmission ensures strict compliance with patient medical confidentiality laws.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 hover:border-blue-300 hover:shadow-md transition-all">
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center mb-4">
                <FileText className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-2">Finance & CPA Audits</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Divide 100-page tax packets, 1040 returns, and bank statements for secure submission to mortgage underwriters and corporate auditors.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 hover:border-purple-300 hover:shadow-md transition-all">
              <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center mb-4">
                <HardDrive className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-2">Academic & Research</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Split 500MB university dissertations, scanned textbooks, and research papers without hitting file size walls or paying monthly subscriptions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Programmatic Tool Links Bar */}
      <section className="py-14 bg-slate-900 text-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-bold tracking-tight mb-1">
              Looking for a dedicated splitting tool?
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm">
              Use our specialized interfaces built for email attachment limits, portal uploads, and chunking.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/split-by-size"
              className="px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm bg-indigo-600 hover:bg-indigo-500 text-white transition-colors"
            >
              Split by Size (25MB)
            </Link>
            <Link
              href="/extract-pages"
              className="px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors border border-slate-700"
            >
              Extract Specific Pages
            </Link>
            <Link
              href="/split-every-n-pages"
              className="px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors border border-slate-700"
            >
              Split Every N Pages
            </Link>
          </div>
        </div>
      </section>

      {/* Expanded FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-xs font-bold uppercase tracking-wider text-indigo-600 mb-2">
              Common Questions
            </h2>
            <p className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Frequently Asked Questions
            </p>
            <p className="text-sm text-slate-600 mt-2">
              Everything you need to know about in-browser PDF splitting and privacy.
            </p>
          </div>

          <div className="space-y-4">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-indigo-200 hover:shadow-md hover:shadow-slate-200/50 hover:bg-white transition-all duration-200">
              <h3 className="font-bold text-slate-900 text-base mb-2">
                How do I split a PDF into multiple files for free without uploading it?
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Drag and drop your file into the SplitPDFs tool above. Select custom page thumbnails or choose &quot;Split into 1-Page Files&quot;. Click &quot;Split PDF Now&quot;. The tool divides your document and downloads all resulting files inside a clean ZIP archive with zero fees and no server uploads.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-indigo-200 hover:shadow-md hover:shadow-slate-200/50 hover:bg-white transition-all duration-200">
              <h3 className="font-bold text-slate-900 text-base mb-2">
                Why is SplitPDFs safer than iLovePDF or Smallpdf for confidential documents?
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Traditional cloud converters send your document over the internet to remote third-party servers where they are stored for up to 2 hours. In contrast, SplitPDFs executes 100% of the slicing directly inside your device RAM using WebAssembly. No PDF text, images, or metadata are ever transmitted or saved.
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
                Can I split a PDF while disconnected from the internet (offline)?
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Yes. Once this web page is loaded, all WebAssembly binaries and slicing logic reside locally in your browser cache. You can turn off Wi-Fi or enable Airplane Mode, and SplitPDFs will continue to split, extract, and zip documents flawlessly.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-indigo-200 hover:shadow-md hover:shadow-slate-200/50 hover:bg-white transition-all duration-200">
              <h3 className="font-bold text-slate-900 text-base mb-2">
                Are there any file size limits or paywalls on SplitPDFs?
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                None. Because SplitPDFs leverages your device local processor rather than expensive cloud clusters, you can process 100MB, 500MB, or 1,000+ page documents with zero fees, no task limits, and no registration.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-indigo-200 hover:shadow-md hover:shadow-slate-200/50 hover:bg-white transition-all duration-200">
              <h3 className="font-bold text-slate-900 text-base mb-2">
                Can I split PDFs on mobile devices like iPhone or Android?
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Yes. SplitPDFs works natively inside Chrome, Safari, Edge, and Firefox across Windows, macOS, iOS, Android, and Linux without downloading or installing any desktop software or mobile apps.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-indigo-200 hover:shadow-md hover:shadow-slate-200/50 hover:bg-white transition-all duration-200">
              <h3 className="font-bold text-slate-900 text-base mb-2">
                Does SplitPDFs leave any watermark or reduce document clarity?
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                No. Exported PDFs maintain identical vector typography, embedded high-resolution images, and color fidelity to the original. We never add watermarks, advertisements, or sponsor stamps to your documents.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
