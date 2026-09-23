import { MessageCircle } from "lucide-react";
import type { Lang } from "@/content";
import { t, whatsappHref } from "@/lib/i18n";

/** Fixierter WhatsApp-Button – nur auf kleinen Bildschirmen sichtbar. */
export function FloatingWhatsApp({ lang }: { lang: Lang }) {
  return (
    <a
      href={whatsappHref(lang)}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 z-40 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg transition-colors hover:bg-petrol-dark sm:hidden"
    >
      <MessageCircle className="size-5" aria-hidden="true" />
      {t(lang).floatingWhatsapp}
    </a>
  );
}
