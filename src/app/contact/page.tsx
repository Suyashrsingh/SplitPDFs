import React from 'react';
import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { ContactForm } from '@/components/ContactForm';
import { Mail, MessageSquare, ShieldCheck, Clock, HelpCircle, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Support & Feedback – SplitPDFs',
  description: 'Have a question or feedback? Contact the SplitPDFs team directly. Learn about our zero-upload privacy architecture and document security.',
  alternates: {
    canonical: 'https://splitpdfs.in/contact',
  },
  openGraph: {
    title: 'Contact Support & Feedback – SplitPDFs',
    description: 'Direct communication channel to the creators of SplitPDFs. We reply within 12 to 24 business hours.',
    url: 'https://splitpdfs.in/contact',
    siteName: 'SplitPDFs',
    type: 'website',
  },
};

export default function ContactPage() {
  const contactSchema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    'name': 'Contact SplitPDFs',
    'description': 'Contact and technical support for SplitPDFs in-browser document tools.',
    'url': 'https://splitpdfs.in/contact',
    'mainEntity': {
      '@type': 'Organization',
      'name': 'SplitPDFs',
      'email': 'support@splitpdfs.in',
      'url': 'https://splitpdfs.in'
    }
  };

  return (
    <div className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />

      <Breadcrumbs items={[{ label: 'Contact & Support' }]} />

      <div className="text-center max-w-2xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-bold uppercase mb-4">
          <MessageSquare className="w-3.5 h-3.5 text-indigo-600" />
          <span>We&apos;re Here to Help</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight mb-4">
          Get in Touch
        </h1>
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
          Have an idea for a new splitting mode, a partnership inquiry, or found a bug? We read and personally respond to every message.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {/* Contact Info Sidebar */}
        <div className="space-y-5">
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3 hover:border-indigo-200 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-sm">Direct Founder Email</h3>
              <p className="text-xs text-slate-500 mt-1">General inquiries & feedback:</p>
              <a
                href="mailto:support@splitpdfs.in"
                className="text-sm font-bold text-indigo-600 hover:underline mt-1 inline-block"
              >
                support@splitpdfs.in
              </a>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3 hover:border-indigo-200 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-sm">Response Time SLA</h3>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                We typically review and reply to all user questions within 12 to 24 business hours.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-emerald-50/70 border border-emerald-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-emerald-950 text-sm">Privacy Reminder</h3>
              <p className="text-xs text-emerald-900/80 mt-1 leading-relaxed">
                Do not email us your confidential files! SplitPDFs runs 100% inside your own browser memory, so our team never has or needs access to your documents.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="md:col-span-2">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
