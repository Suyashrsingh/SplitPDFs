import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
      },
      {
        userAgent: [
          'GPTBot',
          'ChatGPT-User',
          'PerplexityBot',
          'Perplexity-User',
          'ClaudeBot',
          'Claude-User',
          'Google-Extended',
          'Google-Agent',
          'GoogleOther',
          'CCBot',
          'Applebot-Extended',
          'Diffbot',
          'Bytespider',
          'cohere-ai',
          'anthropic-ai',
        ],
        allow: ['/', '/sitemap.xml', '/llms.txt', '/llms-full.txt'],
      },
    ],
    sitemap: 'https://splitpdfs.in/sitemap.xml',
  };
}
