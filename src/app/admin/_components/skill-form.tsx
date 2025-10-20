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
import { Skill } from '@/lib/types';
import { Slider } from '@/components/ui/slider';
import { useLanguage } from '@/context/language-context';
import { content } from '@/lib/content';

const skillSchema = z.object({
  name: z.string().min(1, 'Name is required.'),
  description: z.string().min(1, 'Description is required.'),
  level: z.coerce.number().min(0).max(100),
});

interface SkillFormProps {
  skill?: Skill;
  onSave: () => void;
}

export function SkillForm({ skill, onSave }: SkillFormProps) {
  const { language } = useLanguage();
  const formContent = content[language].admin.skills.form;
  const firestore = useFirestore();
  const { toast } = useToast();

  const form = useForm<z.infer<typeof skillSchema>>({
    resolver: zodResolver(skillSchema),
    defaultValues: skill || {
      name: '',
      description: '',
      level: 50,
    },
  });

  const onSubmit = (values: z.infer<typeof skillSchema>) => {
    if (!firestore) return;

    if (skill) {
      // Update existing skill
      const docRef = doc(firestore, 'skills', skill.id);
      setDocumentNonBlocking(docRef, values, { merge: true });
      toast({ title: 'Skill Updated' });
    } else {
      // Add new skill
      const collectionRef = collection(firestore, 'skills');
      addDocumentNonBlocking(collectionRef, values);
      toast({ title: 'Skill Added' });
    }
    onSave();
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField control={form.control} name="name" render={({ field }) => (
          <FormItem><FormLabel>{formContent.name}</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
        )} />
        <FormField control={form.control} name="description" render={({ field }) => (
          <FormItem><FormLabel>{formContent.description}</FormLabel><FormControl><Textarea {...field} /></FormControl><FormMessage /></FormItem>
        )} />
        <FormField control={form.control} name="level" render={({ field }) => (
          <FormItem>
            <FormLabel>{formContent.level}: {field.value}%</FormLabel>
            <FormControl>
              <Slider
                defaultValue={[field.value]}
                max={100}
                step={1}
                onValueChange={(value) => field.onChange(value[0])}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )} />
        <Button type="submit">{formContent.save}</Button>
      </form>
    </Form>
  );
}
