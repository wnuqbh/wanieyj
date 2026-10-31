import type { Localized } from "@/lib/types";

export const dictionary = {
  nav: {
    home: { en: "Home", ms: "Utama" },
    about: { en: "About Us", ms: "Tentang Kami" },
    story: { en: "Our Story", ms: "Kisah Kami" },
    team: { en: "Our Team", ms: "Pasukan Kami" },
    clients: { en: "Our Clients", ms: "Pelanggan Kami" },
    faq: { en: "FAQ", ms: "Soalan Lazim" },
    services: { en: "Services", ms: "Perkhidmatan" },
    portfolios: { en: "Portfolios", ms: "Portfolio" },
    contact: { en: "Contact", ms: "Hubungi" },
  },
  cta: {
    book: { en: "Book via WhatsApp", ms: "Tempah via WhatsApp" },
    bookShort: { en: "Book", ms: "Tempah" },
    discover: { en: "Discover", ms: "Terokai" },
    discoverAll: { en: "Discover all", ms: "Lihat semua" },
    quote: { en: "Get a quote", ms: "Dapatkan sebut harga" },
    enquiry: { en: "Send an enquiry", ms: "Hantar pertanyaan" },
    directions: { en: "Get directions", ms: "Dapatkan arah" },
  },
  mega: {
    batikEmpty: {
      en: "Coming soon. Ask us on WhatsApp.",
      ms: "Akan datang. Tanya kami di WhatsApp.",
    },
  },
  whatsapp: {
    general: {
      en: "Hi Waniey.J, I'd like to book a fitting. My name is ",
      ms: "Hai Waniey.J, saya ingin buat tempahan. Nama saya ",
    },
    withService: {
      en: "Hi Waniey.J, I'd like to book a fitting for {service}. My name is ",
      ms: "Hai Waniey.J, saya ingin buat tempahan untuk {service}. Nama saya ",
    },
  },
  booking: {
    label: { en: "Book a fitting", ms: "Tempah sesi ukur" },
    heading: {
      en: "Measurements, quotes & appointments.",
      ms: "Ukuran, sebut harga & temu janji.",
    },
    text: {
      en: "Free to ask. Quote before we start. Walk-ins welcome.",
      ms: "Tanya percuma. Sebut harga sebelum mula. Walk-in dialu-alukan.",
    },
    visit: { en: "Visit the studio", ms: "Kunjungi studio" },
  },
  hours: {
    closed: { en: "Closed", ms: "Tutup" },
  },
  footer: {
    tagline: {
      en: "Boutique tailor in Shah Alam since 2018. Measured, cut and fitted by hand.",
      ms: "Butik jahitan di Shah Alam sejak 2018. Diukur, dipotong dan dijahit dengan tangan.",
    },
    rights: { en: "All rights reserved.", ms: "Hak cipta terpelihara." },
    privacy: { en: "Privacy", ms: "Privasi" },
  },
  aria: {
    whatsapp: { en: "Chat with us on WhatsApp", ms: "Sembang dengan kami di WhatsApp" },
    openMenu: { en: "Open menu", ms: "Buka menu" },
    closeMenu: { en: "Close menu", ms: "Tutup menu" },
    switchLang: { en: "Change language", ms: "Tukar bahasa" },
  },
} satisfies Record<string, Record<string, Localized>>;
