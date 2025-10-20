'use client';

import { useLanguage } from '@/context/language-context';
import { content } from '@/lib/content';

export default function ProjectsPage() {
  const { language } = useLanguage();
  const pageContent = content[language].projects;
  const behanceProfileUrl = "https://www.behance.net/TNDVKenn203";

  return (
    <div className="container mx-auto px-4 py-16 md:py-24 flex flex-col h-[calc(100vh-4rem)]">
      <div className="text-center">
        <h1 className="font-headline text-4xl md:text-6xl font-bold text-glow">
          {pageContent.title}
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          {pageContent.description}
        </p>
      </div>

      <div className="flex-grow mt-12">
        <iframe
          src={behanceProfileUrl}
          className="w-full h-full border-0 rounded-lg shadow-lg"
          title="Behance Profile"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
