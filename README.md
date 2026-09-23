# Home Storage Paphos

Zweisprachige Landing Page (DE/EN) für Home Storage Paphos.

- **Texte, Preise, Kontaktdaten ändern:** nur in `src/content.ts`
- **Offene Punkte:** `TODO.md`
- **Projektregeln:** `CLAUDE.md`

```sh
npm install
npm run dev     # Entwicklung: http://localhost:8080
npm run build   # statische Seiten in dist/
```

## Veröffentlichen

Die Seite läuft auf **Cloudflare Pages** und ist mit diesem GitHub-Repo verbunden:
jede Änderung auf `main` ist nach ein bis zwei Minuten live unter https://homestoragepaphos.com.
Änderungen auf anderen Branches bekommen eine eigene Vorschau-Adresse (siehe Cloudflare-Dashboard).
