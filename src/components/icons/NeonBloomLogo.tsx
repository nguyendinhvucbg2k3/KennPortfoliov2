import { cn } from "@/lib/utils";

export function NeonBloomLogo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 130 40"
      className={cn("w-auto h-8", className)}
      aria-label="NeonBloom Logo"
    >
      <defs>
        <filter id="neon-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <text
        x="5"
        y="30"
        fontFamily="var(--font-space-grotesk), sans-serif"
        fontSize="30"
        fontWeight="bold"
        fill="hsl(var(--primary))"
        filter="url(#neon-glow)"
        className="text-primary"
      >
        NB
      </text>
      <text
        x="50"
        y="28"
        fontFamily="var(--font-inter), sans-serif"
        fontSize="20"
        fill="hsl(var(--foreground))"
      >
        Portfolio
      </text>
    </svg>
  );
}
