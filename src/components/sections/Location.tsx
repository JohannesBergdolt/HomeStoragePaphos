import { Clock, MapPin } from "lucide-react";
import { MapConsent } from "@/components/MapConsent";
import { SectionHeading } from "@/components/SectionHeading";
import { location, type Lang } from "@/content";
import { t } from "@/lib/i18n";

export function Location({ lang }: { lang: Lang }) {
  const text = t(lang);
  const loc = text.location;
  const id = text.anchors.location;

  return (
    <section id={id} aria-labelledby={`${id}-title`} className="bg-white py-16 sm:py-24">
      <div className="container">
        <SectionHeading id={`${id}-title`} title={loc.title} />

        <div className="grid gap-8 lg:grid-cols-3">
          <div className="space-y-8">
            <div>
              <h3 className="flex items-center gap-2 font-semibold text-anthracite">
                <MapPin className="size-5 text-petrol" aria-hidden="true" />
                {loc.addressLabel}
              </h3>
              <p className="mt-2 text-muted-foreground">{location.address}</p>
            </div>

            <div>
              <h3 className="flex items-center gap-2 font-semibold text-anthracite">
                <Clock className="size-5 text-petrol" aria-hidden="true" />
                {loc.hoursTitle}
              </h3>
              <dl className="mt-2 space-y-1">
                {loc.hours.map((row) => (
                  <div key={row.days} className="flex justify-between gap-4 text-muted-foreground">
                    <dt>{row.days}</dt>
                    <dd className="font-medium text-anthracite">{row.time}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-3 text-sm text-muted-foreground">{loc.afterHoursNote}</p>
            </div>
          </div>

          <div className="lg:col-span-2">
            <MapConsent lang={lang} />
          </div>
        </div>
      </div>
    </section>
  );
}
