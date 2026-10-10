/** Reads a public env var (available in client and server bundles). */
export function publicEnv(key: string, fallback = ""): string {
  const value = process.env[key]?.trim();
  return value && value.length > 0 ? value : fallback;
}

/** Reads a server-only env var (never prefix with NEXT_PUBLIC_). */
export function serverEnv(key: string): string | undefined {
  const value = process.env[key]?.trim();
  return value && value.length > 0 ? value : undefined;
}
