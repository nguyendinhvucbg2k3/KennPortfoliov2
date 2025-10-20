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

interface AdminDashboardProps {
  projects: Project[];
  resources: Resource[];
  experiences: Experience[];
  skills: Skill[];
  personalInfo: PersonalInfo | null;
}

export function AdminDashboard({ projects, resources, experiences, skills, personalInfo }: AdminDashboardProps) {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      <Tabs defaultValue="projects">
        <TabsList>
          <TabsTrigger value="personal-info">Personal Info</TabsTrigger>
          <TabsTrigger value="projects">Projects</TabsTrigger>
          <TabsTrigger value="resources">Resources</TabsTrigger>
          <TabsTrigger value="experience">Experience</TabsTrigger>
          <TabsTrigger value="skills">Skills</TabsTrigger>
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
