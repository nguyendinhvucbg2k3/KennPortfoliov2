"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { projectCritique } from '@/ai/flows/project-critique';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, Wand2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Input } from '@/components/ui/input';

const formSchema = z.object({
  projectName: z.string().min(1, 'Project name is required.'),
  projectDescription: z.string().min(1, 'Project description is required.'),
  designPrinciples: z.string().optional(),
});

type ProjectData = {
  name: string;
  description: string;
  designPrinciples: string;
};

export function CritiqueForm({ project }: { project: ProjectData }) {
  const [critique, setCritique] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      projectName: project.name,
      projectDescription: project.description,
      designPrinciples: project.designPrinciples,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setCritique(null);
    try {
      const result = await projectCritique(values);
      setCritique(result.critique);
    } catch (e) {
      console.error(e);
      toast({
        variant: "destructive",
        title: "Critique Failed",
        description: "There was an error generating the critique. Please try again later.",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Card className="bg-card/50 border-border/50">
      <CardHeader>
        <CardTitle className="font-headline text-2xl flex items-center gap-2">
          <Wand2 className="text-accent" />
          AI Design Critique
        </CardTitle>
        <CardDescription>
          Get an AI-generated critique of this project. You can edit the details below to refine the critique.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="projectName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Project Name</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="projectDescription"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Project Description</FormLabel>
                  <FormControl>
                    <Textarea rows={5} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="designPrinciples"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Design Principles</FormLabel>
                  <FormControl>
                    <Textarea rows={3} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={isLoading} className="transition-all duration-300 ease-in-out hover:box-glow-accent">
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Generating...
                </>
              ) : (
                <>
                  <Wand2 className="mr-2 h-4 w-4" />
                  Generate Critique
                </>
              )}
            </Button>
          </form>
        </Form>

        {(isLoading || critique) && (
          <div className="mt-8">
            <h3 className="font-headline text-xl mb-4 text-glow">Critique Result</h3>
            <Card className="bg-background">
              <CardContent className="p-6">
                {isLoading && (
                  <div className="space-y-2">
                    <div className="h-4 bg-muted rounded w-3/4 animate-pulse"></div>
                    <div className="h-4 bg-muted rounded w-full animate-pulse"></div>
                    <div className="h-4 bg-muted rounded w-5/6 animate-pulse"></div>
                  </div>
                )}
                {critique && <p className="whitespace-pre-wrap">{critique}</p>}
              </CardContent>
            </Card>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
