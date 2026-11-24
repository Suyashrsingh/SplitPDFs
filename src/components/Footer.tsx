import React from 'react';
import Link from 'next/link';
import { Logo } from './Logo';
import { GitHubIcon, LinkedInIcon, InstagramIcon } from './SocialIcons';

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 pt-16 pb-12 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-900">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block">
              <Logo size="md" theme="dark" />
            </Link>
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Fast, 100% private in-browser PDF utilities. Separate, extract, and divide documents with zero server uploads and zero data retention.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://github.com/Suyashrsingh"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-850 hover:border-slate-700 transition-all hover:scale-105"
              >
                <GitHubIcon className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/suyash-rishi-singh-6bb18b289"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-[#0a66c2] hover:bg-slate-850 hover:border-slate-700 transition-all hover:scale-105"
              >
                <LinkedInIcon className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/suyashsingh08"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Profile"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-[#e4405f] hover:bg-slate-850 hover:border-slate-700 transition-all hover:scale-105"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Tools Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider">
              Split Tools
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Visual Page Splitter
                </Link>
              </li>
              <li>
                <Link href="/split-by-size" className="hover:text-white transition-colors">
                  Split by File Size (25MB)
                </Link>
              </li>
              <li>
                <Link href="/extract-pages" className="hover:text-white transition-colors">
                  Extract Specific Pages
                </Link>
              </li>
              <li>
                <Link href="/split-every-n-pages" className="hover:text-white transition-colors">
                  Split Every N Pages
                </Link>
              </li>
            </ul>
          </div>

          {/* Practical Guides */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider">
              Helpful Guides
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link href="/blog/how-to-split-large-pdf-for-email-25mb" className="hover:text-white transition-colors">
                  Split Large PDF for Gmail
                </Link>
              </li>
              <li>
                <Link href="/blog/split-pdf-without-uploading-privacy-guide" className="hover:text-white transition-colors">
                  Zero-Upload Privacy Guide
                </Link>
              </li>
              <li>
                <Link href="/blog/how-to-extract-pages-from-scanned-pdf-free" className="hover:text-white transition-colors">
                  Extract Pages from Scans
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition-colors">
                  All Knowledge Base
                </Link>
              </li>
            </ul>
          </div>

          {/* Company & Legal */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider">
              Company & Legal
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link href="/about" className="hover:text-white transition-colors font-medium text-slate-300">
                  About SplitPDFs & Team
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-white transition-colors">
                  Privacy Policy (Client-Side)
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Support & Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Attribution Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>
            © 2026 SplitPDFs. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/about" className="hover:text-slate-300 transition-colors">
              About & Creators
            </Link>
            <Link href="/privacy" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-slate-300 transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
