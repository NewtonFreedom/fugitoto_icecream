# FUGITOTO ice cream website demo

A four-page website demo built with Next.js, React and TypeScript. The project demonstrates product presentation, shared page components and a client-side store map for a small retail business.

**Status:** local portfolio demo.

## What to review

| Page | Implementation | Skills demonstrated |
| --- | --- | --- |
| Home | [Home page](app/home/page.tsx) | Hero image, benefit sections and a store-finder call to action |
| Our Popular | [Product catalogue](app/our-popular/page.tsx) | Typed product data, image cards, prices and responsive grid classes |
| Find a Store | [Store page](app/find-a-store/page.tsx) and [map component](app/find-a-store/MapClient.tsx) | Typed coordinates, client-side Leaflet loading and map lifecycle cleanup |
| About | [About page](app/about/page.tsx) | Informational content inside the shared page layout |

Start with **Our Popular** to review the product cards. Then check the shared [container](components/Container.tsx), [navigation](components/navbar.tsx), [footer](components/footer.tsx) and [root layout](app/layout.tsx).

The catalogue currently defines its products in `app/our-popular/page.tsx`. Home and About also render their copy directly from their page components. The repository includes Markdown helpers, content files and a JSON flavour file for further development.

## Relevant freelance work

The implementation provides examples for discussing these small project scopes:

- Add or update a Next.js product or service page
- Build reusable product cards with TypeScript
- Adjust page layouts for different screen sizes
- Add a store-location page with a map and directions links

The store names, addresses and business copy are demonstration content.

## Run locally

Clone the repository and install its locked dependencies:

```bash
git clone https://github.com/NewtonFreedom/fugitoto_icecream.git
cd fugitoto_icecream
npm ci
npm run dev
```

Open [localhost:3000/our-popular](http://localhost:3000/our-popular) or [localhost:3000/home](http://localhost:3000/home).

The other routes are `/find-a-store` and `/about`. The root route redirects to `/home`.

For TypeScript validation:

```bash
npx tsc --noEmit --incremental false
```

For a production build and local production server:

```bash
npm run build
npm start
```

The store map requests tiles from OpenStreetMap. Directions links open Google Maps.

## Edit content and assets

| Change | File or directory |
| --- | --- |
| Flavour names, prices, tags and image paths | `app/our-popular/page.tsx` |
| Home page text and hero image | `app/home/page.tsx` |
| Demo store locations | `app/find-a-store/page.tsx` |
| Map behaviour | `app/find-a-store/MapClient.tsx` |
| About page copy | `app/about/page.tsx` |
| Navigation and footer | `components/navbar.tsx`, `components/footer.tsx` |
| App-wide styles | `app/globals.css` |
| Product images | `public/assets/` |
| Logo | `public/Logo.svg` |

The `public/video/promo.mp4` file is available as a media asset. The current pages render still images.

## Generate a sitemap

Set `BASE_URL` to your deployment's canonical URL before generating the sitemap.

PowerShell:

```powershell
$env:BASE_URL = "https://your-domain.com"
npm run sitemap
```

Bash:

```bash
BASE_URL="https://your-domain.com" npm run sitemap
```

The command writes `public/sitemap.xml` and `public/robots.txt`.

## Verification

Checked on November 22, 2026:

- TypeScript check passed with `tsc --noEmit --incremental false`.
- `npm run build` passed using the existing dependency installation.
- Isolated map checks passed for cancellation during import, cleanup on unmount and an empty store list.

## Development status

The root project declares Tailwind CSS 4, while `app/globals.css` currently uses the earlier Tailwind directives and the root PostCSS configuration is absent. Completing the Tailwind integration and checking desktop and mobile rendering are the next steps before capturing portfolio screenshots.

The existing source and media files are retained so the demo can be reviewed alongside its development history.

