/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { unoptimized: true },
};

export default nextConfig;

// Lets `next dev` use Cloudflare bindings locally.
import { initOpenNextCloudflareForDev } from '@opennextjs/cloudflare';
initOpenNextCloudflareForDev();
