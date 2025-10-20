'use client';

import { Linkedin, Twitter, Instagram } from "lucide-react";
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
      <path d="M15 15h-2.5a1.5 1.5 0 0 0 0 3h2.5" />
      <path d="M2 6h5" />
      <path d="M2 18h5" />
      <path d="M7 6l-5 12" />
    </svg>
  );

const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
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
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
);

const TiktokIcon = (props: React.SVGProps<SVGSVGElement>) => (
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
        <path d="M16.5 6.5a5.5 5.5 0 1 0-8.5 4.5V17a2 2 0 1 0 4 0V9a7.5 7.5 0 0 0-7.5-7.5" />
        <path d="M12 17v-1.5" />
    </svg>
);

const PinterestIcon = (props: React.SVGProps<SVGSVGElement>) => (
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
        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.237 2.636 7.855 6.25 9.383-.075-.306-.056-.78.056-1.125.13-.42.8-3.38.8-3.38s-.21-.42-.21-1.04c0-.98.57-1.72.93-1.72.44 0 .66.33.66.73 0 .44-.28 1.1-.42 1.7-.12.51.25.93.75.93 1.25 0 2.2-1.33 2.2-3.23 0-1.72-1.25-2.95-2.98-2.95-2.05 0-3.23 1.52-3.23 3.03 0 .6.22 1.25.5 1.63.04.06.05.12.02.18l-.16.63c-.05.16-.18.22-.34.13-1.2-.55-1.95-2.3-1.95-3.85 0-2.6 1.9-4.93 5.4-4.93 2.85 0 5.03 2.02 5.03 4.7 0 2.8-1.78 5.02-4.25 5.02-.83 0-1.62-.43-1.88-.93l-.5 1.9c-.16.63-.6 1.48-.9 1.95.28.08.57.12.87.12 5.523 0 10-4.477 10-10S17.523 2 12 2z" />
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
        <div className="flex items-center gap-1 flex-wrap justify-center">
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://www.facebook.com/TNDVKenn203" target="_blank">
                  <FacebookIcon className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
                <Link href="https://twitter.com/anhvubg999" target="_blank">
                    <Twitter className="h-5 w-5" />
                    <span className="sr-only">Twitter</span>
                </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
                <Link href="https://www.instagram.com/nguyendinhvu_" target="_blank">
                    <Instagram className="h-5 w-5" />
                    <span className="sr-only">Instagram</span>
                </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
                <Link href="https://www.tiktok.com/@nguyendinhvu_kenn" target="_blank">
                    <TiktokIcon className="h-5 w-5" />
                    <span className="sr-only">TikTok</span>
                </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
                <Link href="https://www.pinterest.com/TNDVKenn203" target="_blank">
                    <PinterestIcon className="h-5 w-5" />
                    <span className="sr-only">Pinterest</span>
                </Link>
            </Button>
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
