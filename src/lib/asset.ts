export function asset(path: string): string {
  const base = import.meta.env.BASE_URL || '/';
  // Ensure no leading slash in provided path
  const normalized = path.startsWith('/') ? path.slice(1) : path;
  return new URL(normalized, base).toString();
}
