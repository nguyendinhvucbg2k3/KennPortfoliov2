'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';
import type { Resource } from '@/lib/types';
import { useMemo, useState, useEffect } from 'react';
import { useLanguage } from '@/context/language-context';
import { content } from '@/lib/content';
import { resources as placeholderResources } from '@/lib/placeholder-data';


export default function ResourcesPage() {
  const { language } = useLanguage();
  const pageContent = content[language].resources;
  
  const [resources, setResources] = useState<Resource[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setResources(placeholderResources);
    setIsLoading(false);
  }, []);

  const resourcesByCategory = useMemo(() => {
    if (!resources) return {};
    return resources.reduce((acc, resource) => {
      const { category } = resource;
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(resource);
      return acc;
    }, {} as Record<string, Resource[]>);
  }, [resources]);

  if (isLoading) {
    return (
        <div className="container mx-auto px-4 py-16 md:py-24">
            <div className="text-center">
                <h1 className="font-headline text-4xl md:text-6xl font-bold text-glow">
                    {pageContent.title}
                </h1>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                    {pageContent.loading}
                </p>
            </div>
        </div>
    )
  }

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

      <div className="max-w-3xl mx-auto mt-12">
        <Accordion type="single" collapsible className="w-full" defaultValue={Object.keys(resourcesByCategory)[0]}>
          {Object.entries(resourcesByCategory).map(([category, resourcesInCategory]) => (
            <AccordionItem key={category} value={category}>
              <AccordionTrigger className="text-xl font-headline hover:text-primary">
                {category}
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4 pt-2">
                  {resourcesInCategory.map((resource, index) => (
                    <Link
                      key={resource.id || index}
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block p-4 rounded-lg bg-card/50 hover:bg-card transition-colors group"
                    >
                      <div className="flex justify-between items-center">
                        <div>
                          <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">{resource.title}</h3>
                          <p className="text-sm text-muted-foreground">{resource.description}</p>
                        </div>
                        <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                      </div>
                    </Link>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
