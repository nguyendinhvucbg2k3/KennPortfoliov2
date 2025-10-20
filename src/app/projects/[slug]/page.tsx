'use client';

import React from 'react';
import { notFound, useParams } from 'next/navigation';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import type { Project } from '@/lib/types';
import { useLanguage } from '@/context/language-context';
import { content } from '@/lib/content';
import { projects as placeholderProjects } from '@/lib/placeholder-data';
// import { useDoc, useFirestore, useMemoFirebase } from '@/firebase';
// import { doc } from 'firebase/firestore';


export default function ProjectPage() {
  const params = useParams();
  const slug = params.slug as string;
  
  const { language } = useLanguage();
  const pageContent = content[language].projectDetail;
  // const firestore = useFirestore();

  const [project, setProject] = React.useState<Project | undefined>();
  const [isLoading, setIsLoading] = React.useState(true);

  // const projectRef = useMemoFirebase(() => firestore && slug ? doc(firestore, 'projects', slug) : null, [firestore, slug]);
  // const { data: project, isLoading, error } = useDoc<Project>(projectRef);
  React.useEffect(() => {
    setIsLoading(true);
    const foundProject = placeholderProjects.find(p => p.slug === slug || p.id === slug);
    setProject(foundProject);
    setIsLoading(false);
  }, [slug]);

  React.useEffect(() => {
    if (!isLoading && !project) {
      notFound();
    }
  }, [isLoading, project]);

  if (isLoading) {
    return <div className="flex items-center justify-center h-screen">Loading project...</div>;
  }
  
  if (!project) {
    return null;
  }

  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">{project.category}</Badge>
          <h1 className="font-headline text-4xl md:text-6xl font-bold text-glow">
            {project.name}
          </h1>
          <p className="text-muted-foreground mt-2 text-lg">{project.year}</p>
        </div>

        <div className="relative aspect-video rounded-lg overflow-hidden mb-12">
          <Image
            src={project.image.src}
            alt={project.image.alt}
            fill
            className="object-cover"
            data-ai-hint={project.image.aiHint}
          />
        </div>

        <div className="prose prose-invert prose-lg max-w-none mx-auto">
            <h2 className="font-headline text-3xl text-primary text-glow">{pageContent.aboutTitle}</h2>
            <p>{project.description}</p>
            <h2 className="font-headline text-3xl text-primary text-glow">{pageContent.principlesTitle}</h2>
            <p>{project.designPrinciples}</p>
        </div>
        
        <div className="mt-12 text-center">
            <Button asChild size="lg" className="group transition-all duration-300 ease-in-out hover:box-glow-accent">
                <Link href={project.behanceUrl} target="_blank" rel="noopener noreferrer">
                    {pageContent.behanceButton} <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
            </Button>
        </div>
      </div>
    </div>
  );
}
