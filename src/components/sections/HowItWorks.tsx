import { SectionHeading } from "@/components/SectionHeading";
import type { Lang } from "@/content";
import { t } from "@/lib/i18n";

export function HowItWorks({ lang }: { lang: Lang }) {
  const text = t(lang);
  const id = text.anchors.howItWorks;

  return (
    <section id={id} aria-labelledby={`${id}-title`} className="bg-white py-16 sm:py-24">
      <div className="container">
        <SectionHeading id={`${id}-title`} title={text.howItWorks.title} />

        <ol className="grid gap-8 md:grid-cols-3">
          {text.howItWorks.steps.map((step, index) => (
            <li key={step.title}>
              <span
                className="inline-flex size-11 items-center justify-center rounded-full bg-petrol text-lg font-semibold text-white"
                aria-hidden="true"
              >
                {index + 1}
              </span>
              <h3 className="mt-4 text-lg font-semibold text-anthracite">{step.title}</h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
