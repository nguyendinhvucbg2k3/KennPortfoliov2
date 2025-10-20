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
import { skills as placeholderSkills } from "@/lib/placeholder-data";
import { useState, useEffect } from "react";

const PhotoshopIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}><path d="M12.37.21L.36 7.43v9.14l12.01 7.22 11.96-7.22V7.43L12.37.21zM2.86 15.6V8.51l9.51-5.71 9.51 5.71v7.09l-9.51 5.71-9.51-5.71zm4.72-5.48c.5-.66 1.04-1.2 1.63-1.63.58-.44 1.2-.7 1.83-.81.63-.12 1.25-.03 1.86.25.61.28 1.15.73 1.58 1.32.44.59.67 1.29.67 2.01 0 .61-.13 1.2-.4 1.74-.27.54-.62.99-1.04 1.34s-.91.59-1.46.72c-.55.13-1.12.14-1.68.04-.56-.1-1.09-.32-1.57-.65-.48-.33-.89-.76-1.22-1.28l1.7-1.02c.21.33.47.62.78.85.31.23.66.4.04.49.38.09.77.09 1.15.02.38-.07.74-.22 1.07-.44.33-.22.6-.52.79-.87.19-.35.29-.75.29-1.16 0-.52-.13-.98-.4-1.39s-.6-.74-1-.97c-.4-.23-.85-.34-1.33-.31-.48.03-.94.19-1.35.45-.41.26-.75.63-1.01 1.08l-1.7-1.02zM8.33 9.01h2.23v6.05H8.33V9.01z" fill="currentColor"/></svg>
);
const IllustratorIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}><path d="M12.13.21L.12 7.43v9.14l12.01 7.22 12-7.22V7.43L12.13.21zM2.62 15.6V8.51l9.51-5.71 9.51 5.71v7.09l-9.51 5.71-9.51-5.71zm5.34-7.53l-1.77.36 4.35 10.1h2.32l4.35-10.1-1.77-.36L12.1 13.7zm7.04-1.04c.18.63.27 1.3.27 2s-.09 1.37-.27 2h1.86c.1-.65.15-1.32.15-2s-.05-1.35-.15-2h-1.86z" fill="currentColor"/></svg>
);
const FigmaIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}><path d="M15.9 2.09c-2.73 0-4.95 2.22-4.95 4.95s2.22 4.95 4.95 4.95c2.73 0 4.95-2.22 4.95-4.95S18.63 2.09 15.9 2.09zM8.1 2.09c-2.73 0-4.95 2.22-4.95 4.95s2.22 4.95 4.95 4.95v-9.9zM3.15 11.99c0 2.73 2.22 4.95 4.95 4.95v-4.95h-4.95zm4.95 4.95c0 2.73 2.22 4.95 4.95 4.95s4.95-2.22 4.95-4.95h-9.9zM13.05 12V7.04c0-2.73 2.22-4.95 4.95-4.95v9.9h-4.95z" fill="currentColor"/></svg>
);
const CanvaIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}><path d="M12 2.1C6.53 2.1 2.1 6.53 2.1 12S6.53 21.9 12 21.9 21.9 17.47 21.9 12 17.47 2.1 12 2.1zm0 1.2c5.41 0 9.8 4.39 9.8 9.8s-4.39 9.8-9.8 9.8-9.8-4.39-9.8-9.8 4.39-9.8 9.8-9.8zM12 7.18c-2.66 0-4.82 2.16-4.82 4.82s2.16 4.82 4.82 4.82 4.82-2.16 4.82-4.82-2.16-4.82-4.82-4.82zm0 1.2c1.99 0 3.62 1.63 3.62 3.62s-1.63 3.62-3.62 3.62-3.62-1.63-3.62-3.62 1.63-3.62 3.62-3.62zm-3.63 5.46h1.9v1.8h-1.9zm2.42 0h1.9v1.8h-1.9zm2.43 0h1.9v1.8h-1.9z" fill="currentColor"/></svg>
);
const CapcutIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}><path d="M7.5 3A4.5 4.5 0 003 7.5v9A4.5 4.5 0 007.5 21h9a4.5 4.5 0 004.5-4.5v-9A4.5 4.5 0 0016.5 3h-9zm.39 3.01h8.22c.28 0 .5.23.5.5v.78c0 .28-.22.5-.5.5H7.89c-.28 0-.5-.22-.5-.5v-.78c0-.27.22-.5.5-.5zm4.11 3.25a.8.8 0 01.8.8v2.68a.8.8 0 01-.8.8.8.8 0 01-.8-.8V10.06c0-.44.36-.8.8-.8zM7.89 13.91h8.22c.28 0 .5.22.5.5v.78c0 .28-.22.5-.5.5H7.89c-.28 0-.5-.22-.5-.5v-.78c0-.28.22-.5.5-.5z" fill="currentColor"/></svg>
);

const softwareIcons = [
    { name: "Photoshop", Icon: PhotoshopIcon },
    { name: "Illustrator", Icon: IllustratorIcon },
    { name: "Figma", Icon: FigmaIcon },
    { name: "Canva", Icon: CanvaIcon },
    { name: "Capcut", Icon: CapcutIcon },
];


export default function AboutPage() {
  const { language } = useLanguage();
  const pageContent = content[language].about;
  const aboutImage = PlaceHolderImages.find((img) => img.id === "about-image");
  
  const [skills, setSkills] = useState<Skill[]>([]);
  const [skillsLoading, setSkillsLoading] = useState(true);

  useEffect(() => {
    setSkills(placeholderSkills);
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
      
      <section className="mt-16">
          <div className="flex justify-center items-center gap-6 md:gap-8 flex-wrap">
              {softwareIcons.map(({name, Icon}) => (
                  <div key={name} className="flex flex-col items-center gap-2 group">
                      <div className="relative w-16 h-16 md:w-20 md:h-20 transition-transform duration-300 group-hover:scale-110 text-foreground/80 group-hover:text-primary">
                          <Icon className="w-full h-full" />
                      </div>
                      <p className="text-sm text-muted-foreground transition-colors duration-300 group-hover:text-primary">{name}</p>
                  </div>
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
