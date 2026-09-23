import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  id: string;
  title: string;
  intro?: string;
  className?: string;
}

/** Einheitliche Überschrift für die Abschnitte der Startseite. */
export function SectionHeading({ id, title, intro, className }: SectionHeadingProps) {
  return (
    <div className={cn("mb-10 max-w-2xl", className)}>
      <h2 id={id} className="text-2xl font-semibold tracking-tight text-anthracite sm:text-3xl">
        {title}
      </h2>
      {intro && <p className="mt-3 text-base leading-relaxed text-muted-foreground sm:text-lg">{intro}</p>}
    </div>
  );
}
