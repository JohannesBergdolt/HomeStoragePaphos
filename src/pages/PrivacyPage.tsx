import { Layout } from "@/components/Layout";
import { LegalPage } from "@/components/LegalPage";
import { Seo } from "@/components/Seo";
import type { Lang } from "@/content";
import { t } from "@/lib/i18n";

export default function PrivacyPage({ lang }: { lang: Lang }) {
  const text = t(lang);

  return (
    <Layout lang={lang} page="privacy">
      <Seo lang={lang} page="privacy" title={text.meta.privacy.title} description={text.meta.privacy.description} />
      <LegalPage lang={lang} title={text.privacy.title} intro={text.privacy.intro}>
        <div className="space-y-10">
          {text.privacy.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="text-xl font-semibold text-anthracite">{section.heading}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph} className="mt-3 leading-relaxed text-muted-foreground">
                  {paragraph}
                </p>
              ))}
              {section.link && (
                <p className="mt-3">
                  <a href={section.link.href} target="_blank" rel="noopener noreferrer" className="text-petrol underline">
                    {section.link.label}
                  </a>
                </p>
              )}
            </section>
          ))}
        </div>
      </LegalPage>
    </Layout>
  );
}
