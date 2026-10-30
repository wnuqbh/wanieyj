import { notFound } from "next/navigation";
import { isLang, langs } from "@/lib/types";
import { services } from "@/data/services";
import styles from "./page.module.css";
import { site } from "@/data/site";
import { dictionary } from "@/data/dictionary";

export const dynamicParams = false;

export function generateStaticParams() {
  return langs.map((lang) => ({ lang }));
}

type LangPageProps = {
  params: Promise<{ lang: string }>;
};

export default async function LangHomePage({ params }: LangPageProps) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();

  return (
    <main className="container">
      <h1>Language: {lang}</h1>
      <ul>
        {services.map((service) => (
          <li key={service.slug}>{service.name[lang]}</li>
        ))}
      </ul>
      <a className={styles.button} href={`https://wa.me/${site.whatsapp}`}>
        {dictionary.cta.book[lang]}
      </a>
    </main>
  );
}
