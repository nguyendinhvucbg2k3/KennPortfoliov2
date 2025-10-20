'use client';

import { Button } from "@/components/ui/button";
import { Mail, MessageSquare, Phone } from "lucide-react";
import Link from "next/link";
import { personalInfo } from "@/lib/placeholder-data";

const ZaloIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M33.913 33.912c-1.396.93-3.036 1.494-4.81 1.494-5.46 0-9.88-4.42-9.88-9.88 0-1.775.47-3.414 1.495-4.81M33.913 33.912c1.396-.93 2.55-2.085 3.48-3.48M33.913 33.912l-5.633-5.634M14.088 14.088c1.396-.93 3.036-1.495 4.81-1.495 5.46 0 9.88 4.42 9.88 9.88 0 1.775-.47 3.414-1.495 4.81M14.088 14.088c-1.396.93-2.55 2.085-3.48 3.48M14.088 14.088l5.634 5.634" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4.56 22.56a19.2 19.2 0 0 1 38.88 0" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
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


export function QuickContact() {
    const { email, phone } = personalInfo;
    const zaloLink = `https://zalo.me/${phone}`;
    const facebookLink = "https://www.facebook.com/TNDVKenn203";

    return (
        <div className="fixed bottom-4 left-4 z-50 flex flex-col gap-3">
             <Button asChild size="icon" className="rounded-full w-14 h-14 bg-blue-600 hover:bg-blue-700 text-white shadow-lg transition-transform duration-300 ease-in-out hover:scale-110">
                <Link href={facebookLink} target="_blank">
                    <FacebookIcon className="h-7 w-7" />
                    <span className="sr-only">Facebook</span>
                </Link>
            </Button>
            <Button asChild size="icon" className="rounded-full w-14 h-14 bg-blue-500 hover:bg-blue-600 text-white shadow-lg transition-transform duration-300 ease-in-out hover:scale-110">
                <Link href={zaloLink} target="_blank">
                    <ZaloIcon className="h-7 w-7" />
                    <span className="sr-only">Zalo</span>
                </Link>
            </Button>
            <Button asChild size="icon" className="rounded-full w-14 h-14 bg-red-600 hover:bg-red-700 text-white shadow-lg transition-transform duration-300 ease-in-out hover:scale-110">
                <Link href={`mailto:${email}`}>
                    <Mail className="h-7 w-7" />
                    <span className="sr-only">Email</span>
                </Link>
            </Button>
        </div>
    );
}
