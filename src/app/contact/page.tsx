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
import { BehanceIcon } from "@/components/icons/BehanceIcon";
import { TiktokIcon } from "@/components/icons/TiktokIcon";
import { PinterestIcon } from "@/components/icons/PinterestIcon";
import { FacebookIcon } from "@/components/icons/FacebookIcon";
import { TwitterIcon } from "@/components/icons/TwitterIcon";
import { InstagramIcon } from "@/components/icons/InstagramIcon";
import { LinkedInIcon } from "@/components/icons/LinkedInIcon";

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
                                <LinkedInIcon className="h-5 w-5" />
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
