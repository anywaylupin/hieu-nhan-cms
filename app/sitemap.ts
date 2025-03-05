import type { MetadataRoute } from 'next';

import resume from '@/content/resume';

const sitemap = (): MetadataRoute.Sitemap => [
  {
    url: resume.domain,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 1
  }
];

export default sitemap;
