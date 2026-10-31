export const langs = ["en", "ms"] as const;
export type Lang = (typeof langs)[number];

export function isLang(value: string): value is Lang {
  return (langs as readonly string[]).includes(value);
}

export type Localized = Record<Lang, string>;

export const serviceGroups = ["corporate-uniform", "women", "mens-suit", "batik"] as const;
export type ServiceGroup = (typeof serviceGroups)[number];

export type Service = {
  slug: string;
  group: ServiceGroup;
  name: Localized;
  promise: Localized;
  intro: Localized;
  included: Localized[];
  photo: string;
};
