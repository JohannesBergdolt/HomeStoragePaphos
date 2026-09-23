# CLAUDE.md – Home Storage Paphos

Verbindliche Projektanweisung für alle Sessions. Bei Widersprüchen zwischen Code und dieser Datei gilt diese Datei – oder sie wird bewusst angepasst.

## Projekt

Zweisprachige Landing Page (DE/EN) für **Home Storage Paphos**, ein Self-Storage-Angebot in Paphos, Zypern.

## Stack (Lovable-kompatibel – wichtig!)

- Vite, React, TypeScript, Tailwind CSS, shadcn/ui
- Übliche Lovable-Struktur: `src/components`, `src/pages`, `src/lib`; Start mit `npm run dev`
- Das Repo wird später auch von Nicht-Technikern über Lovable bearbeitet. Deshalb:
  - einfacher, gut lesbarer Code, keine exotischen Tools oder Abstraktionen
  - kleine, klar benannte Komponenten
- Prerendering/SSG über **vite-react-ssg**, damit fertiges HTML für Google entsteht (`npm run build` erzeugt statische Seiten für alle Routen).
- Deployment wird später festgelegt – aktuell nicht einrichten.

## Konventionen

- **Alle Inhalte** (Texte DE/EN, Preise, Boxgrößen, Kontaktdaten, Öffnungszeiten, Firmendaten, Meta-Tags) liegen in **`src/content.ts`**. Komponenten enthalten **keinen hartkodierten Text**.
- Fehlende Angaben als Platzhalter der Form `"TODO: <Beschreibung>"` in `src/content.ts` **und** als Eintrag in `TODO.md`.
- Wird ein TODO erledigt, auch in `TODO.md` abhaken.
- Commits in sinnvollen, kleinen Schritten.

## Sprachen und Routen

| Seite | Deutsch (Hauptsprache) | Englisch |
|---|---|---|
| Landing Page | `/` | `/en` |
| Impressum / Legal Notice | `/impressum` | `/en/legal-notice` |
| Datenschutz / Privacy | `/datenschutz` | `/en/privacy` |

- Sprachumschalter in der Kopfzeile; er wechselt auf die **entsprechende** Unterseite der anderen Sprache.
- Korrektes `lang`-Attribut am `<html>` je Seite, `hreflang`-Tags (`de`, `en`, `x-default` → DE) auf jeder Seite.

## Zielgruppe und Ton

- Ca. 90 % deutsche Auswanderer auf Zypern, die zeitweise in Deutschland sind; nebenbei kleine Firmen.
- Kernbotschaft: **Vertrauen und Sicherheit** – deine Sachen sind gut aufgehoben, während du weg bist.
- Ton: seriös, klar, freundlich. **Du-Form** im Deutschen.

## Angebot (Fakten)

- Mietbare Boxen in verschiedenen Größen in Schiffscontainern (Möbel, Hausrat, Motorräder, Roller).
- Außenstellplätze auf dem Gelände für Autos, Boote, Anhänger: **Preis auf Anfrage**.
- Boxgrößen und Preise: noch offen → Preisbereich mit Platzhalter-Karten (TODO), Hinweis „inkl. 19 % MwSt.“
- Rabatt bei 6 und 12 Monaten Mietdauer (Prozentsätze: TODO).
- Mindestmietdauer 1 Monat, **keine Kaution**.
- Zahlung: bar vor Ort oder Überweisung.
- Zusatzleistung: Verpackungsmaterial.
- Hinterlüftetes Schattendach über den Containern, kein Hitzestau (EN: „ventilated shade roof, no heat build-up“).
- Sicherheit: umzäuntes Gelände, Videoüberwachung, eigenes Schloss des Mieters.
- Öffnungszeiten Mo–Fr 08:00–17:00; Zugang außerhalb nur nach Absprache gegen Aufpreis.

## Seitenaufbau Landing Page

