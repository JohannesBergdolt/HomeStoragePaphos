import type { RouteRecord } from "vite-react-ssg";
import HomePage from "@/pages/HomePage";
import ImprintPage from "@/pages/ImprintPage";
import NotFound from "@/pages/NotFound";
import PrivacyPage from "@/pages/PrivacyPage";

// Alle Seiten der Website. Die Adressen stehen auch in src/lib/i18n.ts (für den Sprachumschalter).
export const routes: RouteRecord[] = [
  // Deutsch
  { path: "/", element: <HomePage lang="de" /> },
  { path: "/impressum", element: <ImprintPage lang="de" /> },
  { path: "/datenschutz", element: <PrivacyPage lang="de" /> },

  // Englisch
  { path: "/en", element: <HomePage lang="en" /> },
  { path: "/en/legal-notice", element: <ImprintPage lang="en" /> },
  { path: "/en/privacy", element: <PrivacyPage lang="en" /> },

  // Unbekannte Adressen
  { path: "*", element: <NotFound /> },
];
