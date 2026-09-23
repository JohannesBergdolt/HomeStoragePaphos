# TODO – offene Platzhalter

Alle Werte werden in `src/content.ts` gepflegt. Erledigte Punkte abhaken.

## Kontakt
- [ ] Telefonnummer (Anzeige + `tel:`-Format)
- [ ] WhatsApp-Nummer (für `wa.me`-Link, internationales Format ohne `+`)
- [ ] E-Mail-Adresse

## Standort
- [ ] Adresse des Geländes
- [x] Google-Maps-Standort eintragen (`location.mapEmbedUrl`)

## Angebot und Preise
- [ ] Boxgrößen (Maße / m² / m³)
- [ ] Monatspreise je Boxgröße (inkl. 19 % MwSt.)
- [ ] Rabatt-Prozentsatz bei 6 Monaten
- [ ] Rabatt-Prozentsatz bei 12 Monaten
- [ ] Aufpreis für Zugang außerhalb der Öffnungszeiten (optional nennen?)
- [ ] Verpackungsmaterial: Sortiment / Preise (optional)
- [ ] FAQ „Was darf ich einlagern?“: Liste nicht erlaubter Gegenstände (DE + EN)
- [ ] Bankverbindung für Überweisung (optional, eher nicht öffentlich)

## Firmendaten (Impressum / Legal Notice)
- [ ] Firmenname (… Ltd)
- [ ] Eingetragener Sitz (Registered Office)
- [ ] Registernummer (HE …)
- [ ] VAT-Nummer
- [ ] Director(s)

## Datenschutz
- [x] Hosting-Anbieter festlegen und in der Datenschutzerklärung eintragen (Cloudflare)
- [ ] Speicherdauer der Server-Logs
- [ ] „Stand“-Datum der Datenschutzerklärung (DE + EN)
- [ ] Adresse des Commissioner for Personal Data Protection vor Launch verifizieren
- [ ] Rechtstexte (Impressum, Datenschutz, DE + EN) vor Launch rechtlich prüfen lassen

## Medien
- [ ] Fotos: Gelände, Container mit Schattendach, Box innen, Außenstellplätze
- [ ] Open-Graph-Bild (1200 × 630)

## Technik / Launch
- [ ] Finale Domain (für Canonical-, hreflang- und OG-URLs)
- [x] Deployment vorbereiten (Cloudflare Pages, 404.html, Pfade mit `/` am Ende, Domain in `site.url`)
- [ ] Cloudflare Pages im Dashboard mit dem GitHub-Repo verbinden und Domain `homestoragepaphos.com` zuordnen
- [ ] `www.homestoragepaphos.com` auf `homestoragepaphos.com` umleiten (Cloudflare Redirect Rule)
- [ ] Open-Graph-Bild in `site.ogImage` eintragen (wird erst mit Domain ausgegeben)
