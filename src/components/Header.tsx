import { useState } from "react";
import { Menu, MessageCircle, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/Logo";
import type { Lang, SectionKey } from "@/content";
import { otherLang, paths, phoneHref, t, whatsappHref, type PageKey } from "@/lib/i18n";

interface HeaderProps {
  lang: Lang;
  page?: PageKey;
}

export function Header({ lang, page }: HeaderProps) {
  const text = t(lang);
  const [menuOpen, setMenuOpen] = useState(false);

  // Auf der Startseite reicht "#abschnitt", auf Unterseiten geht es zurück zur Startseite
  const sectionHref = (section: SectionKey) =>
    (page === "home" ? "" : paths.home[lang]) + "#" + text.anchors[section];

  const switchLang = otherLang(lang);
  const switchHref = paths[page ?? "home"][switchLang];

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-offwhite/95 backdrop-blur supports-[backdrop-filter]:bg-offwhite/80">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-anthracite focus:shadow"
      >
        {text.header.skipLink}
      </a>

      <div className="container flex h-16 items-center justify-between gap-2 sm:gap-4 lg:h-20">
        <a href={paths.home[lang]} aria-label={text.header.homeLinkLabel} className="rounded-md">
          <Logo />
        </a>

        <nav aria-label={text.header.mainNavLabel} className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {text.nav.map((item) => (
              <li key={item.section}>
                <a
                  href={sectionHref(item.section)}
                  className="rounded-md px-3 py-2 text-sm font-medium text-anthracite/80 transition-colors hover:bg-petrol-light hover:text-anthracite"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-1 sm:gap-2">
          <a
            href={switchHref}
            hrefLang={switchLang}
            lang={switchLang}
            aria-label={text.header.languageSwitch.ariaLabel}
            className="inline-flex h-11 min-w-11 items-center justify-center rounded-md px-2 text-sm font-semibold text-anthracite hover:bg-petrol-light"
          >
            {text.header.languageSwitch.label}
          </a>

          <Button asChild variant="outline" className="hidden sm:inline-flex">
            <a href={phoneHref()}>
              <Phone aria-hidden="true" />
              {text.header.call}
            </a>
          </Button>
          <Button asChild className="hidden sm:inline-flex">
            <a href={whatsappHref(lang)} target="_blank" rel="noopener noreferrer">
              <MessageCircle aria-hidden="true" />
              {text.header.whatsapp}
            </a>
          </Button>

          {/* Nur auf dem Handy: Anruf-Symbol und Menü */}
          <Button asChild variant="outline" size="icon" className="sm:hidden">
            <a href={phoneHref()} aria-label={text.header.call}>
              <Phone aria-hidden="true" />
            </a>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? text.header.menuClose : text.header.menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </Button>
        </div>
      </div>

      {menuOpen && (
        <nav id="mobile-menu" aria-label={text.header.mainNavLabel} className="border-t border-border bg-offwhite lg:hidden">
          <ul className="container flex flex-col py-2">
            {text.nav.map((item) => (
              <li key={item.section}>
                <a
                  href={sectionHref(item.section)}
                  onClick={() => setMenuOpen(false)}
                  className="block rounded-md px-2 py-3 text-base font-medium text-anthracite hover:bg-petrol-light"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
