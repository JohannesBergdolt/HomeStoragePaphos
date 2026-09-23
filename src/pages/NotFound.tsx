import { Button } from "@/components/ui/button";
import { Layout } from "@/components/Layout";
import { Seo } from "@/components/Seo";
import { paths, t } from "@/lib/i18n";

// Die Fehlerseite wird einmal als 404.html vorgerendert und für jede unbekannte Adresse
// verwendet. Deshalb zeigt sie beide Sprachen gleichzeitig: erst Deutsch, dann Englisch.
export default function NotFound() {
  const de = t("de");
  const en = t("en");

  return (
    <Layout lang="de">
      <Seo lang="de" title={de.meta.notFound.title} description={de.meta.notFound.description} />
      <div className="container py-24 text-center">
        <h1 className="text-3xl font-semibold text-anthracite">{de.notFound.title}</h1>
        <p className="mt-4 text-muted-foreground">{de.notFound.text}</p>
        <Button asChild className="mt-8">
          <a href={paths.home.de}>{de.notFound.backLink}</a>
        </Button>

        <div lang="en" className="mt-16 border-t pt-16">
          <h2 className="text-2xl font-semibold text-anthracite">{en.notFound.title}</h2>
          <p className="mt-4 text-muted-foreground">{en.notFound.text}</p>
          <Button asChild variant="outline" className="mt-8">
            <a href={paths.home.en}>{en.notFound.backLink}</a>
          </Button>
        </div>
      </div>
    </Layout>
  );
}
