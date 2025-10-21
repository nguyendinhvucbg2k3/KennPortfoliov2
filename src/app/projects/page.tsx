'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import { projects } from '@/lib/placeholder-data';
import { useLanguage } from '@/context/language-context';
import { content } from '@/lib/content';
import { motion } from 'framer-motion';

export default function ProjectsPage() {
  const { language } = useLanguage();
  const pageContent = content[language].projects;
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
         <Button asChild size="lg" className="mt-8 group">
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
        {projects.map(project => (
          <motion.div key={project.id} variants={itemVariants}>
            <Link href={`/projects/${project.slug}`} className="block group">
              <Card className="overflow-hidden flex flex-col h-full bg-card/80 transition-all duration-300 ease-out hover:border-primary/50 hover:shadow-primary/10">
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={project.image.src}
                    alt={project.image.alt}
                    fill
                    className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                    data-ai-hint={project.image.aiHint}
                  />
                </div>
                <CardContent className="flex flex-col flex-grow p-6">
                  <div className="flex-grow">
                    <Badge variant="secondary" className="mb-2 text-xs">{project.category}</Badge>
                    <h3 className="font-headline text-xl mb-2 text-foreground">{project.name}</h3>
                    <p className="text-muted-foreground text-sm line-clamp-2">{project.shortDescription}</p>
                  </div>
                  <div className="mt-4">
                      <p className="text-sm text-primary font-semibold flex items-center">
                        {pageContent.viewProject} <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
