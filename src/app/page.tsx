import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-background');

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
          <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-bold text-glow">
            Alex Doe
          </h1>
          <p className="mt-4 text-lg md:text-2xl text-foreground/80">
            Graphic Designer & Digital Artist
          </p>
          <p className="mt-6 max-w-2xl mx-auto text-base md:text-lg text-foreground/70">
            Crafting compelling visual narratives that blend futuristic aesthetics with timeless design principles. Welcome to my neon garden of creativity.
          </p>
          <Button asChild size="lg" className="mt-8 group transition-all duration-300 ease-in-out hover:box-glow-accent">
            <Link href="/projects">
              Explore My Work <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">
              Let's Create Something <span className="text-primary text-glow">Extraordinary</span>
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              Have a project in mind? I'm always open to new collaborations and exciting challenges.
            </p>
            <Button asChild variant="outline" size="lg" className="mt-8">
              <Link href="/about#contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
