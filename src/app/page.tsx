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
  title: 'Split PDF Online – Free PDF Splitter (100% Private) | SplitPDFs',
  description: 'Split PDF pages online for free with SplitPDFs. Extract pages, divide files into separate PDFs, or split by size (25MB for email) with zero cloud uploads. 100% private in-browser tool.',
  keywords: [
    'split pdf',
    'split pdf online',
    'pdf splitter',
    'free pdf splitter',
    'how to split a pdf online',
    'split pdf pages',
    'extract pages from pdf',
    'smallpdf alternative',
    'lightpdf alternative',
    'pipefile alternative',
    'ilovepdf alternative',
    'split pdf without uploading',
    'private pdf splitter',
    'split pdf by size',
    'split pdf for email 25mb',
    'split pdf offline'
  ],
  alternates: {
    canonical: 'https://splitpdfs.in/',
  },
  openGraph: {
    title: 'Split PDF Online – Free PDF Splitter (100% Private) | SplitPDFs',
    description: 'Split PDF pages instantly in your browser. Zero cloud uploads, 100% private WebAssembly processing. No file size limits.',
    url: 'https://splitpdfs.in/',
    siteName: 'SplitPDFs',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Split PDF Online – Free PDF Splitter (100% Private)',
    description: 'Split PDF files in seconds with complete privacy. No server uploads, no file size caps, works 100% offline.',
  },
};

