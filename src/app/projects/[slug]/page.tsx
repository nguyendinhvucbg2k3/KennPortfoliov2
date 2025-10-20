'use client';

import React from 'react';
import { notFound, useParams } from 'next/navigation';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { CritiqueForm } from '../critique-form';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import type { Project } from '@/lib/types';
import { useLanguage } from '@/context/language-context';
import { content } from '@/lib/content';
import { useDoc, useFirestore, useMemoFirebase } from '@/firebase';
import { doc } from 'firebase/firestore';


export default function ProjectPage() {
  const params = useParams();
  const slug = params.slug as string;
  
  const { language } = useLanguage();
  const pageContent = content[language].projectDetail;
  const firestore = useFirestore();

  // We can't query by slug directly, so we assume the document ID is the slug for simplicity.
  // In a real app, you might query where "slug" === slug.
  const projectRef = useMemoFirebase(() => firestore && slug ? doc(firestore, 'projects', slug) : null, [firestore, slug]);
  
  // NOTE: This implementation fetches a single project by its ID, which we are assuming is the slug.
  // If you need to find a project by a `slug` field, you would use `useCollection` with a `where` clause,
  // and then select the first result.
  const { data: project, isLoading, error } = useDoc<Project>(projectRef);

  React.useEffect(() => {
    // If not loading and no data is found, trigger a 404
    if (!isLoading && !project) {
      notFound();
    }
  }, [isLoading, project]);

  if (isLoading) {
    return <div className="flex items-center justify-center h-screen">Loading project...</div>;
  }
  
  if (!project) {
    // This is handled by the useEffect above, but as a safeguard.
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

        <div className="mt-16">
          <CritiqueForm project={project} />
        </div>

      </div>
    </div>
  );
}
