'use client';

import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Download } from "lucide-react";
import type { Skill } from "@/lib/types";
import { useLanguage } from "@/context/language-context";
import { content } from "@/lib/content";
import { skills as staticSkills } from '@/lib/placeholder-data';
import { useEffect, useState } from "react";

export default function AboutPage() {
  const { language } = useLanguage();
  const pageContent = content[language].about;
  const aboutImage = PlaceHolderImages.find((img) => img.id === "about-image");

  const [skills, setSkills] = useState<Skill[]>([]);
  const [skillsLoading, setSkillsLoading] = useState(true);

  useEffect(() => {
    setSkills(staticSkills);
    setSkillsLoading(false);
  }, []);

  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <section className="grid md:grid-cols-3 gap-12 items-center">
        <div className="md:col-span-1">
          {aboutImage && (
            <div className="relative aspect-square rounded-lg overflow-hidden transition-all duration-300 ease-in-out hover:box-glow-primary">
              <Image
                src={aboutImage.imageUrl}
                alt={aboutImage.description}
                fill
                className="object-cover"
                data-ai-hint={aboutImage.imageHint}
              />
            </div>
          )}
        </div>
        <div className="md:col-span-2">
          <h1 className="font-headline text-4xl md:text-6xl font-bold text-glow">
            {pageContent.philosophyTitle}
          </h1>
          <p className="mt-6 text-lg text-foreground/80 leading-relaxed">
            {pageContent.philosophyP1}
          </p>
          <p className="mt-4 text-lg text-foreground/80 leading-relaxed">
            {pageContent.philosophyP2}
          </p>
          <Button size="lg" className="mt-8">
            <Download className="mr-2 h-5 w-5" />
            {pageContent.downloadResume}
          </Button>
        </div>
      </section>

      <section className="mt-24">
        <h2 className="text-center font-headline text-3xl md:text-4xl font-bold">
          {pageContent.educationTitle} <span className="text-primary text-glow">{pageContent.educationHighlight}</span>
        </h2>
        <div className="mt-12 max-w-2xl mx-auto space-y-8">
            <div className="p-6 bg-card/50 backdrop-blur-sm border-border/50 rounded-lg">
                <h3 className="text-xl font-headline">Phenikaa University — INFORMATION TECHNOLOGY</h3>
                <p className="text-muted-foreground">2021 — now</p>
            </div>
             <div className="p-6 bg-card/50 backdrop-blur-sm border-border/50 rounded-lg">
                <h3 className="text-xl font-headline">Chuyên Bắc Giang High School</h3>
                <p className="text-muted-foreground">2018 — 2021</p>
            </div>
        </div>
      </section>

      <section className="mt-24">
        <h2 className="text-center font-headline text-3xl md:text-4xl font-bold">
          {pageContent.skillsTitle} <span className="text-primary text-glow">{pageContent.skillsHighlight}</span>
        </h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillsLoading ? (
            Array.from({ length: 4 }).map((_, i) => (
              <Card key={i} className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardHeader>
                  <div className="h-6 w-3/4 bg-muted/50 rounded animate-pulse" />
                </CardHeader>
                <CardContent>
                  <div className="h-4 w-full bg-muted/50 rounded animate-pulse mb-3" />
                  <div className="h-2 w-full bg-muted/50 rounded animate-pulse" />
                </CardContent>
              </Card>
            ))
          ) : (skills || []).map((skill, index) => (
            <Card key={index} className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle className="text-xl font-headline">{skill.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center mb-2">
                  <p className="text-muted-foreground">{skill.description}</p>
                  <span className="text-primary font-semibold">{skill.level}%</span>
                </div>
                <Progress value={skill.level} className="h-2" />
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="contact" className="mt-24 text-center bg-card p-8 md:p-16 rounded-lg">
        <h2 className="font-headline text-3xl md:text-4xl font-bold">
          {pageContent.contactTitle} <span className="text-accent text-glow-accent">{pageContent.contactHighlight}</span> Together
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          {pageContent.contactDescription}
        </p>
        <Button asChild size="lg" className="mt-8">
          <Link href="/contact">
            {pageContent.contactButton}
          </Link>
        </Button>
      </section>
    </div>
  );
}
