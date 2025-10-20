'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { AdminDashboard } from './_components/admin-dashboard';
import type { Project, Resource, Skill, Experience, PersonalInfo } from '@/lib/types';
import { projects as placeholderProjects, resources as placeholderResources, experiences as placeholderExperiences, skills as placeholderSkills } from '@/lib/placeholder-data';

// Mock user authentication
const useMockUser = () => {
    // In a real app, this would involve checking a cookie or session
    // For this static version, we'll assume the user is always logged in to see the admin page.
    // To simulate a logged-out state, you could change this to return { user: null, isUserLoading: false }
    const [user, setUser] = useState<{ name: string } | null>({ name: 'Admin' });
    const [isUserLoading, setIsLoading] = useState(false);
    return { user, isUserLoading };
};

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

export default function AdminPage() {
  const { user, isUserLoading } = useMockUser();
  const router = useRouter();

  const [projects, setProjects] = useState<Project[]>([]);
  const [resources, setResources] = useState<Resource[]>([]);
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [skills, setSkills] = useState<Skill[]>([]);
  const [personalInfo, setPersonalInfo] = useState<PersonalInfo | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!isUserLoading && !user) {
      // In a real app, you might want a login page, but for now, we'll just block access.
      // You could redirect to home or show an "Access Denied" message.
      router.push('/'); 
    }
  }, [user, isUserLoading, router]);

  useEffect(() => {
      setProjects(placeholderProjects);
      setResources(placeholderResources);
      setExperiences(placeholderExperiences);
      setSkills(placeholderSkills);
      setPersonalInfo(placeholderPersonalInfo);
      setIsLoading(false);
  }, []);

  if (isLoading || isUserLoading) {
    return <div className="flex items-center justify-center h-screen">Loading...</div>;
  }

  if (!user) {
    return <div className="flex items-center justify-center h-screen">Access Denied. Please log in.</div>;
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
