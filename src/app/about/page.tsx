import React from 'react';
import type { Metadata } from 'next';
import { 
  Palette, 
  Code2, 
  ShieldCheck, 
  Zap, 
  Lock, 
  CheckCircle2, 
  ArrowRight, 
  WifiOff, 
  Cpu, 
  FileCheck2, 
  Sparkles,
  Layers,
  HeartHandshake
} from 'lucide-react';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { GitHubIcon, LinkedInIcon, InstagramIcon } from '@/components/SocialIcons';

export const metadata: Metadata = {
  title: 'About SplitPDFs – Built by Mahesh Mailapure & Suyash Singh',
  description: 'Learn the story and engineering behind SplitPDFs. Designed by Mahesh Mailapure and Developed by Suyash Singh to deliver fast, 100% private in-browser document tools.',
  alternates: {
    canonical: 'https://splitpdfs.in/about',
  },
  openGraph: {
    title: 'About SplitPDFs – Fast, Private, In-Browser Document Tools',
    description: 'Designed by Mahesh Mailapure & Developed by Suyash Singh. Client-side WebAssembly with zero server uploads.',
    url: 'https://splitpdfs.in/about',
    siteName: 'SplitPDFs',
    type: 'website',
  },
};

export default function AboutPage() {
  const teamSchema = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    'headline': 'About SplitPDFs and Its Founders',
    'description': 'The story, architecture, and team behind SplitPDFs: Mahesh Mailapure (Product & UX Design) and Suyash Singh (Systems & WebAssembly Engineering).',
    'mainEntity': {
      '@type': 'Organization',
      'name': 'SplitPDFs',
      'url': 'https://splitpdfs.in',
      'logo': 'https://splitpdfs.in/icon.svg',
      'founder': [
        {
          '@type': 'Person',
          'name': 'Mahesh Mailapure',
          'jobTitle': 'Co-Founder & Lead Product Designer',
          'description': 'Product & UI/UX designer focused on visual pagination, accessible document workflows, and cognitive-load reduction.',
          'knowsAbout': ['Product Design', 'Visual Systems', 'Design Architecture', 'User Experience']
        },
        {
          '@type': 'Person',
          'name': 'Suyash Singh',
          'jobTitle': 'Co-Founder & Lead Systems Engineer',
          'description': 'Software engineer specializing in high-performance browser WebAssembly, client-side binary manipulation, and zero-upload security.',
          'knowsAbout': ['WebAssembly', 'Binary Data Manipulation', 'TypeScript', 'Client-Side Systems'],
          'sameAs': [
            'https://github.com/Suyashrsingh',
            'https://www.linkedin.com/in/suyash-rishi-singh-6bb18b289',
            'https://www.instagram.com/suyashsingh08'
          ]
        }
      ]
    }
  };

  return (
    <div className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(teamSchema) }}
      />

      <Breadcrumbs items={[{ label: 'About Us & Creators' }]} />

      {/* Hero / Header Section */}
      <div className="text-center max-w-3xl mx-auto mb-20">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 hover:bg-slate-200/70 border border-slate-200/80 text-slate-800 text-xs font-semibold uppercase tracking-wider mb-6 transition-all">
          <HeartHandshake className="w-3.5 h-3.5 text-indigo-600" />
          <span>Our Story & Mission</span>
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.12] mb-6">
          Fast, private PDF tools <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-blue-600 to-indigo-800">
            built for the modern web.
          </span>
        </h1>
        <p className="text-base sm:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
          SplitPDFs was created by <strong>Mahesh Mailapure</strong> and <strong>Suyash Singh</strong> to fix what legacy document converters broke: eliminating cloud upload queues, subscriptions, and privacy leaks with pure, instant in-browser computation.
        </p>
      </div>

      {/* The Two Founders Grid */}
      <section className="mb-24">
        <div className="text-center mb-12">
          <h2 className="text-xs font-bold text-indigo-600 uppercase tracking-widest mb-2">
            The Builders
          </h2>
          <p className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Designed & Engineered with Craft
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mahesh Mailapure Card */}
          <div className="group relative p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-2xl hover:shadow-indigo-500/10 hover:border-indigo-300 hover:-translate-y-1.5 transition-all duration-300 ease-out flex flex-col justify-between overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-bl-full pointer-events-none group-hover:scale-125 transition-transform duration-500" />
            
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-600 to-indigo-700 text-white flex items-center justify-center font-black text-2xl shadow-lg shadow-indigo-500/25 ring-4 ring-indigo-50 group-hover:scale-105 transition-transform duration-300">
                  MM
                </div>
                <div>
                  <h3 className="text-2xl font-black text-slate-900 group-hover:text-indigo-600 transition-colors">
                    Mahesh Mailapure
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs font-bold text-indigo-600 mt-1 uppercase tracking-wide">
                    <Palette className="w-3.5 h-3.5" />
                    <span>Product & UI/UX Designer</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
                <p>
                  Mahesh leads product architecture and visual ergonomics. Before SplitPDFs, most online PDF splitters relied on crude, blind text boxes where users had to guess page numbers without seeing what they were cutting.
                </p>
                <p>
                  Mahesh designed the interactive thumbnail grid, the bi-directional range synchronizer, and the clean visual scissors interface—making splitting multi-page packets effortless for students, attorneys, and non-technical professionals alike.
                </p>
              </div>

              <blockquote className="mt-6 p-4 rounded-2xl bg-indigo-50/60 border-l-4 border-indigo-600 text-xs sm:text-sm text-slate-700 italic">
                &ldquo;Great utility design should feel like a sharp physical instrument—instant, quiet, and getting completely out of the user&apos;s way.&rdquo;
              </blockquote>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-100">
              <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2.5">
                Core Focus Areas
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-lg bg-slate-100 hover:bg-indigo-50 hover:text-indigo-700 text-slate-700 text-xs font-medium transition-colors">
                  Visual Pagination
                </span>
                <span className="px-3 py-1 rounded-lg bg-slate-100 hover:bg-indigo-50 hover:text-indigo-700 text-slate-700 text-xs font-medium transition-colors">
                  Micro-Interactions
                </span>
                <span className="px-3 py-1 rounded-lg bg-slate-100 hover:bg-indigo-50 hover:text-indigo-700 text-slate-700 text-xs font-medium transition-colors">
                  Accessible UI
                </span>
                <span className="px-3 py-1 rounded-lg bg-slate-100 hover:bg-indigo-50 hover:text-indigo-700 text-slate-700 text-xs font-medium transition-colors">
                  Zero Clutter
                </span>
              </div>
            </div>
          </div>

          {/* Suyash Singh Card */}
          <div className="group relative p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-2xl hover:shadow-emerald-500/10 hover:border-emerald-300 hover:-translate-y-1.5 transition-all duration-300 ease-out flex flex-col justify-between overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-bl-full pointer-events-none group-hover:scale-125 transition-transform duration-500" />
            
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 text-white flex items-center justify-center font-black text-2xl shadow-lg shadow-slate-900/25 ring-4 ring-slate-100 group-hover:scale-105 transition-transform duration-300">
                  SS
                </div>
                <div>
                  <h3 className="text-2xl font-black text-slate-900 group-hover:text-emerald-700 transition-colors">
                    Suyash Singh
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-600 mt-1 uppercase tracking-wide">
                    <Code2 className="w-3.5 h-3.5" />
                    <span>Systems & Software Engineer</span>
                  </div>
                  {/* Social Media Profiles */}
                  <div className="flex items-center gap-2 mt-3">
                    <a
                      href="https://github.com/Suyashrsingh"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Suyash Singh on GitHub"
                      className="p-1.5 rounded-lg bg-slate-100 hover:bg-slate-900 hover:text-white text-slate-600 transition-all hover:scale-110 shadow-xs"
                      title="GitHub Profile"
                    >
                      <GitHubIcon className="w-4 h-4" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/suyash-rishi-singh-6bb18b289"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Suyash Singh on LinkedIn"
                      className="p-1.5 rounded-lg bg-slate-100 hover:bg-[#0a66c2] hover:text-white text-slate-600 transition-all hover:scale-110 shadow-xs"
                      title="LinkedIn Profile"
                    >
                      <LinkedInIcon className="w-4 h-4" />
                    </a>
                    <a
                      href="https://www.instagram.com/suyashsingh08"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Suyash Singh on Instagram"
                      className="p-1.5 rounded-lg bg-slate-100 hover:bg-gradient-to-tr hover:from-amber-500 hover:via-pink-500 hover:to-purple-600 hover:text-white text-slate-600 transition-all hover:scale-110 shadow-xs"
                      title="Instagram Profile"
                    >
                      <InstagramIcon className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
                <p>
                  Suyash architects the core processing pipeline and client-side systems. He recognized that modern devices possess immense computing power, rendering slow server uploads obsolete for document slicing.
                </p>
                <p>
                  By building the engine with WebAssembly, <code className="text-xs bg-slate-100 px-1.5 py-0.5 rounded font-mono text-emerald-800">pdf-lib</code>, and <code className="text-xs bg-slate-100 px-1.5 py-0.5 rounded font-mono text-emerald-800">JSZip</code>, Suyash engineered an architecture where slicing runs entirely inside local RAM in sub-second speeds.
                </p>
              </div>

              <blockquote className="mt-6 p-4 rounded-2xl bg-emerald-50/60 border-l-4 border-emerald-600 text-xs sm:text-sm text-slate-700 italic">
                &ldquo;Your documents belong inside your machine&apos;s memory—never sitting on a remote server disk in an unknown data center.&rdquo;
              </blockquote>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-100">
              <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2.5">
                Core Focus Areas
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-lg bg-slate-100 hover:bg-emerald-50 hover:text-emerald-700 text-slate-700 text-xs font-medium transition-colors">
                  WebAssembly (WASM)
                </span>
                <span className="px-3 py-1 rounded-lg bg-slate-100 hover:bg-emerald-50 hover:text-emerald-700 text-slate-700 text-xs font-medium transition-colors">
                  Binary Stream Slicing
                </span>
                <span className="px-3 py-1 rounded-lg bg-slate-100 hover:bg-emerald-50 hover:text-emerald-700 text-slate-700 text-xs font-medium transition-colors">
                  Zero-Upload Security
                </span>
                <span className="px-3 py-1 rounded-lg bg-slate-100 hover:bg-emerald-50 hover:text-emerald-700 text-slate-700 text-xs font-medium transition-colors">
                  Client Performance
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Engineering Rationale / Why We Built This */}
      <section className="mb-24 bg-gradient-to-b from-slate-50 to-white rounded-3xl border border-slate-200/90 p-8 sm:p-12 shadow-sm">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-2 text-indigo-600 font-bold text-xs uppercase tracking-wider mb-3">
            <Cpu className="w-4 h-4" />
            <span>The Architectural Breakthrough</span>
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-6">
            Why We Eliminated the Cloud Server
          </h2>
          <div className="space-y-5 text-sm sm:text-base text-slate-600 leading-relaxed">
            <p>
              Traditional PDF websites operate on an outdated 2010 cloud model: you drag a confidential document into your browser, their server uploads the entire binary across the internet, queues it behind other users, runs a slow command-line utility on a virtual machine, and makes you wait to download it back.
            </p>
            <p>
              Because those server farms cost money to maintain, these sites force you into subscriptions, throttle your speed, or cap your daily tasks.
            </p>
            <p>
              <strong>We flipped that model on its head.</strong> Modern web browsers running on your laptop or phone have access to multi-threaded CPUs and gigabytes of RAM. With WebAssembly, your browser can parse, slice, and re-compile a 100-page PDF in under 0.4 seconds without transmitting a single byte across the internet.
            </p>
          </div>

          {/* 3 Value Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-8 pt-8 border-t border-slate-200">
            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-indigo-200 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-3">
                <Lock className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-sm mb-1">Total Privacy</h3>
              <p className="text-xs text-slate-500 leading-normal">
                Complies naturally with HIPAA, GDPR, and NDA rules because documents never leave your device.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-indigo-200 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-3">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-sm mb-1">Instant Execution</h3>
              <p className="text-xs text-slate-500 leading-normal">
                Zero upload progress bars. Splitting happens in milliseconds directly in your system RAM.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-indigo-200 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-3">
                <FileCheck2 className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-sm mb-1">No Artificial Limits</h3>
              <p className="text-xs text-slate-500 leading-normal">
                No paywalls, no task quotas, and no file size ceilings. Process 200MB+ documents freely.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Offline Verification Challenge */}
      <section className="mb-24 p-8 sm:p-10 rounded-3xl bg-emerald-50/70 border border-emerald-200 shadow-sm flex flex-col sm:flex-row items-center gap-6">
        <div className="w-14 h-14 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-md shadow-emerald-600/20">
          <WifiOff className="w-7 h-7" />
        </div>
        <div className="flex-1 text-center sm:text-left">
          <h3 className="text-lg font-bold text-emerald-950 mb-1">
            The Airplane Mode Verification Test
          </h3>
          <p className="text-xs sm:text-sm text-emerald-900/80 leading-relaxed">
            You don&apos;t have to take our word for it. Open SplitPDFs in any browser, <strong>disconnect your Wi-Fi or turn on Airplane Mode</strong>, and split a PDF. The tool will process, preview, and download your split documents flawlessly with zero internet connection.
          </p>
        </div>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-emerald-700 hover:bg-emerald-800 shadow-sm transition-all whitespace-nowrap"
        >
          <span>Test It Yourself</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </section>

      {/* Bottom CTA / Action */}
      <div className="text-center p-10 sm:p-12 rounded-3xl bg-slate-950 text-white relative overflow-hidden shadow-2xl">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/30 via-slate-950 to-slate-950 pointer-events-none" />
        <div className="relative z-10 max-w-xl mx-auto">
          <h2 className="text-3xl font-black mb-3 tracking-tight">
            Ready to split documents privately?
          </h2>
          <p className="text-sm text-slate-400 mb-8 leading-relaxed">
            No signup, zero cloud uploads, and completely free forever. Experience how fast in-browser document tools should be.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-bold bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/30 hover:-translate-y-0.5 active:translate-y-0 transition-all text-sm"
            >
              <span>Open SplitPDFs Tool</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-xl font-semibold text-slate-300 hover:text-white hover:bg-white/10 transition-all text-sm"
            >
              Contact Mahesh & Suyash
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
