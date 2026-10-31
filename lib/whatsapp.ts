import type { Lang } from "@/lib/types";
import { dictionary } from "@/data/dictionary";
import { site } from "@/data/site";

export function whatsappLink(lang: Lang, service?: string) {
  const messages = dictionary.whatsapp;
  const message = service
    ? messages.withService[lang].replace("{service}", service)
    : messages.general[lang];

  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}
