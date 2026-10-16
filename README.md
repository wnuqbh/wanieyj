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
images/
  brand/              logo files
  hero/               hero photo and founder portrait
  services/           What We Make card photos
  fitting/            How It Works photo
  gallery/            gallery photos
```

## Run locally

Open `index.html` in any browser. No install needed.

## Deploy (Cloudflare Pages, free)

1. Cloudflare dashboard → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
2. Pick this repository, branch `main`.
3. Framework preset **None**, build command **empty**, output directory **`/`**.
4. **Save and Deploy**. Every push to `main` publishes the site automatically.

Custom domain: project → **Custom domains** → **Set up a custom domain**.

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
