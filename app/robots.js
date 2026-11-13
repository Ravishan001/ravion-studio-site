export default function robots() {
  return {
    rules: [{ userAgent: '*', allow: '/', disallow: '/api/' }],
    sitemap: 'https://www.ravionstudio.com/sitemap.xml',
  };
}
