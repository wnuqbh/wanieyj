import type { Lang } from "@/lib/types";

export const dynamicParams = false;

export function generateStaticParams() {
  return [{ lang: "en" }, { lang: "ms" }];
}

type LangPageProps = {
  params: Promise<{ lang: Lang }>;
};

export default async function LangHomePage({ params }: LangPageProps) {
  const { lang } = await params;

  return <h1>Language: {lang}</h1>;
}
