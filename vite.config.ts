import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
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
  },
});
