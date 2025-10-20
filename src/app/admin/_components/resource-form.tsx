'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Resource } from '@/lib/types';
import { useLanguage } from '@/context/language-context';
import { content } from '@/lib/content';

const resourceSchema = z.object({
  title: z.string().min(1, 'Title is required.'),
  category: z.string().min(1, 'Category is required.'),
  url: z.string().url('Must be a valid URL.'),
  description: z.string().min(1, 'Description is required.'),
});

interface ResourceFormProps {
  resource?: Resource;
  onSave: () => void;
}

export function ResourceForm({ resource, onSave }: ResourceFormProps) {
  const { language } = useLanguage();
  const formContent = content[language].admin.resources.form;
  const { toast } = useToast();

  const form = useForm<z.infer<typeof resourceSchema>>({
    resolver: zodResolver(resourceSchema),
    defaultValues: resource || {
      title: '',
      category: '',
      url: '',
      description: '',
    },
  });

  const onSubmit = (values: z.infer<typeof resourceSchema>) => {
    console.log('Form submitted. In a real app, this would save to a database.', values);
    toast({
      title: resource?.id ? 'Resource Updated (Simulated)' : 'Resource Added (Simulated)',
      description: `Resource "${values.title}" has been logged to the console.`,
    });
    onSave();
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField control={form.control} name="title" render={({ field }) => (
          <FormItem><FormLabel>{formContent.title}</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
        )} />
        <FormField control={form.control} name="category" render={({ field }) => (
          <FormItem><FormLabel>{formContent.category}</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
        )} />
        <FormField control={form.control} name="url" render={({ field }) => (
          <FormItem><FormLabel>{formContent.url}</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
        )} />
        <FormField control={form.control} name="description" render={({ field }) => (
            <FormItem><FormLabel>{formContent.description}</FormLabel><FormControl><Textarea {...field} /></FormControl><FormMessage /></FormItem>
        )} />
        <Button type="submit">{formContent.save}</Button>
      </form>
    </Form>
  );
}
