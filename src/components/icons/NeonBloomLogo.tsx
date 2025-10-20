import Image from "next/image";
import { cn } from "@/lib/utils";
import KdLogo from "../../../public/kd-logo.png";

export function NeonBloomLogo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <Image
        src={KdLogo}
        alt="KD Logo"
        width={40}
        height={40}
        className="h-8 w-auto"
      />
      <span className="text-xl font-body text-foreground">Portfolio</span>
    </div>
  );
}
