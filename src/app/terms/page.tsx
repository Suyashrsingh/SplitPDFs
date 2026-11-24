import React from 'react';
import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Terms of Service – Usage Guidelines | SplitPDFs',
  description: 'Terms of service and usage rights for SplitPDFs online document utilities.',
  alternates: {
    canonical: 'https://splitpdfs.in/terms',
  },
};

export default function TermsPage() {
  return (
    <div className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto prose prose-slate">
      <div className="not-prose">
        <Breadcrumbs items={[{ label: 'Terms of Service' }]} />
      </div>

      <div className="not-prose text-center mb-12">
        <h1 className="text-4xl font-black text-slate-900 tracking-tight mb-2">
          Terms of Service
        </h1>
        <p className="text-sm text-slate-500">Effective Date: November 24, 2026</p>
      </div>

      <h2>1. Acceptance of Terms</h2>
      <p>
        By accessing and using SplitPDFs (available at splitpdfs.in), you acknowledge and agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you should immediately cease use of the service.
      </p>

      <h2>2. Permitted Use</h2>
      <p>
        SplitPDFs provides free, client-side document manipulation utilities. You are permitted to use the tool for personal, educational, commercial, and professional purposes without restriction, provided that your use complies with all applicable local, national, and international laws.
      </p>

      <h2>3. Intellectual Property Rights</h2>
      <p>
        You retain 100% full, uncompromised ownership and copyright of any PDF document you process through SplitPDFs. We claim zero rights, licenses, or ownership over your files.
      </p>

      <h2>4. Disclaimer of Warranty</h2>
      <p>
        The SplitPDFs service is provided on an &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; basis without warranties of any kind, whether express or implied. While we employ rigorous client-side testing, we do not warrant that file splitting will be entirely uninterrupted, error-free, or compatible with corrupt PDF binaries.
      </p>

      <h2>5. Limitation of Liability</h2>
      <p>
        In no event shall SplitPDFs or its operators be held liable for any direct, indirect, incidental, or consequential damages resulting from the use or inability to use the software. Users are advised to maintain backup copies of all original source documents prior to processing.
      </p>

      <h2>6. Modifications to Service</h2>
      <p>
        We reserve the right to modify, enhance, or discontinue any feature of SplitPDFs at any time without prior notice.
      </p>
    </div>
  );
}
