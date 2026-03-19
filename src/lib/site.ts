/** Public site origin for canonical URLs and Open Graph (set at build time). */
export function getSiteOrigin(): string | undefined {
  const raw = import.meta.env.VITE_SITE_URL?.trim();
  if (!raw) return undefined;
  try {
    const u = new URL(raw.endsWith("/") ? raw.slice(0, -1) : raw);
    if (u.protocol !== "https:" && u.protocol !== "http:") return undefined;
    return u.origin;
  } catch {
    return undefined;
  }
}

/** Absolute URL for a path like `/docs/foo`, or `undefined` if `VITE_SITE_URL` is unset. */
export function absoluteUrl(pathname: string): string | undefined {
  const origin = getSiteOrigin();
  if (!origin) return undefined;
  const path = pathname.startsWith("/") ? pathname : `/${pathname}`;
  return new URL(path, `${origin}/`).href;
}
