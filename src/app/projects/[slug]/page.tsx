'use client';

import React from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { CritiqueForm } from '../critique-form';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { useFirestore } from '@/firebase';
import { getDocs, collection, query, where, limit } from 'firebase/firestore';
import type { Project } from '@/lib/types';
import { useLanguage } from '@/context/language-context';
import { content } from '@/lib/content';

type ProjectPageProps = {
  params: {
    slug: string;
  };
};

async function getProjectBySlug(slug: string, db: any): Promise<Project | null> {
  if (!db) return null;
  const projectsRef = collection(db, 'projects');
  const q = query(projectsRef, where('slug', '==', slug), limit(1));
  try {
    const querySnapshot = await getDocs(q);
    if (querySnapshot.empty) {
      return null;
    }
    const projectDoc = querySnapshot.docs[0];
    return { id: projectDoc.id, ...projectDoc.data() } as Project;
  } catch (error) {
    console.error("Error fetching project by slug:", error);
    // This could be a permissions error if rules are not set up for server-side access
    // For now, we'll return null and let it 404.
    return null;
  }
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const { language } = useLanguage();
  const pageContent = content[language].projectDetail;
  const firestore = useFirestore();
  const [project, setProject] = React.useState<Project | null>(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    if (firestore) {
      getProjectBySlug(params.slug, firestore).then(p => {
        if (!p) {
          // Explicitly handle not found case after fetch
          notFound();
        } else {
          setProject(p);
        }
      }).catch(() => {
        notFound();
      }).finally(() => {
        setLoading(false);
      });
    }
  }, [firestore, params.slug]);

  // This will never be true if firestore is not available, but it's good practice
  if (!firestore && !loading) {
    return <div className="flex items-center justify-center h-screen">Firebase not available.</div>;
  }

  if (loading) {
    return <div className="flex items-center justify-center h-screen">Loading project...</div>;
  }
  
  if (!project) {
    // This will be caught by the notFound() in useEffect, but as a fallback
    notFound();
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
