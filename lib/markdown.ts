import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import gfm from "remark-gfm";

export type MarkdownResult = {
  meta: Record<string, any>;
  html: string;
};

/**
 * Load a Markdown file from /content and return front‑matter (meta) + HTML.
 * Example: loadMarkdown("home/hero.md")
 */
export async function loadMarkdown(relPath: string): Promise<MarkdownResult> {
  const filePath = path.join(process.cwd(), "content", relPath);
  const raw = await fs.promises.readFile(filePath, "utf8");
  const { data, content } = matter(raw);
  const processed = await remark().use(gfm).use(html).process(content);
  return {
    meta: data as Record<string, any>,
    html: String(processed),
  };
}

/**
 * Convenience: safely join a relative path under /content.
 */
export function contentPath(...segments: string[]) {
  return path.join(process.cwd(), "content", ...segments);
}