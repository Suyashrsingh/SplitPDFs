import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { BLOG_POSTS } from '@/lib/blog-data';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Clock, Calendar, ArrowLeft, Share2, ShieldCheck, Scissors } from 'lucide-react';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: 'Article Not Found',
    };
  }

  return {
    title: `${post.title} | SplitPDFs Guide`,
    description: post.description,
    keywords: post.keywords,
    alternates: {
      canonical: `https://splitpdfs.in/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.publishDate,
      authors: [post.author.name],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    'headline': post.title,
    'description': post.description,
    'datePublished': post.publishDate,
    'author': {
      '@type': 'Person',
      'name': post.author.name,
      'jobTitle': post.author.role,
    },
    'publisher': {
      '@type': 'Organization',
      'name': 'SplitPDFs',
      'logo': {
        '@type': 'ImageObject',
        'url': 'https://splitpdfs.in/icon.svg',
      },
    },
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': `https://splitpdfs.in/blog/${post.slug}`,
    },
  };

  return (
    <div className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Breadcrumbs for SEO */}
      <Breadcrumbs
        items={[
          { label: 'Guides & Blog', href: '/blog' },
          { label: post.title }
        ]}
      />

      {/* Back button */}
      <div className="mb-6">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-500 hover:text-indigo-600 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Guides</span>
        </Link>
      </div>

      {/* Article Header */}
      <header className="mb-10">
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="px-3 py-1 rounded-lg bg-indigo-50 text-indigo-700 text-xs font-bold uppercase tracking-wide">
            {post.category}
          </span>
          <span className="text-slate-300">•</span>
          <div className="flex items-center gap-1.5 text-xs text-slate-500">
            <Clock className="w-3.5 h-3.5" />
            <span>{post.readTime}</span>
          </div>
          <span className="text-slate-300">•</span>
          <span className="text-xs text-slate-500">{post.publishDate}</span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-tight mb-6">
          {post.title}
        </h1>

        <p className="text-lg text-slate-600 leading-relaxed mb-6 font-medium">
          {post.description}
        </p>

        {/* Author Bio Bar */}
        <div className="flex items-center gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200">
          <div className="w-10 h-10 rounded-full bg-indigo-600 text-white font-bold text-xs flex items-center justify-center">
            {post.author.avatar}
          </div>
          <div>
            <div className="text-sm font-bold text-slate-900">{post.author.name}</div>
            <div className="text-xs text-slate-500">{post.author.role} • Verified Expert</div>
          </div>
        </div>
      </header>

      {/* Article Body */}
      <article className="prose prose-slate max-w-none prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-6 prose-p:leading-relaxed prose-li:leading-relaxed prose-a:text-indigo-600 prose-a:no-underline hover:prose-a:underline">
        <div
          dangerouslySetInnerHTML={{
            __html: post.content
              .replace(/\n## (.*?)\n/g, '<h2 class="text-2xl font-bold text-slate-900 mt-8 mb-4">$1</h2>')
              .replace(/\n### (.*?)\n/g, '<h3 class="text-xl font-bold text-slate-900 mt-6 mb-3">$1</h3>')
              .replace(/\n\* (.*?)\n/g, '<li class="text-slate-700 ml-4 mb-2">$1</li>')
              .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
              .replace(/`([^`]+)`/g, '<code class="bg-slate-100 text-indigo-700 px-1 py-0.5 rounded font-mono text-xs">$1</code>')
              .replace(/\n\n/g, '<p class="text-slate-600 leading-relaxed mb-4"></p>'),
          }}
        />
      </article>

      {/* In-Article Tool CTA Box */}
      <div className="mt-14 p-8 rounded-3xl bg-gradient-to-br from-indigo-50 to-blue-50 border border-indigo-100 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 text-indigo-600 font-bold text-xs uppercase tracking-wider mb-2">
            <Scissors className="w-4 h-4" />
            <span>Try it Now for Free</span>
          </div>
          <h3 className="text-xl font-extrabold text-slate-900 mb-1">
            Need to Split or Extract Pages Right Now?
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 max-w-md">
            Use SplitPDFs in your browser. 100% private, no file uploads, instant execution, and zero fees.
          </p>
        </div>
        <Link
          href="/"
          className="px-6 py-3 rounded-xl font-bold text-sm text-white bg-indigo-600 hover:bg-indigo-700 shadow-md shadow-indigo-600/25 transition-all whitespace-nowrap"
        >
          Open Free Splitter
        </Link>
      </div>
    </div>
  );
}
