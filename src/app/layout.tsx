import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CookieBanner } from '@/components/CookieBanner';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://splitpdfs.in'),
  title: {
    default: 'SplitPDFs – Fast, 100% Private In-Browser PDF Splitter',
    template: '%s | SplitPDFs',
  },
  description: 'Split, extract, and divide PDF pages in seconds directly in your browser. Designed by Mahesh Mailapure, Developed by Suyash Singh. Zero server uploads, no sign-up, no limits.',
  authors: [
    { name: 'Mahesh Mailapure', url: 'https://splitpdfs.in/about' },
    { name: 'Suyash Singh', url: 'https://splitpdfs.in/about' },
  ],
  creator: 'Mahesh Mailapure & Suyash Singh',
  publisher: 'SplitPDFs',
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/icon.svg',
  },
  openGraph: {
    siteName: 'SplitPDFs',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SplitPDFs – Free In-Browser PDF Splitter',
    description: 'Split PDF files in seconds with complete privacy. No server uploads.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MS7WL726');`,
          }}
        />
        {/* Google Tag (gtag.js) & Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=GTM-MS7WL726"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GTM-MS7WL726');
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white text-slate-900 font-sans selection:bg-indigo-500 selection:text-white">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MS7WL726"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
