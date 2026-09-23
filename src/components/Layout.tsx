import type { ReactNode } from "react";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import type { Lang } from "@/content";
import type { PageKey } from "@/lib/i18n";

interface LayoutProps {
  lang: Lang;
  page?: PageKey;
  children: ReactNode;
}

/** Grundgerüst jeder Seite: Kopfzeile, Inhalt, Fußzeile. */
export function Layout({ lang, page, children }: LayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header lang={lang} page={page} />
      <main id="main" tabIndex={-1} className="flex-1 focus:outline-none">
        {children}
      </main>
      <Footer lang={lang} />
      <FloatingWhatsApp lang={lang} />
    </div>
  );
}
