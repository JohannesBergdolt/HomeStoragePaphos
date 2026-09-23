import { CalendarCheck, Lock, ShieldCheck, Sun, Wallet, type LucideIcon } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import type { Lang } from "@/content";
import { t } from "@/lib/i18n";

// Symbol je Vorteil – der Schlüssel steht in content.ts beim jeweiligen Vorteil ("icon")
const icons: Record<string, LucideIcon> = {
  roof: Sun,
  shield: ShieldCheck,
  lock: Lock,
  wallet: Wallet,
  calendar: CalendarCheck,
};

export function Benefits({ lang }: { lang: Lang }) {
  const text = t(lang);
  const id = text.anchors.benefits;

  return (
    <section id={id} aria-labelledby={`${id}-title`} className="bg-white py-16 sm:py-24">
      <div className="container">
        <SectionHeading id={`${id}-title`} title={text.benefits.title} intro={text.benefits.intro} />

        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {text.benefits.items.map((item) => {
            const Icon = icons[item.icon] ?? ShieldCheck;
            return (
              <li key={item.title} className="rounded-lg border-2 border-border bg-offwhite p-6">
                <span className="inline-flex size-11 items-center justify-center rounded-md bg-petrol-light text-petrol">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-lg font-semibold text-anthracite">{item.title}</h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">{item.text}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
