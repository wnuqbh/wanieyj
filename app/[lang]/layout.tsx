import type { Metadata } from "next";
import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import { isLang, langs } from "@/lib/types";

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
    <html lang={lang}>
      <body>{children}</body>
    </html>
  );
}
