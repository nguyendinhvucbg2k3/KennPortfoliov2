'use client';

import { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { AnimatePresence, motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import type { Project } from '@/lib/types';
import { projectCategories as staticCategories } from '@/lib/placeholder-data'; 
import { useLanguage } from '@/context/language-context';
import { content } from '@/lib/content';
import { useCollection, useFirestore, useMemoFirebase } from '@/firebase';
import { collection, query, where } from 'firebase/firestore';


export default function ProjectsPage() {
  const { language } = useLanguage();
  const pageContent = content[language].projects;
  const [activeCategory, setActiveCategory] = useState('All');
  const firestore = useFirestore();

  const projectsQuery = useMemoFirebase(() => {
    if (!firestore) return null;
    if (activeCategory === 'All') {
      return collection(firestore, 'projects');
    } else {
      return query(collection(firestore, 'projects'), where('category', '==', activeCategory));
    }
  }, [firestore, activeCategory]);

  const { data: projects, isLoading } = useCollection<Project>(projectsQuery);

  const projectCategories = useMemo(() => {
    // Using static categories for the filter buttons to avoid complexity
    return staticCategories;
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

      <div className="flex justify-center flex-wrap gap-2 mt-12">
        {projectCategories.map((category) => (
          <Button
            key={category}
            variant={activeCategory === category ? 'default' : 'secondary'}
            onClick={() => setActiveCategory(category)}
            className={cn(
              'transition-colors',
              activeCategory === category && 'box-glow-primary'
            )}
          >
            {category}
          </Button>
        ))}
      </div>

      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
      >
        <AnimatePresence>
          {isLoading ? (
             Array.from({ length: 6 }).map((_, i) => (
                <motion.div
                    key={`skeleton-${i}`}
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <Card className="h-full overflow-hidden">
                        <div className="relative aspect-video bg-muted/50 animate-pulse" />
                        <CardHeader>
                            <div className="h-6 w-3/4 bg-muted/50 rounded animate-pulse" />
                        </CardHeader>
                        <CardContent>
                            <div className="h-4 w-full bg-muted/50 rounded animate-pulse mb-2" />
                            <div className="h-4 w-2/3 bg-muted/50 rounded animate-pulse" />
                        </CardContent>
                    </Card>
                </motion.div>
             ))
          ) : (
            (projects || []).map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="h-full overflow-hidden group transition-all duration-300 ease-in-out hover:border-primary hover:shadow-lg hover:shadow-primary/20">
                  <Link
                    href={`/projects/${project.id}`}
                    className="block h-full"
                  >
                    <div className="relative aspect-video overflow-hidden">
                      <Image
                        src={project.image.src}
                        alt={project.image.alt}
                        fill
                        data-ai-hint={project.image.aiHint}
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="font-headline text-xl">
                        {project.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        {project.shortDescription}
                      </p>
                      <div className="text-sm text-primary mt-4 group-hover:text-glow transition-all">
                        {pageContent.viewProject} &rarr;
                      </div>
                    </CardContent>
                  </Link>
                </Card>
              </motion.div>
            ))
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
