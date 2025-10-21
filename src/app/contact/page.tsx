'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { PersonalInfo } from "@/lib/types";
import { Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/context/language-context";
import { content } from "@/lib/content";
import { useState, useEffect } from "react";
import { personalInfo as placeholderPersonalInfo } from "@/lib/placeholder-data";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { motion } from "framer-motion";

const BehanceIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M7.333 12.667h2.534c.828 0 1.5-.597 1.5-1.334s-.672-1.333-1.5-1.333H7.333v2.667zM14.667 12V9h2.667v3h-2.667zm-7.334 5.333h3.034c.96 0 1.733-.716 1.733-1.6s-.773-1.6-1.733-1.6H7.333v3.2zM2.667 2.667h6.666v1.333H2.667V2.667zM20 7c0-2.209-1.791-4-4-4H4c-1.105 0-2 .895-2 2v14c0 1.105.895 2 2 2h12c2.209 0 4-1.791 4-4v-7zm-4.234 1.333H13.1v1.334h2.441c.65 0 1.176.47 1.176 1.053 0 .582-.526 1.053-1.176 1.053H13.1v1.554h2.724c.903 0 1.643.66 1.643 1.48s-.74 1.48-1.643 1.48H13.1v3.293c-3.333 0-3.333-1.474-3.333-3.333S11.233 8.333 15.766 8.333z"/></svg>
  );

const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z"/></svg>
);

const TiktokIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.53 3.02 1.25 4.42.66 1.32 1.5 2.52 2.5 3.62.28.3.46.63.73.93 1.02 1.13 1.73 2.4 2.16 3.82.08.26.15.52.22.78.02.16.04.33.05.5.03.4.05.8.05 1.2s-.01.8-.04 1.2c-.02.17-.04.33-.06.5-.09.37-.2.74-.32 1.1-.2.62-.43 1.23-.7 1.82-.26.58-.55 1.13-.88 1.66-1.13 1.78-2.6 3.25-4.38 4.38-.25.16-.5.3-.77.44-.3.16-.6.3-.92.43-.4.14-.8.25-1.2.34-.37.08-.75.14-1.13.18-.5.06-1 .1-1.5.11-.45.01-.9.01-1.34.01s-.9-.01-1.35-.02c-.3-.01-.6-.02-.9-.04-.5-.03-1-.07-1.5-.13-.38-.05-.76-.1-1.14-.17-.4-.08-.78-.18-1.16-.3-.3-.09-.58-.2-.87-.32-.3-.12-.58-.25-.86-.4-.6-.33-1.16-.7-1.7-1.12-.5-.38-1-.8-1.4-1.28-.4-.5-.78-1-1.13-1.55-.26-.4-.5-.83-.7-1.28-.2-.47-.38-.95-.53-1.43-.15-.48-.28-.97-.38-1.46-.05-.25-.1-.5-.13-.75-.03-.43-.04-.86-.04-1.3s.01-.86.04-1.3c.02-.24.05-.48.08-.72.08-.6.2-1.2.35-1.78.16-.6.35-1.18.58-1.75.25-.6.54-1.18.88-1.73.5-.77 1.1-1.47 1.8-2.1s1.48-1.15 2.3-1.6c.4-.2.8-.4 1.2-.52.2-.07.4-.13.6-.2.4-.13.8-.24 1.2-.3.1-.01.2-.02.3-.03.2-.02.4-.03.6-.04.2-.01.4-.01.6 0 .2.01.4.01.6.01.2.01.4.01.6.02zM15.18 6.45c-.27-.08-.53-.15-.8-.23-.55-.15-1.1-.24-1.65-.3-.5-.05-1-.08-1.5-.08-.36 0-.7.01-1.06.04-.18.01-.36.03-.54.05-.4.04-.8.1-1.2.18-.18.03-.37.07-.55.1-.4.08-.78.2-1.15.34-.3.12-.58.26-.85.42-.3.17-.57.37-.82.58-.5.42-1 1-1.4 1.5-.2.25-.4.5-.6.76-.3.4-.5.8-.73 1.2-.24.4-.45.8-.63 1.2-.3.6-.5 1.2-.66 1.8-.1.4-.18.8-.24 1.2-.05.3-.08.6-.1.9-.03.3-.04.6-.04.9s.01.6.04.9c.02.3.05.6.1.9.06.4.14.8.23 1.2.14.6.3 1.2.5 1.8.17.5.37 1 .6 1.4.2.4.4.8.63 1.1.25.4.5.7.8.1 .34.3.7.6 1.1.8.38.3.78.6 1.2.8.35.2.7.38 1.1.5.3.1.6.2 1 .28.3.08.6.14.9.2.4.06.8.1 1.2.14.45.03.9.05 1.35.05.45 0 .9-.01 1.35-.05.4-.04.8-.08 1.2-.14.3-.05.6-.1.9-.17.4-.07.8-.16 1.2-.26.3-.08.6-.18.9-.28.2-.07.4-.14.6-.22.2-.08.4-.16.6-.25.5-.22 1-.48 1.4-.78.4-.3.8-.6 1.1-.9.2-.2.4-.4.6-.6.3-.3.6-.6.8-.9.5-.6 1-1.2 1.3-1.8.3-.6.5-1.2.6-1.8.1-.4.15-.8.2-1.2.03-.3.04-.6.04-.9s-.01-.6-.04-.9c-.02-.3-.05-.6-.09-1.2-.05-.3-.1-.6-.16-.9-.1-.6-.3-1.2-.5-1.7-.17-.5-.38-1-.6-1.5-.23-.4-.5-.8-.75-1.2-.25-.4-.5-.7-.8-.1-.3-.3-.6-.6-1.05-.8-.2-.14-.4-.28-.6-.4-.2-.12-.4-.23-.6-.33-.3-.15-.6-.28-.9-.4-.3-.1-.6-.2-.9-.28-.2-.05-.4-.1-.6-.14-.2-.04-.4-.08-.6-.12-.2-.03-.4-.06-.6-.08-.2-.02-.4-.04-.6-.05-.2-.01-.4-.02-.6-.02-.2 0-.4 0-.6.01z" fill-rule="evenodd" clip-rule="evenodd"/></svg>
);

const PinterestIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M12 2C6.477 2 2 6.477 2 12c0 4.237 2.636 7.855 6.25 9.383-.075-.306-.056-.78.056-1.125.13-.42.8-3.38.8-3.38s-.21-.42-.21-1.04c0-.98.57-1.72.93-1.72.44 0 .66.33.66.73 0 .44-.28 1.1-.42 1.7-.12.51.25.93.75.93 1.25 0 2.2-1.33 2.2-3.23 0-1.72-1.25-2.95-2.98-2.95-2.05 0-3.23 1.52-3.23 3.03 0 .6.22 1.25.5 1.63.04.06.05.12.02.18l-.16.63c-.05.16-.18.22-.34.13-1.2-.55-1.95-2.3-1.95-3.85 0-2.6 1.9-4.93 5.4-4.93 2.85 0 5.03 2.02 5.03 4.7 0 2.8-1.78 5.02-4.25 5.02-.83 0-1.62-.43-1.88-.93l-.5 1.9c-.16.63-.6 1.48-.9 1.95.28.08.57.12.87.12 5.523 0 10-4.477 10-10S17.523 2 12 2z"/></svg>
);

const TwitterIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M22.46 6c-.77.35-1.6.58-2.46.67.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.22-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21c7.34 0 11.35-6.08 11.35-11.35 0-.17 0-.34-.01-.51.78-.57 1.45-1.29 1.99-2.09z"/></svg>
);

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122s-.013 3.056-.06 4.122c-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06s-3.056-.013-4.122-.06c-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.247-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12s.013-3.056.06-4.122c.05-1.065.218-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.915 4.915 0 0 1 5.45 2.525c.638-.247 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 1.8c-2.68 0-3.01.01-4.05.057-.975.045-1.505.207-1.957.387-.473.187-.85.42-1.22.79-.37.37-.604.747-.79 1.22-.18.452-.342.982-.387 1.957-.047 1.04-.057 1.37-.057 4.05s.01 1.01.057 4.05c.045.975.207 1.505.387 1.957.187.473.42.85.79 1.22.37.37.747.604 1.22.79.452.18 1.107.342 1.957.387 1.04.047 1.37.057 4.05.057s3.01-.01 4.05-.057c.975-.045 1.505-.207 1.957-.387.473-.187.85-.42-1.22.79.37-.37-.604-.747.79-1.22.18-.452-.342-.982-.387-1.957.047-1.04.057-1.37.057-4.05s-.01-1.01-.057-4.05c-.045-.975-.207-1.505-.387-1.957-.187-.473-.42-.85-.79-1.22-.37-.37-.747-.604-1.22-.79-.452-.18-1.107-.342-1.957-.387-1.04-.047-1.37-.057-4.05-.057zm0 4.632c-2.905 0-5.268 2.363-5.268 5.268s2.363 5.268 5.268 5.268 5.268-2.363 5.268-5.268-2.363-5.268-5.268-5.268zm0 8.732c-1.91 0-3.464-1.554-3.464-3.464s1.554-3.464 3.464-3.464 3.464 1.554 3.464 3.464-1.554 3.464-3.464 3.464zm5.838-8.4c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25z"/></svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M6.94 5.00002C6.93985 5.53046 6.72895 6.03906 6.35351 6.41414C5.97808 6.78921 5.4692 6.99979 4.93876 7.00002C4.40832 7.00024 3.89944 6.79001 3.52378 6.41541C3.14811 6.0408 2.93683 5.5323 2.93654 5.00186C2.93626 4.47141 3.14686 3.96253 3.52184 3.5873C3.89682 3.21207 4.40542 3.00117 4.93586 3C5.4663 2.99877 5.97549 3.20859 6.35147 3.58327C6.72744 3.95795 6.9392 4.46654 6.94 5.00002ZM7 8.48H3V21H7V8.48ZM13.32 8.48H9.34V21H13.28V14.43C13.28 12.43 14.86 10.85 16.85 10.85C18.84 10.85 20.42 12.43 20.42 14.43V21H21V13.7C21 10.02 18.39 7.5 15.04 7.5C13.24 7.5 11.66 8.41 10.96 9.87H10.92V8.48H7.22C7.26 9.42 7 21 7 21H7V8.48H3Z"/></svg>
);


