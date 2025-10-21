'use client';

import React from 'react';
import { notFound, useParams } from 'next/navigation';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import type { Project } from '@/lib/types';
import { useLanguage } from '@/context/language-context';
import { content } from '@/lib/content';
import { projects } from '@/lib/placeholder-data';
import { motion } from 'framer-motion';

export default function ProjectPage() {
  const params = useParams();
  const slug = params.slug as string;
  
  const { language } = useLanguage();
  const pageContent = content[language].projectDetail;

  const project = projects.find(p => p.slug === slug || p.id === slug);

  if (!project) {
    notFound();
  }

  const proseStyles = `
    prose-p:text-foreground/80
    prose-headings:text-foreground 
    prose-strong:text-foreground
    prose-a:text-primary hover:prose-a:text-primary/90
    prose-blockquote:border-l-primary
  `;

  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-4xl mx-auto">
        <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
        >
            <Button asChild variant="ghost" className="pl-0 hover:bg-transparent hover:text-primary">
              <Link href="/projects">
                <ArrowLeft className="mr-2 h-4 w-4" />
                {pageContent.backToProjects}
              </Link>
            </Button>
        </motion.div>

        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4 text-sm">{project.category}</Badge>
          <h1 className="font-headline text-4xl md:text-6xl font-bold text-primary text-glow">
            {project.name}
          </h1>
          <p className="text-muted-foreground mt-2 text-lg">{project.year}</p>
        </div>

        <motion.div 
          className="relative aspect-video rounded-lg overflow-hidden mb-12 shadow-2xl shadow-black/30 border border-border"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Image
            src={project.image.src}
            alt={project.image.alt}
            fill
            className="object-cover"
            data-ai-hint={project.image.aiHint}
          />
        </motion.div>

        <motion.div 
          className={`prose prose-invert prose-lg max-w-none mx-auto ${proseStyles}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
            <h2 className="font-headline text-3xl text-primary">{pageContent.aboutTitle}</h2>
            <p>{project.description}</p>
            <h2 className="font-headline text-3xl text-primary mt-12">{pageContent.principlesTitle}</h2>
            <p>{project.designPrinciples}</p>
        </motion.div>
        
        {project.behanceUrl && (
          <div className="mt-16 text-center">
              <Button asChild size="lg" className="group">
                  <Link href={project.behanceUrl} target="_blank" rel="noopener noreferrer">
                      {pageContent.behanceButton} <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
              </Button>
          </div>
        )}
      </div>
    </div>
  );
}
