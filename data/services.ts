import type { Service } from "@/lib/types";

export const services = [
  {
    slug: "uniform-design",
    group: "corporate-uniform",
    name: { en: "Uniform Design", ms: "Reka Bentuk Uniform" },
    promise: {
      en: "A uniform that says who you are.",
      ms: "Uniform yang menggambarkan siapa anda.",
    },
    intro: {
      en: "Bring your logo and colours and we'll design a uniform set around them. We sketch, sample and refine until it's ready for your whole team.",
      ms: "Bawa logo dan warna anda, dan kami akan reka set uniform berdasarkannya. Kami lakar, buat sampel dan perhalusi sehingga sedia untuk seluruh pasukan.",
    },
    included: [
      { en: "Measured in the studio", ms: "Diukur di studio" },
      { en: "Sketch + sample before production", ms: "Lakaran + sampel sebelum pengeluaran" },
      { en: "First and final fitting", ms: "Sesi cuba pertama dan akhir" },
      { en: "Quote before we start", ms: "Sebut harga sebelum mula" },
    ],
    photo: "/images/services/uniform-design.webp",
  },

  {
    slug: "custom-blazer",
    group: "corporate-uniform",
    name: { en: "Custom Blazer", ms: "Blazer Tempahan" },
    promise: {
      en: "Sharp from the first meeting.",
      ms: "Kemas sejak pertemuan pertama.",
    },
    intro: {
      en: "Corporate blazers for men and women, structured or soft, in your company colours.",
      ms: "Blazer korporat untuk lelaki dan wanita, berstruktur atau lembut, dalam warna syarikat anda.",
    },
    included: [
      { en: "Measured in the studio", ms: "Diukur di studio" },
      { en: "Fabric guidance", ms: "Panduan pemilihan kain" },
      { en: "First and final fitting", ms: "Sesi cuba pertama dan akhir" },
      { en: "Quote before we start", ms: "Sebut harga sebelum mula" },
    ],
    photo: "/images/services/custom-blazer.webp",
  },
] satisfies Service[];
