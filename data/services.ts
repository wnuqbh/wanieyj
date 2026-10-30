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
    slug: "custom-corporate-suit",
    group: "corporate-uniform",
    name: { en: "Custom Corporate Suit", ms: "Sut Korporat Tempahan" },
    promise: {
      en: "Matching suits for the whole team.",
      ms: "Sut sedondon untuk seluruh pasukan.",
    },
    intro: {
      en: "Suits for management, front-of-house or events, cut to each person's measurements but matched across the team.",
      ms: "Sut untuk pengurusan, barisan hadapan atau acara, dipotong ikut ukuran setiap orang tetapi sepadan untuk seluruh pasukan.",
    },
    included: [
      { en: "Measured in the studio", ms: "Diukur di studio" },
      {
        en: "Matched fabric across every order",
        ms: "Kain sepadan untuk setiap tempahan",
      },
      { en: "First and final fitting", ms: "Sesi cuba pertama dan akhir" },
      { en: "Quote before we start", ms: "Sebut harga sebelum mula" },
    ],
    photo: "/images/services/custom-corporate-suit.webp",
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
  {
    slug: "custom-pants",
    group: "corporate-uniform",
    name: { en: "Custom Pants", ms: "Seluar Tempahan" },
    promise: {
      en: "Comfortable through a full shift.",
      ms: "Selesa sepanjang syif.",
    },
    intro: {
      en: "Uniform trousers cut for movement and long hours, matched to your shirts and blazers.",
      ms: "Seluar uniform yang dipotong untuk pergerakan dan waktu kerja panjang, dipadankan dengan kemeja dan blazer anda.",
    },
    included: [
      { en: "Measured in the studio", ms: "Diukur di studio" },
      { en: "Cut for movement", ms: "Dipotong untuk pergerakan" },
      { en: "First and final fitting", ms: "Sesi cuba pertama dan akhir" },
      { en: "Quote before we start", ms: "Sebut harga sebelum mula" },
    ],
    photo: "/images/services/custom-pants.webp",
  },
  {
    slug: "custom-dress",
    group: "corporate-uniform",
    name: { en: "Custom Dress", ms: "Dres Tempahan" },
    promise: {
      en: "Polished, practical, made to fit.",
      ms: "Kemas, praktikal, dijahit padan.",
    },
    intro: {
      en: "Corporate dresses for front-desk, hospitality and events teams, modest cuts available.",
      ms: "Dres korporat untuk pasukan kaunter hadapan, hospitaliti dan acara, potongan menutup aurat tersedia.",
    },
    included: [
      { en: "Measured in the studio", ms: "Diukur di studio" },
      { en: "Modest cuts available", ms: "Potongan menutup aurat tersedia" },
      { en: "First and final fitting", ms: "Sesi cuba pertama dan akhir" },
      { en: "Quote before we start", ms: "Sebut harga sebelum mula" },
    ],
    photo: "/images/services/custom-dress.webp",
  },
  {
    slug: "custom-skirt",
    group: "corporate-uniform",
    name: { en: "Custom Skirt", ms: "Skirt Tempahan" },
    promise: {
      en: "The right length, every time.",
      ms: "Panjang yang tepat, setiap kali.",
    },
    intro: {
      en: "Uniform skirts in the length and cut your team needs, matched to the rest of the set.",
      ms: "Skirt uniform dengan panjang dan potongan yang pasukan anda perlukan, dipadankan dengan set lain.",
    },
    included: [
      { en: "Measured in the studio", ms: "Diukur di studio" },
      { en: "Length to your dress code", ms: "Panjang ikut kod pakaian" },
      { en: "First and final fitting", ms: "Sesi cuba pertama dan akhir" },
      { en: "Quote before we start", ms: "Sebut harga sebelum mula" },
    ],
    photo: "/images/services/custom-skirt.webp",
  },
] satisfies Service[];
