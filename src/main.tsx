import { ViteReactSSG } from "vite-react-ssg";
import { routes } from "@/routes";

// Schriftart lokal eingebunden (keine Verbindung zu Google Fonts)
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "./index.css";

export const createRoot = ViteReactSSG({ routes });
