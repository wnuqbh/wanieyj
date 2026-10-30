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
  {
    slug: "womens-suit",
    group: "women",
    name: { en: "Tailor-Made Women's Suit", ms: "Sut Wanita Tempahan" },
    promise: {
      en: "Power dressing, your way.",
      ms: "Bergaya profesional, cara anda.",
    },
    intro: {
      en: "Blazers and suits cut for a woman's frame: clean shoulders, a defined waist and a length you choose. For office, interviews and events.",
      ms: "Blazer dan sut yang dipotong untuk bentuk badan wanita: bahu kemas, pinggang terbentuk dan panjang pilihan anda. Untuk pejabat, temu duga dan majlis.",
    },
    included: [
      { en: "Measured in the studio", ms: "Diukur di studio" },
      { en: "Measured by a female tailor", ms: "Diukur oleh tukang jahit wanita" },
      { en: "First and final fitting", ms: "Sesi cuba pertama dan akhir" },
      { en: "Quote before we start", ms: "Sebut harga sebelum mula" },
    ],
    photo: "/images/services/womens-suit.webp",
  },
  {
    slug: "baju-kurung",
    group: "women",
    name: { en: "Baju Kurung", ms: "Baju Kurung" },
    promise: {
      en: "Classic or modern, made for you.",
      ms: "Klasik atau moden, dijahit untuk anda.",
    },
    intro: {
      en: "Traditional, modern and bridal baju kurung, for Raya, weddings, nikah and everyday, sewn neatly to your measurements.",
      ms: "Baju kurung tradisional, moden dan pengantin, untuk Raya, perkahwinan, nikah dan harian, dijahit kemas ikut ukuran anda.",
    },
    included: [
      { en: "Measured in the studio", ms: "Diukur di studio" },
      { en: "Family sets available", ms: "Set sedondon keluarga tersedia" },
      { en: "First and final fitting", ms: "Sesi cuba pertama dan akhir" },
      { en: "Quote before we start", ms: "Sebut harga sebelum mula" },
    ],
    photo: "/images/services/baju-kurung.webp",
  },
  {
    slug: "kebaya",
    group: "women",
    name: { en: "Kebaya", ms: "Kebaya" },
    promise: {
      en: "Fitted to flatter.",
      ms: "Dijahit untuk menyerlah.",
    },
    intro: {
      en: "Kebaya that follows your shape without pulling, for weddings, events and formal occasions.",
      ms: "Kebaya yang mengikut bentuk badan tanpa menegang, untuk perkahwinan, acara dan majlis rasmi.",
    },
    included: [
      { en: "Measured in the studio", ms: "Diukur di studio" },
      { en: "Lace and fabric guidance", ms: "Panduan renda dan kain" },
      { en: "First and final fitting", ms: "Sesi cuba pertama dan akhir" },
      { en: "Quote before we start", ms: "Sebut harga sebelum mula" },
    ],
    photo: "/images/services/kebaya.webp",
  },
  {
    slug: "tailored-suit",
    group: "mens-suit",
    name: { en: "Tailor-Made Men's Suit", ms: "Sut Lelaki Tempahan" },
    promise: {
      en: "Your suit. Your measurements.",
      ms: "Sut anda. Ukuran anda.",
    },
    intro: {
      en: "Two- or three-piece suits for work, weddings and formal events, cut from your measurements and fitted until the jacket sits clean.",
      ms: "Sut dua atau tiga helai untuk kerja, perkahwinan dan majlis rasmi, dipotong ikut ukuran anda dan dipadankan sehingga jaket terletak kemas.",
    },
    included: [
      { en: "Measured in the studio", ms: "Diukur di studio" },
      { en: "Two- or three-piece", ms: "Dua atau tiga helai" },
      { en: "First and final fitting", ms: "Sesi cuba pertama dan akhir" },
      { en: "Quote before we start", ms: "Sebut harga sebelum mula" },
    ],
    photo: "/images/services/tailored-suit.webp",
  },
  {
    slug: "tailored-blazer",
    group: "mens-suit",
    name: { en: "Tailored Blazer", ms: "Blazer Tempahan" },
    promise: {
      en: "One jacket, a hundred outfits.",
      ms: "Satu jaket, seratus gaya.",
    },
    intro: {
      en: "A blazer that works with jeans or trousers, in the fabric and fit you choose.",
      ms: "Blazer yang sesuai dengan jeans atau seluar slack, dalam kain dan potongan pilihan anda.",
    },
    included: [
      { en: "Measured in the studio", ms: "Diukur di studio" },
      { en: "Lining and button choice", ms: "Pilihan lapik dan butang" },
      { en: "First and final fitting", ms: "Sesi cuba pertama dan akhir" },
      { en: "Quote before we start", ms: "Sebut harga sebelum mula" },
    ],
    photo: "/images/services/tailored-blazer.webp",
  },
  {
    slug: "tailored-vest",
    group: "mens-suit",
    name: { en: "Tailored Vest", ms: "Vest Tempahan" },
    promise: {
      en: "The finishing layer.",
      ms: "Lapisan penyempurna.",
    },
    intro: {
      en: "A waistcoat to complete a three-piece suit or wear on its own at weddings and events.",
      ms: "Vest untuk melengkapkan sut tiga helai atau dipakai sendiri di majlis perkahwinan dan acara.",
    },
    included: [
      { en: "Measured in the studio", ms: "Diukur di studio" },
      { en: "Matched to your suit", ms: "Dipadankan dengan sut anda" },
      { en: "First and final fitting", ms: "Sesi cuba pertama dan akhir" },
      { en: "Quote before we start", ms: "Sebut harga sebelum mula" },
    ],
    photo: "/images/services/tailored-vest.webp",
  },
  {
    slug: "tailored-shirt",
    group: "mens-suit",
    name: { en: "Tailored Shirt", ms: "Kemeja Tempahan" },
    promise: {
      en: "A collar that sits right.",
      ms: "Kolar yang terletak sempurna.",
    },
    intro: {
      en: "Shirts cut to your neck, shoulders and arm length, with the collar, cuff and details you choose.",
      ms: "Kemeja yang dipotong ikut leher, bahu dan panjang lengan anda, dengan kolar, manset dan perincian pilihan anda.",
    },
    included: [
      { en: "Measured in the studio", ms: "Diukur di studio" },
      { en: "Collar and cuff choice", ms: "Pilihan kolar dan manset" },
      { en: "First and final fitting", ms: "Sesi cuba pertama dan akhir" },
      { en: "Quote before we start", ms: "Sebut harga sebelum mula" },
    ],
    photo: "/images/services/tailored-shirt.webp",
  },
  {
    slug: "tailored-pants",
    group: "mens-suit",
    name: { en: "Tailored Pants", ms: "Seluar Tempahan" },
    promise: {
      en: "The right break, the right rise.",
      ms: "Labuh dan potongan yang tepat.",
    },
    intro: {
      en: "Trousers measured for your waist, seat and length, so they sit right whether you're standing or sitting.",
      ms: "Seluar yang diukur untuk pinggang, punggung dan panjang anda, supaya selesa sama ada berdiri atau duduk.",
    },
    included: [
      { en: "Measured in the studio", ms: "Diukur di studio" },
      { en: "Hem length to your shoes", ms: "Labuh ikut kasut anda" },
      { en: "First and final fitting", ms: "Sesi cuba pertama dan akhir" },
      { en: "Quote before we start", ms: "Sebut harga sebelum mula" },
    ],
    photo: "/images/services/tailored-pants.webp",
  },
] satisfies Service[];
