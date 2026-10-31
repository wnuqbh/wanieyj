import Link from "next/link";
import type { Lang } from "@/lib/types";
import { dictionary } from "@/data/dictionary";
import { site } from "@/data/site";
import styles from "./Header.module.css";
import { LanguageSwitch } from "./LanguageSwitch";

type HeaderProps = {
  lang: Lang;
};

export function Header({ lang }: HeaderProps) {
  const nav = dictionary.nav;
  const links = [
    { href: `/${lang}/about/`, label: nav.about[lang] },
    { href: `/${lang}/services/`, label: nav.services[lang] },
    { href: `/${lang}/portfolios/`, label: nav.portfolios[lang] },
    { href: `/${lang}/contact/`, label: nav.contact[lang] },
  ];

  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <Link href={`/${lang}/`} className={styles.logo}>
          {site.name}
        </Link>

        <nav className={styles.nav}>
          {links.map((link) => (
            <Link key={link.href} href={link.href} className={styles.link}>
              {link.label}
            </Link>
          ))}
        </nav>
        <LanguageSwitch lang={lang} />
      </div>
    </header>
  );
}
