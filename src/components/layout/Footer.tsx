'use client';

import Link from "next/link";
import { Button } from "../ui/button";
import { NeonBloomLogo } from "../icons/NeonBloomLogo";
import { useLanguage } from "@/context/language-context";
import { content } from "@/lib/content";
import { personalInfo } from "@/lib/placeholder-data";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { TiktokIcon } from "../icons/TiktokIcon";
import { PinterestIcon } from "../icons/PinterestIcon";
import { BehanceIcon } from "../icons/BehanceIcon";
import { FacebookIcon } from "../icons/FacebookIcon";
import { TwitterIcon } from "../icons/TwitterIcon";
import { InstagramIcon } from "../icons/InstagramIcon";
import { LinkedInIcon } from "../icons/LinkedInIcon";

export function Footer() {
    const { language } = useLanguage();
    const pageContent = content[language].footer;

  return (
    <footer className="w-full border-t border-border/40">
      <div className="container flex flex-col items-center justify-between gap-6 py-8 md:h-24 md:flex-row md:gap-4 md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 text-center md:flex-row md:gap-2 md:px-0 md:text-left">
          <NeonBloomLogo />
          <p className="text-sm leading-loose text-muted-foreground">
            {pageContent.builtBy} {personalInfo?.footerName || 'Thac Nguyen Dinh Vu'}. &copy; {new Date().getFullYear()}. {pageContent.reserved}
          </p>
        </div>
        <TooltipProvider>
        <div className="flex items-center gap-1 flex-wrap justify-center">
            <Tooltip>
                <TooltipTrigger asChild>
                    <Button variant="ghost" size="icon" asChild>
                      <Link href="https://www.facebook.com/TNDVKenn203" target="_blank" aria-label="Facebook">
                          <FacebookIcon className="h-5 w-5 text-muted-foreground transition-colors hover:text-foreground" />
                      </Link>
                    </Button>
                </TooltipTrigger>
                <TooltipContent><p>Facebook</p></TooltipContent>
            </Tooltip>
            <Tooltip>
                <TooltipTrigger asChild>
                    <Button variant="ghost" size="icon" asChild>
                        <Link href="https://twitter.com/anhvubg999" target="_blank" aria-label="Twitter">
                            <TwitterIcon className="h-5 w-5 text-muted-foreground transition-colors hover:text-foreground" />
                        </Link>
                    </Button>
                </TooltipTrigger>
                <TooltipContent><p>Twitter</p></TooltipContent>
            </Tooltip>
            <Tooltip>
                <TooltipTrigger asChild>
                    <Button variant="ghost" size="icon" asChild>
                        <Link href="https://www.instagram.com/nguyendinhvu_" target="_blank" aria-label="Instagram">
                            <InstagramIcon className="h-5 w-5 text-muted-foreground transition-colors hover:text-foreground" />
                        </Link>
                    </Button>
                </TooltipTrigger>
                <TooltipContent><p>Instagram</p></TooltipContent>
            </Tooltip>
            <Tooltip>
                <TooltipTrigger asChild>
                    <Button variant="ghost" size="icon" asChild>
                        <Link href="https://www.tiktok.com/@nguyendinhvu_kenn" target="_blank" aria-label="Tiktok">
                            <TiktokIcon className="h-5 w-5 text-muted-foreground transition-colors hover:text-foreground" />
                        </Link>
                    </Button>
                </TooltipTrigger>
                <TooltipContent><p>TikTok</p></TooltipContent>
            </Tooltip>
            <Tooltip>
                <TooltipTrigger asChild>
                    <Button variant="ghost" size="icon" asChild>
                        <Link href="https://www.pinterest.com/TNDVKenn203" target="_blank" aria-label="Pinterest">
                            <PinterestIcon className="h-5 w-5 text-muted-foreground transition-colors hover:text-foreground" />
                        </Link>
                    </Button>
                </TooltipTrigger>
                <TooltipContent><p>Pinterest</p></TooltipContent>
            </Tooltip>
           <Tooltip>
                <TooltipTrigger asChild>
                    <Button variant="ghost" size="icon" asChild>
                        <Link href="https://www.behance.net/TNDVKenn" target="_blank" aria-label="Behance">
                        <BehanceIcon className="h-5 w-5 text-muted-foreground transition-colors hover:text-foreground" />
                        </Link>
                    </Button>
                </TooltipTrigger>
                <TooltipContent><p>Behance</p></TooltipContent>
           </Tooltip>
          <Tooltip>
                <TooltipTrigger asChild>
                    <Button variant="ghost" size="icon" asChild>
                        <Link href="https://www.linkedin.com/in/tndvkenn5207" target="_blank" aria-label="LinkedIn">
                        <LinkedInIcon className="h-5 w-5 text-muted-foreground transition-colors hover:text-foreground" />
                        </Link>
                    </Button>
                </TooltipTrigger>
                <TooltipContent><p>LinkedIn</p></TooltipContent>
          </Tooltip>
        </div>
        </TooltipProvider>
      </div>
    </footer>
  );
}
