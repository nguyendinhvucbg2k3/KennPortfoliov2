'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { useLanguage } from '@/context/language-context';
import { content } from '@/lib/content';

export default function NotFound() {
  const { language } = useLanguage();
  const pageContent = content[language].notFound;

  return (
    <div className="container mx-auto flex h-[calc(100vh-8rem)] items-center justify-center text-center px-4">
      <div>
        <p className="text-8xl font-black text-primary text-glow font-headline">404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-5xl font-headline">
          {pageContent.title}
        </h1>
        <p className="mt-6 text-base leading-7 text-muted-foreground">
          {pageContent.description}
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Button asChild>
            <Link href="/">
              <ArrowLeft className="mr-2 h-5 w-5" />
              {pageContent.goHome}
            </Link>
          </Button>
          <Button variant="link" asChild>
            <Link href="/about#contact">{pageContent.contactSupport} <span aria-hidden="true">&rarr;</span></Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
