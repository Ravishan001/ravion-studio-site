import fs from 'node:fs';
import path from 'node:path';

// Photos in public/img/<folder>/ are picked up automatically at build time.
// A slot only shows when its file exists, so missing photos never leave empty boxes.
const IMAGE_FOLDERS = ['img/hero', 'img/solutions', 'img/industries', 'img/systems'];
function listImages() {
  const found = [];
  for (const dir of IMAGE_FOLDERS) {
    try {
      for (const f of fs.readdirSync(path.join(process.cwd(), 'public', dir))) {
        if (/\.(jpe?g|png|webp|avif)$/i.test(f)) found.push(`/${dir}/${f}`);
      }
    } catch {}
  }
  return found;
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { unoptimized: true },
  env: { SITE_IMAGES: JSON.stringify(listImages()) },
  // The blog is written and served by the SEO Engine. These rewrites show it at
  // ravionstudio.com/blog on any host (Vercel or Cloudflare), with no Worker route needed.
  async rewrites() {
    const blog = 'https://seo-engine.ravionstudio1.workers.dev/b/ravion-studio';
    return [
      { source: '/blog', destination: blog },
      { source: '/blog/:path*', destination: `${blog}/:path*` },
    ];
  },
};

export default nextConfig;

// Lets `next dev` use Cloudflare bindings locally.
import { initOpenNextCloudflareForDev } from '@opennextjs/cloudflare';
initOpenNextCloudflareForDev();
