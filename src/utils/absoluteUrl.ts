/**
 * Builds an absolute URL for static assets and Open Graph images (static export has no /api/og).
 */
export function toAbsoluteUrl(baseURL: string, assetPath: string): string {
  const trimmedBase = baseURL.replace(/\/$/, "");
  if (/^https?:\/\//i.test(assetPath)) {
    return assetPath;
  }
  const path = assetPath.startsWith("/") ? assetPath : `/${assetPath}`;
  return `${trimmedBase}${path}`;
}

/** Picks the best preview image path from MDX frontmatter; `fallback` is usually `home.image`. */
export function ogImagePathFromPostFrontmatter(
  metadata: { image?: string; images?: string[] },
  fallback: string,
): string {
  const explicit = metadata.image?.trim();
  if (explicit) {
    return explicit;
  }
  const first = metadata.images?.[0];
  if (first) {
    return first;
  }
  return fallback;
}
