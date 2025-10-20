'use client';

import { useUser, useFirestore, useCollection, useDoc, useMemoFirebase } from '@/firebase';
import { collection, doc } from 'firebase/firestore';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { AdminDashboard } from './_components/admin-dashboard';
import type { Project, Resource, Skill, Experience, PersonalInfo } from '@/lib/types';


export default function AdminPage() {
  const { user, isUserLoading } = useUser();
  const router = useRouter();
  const firestore = useFirestore();

  const projectsCollection = useMemoFirebase(() => firestore ? collection(firestore, 'projects') : null, [firestore]);
  const resourcesCollection = useMemoFirebase(() => firestore ? collection(firestore, 'resources') : null, [firestore]);
  const experienceCollection = useMemoFirebase(() => firestore ? collection(firestore, 'experience') : null, [firestore]);
  const skillsCollection = useMemoFirebase(() => firestore ? collection(firestore, 'skills') : null, [firestore]);
  const personalInfoDoc = useMemoFirebase(() => firestore ? doc(firestore, 'personalInfo', 'main') : null, [firestore]);

  const { data: projects, isLoading: projectsLoading } = useCollection<Project>(projectsCollection);
  const { data: resources, isLoading: resourcesLoading } = useCollection<Resource>(resourcesCollection);
  const { data: experience, isLoading: experienceLoading } = useCollection<Experience>(experienceCollection);
  const { data: skills, isLoading: skillsLoading } = useCollection<Skill>(skillsCollection);
  const { data: personalInfo, isLoading: personalInfoLoading } = useDoc<PersonalInfo>(personalInfoDoc);

  useEffect(() => {
    if (!isUserLoading && !user) {
      router.push('/login');
    }
  }, [user, isUserLoading, router]);

  if (isUserLoading || projectsLoading || resourcesLoading || experienceLoading || skillsLoading || personalInfoLoading) {
    return <div className="flex items-center justify-center h-screen">Loading...</div>;
  }

  if (!user) {
    return null;
  }
  
  return (
    <AdminDashboard
      projects={projects || []}
      resources={resources || []}
      experiences={experience || []}
      skills={skills || []}
      personalInfo={personalInfo}
    />
  );
}
