import { Button } from "@/components/ui/button";
import { Layout } from "@/components/Layout";
import { Seo } from "@/components/Seo";
import type { Lang } from "@/content";
import { paths, t } from "@/lib/i18n";

export default function NotFound() {
  // Englisch, wenn die aufgerufene Adresse mit /en beginnt, sonst Deutsch
  const lang: Lang =
    typeof window !== "undefined" && window.location.pathname.startsWith("/en") ? "en" : "de";
  const text = t(lang);

  return (
    <Layout lang={lang}>
      <Seo lang={lang} title={text.meta.notFound.title} description={text.meta.notFound.description} />
      <div className="container py-24 text-center">
        <h1 className="text-3xl font-semibold text-anthracite">{text.notFound.title}</h1>
        <p className="mt-4 text-muted-foreground">{text.notFound.text}</p>
        <Button asChild className="mt-8">
          <a href={paths.home[lang]}>{text.notFound.backLink}</a>
        </Button>
      </div>
    </Layout>
  );
}
