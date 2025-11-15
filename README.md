# Ice Cream Demo — Next.js (App Router)

A minimal, production-friendly demo for an ice cream shop: 4 pages (Home / Our Popular / Find a Store / About), content-first via Markdown, flavours in JSON, lightweight UI with Tailwind.

## Tech Stack
- Next.js (App Router) + TypeScript
- Tailwind CSS (optional shadcn/ui later)
- Markdown via `lib/markdown.ts` (gray-matter + remark)
- Data in `data/flavours.json`
- Deployed on Vercel

## Project Structure
```
/app
  /home/page.tsx
  /our-popular/page.tsx
  /find-a-store/page.tsx
  /about/page.tsx
  /page.tsx              # redirects "/" -> "/home"
  /layout.tsx            # global layout + CSS
/content
  /home/hero.md
  /our-popular/intro.md
  /find-a-store/intro.md
  /about/intro.md
/data
  flavours.json
/lib
  markdown.ts
  utils.ts
/components
  navbar.tsx
  footer.tsx
  card.tsx
/public
  /images/...
  /video/promo.mp4
  og-image.png
/scripts
  generate-sitemap.mjs
/styles
  globals.css
```

## Getting Started

### 1) Install
```bash
npm install
# If you haven't scaffolded yet:
# npx create-next-app@latest . --ts --eslint --app --tailwind --use-npm
# npm i gray-matter remark remark-html remark-gfm
```

### 2) Dev
```bash
npm run dev
# visit http://localhost:3000
```

### 3) Build & Start
```bash
npm run build
npm start
```

### 4) Generate Sitemap
Set your canonical base URL, then run the generator:
```bash
# Powershell / Bash
$env:BASE_URL="https://your-domain.com"; node scripts/generate-sitemap.mjs
# or
BASE_URL="https://your-domain.com" node scripts/generate-sitemap.mjs
```
This writes `public/sitemap.xml` and `public/robots.txt`.

Add to `package.json` for convenience:
```json
{
  "scripts": {
    "sitemap": "node scripts/generate-sitemap.mjs"
  }
}
```

## Content Editing
- Marketing text lives under `/content/<page>/*.md` with YAML front-matter.
- Flavours live in `/data/flavours.json` with fields: `slug`, `name`, `price`, `tags`, `description`.
- Images/videos go to `/public/images` and `/public/video` for zero-config linking.

## Deployment (Vercel)
- Push to GitHub, import repository in Vercel.
- Set `BASE_URL` in Project Environment Variables (e.g., `https://your-domain.com`).
- After each deployment, run the sitemap script (or wire it in CI).