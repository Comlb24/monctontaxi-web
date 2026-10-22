# monctontaxi.com

SEO-first static site for Taxi Moncton, built with Astro and Tailwind and deployed on Vercel.

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # static HTML in dist/
npm run check:nap  # verify NAP is consistent in every built page
```

## Where things live
- `src/data/business.ts`: **the only place** name, address, phone, email and hours are defined.
- `src/data/services.ts`: service pages (`/moncton-airport-taxi`, `/long-distance-taxi`, …).
- `src/data/areas.ts`: city pages (`/taxi-dieppe`, `/taxi-riverview`, …).
- `src/data/home.ts`: home-page routes, FAQs and **Google reviews**. The reviews section stays hidden until this has real entries.
- `src/content/legal/`: legal text carried over from the old site.
- `src/pages/[slug].astro`: renders every service and area page from the data files.

## Before launch
- [ ] Confirm the exact Google Business Profile name matches `business.name`.
- [ ] Confirm the `geo` coordinates in `business.ts` against the GBP pin.
- [ ] Add real Google reviews and the GBP URL to `src/data/home.ts` (add the GBP URL to `business.socials` too).
- [ ] Add real fleet photos and a logo.
- [ ] In Vercel, add `www.monctontaxi.com` and `monctontaxi.com`. The apex domain 301-redirects to www.
- [ ] After DNS switches: submit `https://www.monctontaxi.com/sitemap-index.xml` in Google Search Console, then update the GBP website and phone fields to match.
