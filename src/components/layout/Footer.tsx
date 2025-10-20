import { Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import { NeonBloomLogo } from "../icons/NeonBloomLogo";

export function Footer() {
  return (
    <footer className="w-full border-t border-border/40">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <NeonBloomLogo />
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            Built by Alex Doe. &copy; {new Date().getFullYear()}. All rights reserved.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" asChild>
            <Link href="#" target="_blank">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="#" target="_blank">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="#" target="_blank">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </Button>
        </div>
      </div>
    </footer>
  );
}
