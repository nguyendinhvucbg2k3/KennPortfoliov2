'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Project } from '@/lib/types';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useLanguage } from '@/context/language-context';
import { content } from '@/lib/content';
// import { useFirestore } from '@/firebase';
// import { collection, doc } from 'firebase/firestore';
// import { setDocumentNonBlocking } from '@/firebase/non-blocking-updates';

const projectSchema = z.object({
  name: z.string().min(1, 'Name is required.'),
  slug: z.string().min(1, 'Slug is required.'),
  category: z.enum(["Branding", "Illustration", "Art Direction", "Packaging", "Graphic Design", "UI/UX", "Web Design", "Game Design"]),
  shortDescription: z.string().min(1, 'Short description is required.'),
  description: z.string().min(1, 'Description is required.'),
  designPrinciples: z.string().min(1, 'Design principles are required.'),
  image: z.object({
    src: z.string().url('Must be a valid URL.'),
    alt: z.string().min(1, 'Alt text is required.'),
    aiHint: z.string().min(1, 'AI hint is required.'),
  }),
  year: z.coerce.number().min(2000, 'Year must be after 2000.'),
  behanceUrl: z.string().url('Must be a valid Behance URL.'),
});

interface ProjectFormProps {
  project?: Project;
  onSave: () => void;
}

export function ProjectForm({ project, onSave }: ProjectFormProps) {
  const { language } = useLanguage();
  const formContent = content[language].admin.projects.form;
  const { toast } = useToast();
  // const firestore = useFirestore();

  const form = useForm<z.infer<typeof projectSchema>>({
    resolver: zodResolver(projectSchema),
    defaultValues: project ? {
      ...project,
      // @ts-ignore
      category: project.category
    } : {
      name: '',
      slug: '',
      category: 'Graphic Design',
      shortDescription: '',
      description: '',
      designPrinciples: '',
      image: { src: '', alt: '', aiHint: '' },
      year: new Date().getFullYear(),
      behanceUrl: '',
    },
  });

  const onSubmit = (values: z.infer<typeof projectSchema>) => {
    // const projectData = { ...values };
    // const docId = project?.id || doc(collection(firestore, 'projects')).id;
    // const docRef = doc(firestore, 'projects', docId);

    // setDocumentNonBlocking(docRef, { ...projectData, id: docId }, { merge: true });

    console.log('Form submitted. In a real app, this would save to a database.', values);
    toast({
      title: project?.id ? 'Project Updated (Simulated)' : 'Project Added (Simulated)',
      description: `Project "${values.name}" has been logged to the console.`,
    });
    onSave();
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField control={form.control} name="name" render={({ field }) => (
          <FormItem><FormLabel>{formContent.name}</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
        )} />
        <FormField control={form.control} name="slug" render={({ field }) => (
          <FormItem><FormLabel>{formContent.slug}</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
        )} />
        <FormField control={form.control} name="category" render={({ field }) => (
            <FormItem>
                <FormLabel>{formContent.category}</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl><SelectTrigger><SelectValue placeholder={formContent.selectCategory} /></SelectTrigger></FormControl>
                    <SelectContent>
                        {["Branding", "Illustration", "Art Direction", "Packaging", "Graphic Design", "UI/UX", "Web Design", "Game Design"].map(cat => (
                            <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                        ))}
                    </SelectContent>
                </Select>
                <FormMessage />
            </FormItem>
        )} />
        <FormField control={form.control} name="year" render={({ field }) => (
          <FormItem><FormLabel>{formContent.year}</FormLabel><FormControl><Input type="number" {...field} /></FormControl><FormMessage /></FormItem>
        )} />
        <FormField control={form.control} name="shortDescription" render={({ field }) => (
            <FormItem><FormLabel>{formContent.shortDesc}</FormLabel><FormControl><Textarea {...field} /></FormControl><FormMessage /></FormItem>
        )} />
        <FormField control={form.control} name="description" render={({ field }) => (
            <FormItem><FormLabel>{formContent.description}</FormLabel><FormControl><Textarea {...field} /></FormControl><FormMessage /></FormItem>
        )} />
        <FormField control={form.control} name="designPrinciples" render={({ field }) => (
            <FormItem><FormLabel>{formContent.principles}</FormLabel><FormControl><Textarea {...field} /></FormControl><FormMessage /></FormItem>
        )} />
        <FormField control={form.control} name="image.src" render={({ field }) => (
          <FormItem><FormLabel>{formContent.imgUrl}</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
        )} />
        <FormField control={form.control} name="image.alt" render={({ field }) => (
          <FormItem><FormLabel>{formContent.imgAlt}</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
        )} />
        <FormField control={form.control} name="image.aiHint" render={({ field }) => (
            <FormItem><FormLabel>{formContent.imgAiHint}</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
        )} />
        <FormField control={form.control} name="behanceUrl" render={({ field }) => (
            <FormItem><FormLabel>{formContent.behanceUrl}</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
        )} />
        <Button type="submit">{formContent.save}</Button>
      </form>
    </Form>
  );
}
