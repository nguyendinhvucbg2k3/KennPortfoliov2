'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Experience } from '@/lib/types';
import { useLanguage } from '@/context/language-context';
import { content } from '@/lib/content';

const experienceSchema = z.object({
  title: z.string().min(1, 'Title is required.'),
  organization: z.string().min(1, 'Organization is required.'),
  date: z.string().min(1, 'Date is required.'),
  description: z.string().min(1, 'Description is required.'),
});

interface ExperienceFormProps {
  experience?: Experience;
  onSave: () => void;
}

export function ExperienceForm({ experience, onSave }: ExperienceFormProps) {
  const { language } = useLanguage();
  const formContent = content[language].admin.experience.form;
  const { toast } = useToast();

  const form = useForm<z.infer<typeof experienceSchema>>({
    resolver: zodResolver(experienceSchema),
    defaultValues: experience || {
      title: '',
      organization: '',
      date: '',
      description: '',
    },
  });

  const onSubmit = (values: z.infer<typeof experienceSchema>) => {
    console.log('Form submitted. In a real app, this would save to a database.', values);
    toast({
      title: experience?.id ? 'Experience Updated (Simulated)' : 'Experience Added (Simulated)',
      description: `Experience entry "${values.title}" has been logged to the console.`,
    });
    onSave();
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField control={form.control} name="title" render={({ field }) => (
          <FormItem><FormLabel>{formContent.title}</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
        )} />
        <FormField control={form.control} name="organization" render={({ field }) => (
          <FormItem><FormLabel>{formContent.organization}</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
        )} />
        <FormField control={form.control} name="date" render={({ field }) => (
          <FormItem><FormLabel>{formContent.date}</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
        )} />
        <FormField control={form.control} name="description" render={({ field }) => (
            <FormItem><FormLabel>{formContent.description}</FormLabel><FormControl><Textarea {...field} /></FormControl><FormMessage /></FormItem>
        )} />
        <Button type="submit">{formContent.save}</Button>
      </form>
    </Form>
  );
}
