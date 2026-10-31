export const site = {
  name: "Waniey.J Boutique Tailor",
  phone: "010-233 3217",
  whatsapp: "60102333217",
  email: "hello@wanieyj.com",
  address: "21-1-A, Jalan Kristal AS 7/AS, Seksyen 7, 40000 Shah Alam, Selangor",
  facebook: "https://www.facebook.com/Waniey.JBoutiqueTailor",
  googlePlaceId: "ChIJifqiK91TzDERmtGA1kLd5BY",
  since: 2018,
  // [TBC] confirm against the Google Business Profile. null = closed.
  hours: [
    { days: { en: "Mon – Thu", ms: "Isnin – Khamis" }, time: "10:00 – 18:30" },
    { days: { en: "Friday", ms: "Jumaat" }, time: null },
    { days: { en: "Saturday", ms: "Sabtu" }, time: "10:00 – 18:30" },
    { days: { en: "Sunday", ms: "Ahad" }, time: "10:00 – 17:00" },
  ],
} as const;
