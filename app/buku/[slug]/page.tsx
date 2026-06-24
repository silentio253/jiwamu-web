import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { CTA } from "@/components/cta";
import { waLink } from "@/lib/site";
import { ArrowLeft } from "@/components/icons";

type PageProps = {
  params: Promise<{ slug: string }>;
};

const MOCK_BOOKS: Record<
  string,
  {
    title: string;
    author: string;
    coverUrl: string;
    year: string;
    price: string;
    pages: string;
    size: string;
    weight: string;
    publisher: string;
    description: string;
    tableOfContents: string[];
  }
> = {
  "attachment-guidebook": {
    title: "Attachment Guidebook",
    author: "Fakhrun Siraj, CABP",
    coverUrl: "",
    year: "2024",
    price: "Rp 150.000",
    pages: "280 halaman",
    size: "15 × 23 cm",
    weight: "350 gram",
    publisher: "Penerbit Jiwamu",
    description:
      "Buku panduan lengkap untuk memahami teori kelekatan dan penerapannya dalam kehidupan sehari-hari. Ditulis berdasarkan pengalaman klinis lebih dari 10 tahun, buku ini membantu pembaca memahami pola relasi, mengenali luka kelekatan, dan membangun hubungan yang lebih aman.",
    tableOfContents: [
      "Bagian 1: Dasar-Dasar Kelekatan",
      "Bagian 2: Pola Kelekatan dalam Kehidupan",
      "Bagian 3: Luka Kelekatan dan Pemulihan",
      "Bagian 4: Membangun Hubungan yang Aman",
      "Bagian 5: Aplikasi dalam Pengasuhan",
    ],
  },
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const book = MOCK_BOOKS[slug];
  return {
    title: book ? `${book.title} — Penerbit Jiwamu` : "Buku — Penerbit Jiwamu",
    description: book?.description ?? "Detail buku Penerbit Jiwamu.",
  };
}

export default async function BukuDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const book = MOCK_BOOKS[slug];

  if (!book) {
    return (
      <section className="min-h-[100dvh] flex items-center justify-center bg-surface pt-16">
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-ink">Buku tidak ditemukan</h1>
          <p className="mt-3 text-muted">Buku yang kamu cari belum tersedia.</p>
          <div className="mt-6">
            <Link
              href="/buku"
              className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-deep"
            >
              <ArrowLeft weight="bold" className="size-4" />
              Kembali ke Katalog
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="pt-32 pb-16 sm:pt-40 sm:pb-20 bg-surface">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <Link
          href="/buku"
          className="inline-flex items-center gap-2 text-sm text-soft hover:text-accent transition-colors mb-8"
        >
          <ArrowLeft weight="bold" className="size-4" />
          Kembali ke Katalog
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="lg:col-span-5">
            <div className="relative aspect-[3/4] rounded-xl border border-hairline-neutral bg-fill-soft overflow-hidden max-w-sm mx-auto lg:mx-0">
              {book.coverUrl ? (
                <Image
                  src={book.coverUrl}
                  alt={book.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 80vw, 40vw"
                />
              ) : (
                <div className="flex items-center justify-center h-full">
                  <span className="font-serif text-6xl italic text-accent/30">
                    {book.title.charAt(0)}
                  </span>
                </div>
              )}
            </div>
          </div>

          <div className="lg:col-span-7">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-normal leading-tight tracking-tight text-ink">
              {book.title}
            </h1>
            <p className="mt-3 text-base text-muted">{book.author}</p>

            <div className="mt-6 grid grid-cols-2 gap-px bg-hairline-neutral rounded-xl overflow-hidden">
              <div className="bg-surface-alt p-4">
                <p className="text-xs text-soft uppercase tracking-[0.18em]">Tahun</p>
                <p className="mt-1 text-sm font-medium text-ink">{book.year}</p>
              </div>
              <div className="bg-surface-alt p-4">
                <p className="text-xs text-soft uppercase tracking-[0.18em]">Halaman</p>
                <p className="mt-1 text-sm font-medium text-ink">{book.pages}</p>
              </div>
              <div className="bg-surface-alt p-4">
                <p className="text-xs text-soft uppercase tracking-[0.18em]">Ukuran</p>
                <p className="mt-1 text-sm font-medium text-ink">{book.size}</p>
              </div>
              <div className="bg-surface-alt p-4">
                <p className="text-xs text-soft uppercase tracking-[0.18em]">Berat</p>
                <p className="mt-1 text-sm font-medium text-ink">{book.weight}</p>
              </div>
              <div className="bg-surface-alt p-4">
                <p className="text-xs text-soft uppercase tracking-[0.18em]">Penerbit</p>
                <p className="mt-1 text-sm font-medium text-ink">{book.publisher}</p>
              </div>
              <div className="bg-surface-alt p-4">
                <p className="text-xs text-soft uppercase tracking-[0.18em]">Harga</p>
                <p className="mt-1 text-lg font-semibold text-accent">{book.price}</p>
              </div>
            </div>

            <div className="mt-8">
              <h2 className="text-lg font-semibold text-ink">Deskripsi</h2>
              <p className="mt-3 text-base text-muted leading-relaxed text-pretty">
                {book.description}
              </p>
            </div>

            {book.tableOfContents.length > 0 && (
              <div className="mt-8">
                <h2 className="text-lg font-semibold text-ink">Daftar Isi</h2>
                <ul className="mt-3 space-y-2">
                  {book.tableOfContents.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted">
                      <span className="text-accent font-medium">{i + 1}.</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="mt-10">
              <CTA
                href={waLink(
                  `Hai Kak Nuy, saya mau beli buku ${book.title}!`,
                )}
                size="lg"
                external
                withArrow
                variant="wa"
              >
                Pesan Sekarang
              </CTA>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
