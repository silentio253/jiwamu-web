"use client";

import { useState, useMemo } from "react";
import { UsersThree, MagnifyingGlass } from "@/components/icons";

type Alumni = {
  nia: string;
  name: string;
  city: string;
  certifications: string[];
};

const ALUMNI_DATA: Alumni[] = [
  { nia: "00001", name: "Cin Hapsari Tomoidjojo", city: "Bekasi", certifications: ["CAF", "CAC", "CABP", "TOT", "Writing Lab"] },
  { nia: "00002", name: "Juan Lee (Yen)", city: "Jakarta", certifications: ["CAF", "CAC", "CABP", "TOT", "Writing Lab"] },
  { nia: "00003", name: "Muhammad Syibbli Z.", city: "Depok", certifications: ["CAF", "CAC", "CABP", "TOT", "Writing Lab"] },
  { nia: "00004", name: "Pipit Puspita Sari", city: "Tangerang", certifications: ["CAF", "CAC", "CABP", "TOT", "Writing Lab"] },
  { nia: "00005", name: "Moch. Jodhy J. Rachman", city: "Surakarta", certifications: ["CAF", "CAC", "CABP", "TOT", "Writing Lab"] },
  { nia: "00006", name: "Ade Machnun S.", city: "Semarang", certifications: ["CAF", "CAC", "CABP", "TOT", "Writing Lab"] },
  { nia: "00007", name: "Ida Ayu Andikawati Manuaba", city: "Denpasar", certifications: ["CAF", "CAC", "CABP", "TOT", "Writing Lab"] },
  { nia: "00008", name: "Adrian Septiadi", city: "Tasikmalaya", certifications: ["CAF", "CAC", "CABP", "TOT", "Writing Lab"] },
  { nia: "00009", name: "Andi Mahdi Sahdani", city: "Makassar", certifications: ["CAF", "CAC", "CABP", "TOT", "Writing Lab"] },
  { nia: "00010", name: "Tjoeng Steven", city: "Jakarta", certifications: ["CAF", "CAC", "CABP", "TOT", "Writing Lab"] },
  { nia: "00011", name: "Ahmad Fauzan", city: "Tulungagung", certifications: ["CAF", "CAC", "CABP", "TOT", "Writing Lab"] },
  { nia: "00012", name: "Mada Tri Majaya", city: "Bangka", certifications: ["CAF", "CAC", "CABP", "TOT", "Writing Lab"] },
  { nia: "00013", name: "Ratih Dian Nur Faizah", city: "Sidoarjo", certifications: ["CAF", "CAC", "Writing Lab"] },
  { nia: "00014", name: "Dini Trisna Kusdiah", city: "Malang", certifications: ["CAF"] },
  { nia: "00015", name: "Nurul Azzahra", city: "Bogor", certifications: ["CAF"] },
  { nia: "00016", name: "M. Zenu Shobiri", city: "Kediri", certifications: ["CAF"] },
  { nia: "00017", name: "Irfa Rafiatuz Zukhrufin", city: "Tulungagung", certifications: ["CAF"] },
  { nia: "00018", name: "Florensius Dian Pratama", city: "Banjarmasin", certifications: ["CAF"] },
];

export default function AlumniPage() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    if (!query.trim()) return ALUMNI_DATA;
    const q = query.toLowerCase();
    return ALUMNI_DATA.filter(
      (a) =>
        a.name.toLowerCase().includes(q) ||
        a.city.toLowerCase().includes(q) ||
        a.nia.includes(q) ||
        a.certifications.some((c) => c.toLowerCase().includes(q)),
    );
  }, [query]);

  return (
    <>
      <section className="pt-28 pb-12 sm:pt-36 sm:pb-16 bg-surface">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="section-eyebrow">
              Komunitas Alumni
            </p>
            <h1 className="mt-6 text-2xl sm:text-4xl lg:text-5xl font-serif font-normal leading-[1.1] tracking-tight text-ink text-balance">
              Temukan daftar alumni kami
            </h1>
            <p className="mt-6 text-base sm:text-lg text-muted leading-relaxed text-pretty">
              Bergabunglah dengan ekosistem belajar dan komunitas yang terus
              bertumbuh melalui komunitas alumni, pertemuan nasional, media
              dan majalah, pengembangan profesional, hingga peluang menjadi
              penulis, coach, trainer, atau partner Jiwamu.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-20 bg-surface-alt">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-3">
              <UsersThree weight="duotone" className="size-6 text-accent" />
              <p className="text-sm text-muted">
                {filtered.length} dari {ALUMNI_DATA.length} alumni
              </p>
            </div>
            <div className="relative max-w-xs">
              <MagnifyingGlass
                weight="regular"
                className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-soft"
              />
              <input
                type="text"
                placeholder="Cari nama, kota, atau sertifikasi..."
                aria-label="Cari alumni"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full rounded-lg border-2 border-hairline-neutral bg-surface pl-10 pr-4 py-2.5 text-sm text-ink placeholder:text-soft focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all"
              />
            </div>
          </div>

          <div className="rounded-xl border-2 border-hairline-neutral overflow-hidden bg-surface/50">
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
                  {filtered.length === 0 ? (
                    <tr>
                      <td
                        colSpan={4}
                        className="px-4 sm:px-6 py-12 text-center text-sm text-soft"
                      >
                        Alumni tidak ditemukan. Coba kata kunci lain.
                      </td>
                    </tr>
                  ) : (
                    filtered.map((alumni, i) => (
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
                                className="inline-flex items-center rounded-full bg-fill-soft px-2 py-0.5 text-xs font-medium text-accent"
                              >
                                {cert}
                              </span>
                            ))}
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
