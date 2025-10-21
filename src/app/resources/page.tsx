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
import { useMemo } from 'react';
import { useLanguage } from '@/context/language-context';
import { content } from '@/lib/content';
import { resources } from '@/lib/placeholder-data';
import { motion } from 'framer-motion';

export default function ResourcesPage() {
  const { language } = useLanguage();
  const pageContent = content[language].resources;

  const resourcesByCategory = useMemo(() => {
    return resources.reduce((acc, resource) => {
      const { category } = resource;
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(resource);
      return acc;
    }, {} as Record<string, Resource[]>);
  }, []);

  const defaultAccordionValue = useMemo(() => {
    const keys = Object.keys(resourcesByCategory);
    return keys.length > 0 ? [keys[0]] : [];
  }, [resourcesByCategory]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1
    }
  };

  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="text-center">
        <h1 className="font-headline text-4xl md:text-6xl font-bold text-primary text-glow">
          {pageContent.title}
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          {pageContent.description}
        </p>
      </div>

      <div className="max-w-3xl mx-auto mt-12">
        {defaultAccordionValue.length > 0 && (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <Accordion type="multiple" className="w-full space-y-4" defaultValue={defaultAccordionValue}>
              {Object.entries(resourcesByCategory).map(([category, resourcesInCategory]) => (
                  <motion.div key={category} variants={itemVariants}>
                    <AccordionItem value={category} className="bg-card/80 border border-border backdrop-blur-sm rounded-lg px-4">
                      <AccordionTrigger className="text-xl font-headline hover:text-primary hover:no-underline">
                          {category}
                      </AccordionTrigger>
                      <AccordionContent>
                          <div className="space-y-4 pt-2">
                          {resourcesInCategory.map((resource) => (
                              <Link
                              key={resource.id}
                              href={resource.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block p-4 rounded-md bg-background/50 hover:bg-background/100 transition-colors group border border-transparent hover:border-primary/30"
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
                  </motion.div>
              ))}
              </Accordion>
            </motion.div>
        )}
      </div>
    </div>
  );
}
