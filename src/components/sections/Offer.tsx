import { Car, Container, Package, Percent } from "lucide-react";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { SectionHeading } from "@/components/SectionHeading";
import { boxes, type Lang } from "@/content";
import { t } from "@/lib/i18n";

export function Offer({ lang }: { lang: Lang }) {
  const text = t(lang);
  const offer = text.offer;
  const id = text.anchors.offer;

  return (
    <section id={id} aria-labelledby={`${id}-title`} className="bg-offwhite py-16 sm:py-24">
      <div className="container">
        <SectionHeading id={`${id}-title`} title={offer.title} intro={offer.intro} />

        {/* Boxen im Container */}
        <div className="rounded-lg border border-border bg-white p-6 sm:p-8">
          <div className="flex items-start gap-4">
            <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-md bg-petrol-light text-petrol">
              <Container className="size-5" aria-hidden="true" />
            </span>
            <div>
              <h3 className="text-xl font-semibold text-anthracite">{offer.boxes.title}</h3>
              <p className="mt-1 leading-relaxed text-muted-foreground">{offer.boxes.text}</p>
            </div>
          </div>

          <ul className="mt-8 grid gap-4 md:grid-cols-3">
            {boxes.map((box) => (
              <li key={box.name.en} className="flex flex-col rounded-lg border border-border bg-offwhite p-5">
                <h4 className="font-semibold text-anthracite">{box.name[lang]}</h4>
                <p className="mt-1 text-sm text-muted-foreground">
                  {offer.boxes.sizeLabel}: {box.size}
                </p>
                <p className="mt-4 text-2xl font-semibold text-anthracite">{box.price}</p>
                <p className="text-sm text-muted-foreground">{offer.boxes.perMonth}</p>
              </li>
            ))}
          </ul>

          <p className="mt-4 text-sm text-muted-foreground">{offer.boxes.vatNote}</p>

          {/* Rabatte */}
          <div className="mt-8 rounded-lg bg-petrol-light p-5">
            <h4 className="flex items-center gap-2 font-semibold text-anthracite">
              <Percent className="size-4 text-petrol" aria-hidden="true" />
              {offer.discount.title}
            </h4>
            <ul className="mt-3 grid gap-2 sm:grid-cols-2">
              {offer.discount.items.map((item) => (
                <li key={item.label} className="text-anthracite">
                  <span className="font-semibold">{item.label}:</span> {item.value} {offer.discount.suffix}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {/* Außenstellplätze */}
          <div className="flex flex-col rounded-lg border border-border bg-white p-6 sm:p-8">
            <span className="inline-flex size-11 items-center justify-center rounded-md bg-petrol-light text-petrol">
              <Car className="size-5" aria-hidden="true" />
            </span>
            <h3 className="mt-4 text-xl font-semibold text-anthracite">{offer.parking.title}</h3>
            <p className="mt-2 leading-relaxed text-muted-foreground">{offer.parking.text}</p>
            <p className="mt-4 font-semibold text-petrol">{offer.parking.price}</p>
          </div>

          {/* Verpackungsmaterial */}
          <div className="flex flex-col rounded-lg border border-border bg-white p-6 sm:p-8">
            <span className="inline-flex size-11 items-center justify-center rounded-md bg-petrol-light text-petrol">
              <Package className="size-5" aria-hidden="true" />
            </span>
            <h3 className="mt-4 text-xl font-semibold text-anthracite">{offer.packing.title}</h3>
            <p className="mt-2 leading-relaxed text-muted-foreground">{offer.packing.text}</p>
          </div>
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <ImagePlaceholder
            note={offer.boxes.imagePlaceholder}
            label={text.imagePlaceholderLabel}
            className="aspect-[16/9]"
          />
          <ImagePlaceholder
            note={offer.parking.imagePlaceholder}
            label={text.imagePlaceholderLabel}
            className="aspect-[16/9]"
          />
        </div>
      </div>
    </section>
  );
}
