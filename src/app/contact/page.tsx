'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { PersonalInfo } from "@/lib/types";
import { Linkedin, Twitter, Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/context/language-context";
import { content } from "@/lib/content";
import { useState, useEffect } from "react";

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

const placeholderPersonalInfo: PersonalInfo = {
    fullName: "Thac Nguyen Dinh Vu",
    footerName: "Thac Nguyen Dinh Vu",
    title: "Intern Graphic Designer",
    fieldOfStudy: "Information Technology",
    dateOfBirth: "20/07/2003",
    email: "thacnguyendinhvu.esports@gmail.com",
    phone: "0964664117",
    phoneHref: "tel:+84964664117",
    address: "Hà Đông, Hà Nội",
};

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
                    <div className="flex items-center gap-4">
                        <Mail className="h-6 w-6 text-primary" />
                        <a href={`mailto:${personalInfo.email}`} className="hover:text-primary">{personalInfo.email}</a>
                    </div>
                    <div className="flex items-center gap-4">
                        <Phone className="h-6 w-6 text-primary" />
                        <a href={personalInfo.phoneHref} className="hover:text-primary">{personalInfo.phone}</a>
                    </div>
                    <div className="flex items-center gap-4">
                        <MapPin className="h-6 w-6 text-primary" />
                        <p>{personalInfo.address}</p>
                    </div>
                </div>
            )}
             <h2 className="font-headline text-3xl font-bold mt-12 mb-8">{pageContent.followMe}</h2>
             <div className="flex items-center gap-4">
                <Button variant="ghost" size="icon" asChild>
                    <Link href="https://www.facebook.com/TNDVKenn203" target="_blank">
                        <Facebook className="h-6 w-6" />
                        <span className="sr-only">Facebook</span>
                    </Link>
                </Button>
                 <Button variant="ghost" size="icon" asChild>
                    <Link href="https://twitter.com/anhvubg999" target="_blank">
                        <Twitter className="h-6 w-6" />
                        <span className="sr-only">Twitter</span>
                    </Link>
                </Button>
                 <Button variant="ghost" size="icon" asChild>
                    <Link href="https://www.instagram.com/nguyendinhvu_" target="_blank">
                        <Instagram className="h-6 w-6" />
                        <span className="sr-only">Instagram</span>
                    </Link>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                    <Link href="https://www.pinterest.com/TNDVKenn203" target="_blank">
                        <PinterestIcon className="h-6 w-6" />
                        <span className="sr-only">Pinterest</span>
                    </Link>
                </Button>
                 <Button variant="ghost" size="icon" asChild>
                    <Link href="https://www.behance.net/TNDVKenn203" target="_blank">
                        <BehanceIcon className="h-6 w-6" />
                        <span className="sr-only">Behance</span>
                    </Link>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                    <Link href="https://www.linkedin.com/in/tndvkenn5207" target="_blank">
                        <Linkedin className="h-6 w-6" />
                        <span className="sr-only">LinkedIn</span>
                    </Link>
                </Button>
            </div>
        </div>
        <div>
           <Card className="bg-card/50 border-border/50">
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
