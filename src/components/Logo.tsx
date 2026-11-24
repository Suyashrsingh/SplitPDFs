import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  theme?: 'light' | 'dark';
}

export function Logo({ className = '', size = 'md', theme = 'light' }: LogoProps) {
  const iconSizes = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-11 h-11',
  };

  const textSizes = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-3xl',
  };

  return (
    <div className={`flex items-center gap-2.5 font-bold tracking-tight select-none ${className}`}>
      <div className={`relative ${iconSizes[size]} flex items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 via-blue-600 to-indigo-700 text-white shadow-md shadow-indigo-500/20 ring-1 ring-white/20 shrink-0`}>
        {/* Stylized PDF Document with clean slice */}
        <svg viewBox="0 0 24 24" fill="none" className="w-5/6 h-5/6 stroke-current stroke-[1.8] stroke-linecap-round stroke-linejoin-round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="3" y1="13" x2="21" y2="13" stroke="currentColor" strokeDasharray="2 2" strokeWidth="1.5" className="text-blue-200" />
          <circle cx="8" cy="13" r="1.5" fill="currentColor" />
          <path d="M16 11l-3 4" strokeWidth="2" stroke="currentColor" />
          <path d="M13 11l3 4" strokeWidth="2" stroke="currentColor" />
        </svg>
      </div>

      <span className={`${textSizes[size]} ${theme === 'dark' ? 'text-white' : 'text-slate-900'} font-black tracking-tight leading-none`}>
        Split<span className={theme === 'dark' ? 'text-indigo-400' : 'text-indigo-600'}>PDFs</span>
      </span>
    </div>
  );
}
