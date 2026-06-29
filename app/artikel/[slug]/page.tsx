import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { ArrowLeft } from "@/components/icons";
import { getArtikels, getArtikelBySlug, formatDate } from "@/lib/content";

export const revalidate = 60;

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const artikel = getArtikelBySlug(slug);
  return {
    title: artikel ? `${artikel.title} — Artikel Jiwamu` : "Artikel — Jiwamu",
    description: artikel?.description ?? "Artikel dari Jiwamu.",
  };
}

export async function generateStaticParams() {
  const artikels = getArtikels();
  return artikels.map((a) => ({ slug: a.slug }));
}

function formatBody(body: string): string {
  if (!body) return "";

  // Clean encoding issues
  let text = body
    .replace(/Ã¢Â?Â?/g, "—")
    .replace(/Ã¢Â?Â"/g, "–")
    .replace(/Ã©/g, "é")
    .replace(/Ã¨/g, "è")
    .replace(/\r\n/g, "\n");

  // Convert markdown-like formatting to HTML
  text = text
    // Bold
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
    // Italic
    .replace(/\*(.*?)\*/g, "<em>$1</em>")
    // Headings
    .replace(/^### (.*$)/gm, "<h3>$1</h3>")
    .replace(/^## (.*$)/gm, "<h2>$1</h2>")
    .replace(/^# (.*$)/gm, "<h1>$1</h1>")
    // Blockquotes
    .replace(/^> (.*$)/gm, "<blockquote><p>$1</p></blockquote>")
    // Unordered lists
    .replace(/^- (.*$)/gm, "<li>$1</li>");

  // Wrap consecutive li elements in ul
  const liRegex = /(<li>[\s\S]*?<\/li>)+/g;
  text = text.replace(liRegex, (match) => `<ul>${match}</ul>`);

  text = text
    // Paragraphs (double newline)
    .replace(/\n\n/g, "</p><p>")
    // Single newlines to <br>
    .replace(/\n/g, "<br>");

  // Wrap in paragraph if not starting with a tag
  if (!text.startsWith("<")) {
    text = `<p>${text}</p>`;
  }

  return text;
}

export default async function ArtikelDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const artikel = getArtikelBySlug(slug);

  if (!artikel) {
    return (
      <section className="min-h-[100dvh] flex items-center justify-center bg-surface pt-16">
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-ink">Artikel tidak ditemukan</h1>
          <p className="mt-3 text-muted">Artikel yang kamu cari belum tersedia.</p>
          <div className="mt-6">
            <Link href="/artikel" className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-deep">
              <ArrowLeft weight="bold" className="size-4" />
              Kembali ke Artikel
            </Link>
          </div>
        </div>
      </section>
    );
  }

  const formattedBody = formatBody(artikel.body);

  return (
    <section className="pt-32 pb-16 sm:pt-40 sm:pb-20 bg-surface">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Link
          href="/artikel"
          className="inline-flex items-center gap-2 text-sm text-soft hover:text-accent transition-colors mb-6"
        >
          <ArrowLeft weight="bold" className="size-4" />
          Kembali ke Artikel
        </Link>

        {artikel.thumbnail && (
          <div className="relative aspect-[16/9] rounded-xl overflow-hidden mb-6">
            <Image
              src={artikel.thumbnail}
              alt={artikel.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </div>
        )}

        <div className="flex items-center gap-3 mb-4">
          {artikel.category && (
            <span className="inline-flex items-center rounded-full bg-accent px-2.5 py-0.5 text-[10px] font-medium text-white">
              {artikel.category}
            </span>
          )}
          <span className="text-sm text-soft">{formatDate(artikel.date)}</span>
        </div>

        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-normal leading-tight tracking-tight text-ink">
          {artikel.title}
        </h1>

        {artikel.description && (
          <p className="mt-4 text-base sm:text-lg text-muted leading-relaxed text-pretty">
            {artikel.description}
          </p>
        )}

        <div className="mt-8 mb-8 border-t border-hairline-neutral" />

        <article
          className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-ink prose-p:text-body prose-p:leading-relaxed prose-a:text-accent prose-strong:text-ink prose-blockquote:border-l-accent prose-blockquote:font-serif prose-blockquote:italic"
          dangerouslySetInnerHTML={{ __html: formattedBody }}
        />
      </div>
    </section>
  );
}
