import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { Reveal, RevealStagger, RevealItem } from "@/components/reveal";
import { MagnifyingGlass } from "@/components/icons";

export const metadata: Metadata = {
  title: "Buku — Penerbit Jiwamu",
  description:
    "Penerbit Jiwamu adalah rumah penerbitan bagi pemengaruh, pemerhati, dan profesional kesehatan mental yang ingin membagikan gagasan psikologis secara populer, hangat, dan bertanggung jawab.",
};

type Book = {
  id: number;
  slug: string;
  title: string;
  author: string;
  coverUrl: string;
  year: string;
  price: string;
};

const MOCK_BOOKS: Book[] = [
  {
    id: 1,
    slug: "attachment-guidebook",
    title: "Attachment Guidebook",
    author: "Fakhrun Siraj, CABP",
    coverUrl: "",
    year: "2024",
    price: "Rp 150.000",
  },
  {
    id: 2,
    slug: "what-the-wound-knows",
    title: "What the Wound Knows",
    author: "Cin Hapsari Tomoidjojo, CABP",
    coverUrl: "",
    year: "2025",
    price: "Rp 120.000",
  },
  {
    id: 3,
    slug: "konseling-nusantara",
    title: "Konseling Nusantara: Warisan Penyembuhan untuk Indonesia Tangguh dan Sehat Mental",
    author: "Tim Peneliti Jiwamu",
    coverUrl: "",
    year: "2024",
    price: "Rp 180.000",
  },
  {
    id: 4,
    slug: "tadabur-jiwa",
    title: "Tadabur Jiwa: Enam Premis dalam Psikoanalisis Spiritual",
    author: "Fakhrun Siraj dkk.",
    coverUrl: "",
    year: "2023",
    price: "Rp 95.000",
  },
  {
    id: 5,
    slug: "jago-konseling-perilaku",
    title: "Jago Konseling Perilaku Sekarang Juga!",
    author: "Tim PUSAKA PANJI",
    coverUrl: "",
    year: "2023",
    price: "Rp 85.000",
  },
  {
    id: 6,
    slug: "jago-konseling-kognitif",
    title: "Jago Konseling Kognitif Sekarang Juga!",
    author: "Tim PUSAKA PANJI",
    coverUrl: "",
    year: "2023",
    price: "Rp 85.000",
  },
];

export default function BukuPage() {
  return (
    <>
      <HeroSection />
      <KatalogSection />
    </>
  );
}

function HeroSection() {
  return (
    <section className="pt-28 pb-12 sm:pt-36 sm:pb-16 bg-surface">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <Reveal>
            <p className="section-eyebrow">
              Penerbit Jiwamu
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-6 text-2xl sm:text-4xl lg:text-5xl font-serif font-normal leading-[1.1] tracking-tight text-ink text-balance">
              Rumah penerbitan bagi pemengaruh, pemerhati, dan profesional kesehatan mental.
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 text-base sm:text-lg text-muted leading-relaxed text-pretty">
              Kami berfokus pada buku-buku populer yang berlandaskan sains,
              pengalaman klinis, dan pengetahuan kejiwaan yang memadai. Di samping
              itu, Jiwamu juga menerbitkan Healing Companion dan karya sastra
              psikologis untuk menemanimu memahami dunia batin dan dinamika
              kehidupan.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function KatalogSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-surface-alt">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <Reveal>
            <h2 className="text-xl sm:text-3xl font-serif font-normal tracking-tight text-ink">
              Katalog
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="relative max-w-xs">
              <MagnifyingGlass
                weight="regular"
                className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-soft"
              />
              <input
                type="text"
                placeholder="Cari buku..."
                aria-label="Cari buku"
                className="w-full rounded-lg border-2 border-hairline-neutral bg-surface pl-10 pr-4 py-2.5 text-sm text-ink placeholder:text-soft focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all"
              />
            </div>
          </Reveal>
        </div>

        <RevealStagger
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6"
          stagger={0.06}
        >
          {MOCK_BOOKS.map((book, i) => (
            <RevealItem key={book.id} index={i}>
              <Link
                href={`/buku/${book.slug}`}
                className="group flex flex-col rounded-xl border-2 border-hairline-neutral bg-surface overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:shadow-accent"
              >
                <div className="relative aspect-[3/4] bg-fill-soft overflow-hidden">
                  {book.coverUrl ? (
                    <Image
                      src={book.coverUrl}
                      alt={book.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full">
                      <span className="font-serif text-4xl italic text-accent/30">
                        {book.title.charAt(0)}
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-4 flex-1 flex flex-col">
                  <h3 className="text-sm font-medium text-ink leading-snug line-clamp-2 group-hover:text-accent transition-colors">
                    {book.title}
                  </h3>
                  <p className="mt-1.5 text-xs text-soft">{book.author}</p>
                  <div className="mt-auto pt-3 flex items-center justify-between">
                    <span className="text-xs text-soft">{book.year}</span>
                    <span className="text-xs font-medium text-accent">
                      {book.price}
                    </span>
                  </div>
                </div>
              </Link>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
