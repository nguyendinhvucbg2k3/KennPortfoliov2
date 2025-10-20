'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useFirestore, addDocumentNonBlocking, setDocumentNonBlocking } from '@/firebase';
import { doc, collection } from 'firebase/firestore';
import { useToast } from '@/hooks/use-toast';
import { Experience } from '@/lib/types';

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
  const firestore = useFirestore();
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
    if (!firestore) return;

    if (experience) {
      // Update existing experience
      const docRef = doc(firestore, 'experience', experience.id);
      setDocumentNonBlocking(docRef, values, { merge: true });
      toast({ title: 'Experience Updated' });
    } else {
      // Add new experience
      const collectionRef = collection(firestore, 'experience');
      addDocumentNonBlocking(collectionRef, values);
      toast({ title: 'Experience Added' });
    }
    onSave();
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField control={form.control} name="title" render={({ field }) => (
          <FormItem><FormLabel>Title</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
        )} />
        <FormField control={form.control} name="organization" render={({ field }) => (
          <FormItem><FormLabel>Organization</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
        )} />
        <FormField control={form.control} name="date" render={({ field }) => (
          <FormItem><FormLabel>Date</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
        )} />
        <FormField control={form.control} name="description" render={({ field }) => (
            <FormItem><FormLabel>Description</FormLabel><FormControl><Textarea {...field} /></FormControl><FormMessage /></FormItem>
        )} />
        <Button type="submit">Save</Button>
      </form>
    </Form>
  );
}