1. **Header:** Logo, Navigation, Sprachumschalter, Buttons Anrufen und WhatsApp
2. **Hero:** Kernbotschaft für Auswanderer, CTAs Anrufen und WhatsApp
3. **Vorteile:** Schattendach, Sicherheit, eigenes Schloss, keine Kaution, ab 1 Monat
4. **Angebot:** Boxen im Container (Preis-Platzhalter), Außenstellplätze (auf Anfrage), Verpackungsmaterial
5. **So funktioniert's:** 3 Schritte (Anfragen, Box wählen, einlagern)
6. **FAQ:** Zugang, Zahlung, Mindestmietdauer, Rabatte, was darf eingelagert werden
7. **Standort:** Karte (Klick-Lösung, s. u.) + Öffnungszeiten
8. **Kontakt:** Telefon, WhatsApp, E-Mail
9. **Footer:** Firmendaten kurz, Links zu Rechtsseiten

- Mobile first. Auf Mobilgeräten ein fixierter WhatsApp-Button.

## Kontakt

- **Kein Kontaktformular.**
- Telefon (`tel:`-Link), WhatsApp (`https://wa.me/<nummer>`-Link), E-Mail (`mailto:`) – Werte zentral in `src/content.ts` (aktuell TODO).

## Design

- Seriös und schlicht, viel Weißraum.
- Farben (als CSS-Variablen in `src/index.css` und im Tailwind-Theme):
  - Anthrazit `#2B2D31` – Primär (Text, Flächen)
  - Petrol `#1F7A7A` – Akzent, Buttons
  - Helles Petrol `#E6EEEE` – Hintergrundflächen
  - Off-White `#F7F7F5` – Seitenhintergrund
- **Logo** als SVG-Komponente (`src/components/Logo.tsx`): stilisierter Container (Anthrazit, vertikale Rippen) mit schwebendem Schattendach darüber (Petrol-Linie mit Abstand zum Container), daneben Wortmarke „Home Storage“ und kleiner darunter „PAPHOS“.
- **Favicon** aus dem Symbol (`public/favicon.svg`).
- Fotos folgen später: neutrale Platzhalter mit TODO-Vermerk.

## Datenschutz und Recht (Zypern, EU)

- **Kein** Tracking, **keine** Analytics, **keine** Cookies → kein Cookie-Banner.
- Schriftarten **lokal** einbinden (npm-Paket `@fontsource`), nicht über das Google Fonts CDN.
- **Google Maps nur per Klick:** Platzhalter mit Hinweis auf Datenübertragung an Google, Button „Karte laden“, Link zur Google-Datenschutzerklärung. Vor dem Klick keine Verbindung zu Google.
- Keine sonstigen externen Ressourcen (CDNs, Embeds) ohne Rücksprache.
- Unternehmen: zypriotische Ltd mit VAT-Registrierung.
- **Impressum / Legal Notice** nach zypriotischem Recht (E-Commerce-Gesetz 156(I)/2004, Companies Law): Firmenname, eingetragener Sitz, Registernummer (HE …), VAT-Nummer, Director(s), Telefon, E-Mail – alles TODO.
- **Datenschutzerklärung** nach DSGVO und zypriotischem Gesetz 125(I)/2018: Verantwortlicher, Hosting (TODO, wird später festgelegt), Server-Logs, Google Maps (Einwilligung), Kontakt per E-Mail/Telefon/WhatsApp, Betroffenenrechte, Beschwerderecht beim Commissioner for Personal Data Protection (Zypern).
- Rechtstexte sichtbar als **Entwurf** kennzeichnen (TODO: vor Launch rechtlich prüfen lassen).

## Qualität

- Barrierefrei: ausreichende Kontraste (WCAG AA), Alt-Texte, vollständige Tastaturbedienung, sichtbarer Fokus, semantisches HTML, Skip-Link.
- Responsive, schnell (keine unnötigen Abhängigkeiten, keine großen Bilder).
- Meta-Title, Description und Open-Graph-Tags je Sprache und Seite (aus `src/content.ts`).
