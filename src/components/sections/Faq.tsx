import { ChevronDown } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import type { Lang } from "@/content";
import { t } from "@/lib/i18n";

// Aufklappbare Fragen mit <details>: funktioniert ohne JavaScript,
// ist per Tastatur bedienbar und die Antworten stehen für Google im HTML.
export function Faq({ lang }: { lang: Lang }) {
  const text = t(lang);
  const id = text.anchors.faq;

  return (
    <section id={id} aria-labelledby={`${id}-title`} className="bg-offwhite py-16 sm:py-24">
      <div className="container max-w-3xl">
        <SectionHeading id={`${id}-title`} title={text.faq.title} />

        <div className="divide-y divide-border rounded-lg border-2 border-border bg-white">
          {text.faq.items.map((item) => (
            <details key={item.question} className="group">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 font-semibold text-anthracite [&::-webkit-details-marker]:hidden">
                {item.question}
                <ChevronDown
                  className="size-5 shrink-0 text-petrol transition-transform group-open:rotate-180"
                  aria-hidden="true"
                />
              </summary>
              <p className="px-5 pb-5 leading-relaxed text-muted-foreground">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
