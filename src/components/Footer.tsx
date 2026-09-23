import { Logo } from "@/components/Logo";
import { company, contact, type Lang } from "@/content";
import { emailHref, paths, phoneHref, t } from "@/lib/i18n";

export function Footer({ lang }: { lang: Lang }) {
  const text = t(lang);
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-white pb-24 pt-12 sm:pb-12">
      <div className="container grid gap-8 md:grid-cols-3">
        <div>
          <Logo />
        </div>

        <address className="text-sm not-italic leading-relaxed text-muted-foreground">
          {company.name}
          <br />
          {company.registeredOffice}
          <br />
          <a href={phoneHref()} className="hover:text-anthracite hover:underline">
            {contact.phoneDisplay}
          </a>
          <br />
          <a href={emailHref()} className="hover:text-anthracite hover:underline">
            {contact.email}
          </a>
        </address>

        <nav aria-label={text.footer.legalNavLabel}>
          <ul className="space-y-2 text-sm">
            <li>
              <a href={paths.imprint[lang]} className="text-anthracite hover:underline">
                {text.footer.imprint}
              </a>
            </li>
            <li>
              <a href={paths.privacy[lang]} className="text-anthracite hover:underline">
                {text.footer.privacy}
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <p className="container mt-10 text-xs text-muted-foreground">
        © {year} {company.name}. {text.footer.rights}
      </p>
    </footer>
  );
}
