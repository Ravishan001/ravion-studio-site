import { SERVICES } from './services/data';

export default function sitemap() {
  const base = 'https://www.ravionstudio.com';
  const now = new Date();
  return [
    { url: `${base}/`, lastModified: now, changeFrequency: 'monthly', priority: 1 },
    { url: `${base}/services`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    ...SERVICES.map((s) => ({ url: `${base}/services/${s.slug}`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 })),
    { url: `${base}/blog`, lastModified: now, changeFrequency: 'daily', priority: 0.8 },
    { url: `${base}/ravishan-tennakoon/`, lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${base}/privacy`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
  ];
}
