import { cn } from "@/lib/utils";

const KdLogoSvg = ({ className }: { className?: string }) => (
  <svg
    className={cn("h-8 w-auto text-primary", className)}
    viewBox="0 0 100 100"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10 10 L 10 90 L 30 90 L 30 60 L 50 90 L 70 90 L 40 50 L 70 10 L 50 10 L 30 40 L 30 10 L 10 10 Z"
    />
    <path
      d="M60 10 C 85 10, 95 20, 95 50 C 95 80, 85 90, 60 90 L 60 70 C 75 70, 80 65, 80 50 C 80 35, 75 30, 60 30 L 60 10 Z"
    />
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