export default function ContactPage() {
    const { language } = useLanguage();
    const pageContent = content[language].contact;
    
    const [personalInfo, setPersonalInfo] = useState<PersonalInfo | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setPersonalInfo(placeholderPersonalInfo);
        setIsLoading(false);
    }, []);

  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="text-center">
        <h1 className="font-headline text-4xl md:text-6xl font-bold text-glow">
          {pageContent.title}
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          {pageContent.description}
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-16 mt-16 max-w-6xl mx-auto">
        <div>
            <h2 className="font-headline text-3xl font-bold mb-8">{pageContent.getInTouch}</h2>
            {isLoading ? (
                <div className="space-y-6">
                    <div className="h-6 w-3/4 bg-muted/50 rounded animate-pulse" />
                    <div className="h-6 w-2/3 bg-muted/50 rounded animate-pulse" />
                    <div className="h-6 w-1/2 bg-muted/50 rounded animate-pulse" />
                </div>
            ) : personalInfo && (
                <div className="space-y-6">
                    <div className="flex items-center gap-4 group">
                        <Mail className="h-6 w-6 text-primary flex-shrink-0" />
                        <a href={`mailto:${personalInfo.email}`} className="hover:text-primary break-all transition-colors">{personalInfo.email}</a>
                    </div>
                    <div className="flex items-center gap-4 group">
                        <Phone className="h-6 w-6 text-primary flex-shrink-0" />
                        <a href={personalInfo.phoneHref} className="hover:text-primary transition-colors">{personalInfo.phone}</a>
                    </div>
                    <div className="flex items-center gap-4">
                        <MapPin className="h-6 w-6 text-primary flex-shrink-0" />
                        <p>{personalInfo.address}</p>
                    </div>
                </div>
            )}
             <h2 className="font-headline text-3xl font-bold mt-12 mb-6">{pageContent.followMe}</h2>
             <TooltipProvider>
             <div className="flex items-center gap-2 flex-wrap">
                 <Tooltip>
                    <TooltipTrigger asChild>
                        <Button variant="outline" size="icon" className="hover:text-primary hover:border-primary" asChild>
                            <Link href="https://www.facebook.com/TNDVKenn203" target="_blank" aria-label="Facebook">
                                <FacebookIcon className="h-5 w-5" />
                            </Link>
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent><p>Facebook</p></TooltipContent>
                 </Tooltip>
                 <Tooltip>
                    <TooltipTrigger asChild>
                        <Button variant="outline" size="icon" className="hover:text-primary hover:border-primary" asChild>
                            <Link href="https://twitter.com/anhvubg999" target="_blank" aria-label="Twitter">
                                <TwitterIcon className="h-5 w-5" />
                            </Link>
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent><p>Twitter</p></TooltipContent>
                </Tooltip>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button variant="outline" size="icon" className="hover:text-primary hover:border-primary" asChild>
                            <Link href="https://www.instagram.com/nguyendinhvu_" target="_blank" aria-label="Instagram">
                                <InstagramIcon className="h-5 w-5" />
                            </Link>
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent><p>Instagram</p></TooltipContent>
                </Tooltip>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button variant="outline" size="icon" className="hover:text-primary hover:border-primary" asChild>
                            <Link href="https://www.tiktok.com/@nguyendinhvu_kenn" target="_blank" aria-label="TikTok">
                                <TiktokIcon className="h-5 w-5" />
                            </Link>
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent><p>TikTok</p></TooltipContent>
                </Tooltip>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button variant="outline" size="icon" className="hover:text-primary hover:border-primary" asChild>
                            <Link href="https://www.pinterest.com/TNDVKenn203" target="_blank" aria-label="Pinterest">
                                <PinterestIcon className="h-5 w-5" />
                            </Link>
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent><p>Pinterest</p></TooltipContent>
                </Tooltip>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button variant="outline" size="icon" className="hover:text-primary hover:border-primary" asChild>
                            <Link href="https://www.behance.net/TNDVKenn" target="_blank" aria-label="Behance">
                                <BehanceIcon className="h-5 w-5" />
                            </Link>
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent><p>Behance</p></TooltipContent>
                </Tooltip>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button variant="outline" size="icon" className="hover:text-primary hover:border-primary" asChild>
                            <Link href="https://www.linkedin.com/in/tndvkenn5207" target="_blank" aria-label="LinkedIn">
                                <LinkedinIcon className="h-5 w-5" />
                            </Link>
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent><p>LinkedIn</p></TooltipContent>
                </Tooltip>
            </div>
            </TooltipProvider>
        </div>
        <div>
           <Card>
                <CardHeader>
                    <CardTitle className="font-headline text-2xl">{pageContent.formTitle}</CardTitle>
                </CardHeader>
                <CardContent>
                    <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                        <Input placeholder={pageContent.formName} />
                        <Input type="email" placeholder={pageContent.formEmail} />
                        <Textarea placeholder={pageContent.formMessage} rows={5} />
                        <Button type="submit" size="lg" className="w-full">{pageContent.formSend}</Button>
                    </form>
                </CardContent>
            </Card>
        </div>
      </div>
    </div>
  );
}
