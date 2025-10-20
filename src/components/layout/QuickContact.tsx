'use client';

import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import Link from "next/link";
import { personalInfo } from "@/lib/placeholder-data";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const ZaloIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M33.913 33.912c-1.396.93-3.036 1.494-4.81 1.494-5.46 0-9.88-4.42-9.88-9.88 0-1.775.47-3.414 1.495-4.81M33.913 33.912c1.396-.93 2.55-2.085 3.48-3.48M33.913 33.912l-5.633-5.634M14.088 14.088c1.396-.93 3.036-1.495 4.81-1.495 5.46 0 9.88 4.42 9.88 9.88 0 1.775-.47 3.414-1.495 4.81M14.088 14.088c-1.396.93-2.55 2.085-3.48 3.48M14.088 14.088l5.634 5.634" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4.56 22.56a19.2 19.2 0 0 1 38.88 0" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
);

const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z"/></svg>
);


export function QuickContact() {
    const { email, phone } = personalInfo;
    const zaloLink = `https://zalo.me/${phone}`;
    const facebookLink = "https://www.facebook.com/TNDVKenn203";

    return (
        <TooltipProvider>
        <div className="fixed bottom-4 left-4 z-50 flex flex-col gap-3">
             <Tooltip>
                <TooltipTrigger asChild>
                    <Button asChild size="icon" className="rounded-full w-12 h-12 md:w-14 md:h-14 bg-[#0866FF] hover:bg-[#0759d1] text-white shadow-lg transition-transform duration-300 ease-in-out hover:scale-110">
                        <Link href={facebookLink} target="_blank" aria-label="Facebook Messenger">
                            <FacebookIcon className="h-6 w-6 md:h-7 md:w-7" />
                        </Link>
                    </Button>
                </TooltipTrigger>
                <TooltipContent side="right"><p>Facebook</p></TooltipContent>
             </Tooltip>
             <Tooltip>
                <TooltipTrigger asChild>
                    <Button asChild size="icon" className="rounded-full w-12 h-12 md:w-14 md:h-14 bg-[#0068FF] hover:bg-[#0052cc] text-white shadow-lg transition-transform duration-300 ease-in-out hover:scale-110">
                        <Link href={zaloLink} target="_blank" aria-label="Zalo">
                            <ZaloIcon className="h-6 w-6 md:h-7 md:w-7" />
                        </Link>
                    </Button>
                </TooltipTrigger>
                <TooltipContent side="right"><p>Zalo</p></TooltipContent>
             </Tooltip>
            <Tooltip>
                <TooltipTrigger asChild>
                    <Button asChild size="icon" className="rounded-full w-12 h-12 md:w-14 md:h-14 bg-red-600 hover:bg-red-700 text-white shadow-lg transition-transform duration-300 ease-in-out hover:scale-110">
                        <Link href={`mailto:${email}`} aria-label="Email">
                            <Mail className="h-6 w-6 md:h-7 md:w-7" />
                        </Link>
                    </Button>
                </TooltipTrigger>
                <TooltipContent side="right"><p>Email</p></TooltipContent>
            </Tooltip>
        </div>
        </TooltipProvider>
    );
}
