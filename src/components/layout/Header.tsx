"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { NeonBloomLogo } from "@/components/icons/NeonBloomLogo";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "../ui/button";
import { LogIn, LogOut, Menu } from "lucide-react";
import { useRouter } from "next/navigation";
import { LanguageSwitcher } from "../language-switcher";
import { useLanguage } from "@/context/language-context";
import { content } from "@/lib/content";
import { useState, useEffect } from 'react';

// Mock user authentication
const useMockUser = () => {
    // In a real app, this would involve checking a cookie or session
    // For this static version, we'll assume the user is always logged in to see the admin page.
    const [user, setUser] = useState<{ name: string } | null>({ name: 'Admin' });
    const [isUserLoading, setIsLoading] = useState(false);
    return { user, isUserLoading };
};


export function Header() {
  const pathname = usePathname();
  const { user, isUserLoading } = useMockUser();
  const router = useRouter();
  const { language } = useLanguage();
  const navContent = content[language].nav;

  const navLinks = [
    { href: "/", label: navContent.home },
    { href: "/about", label: navContent.about },
    { href: "/projects", label: navContent.projects },
    { href: "/resources", label: navContent.resources },
    { href: "/contact", label: navContent.contact },
  ];

  const handleSignOut = async () => {
    // In a real app, this would clear the session/cookie
    console.log("Signing out...");
    router.push('/');
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <NeonBloomLogo />
        </Link>
        <nav className="hidden md:flex items-center space-x-4 text-sm font-medium">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={cn(
                "transition-colors hover:text-primary",
                pathname === href ? "text-primary" : "text-foreground/60"
              )}
            >
              {label}
            </Link>
          ))}
           {!isUserLoading && user && (
            <Link
              href="/admin"
              className={cn(
                "transition-colors hover:text-primary",
                pathname.startsWith('/admin') ? "text-primary" : "text-foreground/60"
              )}
            >
              {navContent.admin}
            </Link>
          )}
        </nav>
        <div className="flex items-center gap-2">
           <LanguageSwitcher />
           {!isUserLoading && user ? (
             <Button variant="ghost" size="icon" onClick={handleSignOut} title="Sign Out">
                <LogOut className="h-5 w-5" />
             </Button>
           ) : !isUserLoading && (
              <Button variant="ghost" size="icon" asChild>
                <Link href="/admin" title="Sign In">
                  <LogIn className="h-5 w-5" />
                </Link>
              </Button>
           )}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
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
                  {!isUserLoading && user && (
                    <Link
                      href="/admin"
                      className={cn(
                        "transition-colors hover:text-primary",
                        pathname.startsWith('/admin') ? "text-primary" : "text-foreground/80"
                      )}
                    >
                      {navContent.admin}
                    </Link>
                  )}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
