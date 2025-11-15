/**
 * Minimal sitemap generator for a single-language Next.js App Router project.
 * Usage:
 *   node scripts/generate-sitemap.mjs
 *
 * Outputs:
 *   - public/sitemap.xml
 *   - public/robots.txt (allow all + sitemap link)
 */
import fs from "node:fs";
import path from "node:path";

const BASE_URL = process.env.BASE_URL || "https://example.com";
const routes = ["/", "/home", "/our-popular", "/find-a-store", "/about"];

const now = new Date().toISOString();

const urlset = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...routes.map((p) => {
    return [
      "  <url>",
      `    <loc>${BASE_URL}${p}</loc>`,
      `    <lastmod>${now}</lastmod>`,
      "    <changefreq>weekly</changefreq>",
      "    <priority>0.7</priority>",
      "  </url>",
    ].join("\n");
  }),
  "</urlset>",
].join("\n");

const publicDir = path.join(process.cwd(), "public");
await fs.promises.mkdir(publicDir, { recursive: true });
await fs.promises.writeFile(path.join(publicDir, "sitemap.xml"), urlset, "utf8");

const robots = `User-agent: *\nAllow: /\n\nSitemap: ${BASE_URL}/sitemap.xml\n`;
await fs.promises.writeFile(path.join(publicDir, "robots.txt"), robots, "utf8");

console.log("✓ Generated public/sitemap.xml and public/robots.txt");