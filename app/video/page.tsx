import type { Metadata } from "next";
import { Reveal, RevealStagger, RevealItem } from "@/components/reveal";
import { getVideos, getYouTubeEmbedUrl, formatDate } from "@/lib/content";

export const metadata: Metadata = {
  title: "Video — Sumber Daya Jiwamu",
  description:
    "Tonton video edukatif, reflektif, dan inspiratif seputar kejiwaan dan kehidupan dari Jiwamu.",
};

export const revalidate = 60;

export default function VideoPage() {
  const videos = getVideos();

  return (
    <>
      <section className="pt-28 pb-12 sm:pt-36 sm:pb-16 bg-surface">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <Reveal>
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-accent-deep">
                Sumber Daya
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="mt-6 text-2xl sm:text-4xl lg:text-5xl font-serif font-normal leading-[1.1] tracking-tight text-ink text-balance">
                Video
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-6 text-base sm:text-lg text-muted leading-relaxed text-pretty">
                Tonton video edukatif, reflektif, dan inspiratif seputar
                kejiwaan dan kehidupan.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-20 bg-surface-alt">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          {videos.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-muted">Belum ada video.</p>
              <p className="mt-2 text-sm text-soft">
                Video akan muncul setelah ditambahkan melalui admin CMS.
              </p>
            </div>
          ) : (
            <RevealStagger
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              stagger={0.08}
            >
              {videos.map((video, i) => (
                <RevealItem key={video.slug} index={i}>
                  <div className="group rounded-xl border-2 border-hairline-neutral bg-surface overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:shadow-accent">
                    <div className="relative aspect-video bg-ink overflow-hidden">
                      {video.youtube_url ? (
                        <iframe
                          src={getYouTubeEmbedUrl(video.youtube_url) || ""}
                          title={video.title}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="w-full h-full"
                        />
                      ) : video.thumbnail ? (
                        <img
                          src={video.thumbnail}
                          alt={video.title}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="flex items-center justify-center h-full">
                          <span className="font-serif text-4xl italic text-white/20">
                            {video.title.charAt(0)}
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="p-5">
                      <p className="text-xs text-soft">
                        {formatDate(video.date)}
                      </p>
                      <h3 className="mt-2 text-base font-medium text-ink leading-snug line-clamp-2">
                        {video.title}
                      </h3>
                      {video.description && (
                        <p className="mt-2 text-sm text-muted line-clamp-2">
                          {video.description}
                        </p>
                      )}
                      {video.youtube_url && (
                        <a
                          href={video.youtube_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-accent hover:text-accent-deep"
                        >
                          Tonton di YouTube
                        </a>
                      )}
                    </div>
                  </div>
                </RevealItem>
              ))}
            </RevealStagger>
          )}
        </div>
      </section>
    </>
  );
}
