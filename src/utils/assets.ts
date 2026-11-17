/**
 * Helper to resolve public assets reliably across root (Cloudflare Pages)
 * and subpath (GitHub Pages) environments without broken relative paths on nested routes.
 */
export const getAssetUrl = (path: string): string => {
  const base = import.meta.env.BASE_URL || '/';
  const cleanBase = base.endsWith('/') ? base : `${base}/`;
  const cleanPath = path.startsWith('/')
    ? path.slice(1)
    : path.startsWith('./')
    ? path.slice(2)
    : path;

  return `${cleanBase}${cleanPath}`;
};
