'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Cookie, X, ShieldCheck } from 'lucide-react';

export function CookieBanner() {
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setMounted(true);
    const consent = localStorage.getItem('splitpdfs_cookie_consent');
    if (!consent) {
      // Delay showing banner slightly for better UX
      const timer = setTimeout(() => setIsVisible(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleConsent = (choice: 'all' | 'necessary') => {
    localStorage.setItem('splitpdfs_cookie_consent', choice);
    setIsVisible(false);
  };

  if (!mounted || !isVisible) return null;

  return (
    <aside
      aria-label="Cookie consent banner"
      className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-md z-50 animate-in fade-in slide-in-from-bottom-5 duration-300"
    >
      <div className="bg-white/95 backdrop-blur-xl border border-slate-200/90 shadow-2xl rounded-2xl p-5 text-slate-800">
        <div className="flex items-start gap-3">
          <div className="w-9 h-9 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0 mt-0.5">
            <Cookie className="w-5 h-5" />
          </div>

          <div className="flex-1 space-y-1.5">
            <h4 className="font-bold text-slate-900 text-sm flex items-center gap-1.5">
              <span>Cookie & Privacy Notice</span>
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              We use cookies to maintain uptime and support our free tool with Google AdSense. Your PDF documents are <strong>always processed 100% locally in your browser</strong> and never uploaded.
            </p>
            <div className="text-[11px] text-slate-500 pt-0.5">
              Learn more in our{' '}
              <Link href="/privacy" className="text-indigo-600 hover:underline font-semibold">
                Privacy Policy
              </Link>.
            </div>
          </div>

          <button
            onClick={() => handleConsent('necessary')}
            className="text-slate-400 hover:text-slate-600 p-1 -mr-1 -mt-1 rounded-lg hover:bg-slate-100 transition-colors"
            aria-label="Dismiss cookie notice"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-end gap-2.5">
          <button
            onClick={() => handleConsent('necessary')}
            className="px-3.5 py-1.5 rounded-xl text-xs font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
          >
            Necessary Only
          </button>
          <button
            onClick={() => handleConsent('all')}
            className="px-4 py-1.5 rounded-xl text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-700 shadow-sm shadow-indigo-600/20 hover:shadow transition-all"
          >
            Accept All
          </button>
        </div>
      </div>
    </aside>
  );
}
