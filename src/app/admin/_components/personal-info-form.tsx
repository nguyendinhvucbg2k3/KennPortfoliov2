'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { PersonalInfo } from '@/lib/types';
import { useLanguage } from '@/context/language-context';
import { content } from '@/lib/content';

const personalInfoSchema = z.object({
  fullName: z.string().min(1, 'Full name is required.'),
  footerName: z.string().min(1, 'Footer name is required.'),
  title: z.string().min(1, 'Title is required.'),
  fieldOfStudy: z.string().min(1, 'Field of study is required.'),
  dateOfBirth: z.string().min(1, 'Date of birth is required.'),
  email: z.string().email('Invalid email address.'),
  phone: z.string().min(1, 'Phone number is required.'),
  phoneHref: z.string().min(1, 'Phone href is required.'),
  address: z.string().min(1, 'Address is required.'),
});

interface PersonalInfoFormProps {
  initialData: PersonalInfo | null;
}

export function PersonalInfoForm({ initialData }: PersonalInfoFormProps) {
  const { language } = useLanguage();
  const adminContent = content[language].admin;
  const { toast } = useToast();

  const form = useForm<z.infer<typeof personalInfoSchema>>({
    resolver: zodResolver(personalInfoSchema),
    defaultValues: initialData || {
      fullName: '',
      footerName: '',
      title: '',
      fieldOfStudy: '',
      dateOfBirth: '',
      email: '',
      phone: '',
      phoneHref: '',
      address: '',
    },
  });

  const onSubmit = (values: z.infer<typeof personalInfoSchema>) => {
    // Firestore writing is disabled.
    console.log('Form submitted. Firestore writing is currently disabled.', values);
    toast({
      title: 'Submit Disabled',
      description: 'Your information has been logged to the console. Database writing is disabled.',
    });
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="font-headline text-2xl">{adminContent.personalInfo.title}</CardTitle>
        <CardDescription>{adminContent.personalInfo.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField control={form.control} name="fullName" render={({ field }) => (
              <FormItem>
                <FormLabel>{adminContent.personalInfo.fullName}</FormLabel>
                <FormControl><Input {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <FormField control={form.control} name="footerName" render={({ field }) => (
              <FormItem>
                <FormLabel>{adminContent.personalInfo.footerName}</FormLabel>
                <FormControl><Input {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <FormField control={form.control} name="title" render={({ field }) => (
              <FormItem>
                <FormLabel>{adminContent.personalInfo.jobTitle}</FormLabel>
                <FormControl><Input {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <FormField control={form.control} name="fieldOfStudy" render={({ field }) => (
              <FormItem>
                <FormLabel>{adminContent.personalInfo.fieldOfStudy}</FormLabel>
                <FormControl><Input {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <FormField control={form.control} name="dateOfBirth" render={({ field }) => (
              <FormItem>
                <FormLabel>{adminContent.personalInfo.dob}</FormLabel>
                <FormControl><Input {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <FormField control={form.control} name="email" render={({ field }) => (
              <FormItem>
                <FormLabel>{adminContent.personalInfo.email}</FormLabel>
                <FormControl><Input type="email" {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <FormField control={form.control} name="phone" render={({ field }) => (
              <FormItem>
                <FormLabel>{adminContent.personalInfo.phone}</FormLabel>
                <FormControl><Input {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />
             <FormField control={form.control} name="phoneHref" render={({ field }) => (
              <FormItem>
                <FormLabel>{adminContent.personalInfo.phoneHref}</FormLabel>
                <FormControl><Input {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <FormField control={form.control} name="address" render={({ field }) => (
              <FormItem className="md:col-span-2">
                <FormLabel>{adminContent.personalInfo.address}</FormLabel>
                <FormControl><Input {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <div className="md:col-span-2 flex justify-end">
              <Button type="submit">{adminContent.personalInfo.save}</Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
