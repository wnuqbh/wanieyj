import type { Metadata } from "next";
import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import { isLang, langs } from "@/lib/types";
import "../globals.css";
import { Cormorant_Garamond, Mulish } from "next/font/google";
import { Header } from "@/components/Header";
import { BookingBand } from "@/components/BookingBand";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const displayFont = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  variable: "--font-display",
});

const bodyFont = Mulish({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Waniey.J Boutique Tailor",
  description: "Tailor in Shah Alam",
};

export function generateStaticParams() {
  return langs.map((lang) => ({ lang }));
}

type LangLayoutProps = {
  children: ReactNode;
  params: Promise<{ lang: string }>;
};

export default async function LangLayout({ children, params }: LangLayoutProps) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();

  return (
    <html lang={lang} className={`${displayFont.variable} ${bodyFont.variable}`}>
      <body>
        <Header lang={lang} />
        {children}
        <BookingBand lang={lang} />
        <Footer lang={lang} />
        <WhatsAppButton lang={lang} />
      </body>
    </html>
  );
}
