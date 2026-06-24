import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { CTA } from "@/components/cta";
import { waLink } from "@/lib/site";
import { ArrowLeft, Download, BookOpen } from "@/components/icons";
import majalahData from "@/content/majalah.json";

type PageProps = {
  params: Promise<{ slug: string }>;
};

type Majalah = {
  id: number;
  slug: string;
  title: string;
  edition: string;
  date: string;
  coverUrl: string;
  description: string;
  downloadUrl: string;
  isLatest: boolean;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const majalah = (majalahData as Majalah[]).find((m) => m.slug === slug);
  return {
    title: majalah
      ? `${majalah.title} — Majalah Jiwamu`
      : "Majalah — Jiwamu",
    description: majalah?.description ?? "Edisi Majalah Jiwamu.",
  };
}

export default async function MajalahDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const majalah = (majalahData as Majalah[]).find((m) => m.slug === slug);

  if (!majalah) {
    return (
      <section className="min-h-[100dvh] flex items-center justify-center bg-surface pt-16">
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-ink">
            Edisi tidak ditemukan
          </h1>
          <p className="mt-3 text-muted">
            Edisi majalah yang kamu cari belum tersedia.
          </p>
          <div className="mt-6">
            <Link
              href="/majalah"
              className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-deep"
            >
              <ArrowLeft weight="bold" className="size-4" />
              Kembali ke Majalah
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
          href="/majalah"
          className="inline-flex items-center gap-2 text-sm text-soft hover:text-accent transition-colors mb-8"
        >
          <ArrowLeft weight="bold" className="size-4" />
          Kembali ke Majalah
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="lg:col-span-4">
            <div className="relative aspect-[3/4] rounded-xl border border-hairline-neutral bg-fill-soft overflow-hidden max-w-xs mx-auto lg:mx-0">
              {majalah.coverUrl ? (
                <Image
                  src={majalah.coverUrl}
                  alt={majalah.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 80vw, 30vw"
                />
              ) : (
                <div className="flex items-center justify-center h-full">
                  <BookOpen
                    weight="duotone"
                    className="size-16 text-accent/30"
                  />
                </div>
              )}
            </div>
          </div>

          <div className="lg:col-span-8">
            <p className="text-sm text-soft">
              {majalah.edition} · {majalah.date}
            </p>
            <h1 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-serif font-normal leading-tight tracking-tight text-ink">
              {majalah.title}
            </h1>
            <p className="mt-6 text-base text-muted leading-relaxed text-pretty">
              {majalah.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {majalah.downloadUrl && (
                <CTA href={majalah.downloadUrl} variant="ghost" external>
                  <Download weight="bold" className="size-4" />
                  Unduh PDF
                </CTA>
              )}
              <CTA
                href={waLink(
                  `Hai Kak Nuy, saya ingin berlangganan Majalah Jiwamu edisi ${majalah.title}!`,
                )}
                variant="ghost"
                external
              >
                Berlangganan
              </CTA>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