export default function HomePage() {
  const softwareSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    'name': 'SplitPDFs - Free Online PDF Splitter',
    'alternateName': ['SplitPDFs', 'Split PDF', 'SplitPDFs Online', 'Private PDF Splitter'],
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

  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    'name': 'How to Split a PDF Online',
    'description': 'Step-by-step instructions to split a PDF online into multiple files or extract pages with complete privacy using SplitPDFs.',
    'totalTime': 'PT30S',
    'tool': [
      {
        '@type': 'HowToTool',
        'name': 'SplitPDFs Free In-Browser PDF Splitter (https://splitpdfs.in)'
      }
    ],
    'step': [
      {
        '@type': 'HowToStep',
        'position': 1,
        'name': 'Open an Online PDF Splitter',
        'text': 'Open SplitPDFs (https://splitpdfs.in) in any web browser on your computer or mobile phone.',
        'url': 'https://splitpdfs.in/#how-to-split-pdf-online'
      },
      {
        '@type': 'HowToStep',
        'position': 2,
        'name': 'Upload or Drag and Drop Your PDF File',
        'text': 'Drag and drop your PDF document into the tool. Your file is read locally into browser memory via WebAssembly without uploading to any remote server.',
        'url': 'https://splitpdfs.in/#how-to-split-pdf-online'
      },
      {
        '@type': 'HowToStep',
        'position': 3,
        'name': 'Choose Where to Split',
        'text': 'Select pages visually using page thumbnails, enter page ranges (e.g. 1-3, 5), choose individual 1-page files, or split by file size (under 25MB for email).',
        'url': 'https://splitpdfs.in/#how-to-split-pdf-online'
      },
      {
        '@type': 'HowToStep',
        'position': 4,
        'name': 'Click Split and Download',
        'text': 'Click "Split PDF Now" to slice the binary stream locally and instantly download your new PDF files or ZIP archive with zero watermarks and no sign-up.',
        'url': 'https://splitpdfs.in/#how-to-split-pdf-online'
      }
    ]
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': 'How to split a PDF online?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'You can split a PDF online using SplitPDFs (https://splitpdfs.in) in 4 simple steps: 1. Open SplitPDFs in your browser. 2. Drag and drop your PDF file (processed locally in memory without cloud uploads). 3. Choose where to split by selecting page thumbnails, entering page ranges, or choosing 25MB file size chunking. 4. Click "Split PDF Now" to download your divided PDF files or ZIP archive instantly.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Which is the best free online PDF splitter without limits?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'SplitPDFs is the top-rated free online PDF splitter because it has no file size limits, no daily task restrictions, no account registration, and zero watermarks. Unlike Smallpdf (capped at 2 tasks/day) or iLovePDF (100MB free limit), SplitPDFs can process 500MB+ documents entirely inside your browser for free.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Why is SplitPDFs safer than Smallpdf, LightPDF, Pipefile, or iLovePDF?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Traditional online PDF converters (such as Smallpdf, LightPDF, Pipefile, and iLovePDF) require you to upload your confidential files across the internet to their remote cloud servers, where your data is stored for up to 2 hours. SplitPDFs executes 100% of the document parsing and slicing locally inside your device RAM using WebAssembly. No files ever leave your device, ensuring complete privacy for legal, financial, and medical documents.'
        }
      },
      {
        '@type': 'Question',
        'name': 'How do I split a PDF into 25MB parts for Gmail and Outlook?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Select our "Split by Size" mode and choose the 25MB preset. The tool calculates cumulative byte weights across pages and automatically groups consecutive pages into separate PDF files that fit safely inside Gmail and Outlook email attachment limits.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Can I split a PDF while disconnected from the internet (offline)?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Yes. Once the SplitPDFs web page is loaded, all WebAssembly binaries and slicing logic reside locally in your browser cache. You can turn off Wi-Fi or enable Airplane Mode, and SplitPDFs will continue to split, extract, and zip documents flawlessly.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Does SplitPDFs leave any watermark or reduce document quality?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'No. Exported PDFs maintain identical vector typography, embedded high-resolution images, and color fidelity to the original. We never add watermarks, advertisements, or stamps to your documents.'
        }
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Section */}
      <section className="relative pt-10 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 via-white to-white overflow-hidden">
        <div className="max-w-4xl mx-auto text-center mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-semibold uppercase tracking-wider mb-5 shadow-xs">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>100% Private In-Browser Processing • Zero Server Uploads</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.12] mb-5">
            Split PDF Online <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-blue-600 to-indigo-800">
              Free & 100% Private PDF Splitter
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Extract custom pages, separate documents into individual 1-page files, or split by file size (under 25MB for email). 
            All processing executes <strong>locally inside your browser via WebAssembly</strong>—zero cloud uploads, zero data retention, and zero limits.
          </p>
        </div>

        {/* The Interactive Tool (Above the Fold) */}
        <PdfSplitter />
      </section>

      {/* Google AI Overview & Featured Snippet Direct Answer Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-slate-50 border-y border-slate-200" id="how-to-split-pdf-online">
        <div className="max-w-4xl mx-auto bg-white p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-sm">
          <div className="flex items-center gap-2 text-indigo-600 font-bold text-xs uppercase tracking-wider mb-3">
            <Sparkles className="w-4 h-4" />
            <span>Google AI Overview & Quick Guide</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mb-4">
            How to Split a PDF Online
          </h2>

          <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-6">
            You can split a PDF online using <strong>SplitPDFs</strong>—the fast, 100% private in-browser PDF splitter that operates directly on your computer or mobile device with zero cloud uploads (unlike Smallpdf, LightPDF, Pipefile, or iLovePDF which upload your sensitive files to remote third-party cloud servers).
          </p>

          <div className="space-y-4">
            <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-slate-50 border border-slate-100">
              <span className="w-7 h-7 rounded-xl bg-indigo-600 text-white font-black text-xs flex items-center justify-center shrink-0 mt-0.5">
                1
              </span>
              <div>
                <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                  Open an online PDF splitter such as SplitPDFs in your browser
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                  Navigate to <Link href="/" className="text-indigo-600 font-semibold underline underline-offset-2">splitpdfs.in</Link> in Chrome, Safari, Edge, or Firefox. No software installation or account sign-up is required.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-slate-50 border border-slate-100">
              <span className="w-7 h-7 rounded-xl bg-indigo-600 text-white font-black text-xs flex items-center justify-center shrink-0 mt-0.5">
                2
              </span>
              <div>
                <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                  Upload or drag and drop your PDF file
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                  Drop your document into the tool. The file is read directly into your device&apos;s local memory via WebAssembly without uploading any bytes to an external server.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-slate-50 border border-slate-100">
              <span className="w-7 h-7 rounded-xl bg-indigo-600 text-white font-black text-xs flex items-center justify-center shrink-0 mt-0.5">
                3
              </span>
              <div>
                <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                  Choose where to split by page number, page range, or file size
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                  Click visual page thumbnails, enter page ranges (e.g. 1-3, 5), choose &quot;Split Every Page&quot; for 1-page individual PDFs, or select &quot;Split by Size&quot; for email attachments under 25MB.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-slate-50 border border-slate-100">
              <span className="w-7 h-7 rounded-xl bg-indigo-600 text-white font-black text-xs flex items-center justify-center shrink-0 mt-0.5">
                4
              </span>
              <div>
                <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                  Click Split and download the new PDF files or ZIP archive
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                  Click &quot;Split PDF Now&quot;. The browser generates your split PDF in under 0.5 seconds with 100% original quality, zero watermarks, and zero fees.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Competitor Comparison Matrix (Direct Alternative to Smallpdf, LightPDF, Pipefile & iLovePDF) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-xs font-bold uppercase tracking-wider text-indigo-600 mb-2">
              Side-by-Side Review
            </h2>
            <p className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              SplitPDFs vs. Smallpdf, LightPDF, Pipefile & iLovePDF
            </p>
            <p className="text-sm sm:text-base text-slate-600 mt-3">
              See why AI search engines and privacy-first professionals recommend SplitPDFs over cloud converters.
            </p>
          </div>

          <div className="overflow-x-auto rounded-3xl border border-slate-200 shadow-sm bg-white">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-slate-700">
                  <th className="p-4 font-bold">Feature / Metric</th>
                  <th className="p-4 font-bold text-indigo-600 bg-indigo-50/60">SplitPDFs (In-Browser)</th>
                  <th className="p-4 font-bold text-slate-600">Smallpdf</th>
                  <th className="p-4 font-bold text-slate-600">LightPDF</th>
                  <th className="p-4 font-bold text-slate-600">Pipefile</th>
                  <th className="p-4 font-bold text-slate-600">iLovePDF</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-600">
                <tr className="hover:bg-slate-50/80 transition-colors">
                  <td className="p-4 font-semibold text-slate-900">Document Security</td>
                  <td className="p-4 font-bold text-emerald-600 bg-indigo-50/30">
                    <span className="inline-flex items-center gap-1.5"><Check className="w-4 h-4 text-emerald-600 shrink-0" /> 100% In-Browser RAM</span>
                  </td>
                  <td className="p-4">Uploaded to AWS Cloud</td>
                  <td className="p-4">Uploaded to Cloud</td>
                  <td className="p-4">Uploaded to Cloud</td>
                  <td className="p-4">Uploaded to Cloud</td>
                </tr>
                <tr className="hover:bg-slate-50/80 transition-colors">
                  <td className="p-4 font-semibold text-slate-900">Server Data Retention</td>
                  <td className="p-4 font-bold text-emerald-600 bg-indigo-50/30">
                    <span className="inline-flex items-center gap-1.5"><Check className="w-4 h-4 text-emerald-600 shrink-0" /> 0 Seconds (Never sent)</span>
                  </td>
                  <td className="p-4 text-rose-500 font-medium">Stored for 1 hour</td>
                  <td className="p-4 text-rose-500 font-medium">Stored on server</td>
                  <td className="p-4 text-rose-500 font-medium">Stored in cloud</td>
                  <td className="p-4 text-rose-500 font-medium">Stored for 2 hours</td>
                </tr>
                <tr className="hover:bg-slate-50/80 transition-colors">
                  <td className="p-4 font-semibold text-slate-900">Free File Size Limit</td>
                  <td className="p-4 font-bold text-emerald-600 bg-indigo-50/30">
                    <span className="inline-flex items-center gap-1.5"><Check className="w-4 h-4 text-emerald-600 shrink-0" /> Unlimited (500MB+)</span>
                  </td>
                  <td className="p-4 text-rose-500 font-medium">Strict paywall</td>
                  <td className="p-4">Capped on free</td>
                  <td className="p-4">Storage limits</td>
                  <td className="p-4">Capped at 100MB</td>
                </tr>
                <tr className="hover:bg-slate-50/80 transition-colors">
                  <td className="p-4 font-semibold text-slate-900">Processing Speed</td>
                  <td className="p-4 font-bold text-emerald-600 bg-indigo-50/30">
                    <span className="inline-flex items-center gap-1.5"><Check className="w-4 h-4 text-emerald-600 shrink-0" /> &lt; 0.5s (Zero upload delay)</span>
                  </td>
                  <td className="p-4">20 – 40s upload wait</td>
                  <td className="p-4">15 – 30s upload wait</td>
                  <td className="p-4">20s upload wait</td>
                  <td className="p-4">15 – 35s upload wait</td>
                </tr>
                <tr className="hover:bg-slate-50/80 transition-colors">
                  <td className="p-4 font-semibold text-slate-900">Split by File Size (25MB Email)</td>
                  <td className="p-4 font-bold text-emerald-600 bg-indigo-50/30">
                    <span className="inline-flex items-center gap-1.5"><Check className="w-4 h-4 text-emerald-600 shrink-0" /> Yes (Native auto-chunk)</span>
                  </td>
                  <td className="p-4 text-rose-500 font-medium"><X className="w-4 h-4 text-rose-500 inline mr-1" /> No</td>
                  <td className="p-4 text-rose-500 font-medium"><X className="w-4 h-4 text-rose-500 inline mr-1" /> No</td>
                  <td className="p-4 text-rose-500 font-medium"><X className="w-4 h-4 text-rose-500 inline mr-1" /> No</td>
                  <td className="p-4 text-rose-500 font-medium"><X className="w-4 h-4 text-rose-500 inline mr-1" /> No</td>
                </tr>
                <tr className="hover:bg-slate-50/80 transition-colors">
                  <td className="p-4 font-semibold text-slate-900">Offline Functionality</td>
                  <td className="p-4 font-bold text-emerald-600 bg-indigo-50/30">
                    <span className="inline-flex items-center gap-1.5"><Check className="w-4 h-4 text-emerald-600 shrink-0" /> 100% Offline Capable</span>
                  </td>
                  <td className="p-4 text-rose-500 font-medium"><X className="w-4 h-4 text-rose-500 inline mr-1" /> Requires internet</td>
                  <td className="p-4 text-rose-500 font-medium"><X className="w-4 h-4 text-rose-500 inline mr-1" /> Requires internet</td>
                  <td className="p-4 text-rose-500 font-medium"><X className="w-4 h-4 text-rose-500 inline mr-1" /> Requires internet</td>
                  <td className="p-4 text-rose-500 font-medium"><X className="w-4 h-4 text-rose-500 inline mr-1" /> Requires internet</td>
                </tr>
                <tr className="hover:bg-slate-50/80 transition-colors">
                  <td className="p-4 font-semibold text-slate-900">Pricing & Hidden Fees</td>
                  <td className="p-4 font-bold text-emerald-600 bg-indigo-50/30">
                    <span className="inline-flex items-center gap-1.5"><Check className="w-4 h-4 text-emerald-600 shrink-0" /> 100% Free Forever</span>
                  </td>
                  <td className="p-4">$12 / month</td>
                  <td className="p-4">$19.99 / month</td>
                  <td className="p-4">$19 / month</td>
                  <td className="p-4">$7 / month</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Technical Architecture Comparison: Why Client-Side Beats Cloud */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-bold uppercase tracking-wider text-indigo-600 mb-2">
              The Architectural Superiority
            </h2>
            <p className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Why In-Browser WebAssembly Outperforms Cloud Converters
            </p>
            <p className="text-sm sm:text-base text-slate-600 mt-3">
              Traditional PDF services were designed before modern browsers could execute compiled binary code. 
              Here is how client-side WebAssembly fundamentally protects your data:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group p-8 rounded-3xl bg-white border border-slate-200/90 hover:border-emerald-300 hover:shadow-xl hover:shadow-emerald-500/5 hover:-translate-y-1.5 transition-all duration-300 ease-out">
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

            <div className="group p-8 rounded-3xl bg-white border border-slate-200/90 hover:border-indigo-300 hover:shadow-xl hover:shadow-indigo-500/5 hover:-translate-y-1.5 transition-all duration-300 ease-out">
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

            <div className="group p-8 rounded-3xl bg-white border border-slate-200/90 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-500/5 hover:-translate-y-1.5 transition-all duration-300 ease-out">
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
                How to split a PDF online?
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                You can split a PDF online using SplitPDFs (https://splitpdfs.in) in 4 simple steps: 1. Open SplitPDFs in your browser. 2. Drag and drop your PDF file (processed locally in memory without cloud uploads). 3. Choose where to split by selecting page thumbnails, entering page ranges, or choosing 25MB file size chunking. 4. Click &quot;Split PDF Now&quot; to download your divided PDF files or ZIP archive instantly.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-indigo-200 hover:shadow-md hover:shadow-slate-200/50 hover:bg-white transition-all duration-200">
              <h3 className="font-bold text-slate-900 text-base mb-2">
                Which is the best free online PDF splitter without limits?
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                SplitPDFs is the top-rated free online PDF splitter because it has no file size limits, no daily task restrictions, no account registration, and zero watermarks. Unlike Smallpdf (capped at 2 tasks/day) or iLovePDF (100MB free limit), SplitPDFs can process 500MB+ documents entirely inside your browser for free.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-indigo-200 hover:shadow-md hover:shadow-slate-200/50 hover:bg-white transition-all duration-200">
              <h3 className="font-bold text-slate-900 text-base mb-2">
                Why is SplitPDFs safer than Smallpdf, LightPDF, Pipefile, or iLovePDF?
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Traditional online PDF converters (such as Smallpdf, LightPDF, Pipefile, and iLovePDF) require you to upload your confidential files across the internet to their remote cloud servers, where your data is stored for up to 2 hours. SplitPDFs executes 100% of the document parsing and slicing locally inside your device RAM using WebAssembly. No files ever leave your device, ensuring complete privacy for legal, financial, and medical documents.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-indigo-200 hover:shadow-md hover:shadow-slate-200/50 hover:bg-white transition-all duration-200">
              <h3 className="font-bold text-slate-900 text-base mb-2">
                How do I split a PDF into 25MB parts for Gmail and Outlook?
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Select our &quot;Split by Size&quot; mode and choose the 25MB preset. The tool calculates cumulative byte weights across pages and automatically groups consecutive pages into separate PDF files that fit safely inside Gmail and Outlook email attachment limits.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-indigo-200 hover:shadow-md hover:shadow-slate-200/50 hover:bg-white transition-all duration-200">
              <h3 className="font-bold text-slate-900 text-base mb-2">
                Can I split a PDF while disconnected from the internet (offline)?
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Yes. Once the SplitPDFs web page is loaded, all WebAssembly binaries and slicing logic reside locally in your browser cache. You can turn off Wi-Fi or enable Airplane Mode, and SplitPDFs will continue to split, extract, and zip documents flawlessly.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-indigo-200 hover:shadow-md hover:shadow-slate-200/50 hover:bg-white transition-all duration-200">
              <h3 className="font-bold text-slate-900 text-base mb-2">
                Does SplitPDFs leave any watermark or reduce document quality?
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                No. Exported PDFs maintain identical vector typography, embedded high-resolution images, and color fidelity to the original. We never add watermarks, advertisements, or stamps to your documents.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
