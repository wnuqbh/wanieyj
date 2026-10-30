import type { Lang } from "@/lib/types";
import { services } from "@/data/services";

export const dynamicParams = false;

export function generateStaticParams() {
  return [{ lang: "en" }, { lang: "ms" }];
}

type LangPageProps = {
  params: Promise<{ lang: Lang }>;
};

export default async function LangHomePage({ params }: LangPageProps) {
  const { lang } = await params;

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
