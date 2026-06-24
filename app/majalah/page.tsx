import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { CTA } from "@/components/cta";
import { Reveal, RevealStagger, RevealItem } from "@/components/reveal";
import { waLink } from "@/lib/site";
import { Download, BookOpen } from "@/components/icons";
import majalahData from "@/content/majalah.json";

export const metadata: Metadata = {
  title: "Majalah — Jiwamu",
  description:
    "Majalah Jiwamu adalah terbitan resmi dari Perkumpulan Pamong Jiwa Indonesia (PANJI). Terbit setiap bulan dengan tema berbeda, menghadirkan gagasan populer, reflektif, dan edukatif seputar kejiwaan.",
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

export default function MajalahPage() {
  const latest = majalahData.find((m: Majalah) => m.isLatest);
  const archives = majalahData.filter((m: Majalah) => !m.isLatest);

  return (
    <>
      <HeroSection />
      {latest && <LatestSection latest={latest} />}
      <ArchiveSection archives={archives} />
      <SubscribeSection />
      <KirimTulisanSection />
    </>
  );
}

function HeroSection() {
  return (
    <section className="pt-32 pb-12 sm:pt-40 sm:pb-16 bg-surface">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-accent-deep">
              Majalah Jiwamu
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-serif font-normal leading-[1.1] tracking-tight text-ink text-balance">
              Terbitan resmi Perkumpulan Pamong Jiwa Indonesia (PANJI).
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 text-base sm:text-lg text-muted leading-relaxed text-pretty">
              Majalah Jiwamu terbit secara berkala setiap bulan dengan tema
              berbeda, menghadirkan gagasan populer, reflektif, dan edukatif
              seputar kejiwaan. Kami percaya bahwa pengalaman manusia terlalu
              berharga untuk disimpan sendirian.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <p className="mt-4 text-sm text-soft">
              ISSN: 3063-542X · SK 3063542X/II.7.4/SK.ISSN/09/2024
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function LatestSection({ latest }: { latest: Majalah }) {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-surface-alt">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-accent-deep mb-8">
            Edisi Terbaru
          </p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="lg:col-span-4">
            <Reveal>
              <div className="relative aspect-[3/4] rounded-xl border border-hairline-neutral bg-fill-soft overflow-hidden max-w-xs">
                {latest.coverUrl ? (
                  <Image
                    src={latest.coverUrl}
                    alt={latest.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 80vw, 30vw"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full">
                    <BookOpen weight="duotone" className="size-16 text-accent/30" />
                  </div>
                )}
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-8 flex flex-col justify-center">
            <Reveal delay={0.08}>
              <p className="text-sm text-soft">{latest.edition} · {latest.date}</p>
            </Reveal>
            <Reveal delay={0.12}>
              <h2 className="mt-3 text-2xl sm:text-3xl font-serif font-normal tracking-tight text-ink">
                {latest.title}
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-4 text-base text-muted leading-relaxed text-pretty">
                {latest.description}
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <div className="mt-8 flex flex-wrap gap-3">
                <CTA href={`/majalah/${latest.slug}`} withArrow>
                  Baca
                </CTA>
                {latest.downloadUrl && (
                  <CTA href={latest.downloadUrl} variant="ghost" external>
                    <Download weight="bold" className="size-4" />
                    Unduh PDF
                  </CTA>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function ArchiveSection({ archives }: { archives: Majalah[] }) {
  if (archives.length === 0) return null;

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="text-2xl sm:text-3xl font-serif font-normal tracking-tight text-ink mb-8">
            Riwayat Terbitan
          </h2>
        </Reveal>

        <RevealStagger
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          stagger={0.08}
        >
          {archives.map((item, i) => (
            <RevealItem key={item.id} index={i}>
              <Link
                href={`/majalah/${item.slug}`}
                className="group flex gap-4 rounded-xl border border-hairline-neutral bg-surface p-4 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-accent"
              >
                <div className="relative w-20 h-28 rounded-lg bg-fill-soft overflow-hidden shrink-0">
                  {item.coverUrl ? (
                    <Image
                      src={item.coverUrl}
                      alt={item.title}
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full">
                      <BookOpen weight="duotone" className="size-6 text-accent/30" />
                    </div>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-soft">{item.edition} · {item.date}</p>
                  <h3 className="mt-1 text-sm font-medium text-ink leading-snug line-clamp-2 group-hover:text-accent transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs text-soft">{item.description}</p>
                </div>
              </Link>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}

function SubscribeSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-surface-alt">
      <div className="mx-auto max-w-[700px] px-4 sm:px-6 lg:px-8 text-center">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-accent-deep">
            Berlangganan
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-5 text-2xl sm:text-3xl font-serif font-normal tracking-tight text-ink text-balance">
            Berlangganan Gratis Sekarang
          </h2>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mt-4 text-muted text-pretty">
            Dapatkan edisi terbaru Majalah Jiwamu langsung melalui WhatsApp.
          </p>
        </Reveal>
        <Reveal delay={0.24}>
          <form className="mt-10 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="text"
              name="name"
              placeholder="Nama"
              aria-label="Nama"
              className="flex-1 rounded-lg border border-hairline-neutral bg-surface px-4 sm:px-5 py-2.5 sm:py-3 text-sm text-ink placeholder:text-soft focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all"
            />
            <input
              type="tel"
              name="phone"
              placeholder="No. WhatsApp"
              aria-label="No. WhatsApp"
              className="flex-1 rounded-lg border border-hairline-neutral bg-surface px-4 sm:px-5 py-2.5 sm:py-3 text-sm text-ink placeholder:text-soft focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all"
            />
            <button
              type="submit"
              className="rounded-lg bg-accent px-5 sm:px-6 py-2.5 sm:py-3 text-sm font-medium text-white shadow-accent transition-all hover:bg-accent-deep hover:shadow-accent-lg active:scale-[0.98] whitespace-nowrap"
            >
              Kirim
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function KirimTulisanSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="lg:col-span-7">
            <Reveal>
              <h2 className="text-2xl sm:text-3xl font-serif font-normal tracking-tight text-ink">
                Punya gagasan yang ingin dibagikan?
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="mt-4 text-base text-muted leading-relaxed text-pretty">
                Kami percaya bahwa pengalaman manusia terlalu berharga untuk
                disimpan sendirian. Jika kamu punya ide atau argumen yang segar,
                kami membuka kesempatan untuk menjadi bagian dari percakapan
                tentang jiwa dan kehidupan manusia.
              </p>
            </Reveal>

            <Reveal delay={0.16}>
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { title: "Artikel Utama", desc: "Tulisan populer dan reflektif mengenai berbagai persoalan kejiwaan." },
                  { title: "Artikel Ilmiah", desc: "Tulisan berbasis kajian, penelitian, atau tinjauan konseptual." },
                  { title: "Artikel Opini", desc: "Pandangan personal, refleksi, kritik sosial, maupun gagasan tentang manusia." },
                  { title: "Tumbuh Asuh", desc: "Rubrik khusus pengasuhan, tumbuh kembang, dan relasi orang tua-anak." },
                ].map((rubrik, i) => (
                  <div key={i} className="rounded-xl border border-hairline-neutral bg-surface-alt p-5">
                    <h3 className="text-sm font-semibold text-ink">{rubrik.title}</h3>
                    <p className="mt-2 text-xs text-muted leading-relaxed">{rubrik.desc}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={0.12}>
              <div className="rounded-xl border border-hairline-neutral bg-surface-alt p-6 sm:p-8">
                <h3 className="text-lg font-semibold text-ink">
                  Keuntungan Kontributor
                </h3>
                <ul className="mt-4 space-y-3">
                  {[
                    "Majalah cetak edisi terbit",
                    "Sertifikat penghargaan sebagai kontributor",
                    "Kesempatan memperluas pengaruh dan gagasan",
                    "Peluang bergabung dalam ekosistem penulis dan profesional Jiwamu",
                    "Kesempatan pengembangan tulisan menuju publikasi buku",
                    "Khusus psikolog, peluang memperoleh SKP HIMPSI Ranah 4",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted">
                      <span className="text-accent">•</span>
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-6">
                  <CTA
                    href={waLink("Hai Kak Nuy, saya ingin menjadi kontributor Majalah Jiwamu!")}
                    size="lg"
                    external
                    withArrow
                  >
                    Kirim Tulisan
                  </CTA>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
