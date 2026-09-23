import { useState } from "react";
import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { externalLinks, location, type Lang } from "@/content";
import { paths, t } from "@/lib/i18n";

/**
 * Google Maps wird erst nach Klick auf „Karte laden“ eingebunden.
 * Vorher besteht keine Verbindung zu Google (Datenschutz).
 * Die Einwilligung wird bewusst nicht gespeichert.
 */
export function MapConsent({ lang }: { lang: Lang }) {
  const text = t(lang).location.map;
  const [loaded, setLoaded] = useState(false);

  if (loaded) {
    return (
      <iframe
        src={location.mapEmbedUrl}
        title={text.iframeTitle}
        className="aspect-[4/3] w-full rounded-lg border-2 border-border sm:aspect-[16/9]"
        loading="lazy"
      />
    );
  }

  return (
    <div className="flex min-h-80 w-full flex-col items-center justify-center gap-4 rounded-lg border-2 border-border bg-petrol-light p-6 text-center sm:aspect-[16/9]">
      <MapPin className="size-10 text-petrol" aria-hidden="true" />
      <p className="max-w-md text-sm leading-relaxed text-anthracite">{text.notice}</p>
      <Button onClick={() => setLoaded(true)}>{text.button}</Button>
      <p className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-sm">
        <a href={externalLinks.googlePrivacy} target="_blank" rel="noopener noreferrer" className="text-petrol underline">
          {text.googlePrivacy}
        </a>
        <a href={paths.privacy[lang]} className="text-petrol underline">
          {text.ownPrivacy}
        </a>
      </p>
    </div>
  );
}
