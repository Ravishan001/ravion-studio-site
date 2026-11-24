# Known bugs (check these before every push)

1. **Service pages 404 on Cloudflare** (fixed 24 Nov 2026)
   `/services/<slug>` pages are pre-built (SSG). Without `incrementalCache: staticAssetsIncrementalCache`
   in `open-next.config.ts` they return 404 on Cloudflare (they still work in `next dev`, so test with
   `npm run preview`). The Cloudflare deploy command must be `npx opennextjs-cloudflare deploy`
   (it fills the cache); plain `wrangler deploy` skips that and the pages 404 again.
   Check: every URL in `/sitemap.xml` returns 200 in `npm run preview`.

2. **Chat greeting / AI error code** (fixed in 7ec7e71)
   Check: the chat opens with its greeting, and `/api/chat` answers (without a key it returns `fallback: "no-key"`).

3. **Founder portfolio page** (`/ravishan-tennakoon/`)
   Check: `/ravishan-tennakoon` redirects to `/ravishan-tennakoon/` and loads; the footer link on home and service pages works.
