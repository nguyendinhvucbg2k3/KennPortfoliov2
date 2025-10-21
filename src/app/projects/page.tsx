'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import type { Project } from '@/lib/types';
import { projects as placeholderProjects } from '@/lib/placeholder-data';
import { useLanguage } from '@/context/language-context';
import { content } from '@/lib/content';
import { motion } from 'framer-motion';

export default function ProjectsPage() {
  const { language } = useLanguage();
  const pageContent = content[language].projects;

  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching data
    setProjects(placeholderProjects);
    setIsLoading(false);
  }, []);

  const behanceProfileUrl = "https://www.behance.net/TNDVKenn";

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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
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
         <Button asChild size="lg" className="mt-8 group transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-accent/30">
            <Link href={behanceProfileUrl} target="_blank" rel="noopener noreferrer">
                {pageContent.viewOnBehance} <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
        </Button>
      </div>

      <motion.div 
        className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {isLoading ? (
          Array.from({ length: 6 }).map((_, i) => (
            <Card key={i} className="overflow-hidden">
              <div className="aspect-video bg-muted/50 animate-pulse" />
              <CardHeader>
                <div className="h-6 w-3/4 bg-muted/50 rounded animate-pulse" />
              </CardHeader>
              <CardContent>
                <div className="h-4 w-full bg-muted/50 rounded animate-pulse mb-2" />
                <div className="h-4 w-2/3 bg-muted/50 rounded animate-pulse" />
              </CardContent>
              <CardFooter>
                 <div className="h-9 w-28 bg-muted/50 rounded-md animate-pulse" />
              </CardFooter>
            </Card>
          ))
        ) : (
          projects.map(project => (
            <motion.div key={project.id} variants={itemVariants}>
              <Card className="overflow-hidden flex flex-col h-full group">
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={project.image.src}
                    alt={project.image.alt}
                    fill
                    className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                    data-ai-hint={project.image.aiHint}
                  />
                </div>
                <div className="flex flex-col flex-grow p-6">
                  <div className="flex-grow">
                    <Badge variant="secondary" className="mb-2">{project.category}</Badge>
                    <CardTitle className="font-headline text-xl mb-2">{project.name}</CardTitle>
                    <p className="text-muted-foreground line-clamp-2">{project.shortDescription}</p>
                  </div>
                  <div className="mt-4">
                    <Button asChild variant="link" className="p-0 text-base">
                      <Link href={`/projects/${project.slug}`}>
                        {pageContent.viewProject} <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))
        )}
      </motion.div>
    </div>
  );
}
