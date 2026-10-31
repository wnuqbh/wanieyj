import { MessageCircle } from "lucide-react";
import type { Lang } from "@/lib/types";
import { dictionary } from "@/data/dictionary";
import { whatsappLink } from "@/lib/whatsapp";
import styles from "./WhatsAppButton.module.css";

type WhatsAppButtonProps = {
  lang: Lang;
};

export function WhatsAppButton({ lang }: WhatsAppButtonProps) {
  return (
    <a
      className={styles.button}
      href={whatsappLink(lang)}
      aria-label={dictionary.aria.whatsapp[lang]}
    >
      <MessageCircle size={28} strokeWidth={1.5} />
    </a>
  );
}
