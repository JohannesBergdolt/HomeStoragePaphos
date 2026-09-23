import { contact, content, type Lang } from "@/content";

// Welche Seite in welcher Sprache unter welcher Adresse liegt.
// Der Sprachumschalter nutzt diese Tabelle, um auf der passenden Unterseite zu bleiben.
// Immer mit "/" am Ende: So liefert der Host die Seiten ohne Umleitung aus.
export const paths = {
  home: { de: "/", en: "/en/" },
  imprint: { de: "/impressum/", en: "/en/legal-notice/" },
  privacy: { de: "/datenschutz/", en: "/en/privacy/" },
} as const;

export type PageKey = keyof typeof paths;

export const otherLang = (lang: Lang): Lang => (lang === "de" ? "en" : "de");

/** Alle Texte einer Sprache. */
export const t = (lang: Lang) => content[lang];

// Links für Telefon, WhatsApp und E-Mail
export const phoneHref = () => `tel:${contact.phoneLink}`;
export const emailHref = () => `mailto:${contact.email}`;
export const whatsappHref = (lang: Lang) =>
  `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(content[lang].whatsappMessage)}`;
