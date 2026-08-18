# Portfolio Site

One-page portfolio built with Next.js (App Router, JavaScript), Tailwind CSS,
and a Cal.com booking widget in the hero. Deployed on Vercel.

## Stack

- Next.js 16 (App Router)
- Tailwind CSS 3
- `@calcom/embed-react` for the inline booking widget
- `next/image` with `picsum.photos` / `i.pravatar.cc` as placeholder image sources

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Project structure

```
app/
  layout.js       — root layout, fonts, SEO metadata, Open Graph/Twitter tags
  page.js          — assembles the five sections in order
  globals.css      — Tailwind directives + shared "ledger" utility classes
  robots.js        — generates /robots.txt (Next.js metadata route convention)
  sitemap.js       — generates /sitemap.xml (Next.js metadata route convention)
components/
  Hero.jsx         — headline, KPI ticker, Cal.com embed
  About.jsx        — bio section
  Projects.jsx      — case-file style project grid
  Testimonials.jsx  — client quotes
  Contact.jsx       — inquiry form + contact details
```

## Before you launch — TODO checklist

1. **Cal.com** — In `components/Hero.jsx`, replace `"your-username/strategy-call"`
   in the `calLink` prop with your real Cal.com event link (get it from your
   event type's "Embed" tab at app.cal.com).
2. **Domain** — Replace `https://your-domain.vercel.app` in `app/layout.js`,
   `app/robots.js`, and `app/sitemap.js` with your real production URL once
   you have one (needed for correct OG image resolution and sitemap URLs).
3. **OG image / favicon** — Add real files at `public/og-image.jpg` (1200×630)
   and `public/favicon.ico`. `app/layout.js` already references these paths.
4. **Placeholder content** — Swap the lorem ipsum, dummy project data, and
   placeholder images (currently pulled from `picsum.photos`/`i.pravatar.cc`)
   for your real bio, case studies, and photos in `components/About.jsx`,
   `components/Projects.jsx`, and `components/Testimonials.jsx`.
5. **Contact form** — `components/Contact.jsx` currently simulates a
   submission client-side. Wire the `handleSubmit` function to a real
   endpoint — either an `app/api/contact/route.js` API route that sends mail
   via Resend/SendGrid, or a hosted form service like Formspree.
6. **Analytics** (optional) — add your analytics snippet of choice
   (e.g. Vercel Analytics, Plausible) in `app/layout.js`.

## Deploying

Push to a GitHub repo and import it in Vercel — zero config needed, the
`next.config.js` `images.remotePatterns` already allow the placeholder image
hosts, and everything else is standard App Router.
