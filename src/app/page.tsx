import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight } from 'lucide-react';
import { Mail, Phone, MapPin, Briefcase, GraduationCap, Cake } from 'lucide-react';

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
            Thac Nguyen Dinh Vu
          </h1>
          <p className="mt-4 text-lg md:text-2xl text-foreground/80">
            Intern Graphic Designer
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

      <section className="py-16 md:py-24 bg-background/50">
        <div className="container mx-auto px-4">
            <h2 className="text-center font-headline text-3xl md:text-4xl font-bold mb-12">
              Thông tin <span className="text-primary text-glow">Cơ bản</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="flex items-start gap-4">
                <Briefcase className="h-6 w-6 mt-1 text-primary"/>
                <div>
                  <h3 className="font-semibold">Chức danh</h3>
                  <p className="text-muted-foreground">Intern Graphic Designer</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <GraduationCap className="h-6 w-6 mt-1 text-primary"/>
                <div>
                  <h3 className="font-semibold">Lĩnh vực học</h3>
                  <p className="text-muted-foreground">Information Technology student (Third year, Phenikaa University)</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Cake className="h-6 w-6 mt-1 text-primary"/>
                <div>
                  <h3 className="font-semibold">Ngày sinh</h3>
                  <p className="text-muted-foreground">20 July 2003</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="h-6 w-6 mt-1 text-primary"/>
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-muted-foreground">nguyendinhvu5207.des@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="h-6 w-6 mt-1 text-primary"/>
                <div>
                  <h3 className="font-semibold">Điện thoại</h3>
                  <p className="text-muted-foreground">(+84)96 466 4117</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="h-6 w-6 mt-1 text-primary"/>
                <div>
                  <h3 className="font-semibold">Địa chỉ</h3>
                  <p className="text-muted-foreground">Ha Dong, Ha Noi, Viet Nam</p>
                </div>
              </div>
            </div>
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
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
