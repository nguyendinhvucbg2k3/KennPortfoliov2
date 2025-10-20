'use client';

import { useUser } from '@/firebase';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { AdminDashboard } from './_components/admin-dashboard';
import type { Project, Resource, Skill, Experience, PersonalInfo } from '@/lib/types';
import { 
  projects as staticProjects, 
  resources as staticResources, 
  experiences as staticExperiences, 
  skills as staticSkills 
} from '@/lib/placeholder-data';


const staticPersonalInfo: PersonalInfo = {
    fullName: "Thac Nguyen Dinh Vu",
    footerName: "Thac Nguyen Dinh Vu",
    title: "Intern Graphic Designer",
    fieldOfStudy: "Information Technology",
    dateOfBirth: "20/07/2003",
    email: "thacnguyendinhvu.esports@gmail.com",
    phone: "0964664117",
    phoneHref: "tel:+84964664117",
    address: "Ha Dong, Hanoi",
};

export default function AdminPage() {
  const { user, isUserLoading } = useUser();
  const router = useRouter();
  
  // Use state to hold the static data
  const [projects, setProjects] = useState<Project[]>([]);
  const [resources, setResources] = useState<Resource[]>([]);
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [skills, setSkills] = useState<Skill[]>([]);
  const [personalInfo, setPersonalInfo] = useState<PersonalInfo | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!isUserLoading && !user) {
      router.push('/login');
    }
  }, [user, isUserLoading, router]);

  // Load static data on component mount
  useEffect(() => {
    setProjects(staticProjects.map(p => ({...p, id: p.id || crypto.randomUUID()})));
    setResources(staticResources.map(r => ({...r, id: r.id || crypto.randomUUID()})));
    setExperiences(staticExperiences.map(e => ({...e, id: e.id || crypto.randomUUID()})));
    setSkills(staticSkills.map(s => ({...s, id: s.id || crypto.randomUUID()})));
    setPersonalInfo(staticPersonalInfo);
    setIsLoading(false);
  }, []);

  if (isUserLoading || isLoading) {
    return <div className="flex items-center justify-center h-screen">Loading...</div>;
  }

  if (!user) {
    return null;
  }
  
  return (
    <AdminDashboard
      projects={projects}
      resources={resources}
      experiences={experiences}
      skills={skills}
      personalInfo={personalInfo}
    />
  );
}
