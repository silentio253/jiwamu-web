export const SITE = {
  name: "Jiwamu",
  waNumber: "089653881556",
  waDisplay: "0896-5388-1556",
  email: "halo@jiwamu.com",
  address: {
    line: "Perumahan Wisma Indah No. A49",
    city: "Kedungwaru, Kabupaten Tulungagung",
    province: "Jawa Timur",
  },
  social: {
    youtube: "https://youtube.com/@jiwamutalks",
    instagram: "https://instagram.com/@jiwamu.daily",
    tiktok: "https://tiktok.com/@jiwamu.daily",
    threads: "https://threads.net/@jiwamu.daily",
    shopee: "https://shopee.co.id/jiwamu_store",
  },
  bank: {
    name: "Bank Mandiri",
    account: "1410039881313",
    holder: "Yayasan Pusat Psikoanalisis Indonesia",
  },
} as const;

export function waLink(message: string): string {
  const phone = SITE.waNumber.replace(/^0/, "62");
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

export const NAV_ITEMS = [
  { label: "Kelas", href: "/kelas" },
  { label: "Layanan", href: "/layanan" },
  { label: "Buku", href: "/buku" },
  { label: "Majalah", href: "/majalah" },
  {
    label: "Sumber Daya",
    href: "#",
    children: [
      { label: "Artikel", href: "/artikel" },
      { label: "Video", href: "/video" },
      { label: "Unduhan", href: "/unduhan" },
    ],
  },
  {
    label: "Gerakan",
    href: "#",
    children: [
      { label: "Tentang Kami", href: "/tentangkami" },
      { label: "Proyek", href: "/proyek" },
    ],
  },
] as const;

export const FOOTER_KELAS = [
  { label: "Attachment Facilitator (CAF)", href: "/kelas/attachmentfacilitator" },
  { label: "Attachment Coaching (CAC)", href: "/kelas/attachmentcoaching" },
  { label: "Attachment Practitioner (CABP)", href: "/kelas/attachmentpractitioner" },
  { label: "Professional Bridging", href: "/kelas/professionalbridging" },
  { label: "Jiwamu Writing Lab", href: "/kelas/writinglab" },
];

export const FOOTER_SUMBER_DAYA = [
  { label: "Buku", href: "/buku" },
  { label: "Majalah", href: "/majalah" },
  { label: "Artikel", href: "/artikel" },
  { label: "Video", href: "/video" },
  { label: "Unduhan", href: "/unduhan" },
];
