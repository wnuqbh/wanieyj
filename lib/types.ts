export type Lang = "en" | "ms";

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
