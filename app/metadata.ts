import type { Metadata } from 'next';

import resume from '@/content/resume';

export const metadata: Metadata = {
  metadataBase: new URL(resume.domain),
  title: {
    default: resume.title,
    template: `%s | ${resume.title}`
  },
  description: resume.description,
  openGraph: {
    title: `${resume.title}`,
    description: resume.description,
    url: resume.domain,
    siteName: `${resume.title}`,
    locale: 'en_US',
    type: 'website'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 }
  },
  twitter: { title: `${resume.title}`, card: 'summary_large_image' },
  verification: {
    google: '',
    yandex: ''
  }
};
