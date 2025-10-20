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

  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="text-center">
        <h1 className="font-headline text-4xl md:text-6xl font-bold text-glow">
          {pageContent.title}
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          {pageContent.description}
        </p>
         <Button asChild size="lg" className="mt-8 group transition-all duration-300 ease-in-out hover:box-glow-accent">
            <Link href={behanceProfileUrl} target="_blank" rel="noopener noreferrer">
                Xem toàn bộ trên Behance <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
        </Button>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {isLoading ? (
          Array.from({ length: 6 }).map((_, i) => (
            <Card key={i} className="overflow-hidden bg-card/50">
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
            <Card key={project.id} className="overflow-hidden bg-card/50 flex flex-col">
              <div className="relative aspect-video">
                <Image
                  src={project.image.src}
                  alt={project.image.alt}
                  fill
                  className="object-cover"
                  data-ai-hint={project.image.aiHint}
                />
              </div>
              <div className="flex flex-col flex-grow">
                <CardHeader>
                  <CardTitle className="font-headline text-xl">{project.name}</CardTitle>
                  <Badge variant="secondary" className="w-fit">{project.category}</Badge>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground line-clamp-2">{project.shortDescription}</p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="link" className="p-0">
                    <Link href={`/projects/${project.slug}`}>
                      {pageContent.viewProject} <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </div>
            </Card>
          ))
        )}
      </div>
    </div>
  );
}
