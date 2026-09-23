import { ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ImagePlaceholderProps {
  /** Hinweis, welches Foto hier später hinkommt (aus content.ts) */
  note: string;
  /** Vorgelesener Text für Screenreader */
  label: string;
  className?: string;
}

/** Neutraler Platzhalter, bis echte Fotos vorliegen. */
export function ImagePlaceholder({ note, label, className }: ImagePlaceholderProps) {
  return (
    <div
      role="img"
      aria-label={label}
      className={cn(
        "flex flex-col items-center justify-center gap-2 rounded-lg border-2 border-dashed border-petrol/40 bg-petrol-light p-6 text-center text-sm text-muted-foreground",
        className,
      )}
    >
      <ImageIcon className="size-8 text-petrol/60" aria-hidden="true" />
      <span aria-hidden="true">{note}</span>
    </div>
  );
}
