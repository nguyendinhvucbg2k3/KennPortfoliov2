import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Linkedin, Twitter, Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";

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

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="text-center">
        <h1 className="font-headline text-4xl md:text-6xl font-bold text-glow">
          Contact Me
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-16 mt-16 max-w-6xl mx-auto">
        <div>
            <h2 className="font-headline text-3xl font-bold mb-8">Get in Touch</h2>
            <div className="space-y-6">
                <div className="flex items-center gap-4">
                    <Mail className="h-6 w-6 text-primary" />
                    <a href="mailto:nguyendinhvu5207.des@gmail.com" className="hover:text-primary">nguyendinhvu5207.des@gmail.com</a>
                </div>
                 <div className="flex items-center gap-4">
                    <Phone className="h-6 w-6 text-primary" />
                    <a href="tel:+84964664117" className="hover:text-primary">(+84) 96 466 4117</a>
                </div>
                 <div className="flex items-center gap-4">
                    <MapPin className="h-6 w-6 text-primary" />
                    <p>Ha Dong, Ha Noi, Viet Nam</p>
                </div>
            </div>
             <h2 className="font-headline text-3xl font-bold mt-12 mb-8">Follow Me</h2>
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
                    <CardTitle className="font-headline text-2xl">Send me a message</CardTitle>
                </CardHeader>
                <CardContent>
                    <form className="space-y-4">
                        <Input placeholder="Your Name" />
                        <Input type="email" placeholder="Your Email" />
                        <Textarea placeholder="Your Message" rows={5} />
                        <Button type="submit" size="lg" className="w-full">Send Message</Button>
                    </form>
                </CardContent>
            </Card>
        </div>
      </div>
    </div>
  );
}
