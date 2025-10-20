import { resources } from "@/lib/placeholder-data";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

export default function ResourcesPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="text-center">
        <h1 className="font-headline text-4xl md:text-6xl font-bold text-glow">
          Resource Hub
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          A curated collection of my favorite tools, websites, and resources for design and creativity.
        </p>
      </div>

      <div className="max-w-3xl mx-auto mt-12">
        <Accordion type="single" collapsible className="w-full" defaultValue="item-0">
          {resources.map((categoryItem, index) => (
            <AccordionItem key={categoryItem.category} value={`item-${index}`}>
              <AccordionTrigger className="text-xl font-headline hover:text-primary">
                {categoryItem.category}
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4 pt-2">
                  {categoryItem.resources.map((resource) => (
                    <Link
                      key={resource.title}
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block p-4 rounded-lg bg-card/50 hover:bg-card transition-colors group"
                    >
                      <div className="flex justify-between items-center">
                        <div>
                          <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">{resource.title}</h3>
                          <p className="text-sm text-muted-foreground">{resource.description}</p>
                        </div>
                        <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                      </div>
                    </Link>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
