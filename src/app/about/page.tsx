import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { skills } from "@/lib/placeholder-data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Download } from "lucide-react";

export default function AboutPage() {
  const aboutImage = PlaceHolderImages.find((img) => img.id === "about-image");

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
            My Design Philosophy
          </h1>
          <p className="mt-6 text-lg text-foreground/80 leading-relaxed">
            I believe design is a powerful tool for communication and problem-solving. My work is driven by a passion for creating experiences that are not only visually stunning but also intuitive, meaningful, and accessible to everyone. I thrive on the challenge of transforming complex ideas into simple, elegant solutions.
          </p>
          <p className="mt-4 text-lg text-foreground/80 leading-relaxed">
            Inspired by the vibrant energy of cyberpunk and the delicate beauty of nature, I aim to create a unique 'neon garden' aesthetic. This fusion of the synthetic and the organic allows me to explore themes of growth, technology, and the future of visual communication.
          </p>
          <Button size="lg" className="mt-8">
            <Download className="mr-2 h-5 w-5" />
            Download My Resume
          </Button>
        </div>
      </section>

      <section className="mt-24">
        <h2 className="text-center font-headline text-3xl md:text-4xl font-bold">
          My <span className="text-primary text-glow">Skills</span>
        </h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill) => (
            <Card key={skill.name} className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle className="text-xl font-headline">{skill.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{skill.description}</p>
                <Progress value={skill.level} className="h-2" />
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="contact" className="mt-24 text-center bg-card p-8 md:p-16 rounded-lg">
        <h2 className="font-headline text-3xl md:text-4xl font-bold">
          Let's Build the <span className="text-accent text-glow-accent">Future</span> Together
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          I'm currently available for freelance projects and full-time opportunities. If you have an idea you'd like to discuss, I'd love to hear from you.
        </p>
        <Button asChild size="lg" className="mt-8">
          <Link href="mailto:hello@alexdoe.com">
            Contact Me
          </Link>
        </Button>
      </section>
    </div>
  );
}
