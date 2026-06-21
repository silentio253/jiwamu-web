export const WP_API_BASE = "https://buku.jiwamu.com/wp-json/wp/v2";

export type WPRenderedField = {
  rendered: string;
};

export type WPMedia = {
  id: number;
  source_url: string;
  alt_text: string;
  media_details?: {
    width: number;
    height: number;
    sizes?: Record<
      string,
      { source_url: string; width: number; height: number }
    >;
  };
};

export type WPPost = {
  id: number;
  slug: string;
  link?: string;
  title: WPRenderedField;
  content: WPRenderedField;
  excerpt: WPRenderedField;
  date: string;
  modified: string;
  featured_media: number;
  _embedded?: {
    "wp:featuredmedia"?: WPMedia[];
    author?: Array<{ name: string; avatar_urls?: Record<string, string> }>;
  };
  meta?: Record<string, string | boolean | string[]>;
};

export type WPCollectionResponse = WPPost[];

async function wpFetch<T>(
  endpoint: string,
  params: Record<string, string | number | boolean> = {},
  revalidate: number = 3600,
): Promise<T> {
  const url = new URL(`${WP_API_BASE}/${endpoint}`);
  Object.entries(params).forEach(([key, value]) => {
    url.searchParams.set(key, String(value));
  });

  const res = await fetch(url.toString(), {
    next: { revalidate },
    headers: { Accept: "application/json" },
  });

  if (!res.ok) {
    throw new Error(
      `WP API error ${res.status} for ${endpoint}: ${res.statusText}`,
    );
  }

  return res.json() as Promise<T>;
}

export async function getBooks(opts?: {
  perPage?: number;
  search?: string;
}): Promise<WPPost[]> {
  return wpFetch<WPPost[]>("buku", {
    per_page: opts?.perPage ?? 20,
    _embed: true,
    ...(opts?.search ? { search: opts.search } : {}),
  });
}

export async function getBookBySlug(slug: string): Promise<WPPost | null> {
  try {
    const results = await wpFetch<WPPost[]>("buku", {
      slug,
      _embed: true,
    });
    return results[0] ?? null;
  } catch {
    return null;
  }
}

export async function getMagazines(opts?: { perPage?: number }): Promise<WPPost[]> {
  return wpFetch<WPPost[]>("majalah", {
    per_page: opts?.perPage ?? 12,
    _embed: true,
  });
}

export async function getPractitioners(): Promise<WPPost[]> {
  return wpFetch<WPPost[]>("praktisi", {
    per_page: 50,
    _embed: true,
  });
}

export async function getVideos(): Promise<WPPost[]> {
  return wpFetch<WPPost[]>("video", {
    per_page: 20,
    _embed: true,
  });
}

export async function getDownloads(): Promise<WPPost[]> {
  return wpFetch<WPPost[]>("unduhan", {
    per_page: 20,
    _embed: true,
  });
}

export async function getProjects(): Promise<WPPost[]> {
  return wpFetch<WPPost[]>("proyek", {
    per_page: 20,
    _embed: true,
  });
}

export function getFeaturedImage(post: WPPost): WPMedia | null {
  return post._embedded?.["wp:featuredmedia"]?.[0] ?? null;
}

export function getFeaturedImageUrl(
  post: WPPost,
  size?: "medium" | "large" | "full",
): string | null {
  const media = getFeaturedImage(post);
  if (!media) return null;
  if (size && size !== "full" && media.media_details?.sizes?.[size]) {
    return media.media_details.sizes[size].source_url;
  }
  return media.source_url;
}
