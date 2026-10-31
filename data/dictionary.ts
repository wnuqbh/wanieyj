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
  aria: {
    whatsapp: { en: "Chat with us on WhatsApp", ms: "Sembang dengan kami di WhatsApp" },
    openMenu: { en: "Open menu", ms: "Buka menu" },
    closeMenu: { en: "Close menu", ms: "Tutup menu" },
    switchLang: { en: "Change language", ms: "Tukar bahasa" },
  },
} satisfies Record<string, Record<string, Localized>>;
