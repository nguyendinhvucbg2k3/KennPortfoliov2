'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { AdminDashboard } from './_components/admin-dashboard';
import type { Project, Resource, Skill, Experience, PersonalInfo } from '@/lib/types';
import { projects as placeholderProjects, resources as placeholderResources, experiences as placeholderExperiences, skills as placeholderSkills } from '@/lib/placeholder-data';
// import { useUser, useCollection, useMemoFirebase, useFirestore } from '@/firebase';
// import { collection, doc } from 'firebase/firestore';

const placeholderPersonalInfo: PersonalInfo = {
    fullName: "Thac Nguyen Dinh Vu",
    footerName: "Thac Nguyen Dinh Vu",
    title: "Intern Graphic Designer",
    fieldOfStudy: "Information Technology",
    dateOfBirth: "20/07/2003",
    email: "thacnguyendinhvu.esports@gmail.com",
    phone: "0964664117",
    phoneHref: "tel:+84964664117",
    address: "Hà Đông, Hà Nội",
};

// Mock user for admin access without Firebase Auth
const mockUser = { uid: 'mock-admin-user' };

export default function AdminPage() {
  // const { user, isUserLoading } = useUser(); // Firebase Auth disabled
  const router = useRouter();
  // const firestore = useFirestore();

  const [user, setUser] = useState<any>(null);
  const [isUserLoading, setIsUserLoading] = useState(true);

  // const projectsQuery = useMemoFirebase(() => firestore ? collection(firestore, 'projects') : null, [firestore]);
  // const resourcesQuery = useMemoFirebase(() => firestore ? collection(firestore, 'resources') : null, [firestore]);
  
  // const { data: projects, isLoading: isProjectsLoading } = useCollection<Project>(projectsQuery);
  // const { data: resources, isLoading: isResourcesLoading } = useCollection<Resource>(resourcesQuery);
  const [projects, setProjects] = useState<Project[]>([]);
  const [resources, setResources] = useState<Resource[]>([]);

  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [skills, setSkills] = useState<Skill[]>([]);
  const [personalInfo, setPersonalInfo] = useState<PersonalInfo | null>(null);

  useEffect(() => {
    // Simulate user loading and login
    setTimeout(() => {
        setUser(mockUser);
        setIsUserLoading(false);
    }, 500);
  }, []);

  useEffect(() => {
    if (!isUserLoading && !user) {
      router.push('/login'); 
    }
  }, [user, isUserLoading, router]);

  useEffect(() => {
      // Use static placeholder data
      setProjects(placeholderProjects);
      setResources(placeholderResources);
      setExperiences(placeholderExperiences);
      setSkills(placeholderSkills);
      setPersonalInfo(placeholderPersonalInfo);
  }, []);

  const isLoading = isUserLoading;

  if (isLoading) {
    return <div className="flex items-center justify-center h-screen">Loading Admin Dashboard...</div>;
  }

  if (!user) {
    // This will be caught by the useEffect redirect, but as a fallback
    return <div className="flex items-center justify-center h-screen">Access Denied. Please log in.</div>;
  }
  
  return (
    <AdminDashboard
      projects={projects || []}
      resources={resources || []}
      experiences={experiences}
      skills={skills}
      personalInfo={personalInfo}
    />
  );
}
