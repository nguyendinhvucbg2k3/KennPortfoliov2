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
import { Resource } from '@/lib/types';

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
  const firestore = useFirestore();
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
    if (!firestore) return;

    if (resource) {
      // Update existing resource
      const docRef = doc(firestore, 'resources', resource.id);
      setDocumentNonBlocking(docRef, values, { merge: true });
      toast({ title: 'Resource Updated' });
    } else {
      // Add new resource
      const collectionRef = collection(firestore, 'resources');
      addDocumentNonBlocking(collectionRef, values);
      toast({ title: 'Resource Added' });
    }
    onSave();
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField control={form.control} name="title" render={({ field }) => (
          <FormItem><FormLabel>Title</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
        )} />
        <FormField control={form.control} name="category" render={({ field }) => (
          <FormItem><FormLabel>Category</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
        )} />
        <FormField control={form.control} name="url" render={({ field }) => (
          <FormItem><FormLabel>URL</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
        )} />
        <FormField control={form.control} name="description" render={({ field }) => (
            <FormItem><FormLabel>Description</FormLabel><FormControl><Textarea {...field} /></FormControl><FormMessage /></FormItem>
        )} />
        <Button type="submit">Save</Button>
      </form>
    </Form>
  );
}
