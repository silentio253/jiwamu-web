import fs from "fs";
import path from "path";

export type Artikel = {
  title: string;
  slug: string;
  date: string;
  category: string;
  description: string;
  body: string;
  thumbnail?: string;
};

export type Video = {
  title: string;
  slug: string;
  date: string;
  description: string;
  youtube_url: string;
  thumbnail?: string;
};

export type Buku = {
  title: string;
  slug: string;
  author: string;
  price: string;
  year: string;
  description: string;
  coverUrl?: string;
};

export type Majalah = {
  title: string;
  slug: string;
  edition: string;
  date: string;
  description: string;
  coverUrl?: string;
  downloadUrl?: string;
  isLatest: boolean;
};

export type Proyek = {
  title: string;
  code: string;
  status: "active" | "completed";
  description: string;
  raised: number;
  target: number;
};

const CONTENT_DIR = path.join(process.cwd(), "content");

function readJsonFiles<T>(folder: string): T[] {
  const dir = path.join(CONTENT_DIR, folder);
  if (!fs.existsSync(dir)) return [];

  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".json"));
  return files.map((f) => {
    const content = fs.readFileSync(path.join(dir, f), "utf-8");
    // Clean up encoding issues
    const cleaned = content
      .replace(/ÃÂ¢ÃÂÃÂ/g, "—")
      .replace(/ÃÂ¢ÃÂÃÂ/g, "–")
      .replace(/ÃÂ©/g, "é")
      .replace(/ÃÂ¨/g, "è");
    return JSON.parse(cleaned) as T;
  });
}

export function getArtikels(): Artikel[] {
  return readJsonFiles<Artikel>("artikel").sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

export function getArtikelBySlug(slug: string): Artikel | null {
  const artikels = getArtikels();
  return artikels.find((a) => a.slug === slug) || null;
}

export function getVideos(): Video[] {
  return readJsonFiles<Video>("video").sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

export function getVideoBySlug(slug: string): Video | null {
  const videos = getVideos();
  return videos.find((v) => v.slug === slug) || null;
}

export function getBukus(): Buku[] {
  return readJsonFiles<Buku>("buku");
}

export function getBukuBySlug(slug: string): Buku | null {
  const bukus = getBukus();
  return bukus.find((b) => b.slug === slug) || null;
}

export function getMajalahs(): Majalah[] {
  return readJsonFiles<Majalah>("majalah").sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

export function getProyeks(): Proyek[] {
  return readJsonFiles<Proyek>("proyek");
}

export function formatDate(dateStr: string): string {
  if (!dateStr) return "";

  // Try parsing various formats
  let date: Date;

  // ISO format: 2026-01-01
  if (/^\d{4}-\d{2}-\d{2}/.test(dateStr)) {
    date = new Date(dateStr);
  }
  // DD-MM-YYYY: 27-06-2026
  else if (/^\d{2}-\d{2}-\d{4}$/.test(dateStr)) {
    const [day, month, year] = dateStr.split("-");
    date = new Date(`${year}-${month}-${day}`);
  }
  // DD/MM/YYYY: 27/06/2026
  else if (/^\d{2}\/\d{2}\/\d{4}$/.test(dateStr)) {
    const [day, month, year] = dateStr.split("/");
    date = new Date(`${year}-${month}-${day}`);
  }
  // Fallback
  else {
    date = new Date(dateStr);
  }

  if (isNaN(date.getTime())) return dateStr;

  return date.toLocaleDateString("id-ID", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function extractYouTubeId(url: string): string | null {
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([a-zA-Z0-9_-]{11})/,
    /youtube\.com\/shorts\/([a-zA-Z0-9_-]{11})/,
  ];
  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match) return match[1];
  }
  return null;
}

export function getYouTubeThumbnail(url: string): string | null {
  const id = extractYouTubeId(url);
  if (!id) return null;
  return `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
}

export function getYouTubeEmbedUrl(url: string): string | null {
  const id = extractYouTubeId(url);
  if (!id) return null;
  return `https://www.youtube.com/embed/${id}`;
}
