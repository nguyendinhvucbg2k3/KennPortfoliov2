'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Project, Resource, Skill, Experience, PersonalInfo } from "@/lib/types";
import { ProjectsDataTable } from './projects-data-table';
import { ResourcesDataTable } from './resources-data-table';
import { columns as projectsColumns } from './projects-columns';
import { columns as resourcesColumns } from './resources-columns';
import { ExperienceDataTable } from "./experience-data-table";
import { columns as experienceColumns } from "./experience-columns";
import { SkillsDataTable } from "./skills-data-table";
import { columns as skillsColumns } from "./skills-columns";
import { PersonalInfoForm } from "./personal-info-form";
import { useLanguage } from "@/context/language-context";
import { content } from "@/lib/content";

interface AdminDashboardProps {
  projects: Project[];
  resources: Resource[];
  experiences: Experience[];
  skills: Skill[];
  personalInfo: PersonalInfo | null;
}

export function AdminDashboard({ projects, resources, experiences, skills, personalInfo }: AdminDashboardProps) {
  const { language } = useLanguage();
  const adminContent = content[language].admin;

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6 font-headline">{adminContent.dashboard.title}</h1>
      <Tabs defaultValue="personal-info">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-5">
          <TabsTrigger value="personal-info">{adminContent.dashboard.personalInfo}</TabsTrigger>
          <TabsTrigger value="projects">{adminContent.dashboard.projects}</TabsTrigger>
          <TabsTrigger value="resources">{adminContent.dashboard.resources}</TabsTrigger>
          <TabsTrigger value="experience">{adminContent.dashboard.experience}</TabsTrigger>
          <TabsTrigger value="skills">{adminContent.dashboard.skills}</TabsTrigger>
        </TabsList>
        <TabsContent value="personal-info">
            <PersonalInfoForm initialData={personalInfo} />
        </TabsContent>
        <TabsContent value="projects">
          <ProjectsDataTable columns={projectsColumns} data={projects} />
        </TabsContent>
        <TabsContent value="resources">
          <ResourcesDataTable columns={resourcesColumns} data={resources} />
        </TabsContent>
        <TabsContent value="experience">
          <ExperienceDataTable columns={experienceColumns} data={experiences} />
        </TabsContent>
        <TabsContent value="skills">
            <SkillsDataTable columns={skillsColumns} data={skills} />
        </TabsContent>
      </Tabs>
    </div>
  );
}
