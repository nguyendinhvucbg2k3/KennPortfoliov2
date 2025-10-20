'use client';

import { Linkedin } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import { NeonBloomLogo } from "../icons/NeonBloomLogo";
import { PersonalInfo } from "@/lib/types";
import { useLanguage } from "@/context/language-context";
import { content } from "@/lib/content";
import { useState, useEffect } from "react";
import { personalInfo as placeholderPersonalInfo } from "@/lib/placeholder-data";

const BehanceIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M22 6h-7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h7" />
      <path d="M22 14h-7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h7" />
      <path d="M15 9h-2.5a1.5 1.5 0 0 0 0 3h2.5" />
      <path d="M15 15h-2.5a1.5 1.5-0 0 0 0 3h2.5" />
      <path d="M2 6h5" />
      <path d="M2 18h5" />
      <path d="M7 6l-5 12" />
    </svg>
  );

export function Footer() {
    const { language } = useLanguage();
    const pageContent = content[language].footer;
    
    const [personalInfo, setPersonalInfo] = useState<PersonalInfo | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setPersonalInfo(placeholderPersonalInfo);
        setIsLoading(false);
    }, []);

  return (
    <footer className="w-full border-t border-border/40">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <NeonBloomLogo />
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            {pageContent.builtBy} {isLoading ? '...' : (personalInfo?.footerName || 'Thac Nguyen Dinh Vu')}. &copy; {new Date().getFullYear()}. {pageContent.reserved}
          </p>
        </div>
        <div className="flex items-center gap-2">
           <Button variant="ghost" size="icon" asChild>
            <Link href="https://www.behance.net/TNDVKenn" target="_blank">
              <BehanceIcon className="h-5 w-5" />
              <span className="sr-only">Behance</span>
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://www.linkedin.com/in/tndvkenn5207" target="_blank">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </Button>
        </div>
      </div>
    </footer>
  );
}
