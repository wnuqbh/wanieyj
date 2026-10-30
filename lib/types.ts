export const langs = ["en", "ms"] as const;
export type Lang = (typeof langs)[number];

export function isLang(value: string): value is Lang {
  return (langs as readonly string[]).includes(value);
}

export type Localized = Record<Lang, string>;

export type ServiceGroup = "corporate-uniform" | "women" | "mens-suit" | "batik";

export type Service = {
  slug: string;
  group: ServiceGroup;
  name: Localized;
  promise: Localized;
  intro: Localized;
  included: Localized[];
  photo: string;
};
