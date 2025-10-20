'use client';

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight } from 'lucide-react';
import { Mail, Phone, MapPin, Briefcase, GraduationCap, Cake } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/context/language-context';
import { content } from '@/lib/content';
import { experiences as placeholderExperiences, personalInfo as placeholderPersonalInfo } from '@/lib/placeholder-data';
import type { PersonalInfo, Experience } from '@/lib/types';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { NeonBloomLogo } from '@/components/icons/NeonBloomLogo';

export default function Home() {
  const { language } = useLanguage();
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-background');
  
  const [personalInfo, setPersonalInfo] = useState<PersonalInfo | null>(null);
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching data
    setPersonalInfo(placeholderPersonalInfo);
    setExperiences(placeholderExperiences);
    setIsLoading(false);
  }, []);
  
  const pageContent = content[language].home;

  return (
    <div className="flex flex-col">
      <section className="relative w-full h-[60vh] md:h-[80vh] flex items-center justify-center text-center overflow-hidden">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover"
            priority
            data-ai-hint={heroImage.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        <div className="relative z-10 p-4 max-w-4xl mx-auto">
          {isLoading ? (
             <div className="h-20 bg-muted/50 rounded-md animate-pulse w-3/4 mx-auto" />
          ) : (
            <>
              <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-bold text-glow">
                KENN
              </h1>
            </>
          )}
           <p className="mt-4 text-lg md:text-2xl text-foreground/80">
             {personalInfo?.title || pageContent.title}
          </p>
          <p className="mt-6 max-w-2xl mx-auto text-base md:text-lg text-foreground/70">
            {pageContent.introduction}
          </p>
          <Button asChild size="lg" className="mt-8 group transition-all duration-300 ease-in-out hover:box-glow-accent">
            <Link href="/projects">
              {pageContent.exploreWork} <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background/50">
        <div className="container mx-auto px-4">
            <h2 className="text-center font-headline text-3xl md:text-4xl font-bold mb-12">
              {pageContent.basicInfo.title} <span className="text-primary text-glow">{pageContent.basicInfo.highlight}</span>
            </h2>
             {isLoading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="h-6 w-6 mt-1 bg-muted/50 rounded animate-pulse"/>
                    <div className="w-full">
                      <div className="h-5 w-1/3 bg-muted/50 rounded animate-pulse mb-2" />
                      <div className="h-4 w-2/3 bg-muted/50 rounded animate-pulse" />
                    </div>
                  </div>
                ))}
              </div>
             ) : personalInfo && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10 max-w-6xl mx-auto">
                <div className="flex items-start gap-4">
                  <Briefcase className="h-6 w-6 mt-1 text-primary flex-shrink-0"/>
                  <div>
                    <h3 className="font-semibold">{pageContent.basicInfo.jobTitle}</h3>
                    <p className="text-muted-foreground">{personalInfo.title}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <GraduationCap className="h-6 w-6 mt-1 text-primary flex-shrink-0"/>
                  <div>
                    <h3 className="font-semibold">{pageContent.basicInfo.fieldOfStudy}</h3>
                    <p className="text-muted-foreground">{personalInfo.fieldOfStudy}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Cake className="h-6 w-6 mt-1 text-primary flex-shrink-0"/>
                  <div>
                    <h3 className="font-semibold">{pageContent.basicInfo.dateOfBirth}</h3>
                    <p className="text-muted-foreground">{personalInfo.dateOfBirth}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 mt-1 text-primary flex-shrink-0"/>
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-muted-foreground">{personalInfo.email}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 mt-1 text-primary flex-shrink-0"/>
                  <div>
                    <h3 className="font-semibold">{pageContent.basicInfo.phone}</h3>
                    <p className="text-muted-foreground">{personalInfo.phone}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 mt-1 text-primary flex-shrink-0"/>
                  <div>
                    <h3 className="font-semibold">{pageContent.basicInfo.address}</h3>
                    <p className="text-muted-foreground">{personalInfo.address}</p>
                  </div>
                </div>
              </div>
             )}
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-center font-headline text-3xl md:text-4xl font-bold mb-16">
            {pageContent.experience.title} <span className="text-primary text-glow">{pageContent.experience.highlight}</span>
          </h2>
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-0.5 h-full bg-border"></div>
            <div className="space-y-12">
              {isLoading ? (
                <p>Loading experiences...</p>
              ) : (experiences || []).map((exp, index) => (
                <div key={exp.id} className="relative pl-12 md:pl-0">
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary box-glow-primary"></div>
                   <div className={cn("md:w-1/2", index % 2 === 0 ? 'md:ml-auto md:pl-8' : 'md:text-right md:pr-8')}>
                     <Card className="bg-card/50 border-border/50">
                        <CardHeader className={cn(index % 2 !== 0 && "md:text-right")}>
                          <CardTitle className="font-headline text-xl flex flex-col md:flex-row justify-between items-start md:items-center gap-1">
                            <span>{exp.title}</span>
                            <span className="text-sm font-normal text-muted-foreground order-first md:order-last">{exp.date}</span>
                          </CardTitle>
                          <p className="text-primary font-semibold">{exp.organization}</p>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground">{exp.description}</p>
                        </CardContent>
                      </Card>
                   </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background/50">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">
              {pageContent.callToAction.title} <span className="text-primary text-glow">{pageContent.callToAction.highlight}</span>
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              {pageContent.callToAction.description}
            </p>
            <Button asChild variant="outline" size="lg" className="mt-8">
              <Link href="/contact">{pageContent.callToAction.button}</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
