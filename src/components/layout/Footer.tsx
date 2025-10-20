'use client';

import { Linkedin, Twitter, Instagram, Facebook } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import { NeonBloomLogo } from "../icons/NeonBloomLogo";
import { useDoc, useFirestore, useMemoFirebase } from "@/firebase";
import { doc } from "firebase/firestore";
import { PersonalInfo } from "@/lib/types";
import { useLanguage } from "@/context/language-context";
import { content } from "@/lib/content";

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
        <path d="M12 12c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z" />
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.5 12.5c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3 3c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-6 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm3-6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/>
    </svg>
);


export function Footer() {
    const { language } = useLanguage();
    const pageContent = content[language].footer;
    const firestore = useFirestore();
    const personalInfoDoc = useMemoFirebase(() => firestore ? doc(firestore, 'personalInfo', 'main') : null, [firestore]);
    const { data: personalInfo, isLoading } = useDoc<PersonalInfo>(personalInfoDoc);

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
            <Link href="https://www.facebook.com/TNDVKenn203" target="_blank">
              <Facebook className="h-5 w-5" />
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
            <Link href="https://www.pinterest.com/TNDVKenn203" target="_blank">
              <PinterestIcon className="h-5 w-5" />
              <span className="sr-only">Pinterest</span>
            </Link>
          </Button>
           <Button variant="ghost" size="icon" asChild>
            <Link href="https://www.behance.net/TNDVKenn203" target="_blank">
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
