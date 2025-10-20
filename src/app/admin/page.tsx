'use client';

import { useUser, useFirestore, useCollection, useDoc, useMemoFirebase } from '@/firebase';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { AdminDashboard } from './_components/admin-dashboard';
import type { Project, Resource, Skill, Experience, PersonalInfo } from '@/lib/types';
import { collection, doc } from 'firebase/firestore';

export default function AdminPage() {
  const { user, isUserLoading } = useUser();
  const router = useRouter();
  const firestore = useFirestore();

  // Memoize Firestore references
  const projectsQuery = useMemoFirebase(() => collection(firestore, 'projects'), [firestore]);
  const resourcesQuery = useMemoFirebase(() => collection(firestore, 'resources'), [firestore]);
  const experiencesQuery = useMemoFirebase(() => collection(firestore, 'experience'), [firestore]);
  const skillsQuery = useMemoFirebase(() => collection(firestore, 'skills'), [firestore]);
  const personalInfoDoc = useMemoFirebase(() => doc(firestore, 'personalInfo', 'main'), [firestore]);

  // Fetch data from Firestore
  const { data: projects, isLoading: projectsLoading } = useCollection<Project>(projectsQuery);
  const { data: resources, isLoading: resourcesLoading } = useCollection<Resource>(resourcesQuery);
  const { data: experiences, isLoading: experiencesLoading } = useCollection<Experience>(experiencesQuery);
  const { data: skills, isLoading: skillsLoading } = useCollection<Skill>(skillsQuery);
  const { data: personalInfo, isLoading: personalInfoLoading } = useDoc<PersonalInfo>(personalInfoDoc);

  useEffect(() => {
    if (!isUserLoading && !user) {
      router.push('/login');
    }
  }, [user, isUserLoading, router]);

  const isLoading = isUserLoading || projectsLoading || resourcesLoading || experiencesLoading || skillsLoading || personalInfoLoading;

  if (isLoading) {
    return <div className="flex items-center justify-center h-screen">Loading...</div>;
  }

  if (!user) {
    return null;
  }
  
  return (
    <AdminDashboard
      projects={projects || []}
      resources={resources || []}
      experiences={experiences || []}
      skills={skills || []}
      personalInfo={personalInfo}
    />
  );
}
