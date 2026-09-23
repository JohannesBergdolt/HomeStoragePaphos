import { Check, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import type { Lang } from "@/content";
import { phoneHref, t, whatsappHref } from "@/lib/i18n";

export function Hero({ lang }: { lang: Lang }) {
  const text = t(lang);
  const hero = text.hero;

  return (
    <section aria-labelledby="hero-title" className="bg-offwhite">
      <div className="container grid items-center gap-10 py-14 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:py-24">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-petrol">{hero.eyebrow}</p>
          <h1
            id="hero-title"
            className="mt-3 text-4xl font-semibold leading-tight tracking-tight text-anthracite sm:text-5xl"
          >
            {hero.title}
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">{hero.text}</p>

          <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
            {hero.highlights.map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm font-medium text-anthracite">
                <Check className="size-4 text-petrol" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <a href={phoneHref()}>
                <Phone aria-hidden="true" />
                {hero.ctaCall}
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href={whatsappHref(lang)} target="_blank" rel="noopener noreferrer">
                <MessageCircle aria-hidden="true" />
                {hero.ctaWhatsapp}
              </a>
            </Button>
          </div>
        </div>

        <ImagePlaceholder
          note={hero.imagePlaceholder}
          label={text.imagePlaceholderLabel}
          className="aspect-[4/3] w-full"
        />
      </div>
    </section>
  );
}
