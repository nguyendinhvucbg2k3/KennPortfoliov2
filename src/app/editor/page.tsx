'use client';

import React, { useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, PlayCircle } from 'lucide-react';
import { editorProjects } from '@/lib/placeholder-data';
import { useLanguage } from '@/context/language-context';
import { content } from '@/lib/content';
import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import type { EditorProject, EditorProjectCategory } from '@/lib/types';


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


const ProjectGrid = ({ projects, pageContent }: { projects: EditorProject[], pageContent: any }) => {
    if (projects.length === 0) {
        return (
            <div className="text-center text-muted-foreground py-16">
                Không có dự án nào trong mục này.
            </div>
        )
    }
    return (
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {projects.map(project => (
            <motion.div key={project.id} variants={itemVariants}>
              <Link href={`/editor/${project.slug}`} className="block group">
                <Card className="overflow-hidden flex flex-col h-full bg-card/80 transition-all duration-300 ease-out hover:border-primary/50 hover:shadow-primary/10">
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={project.image.src}
                      alt={project.image.alt}
                      fill
                      className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                      data-ai-hint={project.image.aiHint}
                    />
                     <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <PlayCircle className="h-16 w-16 text-white/80" />
                    </div>
                  </div>
                  <CardContent className="flex flex-col flex-grow p-6">
                    <div className="flex-grow">
                      <h3 className="font-headline text-xl mb-2 text-foreground">{project.name}</h3>
                      <p className="text-muted-foreground text-sm line-clamp-2">{project.description}</p>
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
    )
}

export default function EditorPage() {
  const { language } = useLanguage();
  const pageContent = content[language].editor;

  const categories = useMemo(() => {
    const categorySet = new Set(editorProjects.map(p => p.category));
    return Array.from(categorySet) as EditorProjectCategory[];
  }, []);

  const categoryLabels = {
    vi: content.vi.editor.categories,
    en: content.en.editor.categories
  }

  const getCategoryLabel = (category: EditorProjectCategory) => {
    if (language === 'vi') {
        return category; // The data is already in Vietnamese
    }
    // Map Vietnamese category to English key
    switch (category) {
        case 'Cá nhân': return categoryLabels.en.personal;
        case 'Công việc': return categoryLabels.en.work;
        case 'Sở thích': return categoryLabels.en.hobby;
        default: return category;
    }
  }

  return (
    <div className="page-background">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center">
          <h1 className="font-headline text-4xl md:text-6xl font-bold text-primary text-glow">
            {pageContent.title}
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            {pageContent.description}
          </p>
        </div>

        <div className="mt-16">
            <Tabs defaultValue={categories[0]} className="w-full">
                <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-8">
                    {categories.map(category => (
                        <TabsTrigger key={category} value={category}>
                            {getCategoryLabel(category)}
                        </TabsTrigger>
                    ))}
                </TabsList>
                {categories.map(category => (
                    <TabsContent key={category} value={category}>
                        <ProjectGrid 
                            projects={editorProjects.filter(p => p.category === category)}
                            pageContent={pageContent}
                        />
                    </TabsContent>
                ))}
            </Tabs>
        </div>
      </div>
    </div>
  );
}
