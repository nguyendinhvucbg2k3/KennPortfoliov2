import { cn } from "@/lib/utils";

const KdLogoSvg = ({ className }: { className?: string }) => (
  <svg
    className={cn("h-8 w-auto text-primary", className)}
    viewBox="0 0 100 100"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Letter K */}
    <path d="M10 10 L 10 90 L 30 90 L 30 55 L 55 90 L 70 90 L 40 50 L 70 10 L 55 10 L 30 45 L 30 10 L 10 10 Z" />
    {/* Letter D */}
    <path d="M60 10 C 85 10, 95 25, 95 50 C 95 75, 85 90, 60 90 L 60 10 Z M 75 30 L 75 70 C 80 65, 80 35, 75 30 Z" />
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
