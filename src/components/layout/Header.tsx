"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { NeonBloomLogo } from "@/components/icons/NeonBloomLogo";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";
import { LanguageSwitcher } from "../language-switcher";
import { useLanguage } from "@/context/language-context";
import { content } from "@/lib/content";

export function Header() {
  const pathname = usePathname();
  const { language } = useLanguage();
  const navContent = content[language].nav;

  const navLinks = [
    { href: "/", label: navContent.home },
    { href: "/about", label: navContent.about },
    { href: "/projects", label: navContent.projects },
    { href: "/resources", label: navContent.resources },
    { href: "/contact", label: navContent.contact },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <NeonBloomLogo />
        </Link>
        <nav className="hidden md:flex items-center space-x-1 text-sm font-medium">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={cn(
                "px-3 py-2 rounded-md transition-colors hover:text-primary hover:bg-muted",
                pathname === href ? "text-primary bg-muted font-semibold" : "text-foreground/60"
              )}
            >
              {label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
           <LanguageSwitcher />
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-card/95 backdrop-blur-lg">
                <nav className="flex flex-col gap-6 text-lg font-medium mt-8">
                  <Link href="/" className="mb-4">
                    <NeonBloomLogo />
                  </Link>
                  {navLinks.map(({ href, label }) => (
                    <Link
                      key={href}
                      href={href}
                      className={cn(
                        "transition-colors hover:text-primary",
                        pathname === href ? "text-primary" : "text-foreground/80"
                      )}
                    >
                      {label}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
