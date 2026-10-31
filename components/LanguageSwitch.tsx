"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { langs, type Lang } from "@/lib/types";
import { dictionary } from "@/data/dictionary";
import styles from "./LanguageSwitch.module.css";

const labels: Record<Lang, string> = { en: "EN", ms: "BM" };

type LanguageSwitchProps = {
  lang: Lang;
};

export function LanguageSwitch({ lang }: LanguageSwitchProps) {
  const pathname = usePathname();

  return (
    <nav aria-label={dictionary.aria.switchLang[lang]} className={styles.switch}>
      {langs.map((option) => (
        <Link
          key={option}
          href={pathname.replace(`/${lang}`, `/${option}`)}
          hrefLang={option}
          aria-current={option === lang ? "true" : undefined}
          className={styles.link}
        >
          {labels[option]}
        </Link>
      ))}
    </nav>
  );
}
