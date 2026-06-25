import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import { UsersThree } from "@/components/icons";

export const metadata: Metadata = {
  title: "Alumni — Jiwamu",
  description:
    "Temukan daftar alumni program sertifikasi attachment Jiwamu. Bergabunglah dengan komunitas yang terus bertumbuh.",
};

type Alumni = {
  nia: string;
  name: string;
  city: string;
  certifications: string[];
};

const MOCK_ALUMNI: Alumni[] = [
  {
    nia: "00001",
    name: "Cin Hapsari Tomoidjojo",
    city: "Bekasi",
    certifications: ["CAF", "CAC", "CABP", "TOT", "Writing Lab"],
  },
  {
    nia: "00002",
    name: "Juan Lee (Yen)",
    city: "Jakarta",
    certifications: ["CAF", "CAC", "CABP", "TOT", "Writing Lab"],
  },
  {
    nia: "00003",
    name: "Muhammad Syibbli Z.",
    city: "Depok",
    certifications: ["CAF", "CAC", "CABP", "TOT", "Writing Lab"],
  },
  {
    nia: "00004",
    name: "Pipit Puspita Sari",
    city: "Tangerang",
    certifications: ["CAF", "CAC", "CABP", "TOT", "Writing Lab"],
  },
  {
    nia: "00005",
    name: "Moch. Jodhy J. Rachman",
    city: "Surakarta",
    certifications: ["CAF", "CAC", "CABP", "TOT", "Writing Lab"],
  },
  {
    nia: "00006",
    name: "Ade Machnun S.",
    city: "Semarang",
    certifications: ["CAF", "CAC", "CABP", "TOT", "Writing Lab"],
  },
  {
    nia: "00007",
    name: "Ida Ayu Andikawati Manuaba",
    city: "Denpasar",
    certifications: ["CAF", "CAC", "CABP", "TOT", "Writing Lab"],
  },
  {
    nia: "00008",
    name: "Adrian Septiadi",
    city: "Tasikmalaya",
    certifications: ["CAF", "CAC", "CABP", "TOT", "Writing Lab"],
  },
  {
    nia: "00009",
    name: "Andi Mahdi Sahdani",
    city: "Makassar",
    certifications: ["CAF", "CAC", "CABP", "TOT", "Writing Lab"],
  },
  {
    nia: "00010",
    name: "Tjoeng Steven",
    city: "Jakarta",
    certifications: ["CAF", "CAC", "CABP", "TOT", "Writing Lab"],
  },
  {
    nia: "00011",
    name: "Ahmad Fauzan",
    city: "Tulungagung",
    certifications: ["CAF", "CAC", "CABP", "TOT", "Writing Lab"],
  },
  {
    nia: "00012",
    name: "Mada Tri Majaya",
    city: "Bangka",
    certifications: ["CAF", "CAC", "CABP", "TOT", "Writing Lab"],
  },
  {
    nia: "00013",
    name: "Ratih Dian Nur Faizah",
    city: "Sidoarjo",
    certifications: ["CAF", "CAC", "Writing Lab"],
  },
  {
    nia: "00014",
    name: "Dini Trisna Kusdiah",
    city: "Malang",
    certifications: ["CAF"],
  },
  {
    nia: "00015",
    name: "Nurul Azzahra",
    city: "Bogor",
    certifications: ["CAF"],
  },
];

export default function AlumniPage() {
  return (
    <>
      <section className="pt-32 pb-12 sm:pt-40 sm:pb-16 bg-surface">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <Reveal>
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-accent-deep">
                Komunitas Alumni
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-serif font-normal leading-[1.1] tracking-tight text-ink text-balance">
                Temukan daftar alumni kami
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-6 text-base sm:text-lg text-muted leading-relaxed text-pretty">
                Bergabunglah dengan ekosistem belajar dan komunitas yang terus
                bertumbuh melalui komunitas alumni, pertemuan nasional, media
                dan majalah, pengembangan profesional, hingga peluang menjadi
                penulis, coach, trainer, atau partner Jiwamu.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-20 bg-surface-alt">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="mb-6 flex items-center gap-3">
              <UsersThree weight="duotone" className="size-6 text-accent" />
              <p className="text-sm text-muted">
                {MOCK_ALUMNI.length} alumni terdaftar
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="rounded-xl border border-hairline-neutral overflow-hidden bg-surface/50">
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-hairline-neutral bg-surface-alt">
                      <th className="px-4 sm:px-6 py-3 text-xs font-medium uppercase tracking-[0.18em] text-soft">
                        NIA
                      </th>
                      <th className="px-4 sm:px-6 py-3 text-xs font-medium uppercase tracking-[0.18em] text-soft">
                        Nama
                      </th>
                      <th className="px-4 sm:px-6 py-3 text-xs font-medium uppercase tracking-[0.18em] text-soft">
                        Domisili
                      </th>
                      <th className="px-4 sm:px-6 py-3 text-xs font-medium uppercase tracking-[0.18em] text-soft">
                        Pelatihan
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {MOCK_ALUMNI.map((alumni, i) => (
                      <tr
                        key={alumni.nia}
                        className={`border-b border-hairline-neutral transition-colors hover:bg-fill-soft ${
                          i % 2 === 0 ? "bg-surface/50" : "bg-surface-alt/50"
                        }`}
                      >
                        <td className="px-4 sm:px-6 py-3 text-sm font-mono text-soft">
                          {alumni.nia}
                        </td>
                        <td className="px-4 sm:px-6 py-3 text-sm font-medium text-ink">
                          {alumni.name}
                        </td>
                        <td className="px-4 sm:px-6 py-3 text-sm text-muted">
                          {alumni.city}
                        </td>
                        <td className="px-4 sm:px-6 py-3">
                          <div className="flex flex-wrap gap-1">
                            {alumni.certifications.map((cert) => (
                              <span
                                key={cert}
                                className="inline-flex items-center rounded-full bg-fill-soft px-2 py-0.5 text-[10px] font-medium text-accent"
                              >
                                {cert}
                              </span>
                            ))}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
