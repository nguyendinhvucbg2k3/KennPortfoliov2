'use client';

import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import Link from "next/link";
import { personalInfo } from "@/lib/placeholder-data";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ZaloIcon } from "../icons/ZaloIcon";
import { FacebookIcon } from "../icons/FacebookIcon";

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
