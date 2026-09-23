import { Layout } from "@/components/Layout";
import { LegalPage } from "@/components/LegalPage";
import { Seo } from "@/components/Seo";
import type { Lang } from "@/content";
import { t } from "@/lib/i18n";

export default function ImprintPage({ lang }: { lang: Lang }) {
  const text = t(lang);

  return (
    <Layout lang={lang} page="imprint">
      <Seo lang={lang} page="imprint" title={text.meta.imprint.title} description={text.meta.imprint.description} />
      <LegalPage lang={lang} title={text.imprint.title} intro={text.imprint.intro}>
        <dl className="divide-y divide-border rounded-lg border border-border bg-white">
          {text.imprint.fields.map((field) => (
            <div key={field.label} className="grid gap-1 p-4 sm:grid-cols-3 sm:gap-4">
              <dt className="font-semibold text-anthracite">{field.label}</dt>
              <dd className="break-words text-muted-foreground sm:col-span-2">{field.value}</dd>
            </div>
          ))}
        </dl>
      </LegalPage>
    </Layout>
  );
}
