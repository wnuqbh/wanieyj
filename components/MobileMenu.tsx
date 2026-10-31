"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import type { Lang } from "@/lib/types";
import { dictionary } from "@/data/dictionary";
import styles from "./MobileMenu.module.css";

export type NavLink = {
  href: string;
  label: string;
};

type MobileMenuProps = {
  lang: Lang;
  links: NavLink[];
};

export function MobileMenu({ lang, links }: MobileMenuProps) {
  const [open, setOpen] = useState(false);
  const aria = dictionary.aria;

  return (
    <div className={styles.mobile}>
      <button
        type="button"
        className={styles.toggle}
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? aria.closeMenu[lang] : aria.openMenu[lang]}
        onClick={() => setOpen(!open)}
      >
        {open ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
      </button>

      {open && (
        <nav id="mobile-menu" className={styles.panel}>
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={styles.link}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </div>
  );
}
