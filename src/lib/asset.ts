export function asset(path: string): string {
  const base = import.meta.env.BASE_URL || '/';
  // Ensure no leading slash in provided path
  const normalized = path.startsWith('/') ? path.slice(1) : path;
  // BASE_URL is a path (e.g., "/botari/") in Vite. Concatenate safely instead of new URL().
  const b = base.endsWith('/') ? base : base + '/';
  return b + normalized;
}
