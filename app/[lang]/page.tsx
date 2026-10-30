import { notFound } from "next/navigation";
import { isLang, langs } from "@/lib/types";
import { services } from "@/data/services";

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
    <main>
      <h1>Language: {lang}</h1>
      <ul>
        {services.map((service) => (
          <li key={service.slug}>{service.name[lang]}</li>
        ))}
      </ul>
    </main>
  );
}
