import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { Reveal, RevealStagger, RevealItem } from "@/components/reveal";
import { getArtikels } from "@/lib/content";

export const metadata: Metadata = {
  title: "Artikel — Sumber Daya Jiwamu",
  description:
    "Baca artikel populer, reflektif, dan edukatif seputar kejiwaan, relasi, dan pengembangan diri dari Jiwamu.",
};

export const revalidate = 60; // ISR: rebuild every 60 seconds

export default function ArtikelPage() {
  const artikels = getArtikels();

  return (
    <>
      <section className="pt-32 pb-12 sm:pt-40 sm:pb-16 bg-surface">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <Reveal>
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-accent-deep">
                Sumber Daya
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="mt-6 text-2xl sm:text-4xl lg:text-5xl font-serif font-normal leading-[1.1] tracking-tight text-ink text-balance">
                Artikel
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-6 text-base sm:text-lg text-muted leading-relaxed text-pretty">
                Baca artikel populer, reflektif, dan edukatif seputar
                kejiwaan, relasi, dan pengembangan diri.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-20 bg-surface-alt">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          {artikels.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-muted">Belum ada artikel.</p>
              <p className="mt-2 text-sm text-soft">
                Artikel akan muncul setelah ditambahkan melalui admin CMS.
              </p>
            </div>
          ) : (
            <RevealStagger
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              stagger={0.08}
            >
              {artikels.map((artikel, i) => (
                <RevealItem key={artikel.slug} index={i}>
                  <Link
                    href={`/artikel/${artikel.slug}`}
                    className="group flex flex-col rounded-xl border border-hairline-neutral bg-surface overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:shadow-accent"
                  >
                    <div className="relative aspect-[16/9] bg-fill-soft overflow-hidden">
                      {artikel.thumbnail ? (
                        <Image
                          src={artikel.thumbnail}
                          alt={artikel.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                      ) : (
                        <div className="flex items-center justify-center h-full">
                          <span className="font-serif text-4xl italic text-accent/20">
                            {artikel.title.charAt(0)}
                          </span>
                        </div>
                      )}
                      {artikel.category && (
                        <span className="absolute top-3 left-3 inline-flex items-center rounded-full bg-accent px-2.5 py-0.5 text-[10px] font-medium text-white">
                          {artikel.category}
                        </span>
                      )}
                    </div>
                    <div className="p-5 flex-1 flex flex-col">
                      <p className="text-xs text-soft">
                        {new Date(artikel.date).toLocaleDateString("id-ID", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </p>
                      <h3 className="mt-2 text-base font-medium text-ink leading-snug line-clamp-2 group-hover:text-accent transition-colors">
                        {artikel.title}
                      </h3>
                      <p className="mt-2 text-sm text-muted line-clamp-3">
                        {artikel.description}
                      </p>
                    </div>
                  </Link>
                </RevealItem>
              ))}
            </RevealStagger>
          )}
        </div>
      </section>
    </>
  );
}
