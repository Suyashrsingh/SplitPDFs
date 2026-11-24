import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { BLOG_POSTS } from '@/lib/blog-data';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { BookOpen, Calendar, Clock, ArrowRight, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: 'PDF Guides, Tutorials & Privacy Tips | SplitPDFs Blog',
  description: 'In-depth articles, tutorials, and security guides on splitting PDFs, managing document file sizes for email, and protecting confidential document data.',
  alternates: {
    canonical: 'https://splitpdfs.in/blog',
  },
};

export default function BlogIndexPage() {
  return (
    <div className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <Breadcrumbs items={[{ label: 'Guides & Blog' }]} />

      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-bold uppercase mb-4">
          <BookOpen className="w-4 h-4 text-indigo-600" />
          <span>Knowledge Base & Tutorials</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight mb-4">
          PDF Mastery & Productivity Guides
        </h1>
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
          Step-by-step guides, technical deep dives, and practical tutorials to help you manipulate, extract, and secure your PDF documents.
        </p>
      </div>

      {/* Blog Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {BLOG_POSTS.map((post) => (
          <article
            key={post.slug}
            className="flex flex-col bg-white rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:shadow-indigo-500/10 hover:border-indigo-300 hover:-translate-y-1.5 transition-all duration-300 ease-out overflow-hidden group"
          >
            <div className="p-7 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="px-2.5 py-1 rounded-lg bg-indigo-50 text-indigo-700 text-xs font-bold uppercase tracking-wide">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-slate-400">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <h2 className="text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors line-clamp-2 leading-snug mb-3">
                  <Link href={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h2>

                <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed mb-6">
                  {post.description}
                </p>
              </div>

              <div>
                <div className="flex items-center justify-between pt-5 border-t border-slate-100 text-xs text-slate-500">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-slate-900 text-white font-bold text-[10px] flex items-center justify-center">
                      {post.author.avatar}
                    </div>
                    <span className="font-semibold text-slate-700">{post.author.name}</span>
                  </div>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="flex items-center gap-1 font-bold text-indigo-600 group-hover:translate-x-0.5 transition-transform"
                  >
                    <span>Read</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
