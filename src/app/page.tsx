'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Briefcase, Cake, GraduationCap, Mail, MapPin, Phone } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/context/language-context';
import { content } from '@/lib/content';
import { experiences, personalInfo } from '@/lib/placeholder-data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

export default function Home() {
  const { language } = useLanguage();
  const pageContent = content[language].home;
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-background-artistic');


  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } },
  };

  return (
    <div className="flex flex-col">
       <section className="relative w-full min-h-[90vh] md:min-h-screen flex items-center justify-center text-center overflow-hidden">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover z-0"
            data-ai-hint={heroImage.imageHint}
            priority
          />
        )}
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <div className="relative z-20 p-4 max-w-4xl mx-auto flex flex-col items-center">
            <motion.p 
              className="font-headline text-lg md:text-xl text-white tracking-widest uppercase"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
             {personalInfo?.title || pageContent.title}
            </motion.p>
            <motion.h1 
              className="font-headline text-6xl md:text-8xl lg:text-9xl font-black text-primary text-glow my-2"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4, type: "spring", stiffness: 100 }}
            >
              KENN
            </motion.h1>
            <motion.div
              className="flex items-center gap-x-6 font-headline text-lg md:text-xl text-white tracking-widest uppercase"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <span>{personalInfo.footerName}</span>
              <span className='h-4 w-px bg-white/50'></span>
              <span>{new Date().getFullYear()}</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              <Button asChild size="lg" className="mt-12 group">
                <Link href="/projects">
                  {pageContent.exploreWork} <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </motion.div>
        </div>
      </section>

      <div className="relative bg-background">
        <div className="relative z-10">
            <section className="py-16 md:py-24 bg-transparent">
            <div className="container mx-auto px-4">
                <h2 className="text-center font-headline text-3xl md:text-4xl font-bold mb-12 text-primary text-glow">
                    {pageContent.basicInfo.title} {pageContent.basicInfo.highlight}
                </h2>
                    <motion.div 
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10 max-w-4xl mx-auto"
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    >
                    {[
                        { icon: Briefcase, label: pageContent.basicInfo.jobTitle, value: personalInfo.title },
                        { icon: GraduationCap, label: pageContent.basicInfo.fieldOfStudy, value: personalInfo.fieldOfStudy },
                        { icon: Cake, label: pageContent.basicInfo.dateOfBirth, value: personalInfo.dateOfBirth },
                        { icon: Mail, label: 'Email', value: personalInfo.email },
                        { icon: Phone, label: pageContent.basicInfo.phone, value: personalInfo.phone },
                        { icon: MapPin, label: pageContent.basicInfo.address, value: personalInfo.address },
                    ].map((item, i) => (
                        <motion.div key={i} variants={cardVariants} className="flex items-start gap-4">
                            <item.icon className="h-6 w-6 mt-1 text-primary flex-shrink-0"/>
                            <div>
                            <h3 className="font-semibold text-foreground/90">{item.label}</h3>
                            <p className="text-muted-foreground">{item.value}</p>
                            </div>
                        </motion.div>
                    ))}
                    </motion.div>
            </div>
            </section>

            <section className="py-16 md:py-24 bg-transparent">
            <div className="container mx-auto px-4">
                <h2 className="text-center font-headline text-3xl md:text-4xl font-bold mb-16 text-primary text-glow">
                {pageContent.activities.title}{pageContent.activities.highlight}
                </h2>
                <div className="relative max-w-2xl mx-auto">
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-0.5 h-full bg-border/50"></div>
                <div className="space-y-12">
                    {experiences.map((exp, index) => (
                    <motion.div 
                        key={exp.id}
                        className="relative pl-12 md:pl-0"
                        initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="absolute top-1 left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary ring-4 ring-background box-glow-primary"></div>
                        <div className={cn("md:w-[calc(50%-2rem)]", index % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto')}>
                        <Card className="bg-card/80 backdrop-blur-sm">
                            <CardHeader className={cn(index % 2 !== 0 && "md:text-right")}>
                                <CardTitle className="font-headline text-xl flex flex-col md:flex-row justify-between items-start md:items-center gap-1">
                                <span className="md:order-1">{exp.title[language]}</span>
                                <span className="text-sm font-normal text-muted-foreground order-first md:order-last">{exp.date}</span>
                                </CardTitle>
                                <p className="text-primary font-semibold">{exp.organization[language]}</p>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">{exp.description[language]}</p>
                            </CardContent>
                            </Card>
                        </div>
                    </motion.div>
                    ))}
                </div>
                </div>
            </div>
            </section>

            <section className="py-24 md:py-32 bg-transparent">
            <div className="container mx-auto px-4">
                <div className="text-center">
                <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary text-glow">
                    {pageContent.callToAction.title} {pageContent.callToAction.highlight}
                </h2>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                    {pageContent.callToAction.description}
                </p>
                <Button asChild variant="outline" size="lg" className="mt-8 hover:bg-primary hover:text-primary-foreground hover:border-primary">
                    <Link href="/contact">{pageContent.callToAction.button}</Link>
                </Button>
                </div>
            </div>
            </section>
        </div>
      </div>
    </div>
  );
}
