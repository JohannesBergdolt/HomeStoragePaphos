import { Layout } from "@/components/Layout";
import { Seo } from "@/components/Seo";
import { Benefits } from "@/components/sections/Benefits";
import { Contact } from "@/components/sections/Contact";
import { Faq } from "@/components/sections/Faq";
import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Location } from "@/components/sections/Location";
import { Offer } from "@/components/sections/Offer";
import type { Lang } from "@/content";
import { t } from "@/lib/i18n";

export default function HomePage({ lang }: { lang: Lang }) {
  const meta = t(lang).meta.home;

  return (
    <Layout lang={lang} page="home">
      <Seo lang={lang} page="home" title={meta.title} description={meta.description} />
      <Hero lang={lang} />
      <Benefits lang={lang} />
      <Offer lang={lang} />
      <HowItWorks lang={lang} />
      <Faq lang={lang} />
      <Location lang={lang} />
      <Contact lang={lang} />
    </Layout>
  );
}
