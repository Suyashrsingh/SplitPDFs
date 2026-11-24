import React from 'react';
import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { ShieldCheck, Lock, CheckCircle2, Cookie, AlertCircle, FileText } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy & Cookie Disclosures – SplitPDFs',
  description: 'SplitPDFs privacy policy, Google AdSense cookie disclosures, zero-upload document security guarantee, and GDPR/CCPA data compliance.',
  alternates: {
    canonical: 'https://splitpdfs.in/privacy',
  },
  openGraph: {
    title: 'Privacy Policy & Cookie Disclosures – SplitPDFs',
    description: 'Learn how SplitPDFs guarantees 100% in-browser client document privacy, complies with Google AdSense policies, and protects user data.',
    url: 'https://splitpdfs.in/privacy',
    siteName: 'SplitPDFs',
    type: 'website',
  },
};

export default function PrivacyPage() {
  return (
    <div className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto prose prose-slate">
      <div className="not-prose">
        <Breadcrumbs items={[{ label: 'Privacy Policy' }]} />
      </div>

      <div className="not-prose text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase mb-4">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          <span>Complete Privacy & AdSense Compliance</span>
        </div>
        <h1 className="text-4xl font-black text-slate-900 tracking-tight mb-3">
          Privacy Policy
        </h1>
        <p className="text-sm text-slate-500">Effective Date: November 24, 2026 • Version 2.1</p>
      </div>

      {/* Core Privacy Callout */}
      <div className="not-prose bg-emerald-50 border border-emerald-200 rounded-2xl p-6 sm:p-8 mb-10 text-emerald-950">
        <h3 className="font-bold text-lg flex items-center gap-2 mb-2 text-emerald-900">
          <Lock className="w-5 h-5 text-emerald-600" />
          The SplitPDFs Zero-Upload Guarantee:
        </h3>
        <p className="text-sm leading-relaxed text-emerald-900">
          <strong>Your PDF documents are never uploaded to any server.</strong> All parsing, thumbnail rendering, page extraction, and file compilation execute 100% locally in your computer or mobile device&apos;s web browser memory (RAM) via WebAssembly. Neither SplitPDFs nor any third party ever inspects, stores, or transmits your document files.
        </p>
      </div>

      <h2>1. Overview and Scope</h2>
      <p>
        This Privacy Policy explains how SplitPDFs (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) handles your data when you visit <strong>https://splitpdfs.in</strong>. We are committed to transparency, user privacy, and strict compliance with global privacy regulations including the EU General Data Protection Regulation (GDPR), the California Consumer Privacy Act (CCPA/CPRA), and the Google AdSense Publisher Policies.
      </p>

      <h2>2. Document Handling and Local Sandbox Processing</h2>
      <p>
        Unlike legacy online PDF converters that send your documents across the internet to cloud data centers:
      </p>
      <ul>
        <li><strong>Local In-Memory Execution:</strong> When you select or drag a PDF into SplitPDFs, the file is read exclusively into your browser&apos;s sandboxed JavaScript memory.</li>
        <li><strong>Zero Server Transmission:</strong> Zero binary bytes of your documents are transmitted to our servers or any cloud infrastructure.</li>
        <li><strong>Automatic Memory Purge:</strong> Once you close the browser tab or refresh the page, all document data in memory is erased by your operating system.</li>
      </ul>

      <h2>3. Google AdSense and Third-Party Advertising Cookies</h2>
      <p>
        To keep SplitPDFs free, accessible, and maintained without subscription paywalls, we display advertising through third-party advertising partners, including <strong>Google AdSense</strong>. 
      </p>
      <p>
        Under Google AdSense program policies, we disclose the following mandatory information regarding cookies and advertising:
      </p>
      <ul>
        <li>Third-party vendors, including Google, use cookies to serve ads based on a user&apos;s prior visits to this website or other websites on the internet.</li>
        <li>Google&apos;s use of advertising cookies (such as the DoubleClick cookie) enables it and its partners to serve personalized ads to you based on your visits to our site and/or other sites across the internet.</li>
        <li>Users may opt out of personalized advertising by visiting Google&apos;s <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer">Ads Settings</a>.</li>
        <li>Alternatively, you can opt out of a third-party vendor&apos;s use of cookies for personalized advertising by visiting <a href="https://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer">www.aboutads.info</a> or the Network Advertising Initiative opt-out page at <a href="https://optout.networkadvertising.org/" target="_blank" rel="noopener noreferrer">optout.networkadvertising.org</a>.</li>
      </ul>

      <h2>4. Types of Cookies and Tracking Technologies We Use</h2>
      <p>
        Cookies are small text files placed on your device to help websites deliver a functional user experience:
      </p>
      <ul>
        <li><strong>Essential / Technical Cookies:</strong> Used to remember your local UI preferences (such as your preferred thumbnail zoom level or cookie consent state in <code>localStorage</code>). These do not track personal identity.</li>
        <li><strong>Analytics Cookies:</strong> We may use privacy-preserving, anonymized analytics (such as Cloudflare Web Analytics) to measure page load speeds, Core Web Vitals, and aggregate error logs. IP addresses are anonymized.</li>
        <li><strong>Advertising Cookies (Google AdSense):</strong> Placed by Google and its certified advertising partners to deliver, measure, and optimize advertising units.</li>
      </ul>

      <h2>5. How You Can Control and Disable Cookies</h2>
      <p>
        You have the full right to decide whether to accept or reject cookies:
      </p>
      <ul>
        <li>You can modify your browser settings to decline all cookies or to alert you when a cookie is placed. Refer to your browser&apos;s help documentation (Chrome, Safari, Edge, Firefox).</li>
        <li>You can use our interactive on-site <strong>Cookie Banner</strong> to configure your advertising preferences.</li>
        <li>Please note that disabling cookies may affect certain non-essential visual preferences, though our core PDF splitting tool will continue to function offline.</li>
      </ul>

      <h2>6. GDPR and European Privacy Rights (EEA & UK)</h2>
      <p>
        If you reside in the European Economic Area (EEA) or the United Kingdom, you possess specific data rights under the GDPR:
      </p>
      <ul>
        <li>The right to access, rectify, or request deletion of any personal data we hold.</li>
        <li>The right to object to or restrict the processing of your personal data.</li>
        <li>The right to withdraw consent for advertising cookies at any time.</li>
      </ul>
      <p>
        Because we do not collect, process, or store personal files or accounts, we do not maintain personal user databases. To exercise your rights regarding any web logs or inquiries, email us at <a href="mailto:privacy@splitpdfs.in">privacy@splitpdfs.in</a>.
      </p>

      <h2>7. California Consumer Privacy Act (CCPA / CPRA) Rights</h2>
      <p>
        Under the California Consumer Privacy Act (CCPA) and California Privacy Rights Act (CPRA), California residents have the right to:
      </p>
      <ul>
        <li>Request disclosure of the categories and specific pieces of personal information collected.</li>
        <li>Request deletion of personal information.</li>
        <li>Opt out of the &quot;sale&quot; or &quot;sharing&quot; of personal information for cross-context behavioral advertising via our cookie controls or Global Privacy Control (GPC) browser signals.</li>
        <li>Non-discrimination for exercising your privacy rights.</li>
      </ul>
      <p>
        We do not sell user documents, personal contact lists, or file metadata.
      </p>

      <h2>8. Children&apos;s Privacy (COPPA Compliance)</h2>
      <p>
        SplitPDFs is not directed toward children under the age of 13. We do not knowingly collect personal identifiable information from children under 13. If you believe a child has provided us with personal information through our contact form, please notify us immediately at <a href="mailto:privacy@splitpdfs.in">privacy@splitpdfs.in</a> so we can delete it promptly.
      </p>

      <h2>9. Contact Us</h2>
      <p>
        If you have any questions or concerns regarding this Privacy Policy or our advertising practices, please contact our team:
      </p>
      <ul>
        <li><strong>Email:</strong> <a href="mailto:privacy@splitpdfs.in">privacy@splitpdfs.in</a> or <a href="mailto:support@splitpdfs.in">support@splitpdfs.in</a></li>
        <li><strong>Website:</strong> <Link href="/contact">https://splitpdfs.in/contact</Link></li>
        <li><strong>Location:</strong> India • Serving Global Users</li>
      </ul>
    </div>
  );
}
