import type { ReactNode } from "react";
import { TriangleAlert } from "lucide-react";
import type { Lang } from "@/content";
import { t } from "@/lib/i18n";

interface LegalPageProps {
  lang: Lang;
  title: string;
  intro: string;
  children: ReactNode;
}

/** Gemeinsamer Rahmen für Impressum und Datenschutzerklärung (mit Entwurfs-Hinweis). */
export function LegalPage({ lang, title, intro, children }: LegalPageProps) {
  return (
    <article className="container max-w-3xl py-14 sm:py-20">
      <p className="mb-8 flex items-start gap-3 rounded-lg border border-amber-300 bg-amber-50 p-4 text-sm text-amber-900">
        <TriangleAlert className="mt-0.5 size-5 shrink-0" aria-hidden="true" />
        {t(lang).draftNotice}
      </p>
      <h1 className="text-3xl font-semibold tracking-tight text-anthracite sm:text-4xl">{title}</h1>
      <p className="mt-4 leading-relaxed text-muted-foreground">{intro}</p>
      <div className="mt-10">{children}</div>
    </article>
  );
}
