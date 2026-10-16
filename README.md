# Waniey.J — Landing Page

Bilingual (English / Bahasa Melayu) landing page for **WanieyJ Boutique Tailor**, a made-to-measure tailoring studio in Seksyen 7, Shah Alam, Selangor.

> *Clothes that fit like they were made for you. Because they were.*

## What's on the page

| # | Section | Contents |
|---|---------|----------|
| — | Hero | Full-width studio photo, headline, Book a Fitting button |
| 02 | Our Story | Founder portrait, the studio's story, key facts |
| 03 | What We Make | Tailor-Made, Alterations, Batik, Corporate Uniforms |
| 04 | How It Works | Three-step fitting process and a customer quote |
| 05 | Gallery | Swipeable row of studio photos |
| 06 | Reviews | Google rating and customer reviews (swipeable) |
| 07 | FAQ | Common questions, tap to open |
| 08 | Visit | Address, phone, opening hours, Google Map, Waze link |
| 09 | Book a Fitting | Name field that opens WhatsApp with a booking message |

Also: sticky top menu, full-screen mobile menu, EN/BM switch (remembered per visitor), and layouts for phone, tablet and desktop.

## Tech

Plain **HTML, CSS and JavaScript** in a single file — no framework, no build step, no backend.

- Fonts: Cormorant Garamond and Inter (Google Fonts)
- Map: Google Maps embed
- Booking: WhatsApp `wa.me` link
- Translations: a text map at the bottom of `index.html` (the `MS` object)

## Project structure

```
index.html            the whole website (markup, styles, scripts)
wrangler.jsonc        Cloudflare config (static site, no build)
.assetsignore         files kept off the live site
images/
  brand/              logo files
  hero/               hero photo and founder portrait
  services/           What We Make card photos
  fitting/            How It Works photo
  gallery/            gallery photos
```

## Run locally

Open `index.html` in any browser. No install needed.

## Deploy (Cloudflare Workers, free)

1. Cloudflare dashboard → **Workers & Pages** → **Create** → **Import a repository** and pick this repo.
2. Project name **`wanieyj`** (must match `name` in `wrangler.jsonc`).
3. Build command: **leave empty**.
4. Deploy command: **`npx wrangler deploy`**
5. Non-production branch deploy command: **`npx wrangler versions upload`**
6. **Deploy**. Every push to `main` publishes the site automatically.

`wrangler.jsonc` serves this folder as a static site; `.assetsignore` keeps repo-only files (README, config, backups) off the live site.

Custom domain: project → **Settings** → **Domains & Routes** → **Add** → **Custom domain**.

## Common edits

| To change | Where |
|-----------|-------|
| Text (English) | The section's HTML in `index.html` |
| Text (Bahasa Melayu) | The matching line in the `MS` object near the end of `index.html` — the English key must match the page text exactly |
| A gallery photo | Add it to `images/gallery/` and copy one `<figure class="g-item">` line in the Gallery section |
| Opening hours | The `hours` table in the Visit section |
| WhatsApp number | Search for `60102333217` in `index.html` |
| Colours | The `:root` variables at the top of the `<style>` block |

## Contact

WanieyJ Boutique Tailor · 21-1-A, Jalan Kristal AS 7/AS, Seksyen 7, 40000 Shah Alam, Selangor · 010-233 3217

---

Photos and branding © WanieyJ Boutique Tailor. All rights reserved.
