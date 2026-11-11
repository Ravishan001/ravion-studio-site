import { defineCloudflareConfig } from '@opennextjs/cloudflare';

// No incremental cache needed: the site has no ISR pages.
export default defineCloudflareConfig({});
