export default function robots() {
  return {
    rules: [{ userAgent: '*', allow: '/', disallow: '/api/' }],
    // the blog (served by the SEO Engine at /blog) has its own sitemap with every article
    sitemap: ['https://www.ravionstudio.com/sitemap.xml', 'https://www.ravionstudio.com/blog/sitemap.xml'],
  };
}
