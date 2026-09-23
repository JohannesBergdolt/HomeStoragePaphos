import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { renameSync, rmSync } from "fs";
import path from "path";

export default defineConfig({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "./src"),
    },
  },
  // Prerendering: `npm run build` erzeugt fertiges HTML für jede Seite
  ssgOptions: {
    entry: "src/main.tsx",
    dirStyle: "nested",
    // Zeichensatz-Angabe ganz an den Anfang von <head> stellen
    onPageRendered: (_route, html) =>
      html.replace('<meta charset="UTF-8">', "").replace("<head>", '<head><meta charset="UTF-8">'),
    // Fehlerseite von dist/404/index.html nach dist/404.html verschieben.
    // Cloudflare Pages zeigt sie bei unbekannten Adressen (und fällt dann nicht auf die Startseite zurück).
    onFinished: (dir) => {
      renameSync(path.join(dir, "404", "index.html"), path.join(dir, "404.html"));
      rmSync(path.join(dir, "404"), { recursive: true });
    },
  },
});
