import { cn } from "@/lib/utils";

const KdLogoSvg = ({ className }: { className?: string }) => (
  <svg
    className={cn("h-8 w-auto text-primary", className)}
    viewBox="0 0 100 100"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Letter K */}
    <path d="M10 10 H 30 V 45 L 55 10 H 70 L 40 50 L 70 90 H 55 L 30 55 V 90 H 10 V 10 Z" />
    
    {/* Letter D */}
    <path d="M60 10 H 75 C 90 10, 95 25, 95 50 C 95 75, 90 90, 75 90 H 60 V 10 Z M 75 30 V 70 C 80 65, 80 35, 75 30 Z" />
  </svg>
);


export function NeonBloomLogo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <KdLogoSvg />
      <span className="text-xl font-body text-foreground">Portfolio</span>
    </div>
  );
}
