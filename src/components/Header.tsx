'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Logo } from './Logo';
import { 
  Menu, 
  X, 
  FileText, 
  Scissors, 
  Layers, 
  HardDrive, 
  BookOpen, 
  ChevronDown 
} from 'lucide-react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [toolsDropdownOpen, setToolsDropdownOpen] = useState(false);

  const tools = [
    {
      name: 'Split PDF (Visual Grid)',
      description: 'Select pages visually with real-time thumbnails',
      href: '/',
      icon: Scissors,
    },
    {
      name: 'Split by File Size (10MB / 25MB)',
      description: 'Auto-cut PDFs to stay under email & portal limits',
      href: '/split-by-size',
      icon: HardDrive,
    },
    {
      name: 'Extract Specific Pages',
      description: 'Extract ranges (e.g., 1-5, 8, 12) into a clean PDF',
      href: '/extract-pages',
      icon: FileText,
    },
    {
      name: 'Split Every N Pages',
      description: 'Divide documents into uniform 2, 5, or 10-page chunks',
      href: '/split-every-n-pages',
      icon: Layers,
    },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">
          {/* Logo */}
          <Link href="/" className="hover:opacity-95 transition-opacity">
            <Logo size="md" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {/* Tools Dropdown */}
            <div className="relative">
              <button
                onClick={() => setToolsDropdownOpen(!toolsDropdownOpen)}
                onBlur={() => setTimeout(() => setToolsDropdownOpen(false), 200)}
                className="flex items-center gap-1.5 px-3.5 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100/80 rounded-xl transition-all duration-200"
              >
                <span>Tools</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${toolsDropdownOpen ? 'rotate-180 text-indigo-600' : 'text-slate-400'}`} />
              </button>

              {toolsDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl shadow-slate-900/10 border border-slate-200/80 p-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider px-3 py-1.5">
                    PDF Splitting Utilities
                  </div>
                  {tools.map((tool) => (
                    <Link
                      key={tool.name}
                      href={tool.href}
                      onClick={() => setToolsDropdownOpen(false)}
                      className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-indigo-50/70 transition-all duration-150 group"
                    >
                      <div className="p-2 rounded-lg bg-indigo-50 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                        <tool.icon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-slate-900 group-hover:text-indigo-600 transition-colors">
                          {tool.name}
                        </div>
                        <div className="text-xs text-slate-500 line-clamp-1">
                          {tool.description}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/split-by-size"
              className="px-3.5 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100/80 rounded-xl transition-all duration-200"
            >
              Split by Size
            </Link>

            <Link
              href="/extract-pages"
              className="px-3.5 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100/80 rounded-xl transition-all duration-200"
            >
              Extract Pages
            </Link>

            <Link
              href="/blog"
              className="flex items-center gap-1.5 px-3.5 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100/80 rounded-xl transition-all duration-200"
            >
              <BookOpen className="w-4 h-4 text-slate-400" />
              <span>Guides</span>
            </Link>

            <Link
              href="/about"
              className="px-3.5 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100/80 rounded-xl transition-all duration-200"
            >
              About
            </Link>
          </nav>

          {/* Right Action */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-4 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-indigo-600 rounded-xl shadow-sm hover:shadow-indigo-500/20 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
            >
              Support & Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-2">
          <div className="text-xs font-bold text-slate-400 uppercase tracking-wider px-2 pt-2">
            Tools
          </div>
          {tools.map((tool) => (
            <Link
              key={tool.name}
              href={tool.href}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-semibold text-slate-700 hover:bg-indigo-50 hover:text-indigo-600"
            >
              <tool.icon className="w-4 h-4 text-indigo-500" />
              <span>{tool.name}</span>
            </Link>
          ))}
          <div className="border-t border-slate-100 pt-2 my-2" />
          <Link
            href="/blog"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-semibold text-slate-700 hover:bg-slate-50"
          >
            <BookOpen className="w-4 h-4 text-slate-400" />
            <span>Guides & Blog</span>
          </Link>
          <Link
            href="/about"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-sm font-semibold text-slate-700 hover:bg-slate-50"
          >
            About Us
          </Link>
          <Link
            href="/privacy"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-sm font-semibold text-slate-700 hover:bg-slate-50"
          >
            Privacy Policy
          </Link>
          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-sm font-semibold text-indigo-600 font-bold hover:bg-indigo-50"
          >
            Contact & Support
          </Link>
        </div>
      )}
    </header>
  );
}
