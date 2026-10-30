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
  {
    slug: "custom-shirt",
    group: "corporate-uniform",
    name: { en: "Custom Shirt", ms: "Kemeja Tempahan" },
    promise: {
      en: "The shirt they'll wear every day.",
      ms: "Kemeja yang dipakai setiap hari.",
    },
    intro: {
      en: "Office and uniform shirts in easy-care fabrics, short or long sleeve, with logo, piping and colour details.",
      ms: "Kemeja pejabat dan uniform dalam kain mudah dijaga, lengan pendek atau panjang, dengan perincian logo, paip dan warna.",
    },
    included: [
      { en: "Measured in the studio", ms: "Diukur di studio" },
      { en: "Easy-care fabrics", ms: "Kain mudah dijaga" },
      { en: "First and final fitting", ms: "Sesi cuba pertama dan akhir" },
      { en: "Quote before we start", ms: "Sebut harga sebelum mula" },
    ],
    photo: "/images/services/custom-shirt.webp",
  },
] satisfies Service[];
