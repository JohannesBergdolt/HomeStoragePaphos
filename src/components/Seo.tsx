import { Head } from "vite-react-ssg";
import { isTodo, site, type Lang } from "@/content";
import { paths, type PageKey } from "@/lib/i18n";

interface SeoProps {
  lang: Lang;
  title: string;
  description: string;
  /** Seite, für die hreflang-Links erzeugt werden (weglassen bei der 404-Seite) */
  page?: PageKey;
}

/** Setzt Sprache, Title, Description, Open-Graph- und hreflang-Tags einer Seite. */
export function Seo({ lang, title, description, page }: SeoProps) {
  // Absolute URLs gibt es erst, wenn die Domain in content.ts eingetragen ist
  const hasDomain = !isTodo(site.url);
  const url = (path: string) => site.url + path;

  return (
    <Head htmlAttributes={{ lang }}>
      <title>{title}</title>
      <meta name="description" content={description} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={site.name} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:locale" content={lang === "de" ? "de_DE" : "en_GB"} />
      <meta property="og:locale:alternate" content={lang === "de" ? "en_GB" : "de_DE"} />
      {hasDomain && !isTodo(site.ogImage) && <meta property="og:image" content={url(site.ogImage)} />}
      <meta name="twitter:card" content="summary_large_image" />

      {hasDomain && page && <link rel="canonical" href={url(paths[page][lang])} />}
      {hasDomain && page && <meta property="og:url" content={url(paths[page][lang])} />}
      {hasDomain && page && <link rel="alternate" hrefLang="de" href={url(paths[page].de)} />}
      {hasDomain && page && <link rel="alternate" hrefLang="en" href={url(paths[page].en)} />}
      {hasDomain && page && <link rel="alternate" hrefLang="x-default" href={url(paths[page].de)} />}
    </Head>
  );
}
