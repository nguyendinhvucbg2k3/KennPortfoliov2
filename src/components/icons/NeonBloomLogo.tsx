import { cn } from "@/lib/utils";

export function NeonBloomLogo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary font-headline text-lg font-bold text-primary-foreground">
        NB
      </div>
      <span className="text-xl font-body text-foreground">Portfolio</span>
    </div>
  );
}
