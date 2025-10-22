'use client';

import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Download } from "lucide-react";
import { useLanguage } from "@/context/language-context";
import { content } from "@/lib/content";
import { motion } from "framer-motion";
import { PhotoshopIcon } from "@/components/icons/PhotoshopIcon";
import { IllustratorIcon } from "@/components/icons/IllustratorIcon";
import { FigmaIcon } from "@/components/icons/FigmaIcon";
import { CanvaIcon } from "@/components/icons/CanvaIcon";
import { CapcutIcon } from "@/components/icons/CapcutIcon";
import { SkillsChart } from "@/components/charts/skills-chart";
import { skills }from "@/lib/placeholder-data";

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

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } },
  };

  return (
    <div className="page-background">
      <div className="container mx-auto px-4 py-16 md:py-24 space-y-24 md:space-y-32">
        <section className="grid md:grid-cols-3 gap-12 items-center">
          <motion.div 
            className="md:col-span-1"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            {aboutImage && (
              <div className="relative aspect-square rounded-lg overflow-hidden group">
                <Image
                  src={aboutImage.imageUrl}
                  alt={aboutImage.description}
                  fill
                  className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                  data-ai-hint={aboutImage.imageHint}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
            )}
          </motion.div>
          <motion.div 
            className="md:col-span-2"
            initial="hidden"
            animate="visible"
            variants={cardVariants}
          >
            <motion.h1 variants={cardVariants} className="font-headline text-4xl md:text-6xl font-bold text-primary text-glow">
              {pageContent.philosophyTitle}
            </motion.h1>
            <motion.p variants={cardVariants} className="mt-6 text-lg text-foreground/80 leading-relaxed">
              {pageContent.philosophyP1}
            </motion.p>
            <motion.p variants={cardVariants} className="mt-4 text-lg text-foreground/80 leading-relaxed">
              {pageContent.philosophyP2}
            </motion.p>
            <motion.div variants={cardVariants}>
              <Button size="lg" className="mt-8">
                <Download className="mr-2 h-5 w-5" />
                {pageContent.downloadResume}
              </Button>
            </motion.div>
          </motion.div>
        </section>

        <section>
          <h2 className="text-center font-headline text-3xl md:text-4xl font-bold text-primary text-glow">
            {pageContent.educationTitle} {pageContent.educationHighlight}
          </h2>
          <motion.div 
            className="mt-12 max-w-2xl mx-auto space-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
          >
              <motion.div variants={cardVariants} className="p-6 bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg">
                  <h3 className="text-xl font-headline">Phenikaa University — INFORMATION TECHNOLOGY</h3>
                  <p className="text-muted-foreground">2021 — now</p>
              </motion.div>
               <motion.div variants={cardVariants} className="p-6 bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg">
                  <h3 className="text-xl font-headline">Chuyên Bắc Giang High School</h3>
                  <p className="text-muted-foreground">2018 — 2021</p>
              </motion.div>
          </motion.div>
        </section>

        <section>
          <h2 className="text-center font-headline text-3xl md:text-4xl font-bold text-primary text-glow">
            {pageContent.skillsTitle} {pageContent.skillsHighlight}
          </h2>
          <motion.div
            className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={cardVariants}
          >
            {skills.map((skill) => (
              <motion.div key={skill.id} variants={cardVariants} className="flex flex-col items-center gap-4">
                <SkillsChart value={skill.level} />
                <div className="text-center">
                  <h3 className="font-headline text-sm uppercase tracking-wider">{skill.name}</h3>
                  <p className="text-xs text-muted-foreground mt-1">{skill.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>
        
        <section>
            <motion.div 
              className="flex justify-center items-center gap-6 md:gap-8 flex-wrap"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
            >
                {softwareIcons.map(({name, Icon}) => (
                    <motion.div 
                      key={name} 
                      variants={cardVariants} 
                      className="flex flex-col items-center gap-2 group"
                    >
                        <motion.div 
                          className="relative w-16 h-16 md:w-20 md:h-20 text-foreground/80 group-hover:text-primary transition-colors duration-300"
                          whileHover={{ scale: 1.1, y: -5 }}
                        >
                            <Icon className="w-full h-full" />
                        </motion.div>
                        <p className="text-sm text-muted-foreground transition-colors duration-300 group-hover:text-primary">{name}</p>
                    </motion.div>
                ))}
            </motion.div>
        </section>


        <section id="contact" className="text-center bg-card/50 border border-border/50 backdrop-blur-sm p-8 md:p-16 rounded-lg">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary text-glow">
            {pageContent.contactTitle} {pageContent.contactHighlight} Together
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
    </div>
  );
}
