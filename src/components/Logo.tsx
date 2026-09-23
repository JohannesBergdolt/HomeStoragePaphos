import { brand } from "@/content";
import { cn } from "@/lib/utils";

/**
 * Bildzeichen: Schiffscontainer mit Rippen (Anthrazit)
 * und einem schwebenden Schattendach darüber (Petrol).
 * Dasselbe Motiv liegt als Favicon in public/favicon.svg.
 */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 56" className={className} aria-hidden="true" focusable="false">
      {/* Schattendach */}
      <rect x="2" y="3" width="60" height="5" rx="2.5" fill="#1F7A7A" />
      {/* Container */}
      <rect x="8" y="16" width="48" height="36" rx="2.5" fill="#2B2D31" />
      {/* Rippen */}
      <g stroke="#F7F7F5" strokeOpacity="0.35" strokeWidth="2" strokeLinecap="round">
        <line x1="16" y1="22" x2="16" y2="46" />
        <line x1="24" y1="22" x2="24" y2="46" />
        <line x1="32" y1="22" x2="32" y2="46" />
        <line x1="40" y1="22" x2="40" y2="46" />
        <line x1="48" y1="22" x2="48" y2="46" />
      </g>
    </svg>
  );
}

/** Vollständiges Logo: Bildzeichen mit Wortmarke „Home Storage / PAPHOS“. */
export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <LogoMark className="h-9 w-auto shrink-0" />
      <span className="flex flex-col leading-none">
        <span className="text-lg font-semibold tracking-tight text-anthracite">{brand.wordmark}</span>
        <span className="mt-1 text-[0.65rem] font-semibold tracking-[0.3em] text-petrol">{brand.subline}</span>
      </span>
    </span>
  );
}
