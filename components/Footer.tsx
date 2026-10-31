import Link from "next/link";
import { serviceGroups, type Lang } from "@/lib/types";
import { dictionary } from "@/data/dictionary";
import { groupNames } from "@/data/services";
import { site } from "@/data/site";
import { whatsappLink } from "@/lib/whatsapp";
import { OpeningHours } from "./OpeningHours";
import styles from "./Footer.module.css";

type FooterProps = {
  lang: Lang;
};

export function Footer({ lang }: FooterProps) {
  const nav = dictionary.nav;
  const aboutLinks = [
    { href: `/${lang}/about/`, label: nav.story[lang] },
    { href: `/${lang}/about/team/`, label: nav.team[lang] },
    { href: `/${lang}/about/clients/`, label: nav.clients[lang] },
    { href: `/${lang}/about/faq/`, label: nav.faq[lang] },
  ];
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.columns}`}>
        <div>
          <p className={styles.brand}>{site.name}</p>
          <p className={styles.tagline}>{dictionary.footer.tagline[lang]}</p>
          <a className={styles.link} href={site.facebook}>
            Facebook
          </a>
        </div>

        <div>
          <p className={styles.title}>{nav.about[lang]}</p>
          <ul className={styles.list}>
            {aboutLinks.map((link) => (
              <li key={link.href}>
                <Link className={styles.link} href={link.href}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className={styles.title}>{nav.services[lang]}</p>
          <ul className={styles.list}>
            {serviceGroups.map((group) => (
              <li key={group}>
                <Link className={styles.link} href={`/${lang}/services/${group}/`}>
                  {groupNames[group][lang]}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className={styles.title}>{nav.contact[lang]}</p>
          <ul className={styles.list}>
            <li>
              <a className={styles.link} href={whatsappLink(lang)}>
                WhatsApp {site.phone}
              </a>
            </li>
            <li>
              <a className={styles.link} href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </li>
          </ul>
          <address className={styles.address}>{site.address}</address>
          <OpeningHours lang={lang} />
        </div>
      </div>

      <div className={`container ${styles.bottom}`}>
        <p>
          © {year} {site.name}. {dictionary.footer.rights[lang]}
        </p>
        <Link className={styles.link} href={`/${lang}/privacy/`}>
          {dictionary.footer.privacy[lang]}
        </Link>
      </div>
    </footer>
  );
}
