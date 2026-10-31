"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { serviceGroups, type Lang } from "@/lib/types";
import { groupNames, services } from "@/data/services";
import { dictionary } from "@/data/dictionary";
import styles from "./MegaMenu.module.css";

type MegaMenuProps = {
  lang: Lang;
  label: string;
};

export function MegaMenu({ lang, label }: MegaMenuProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  return (
    <div>
      <button
        type="button"
        className={styles.toggle}
        aria-expanded={open}
        aria-controls="mega-menu"
        onClick={() => setOpen(!open)}
      >
        {label}
        <ChevronDown size={16} strokeWidth={1.5} />
      </button>

      {open && (
        <div id="mega-menu" className={styles.panel}>
          <div className={`container ${styles.columns}`}>
            {serviceGroups.map((group) => {
              const items = services.filter((service) => service.group === group);

              return (
                <div key={group}>
                  <Link
                    href={`/${lang}/services/${group}/`}
                    className={styles.heading}
                    onClick={() => setOpen(false)}
                  >
                    {groupNames[group][lang]}
                  </Link>

                  {items.length === 0 ? (
                    <p className={styles.empty}>{dictionary.mega.batikEmpty[lang]}</p>
                  ) : (
                    <ul className={styles.list}>
                      {items.map((service) => (
                        <li key={service.slug}>
                          <Link
                            href={`/${lang}/services/${group}/${service.slug}/`}
                            className={styles.item}
                            onClick={() => setOpen(false)}
                          >
                            {service.name[lang]}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
