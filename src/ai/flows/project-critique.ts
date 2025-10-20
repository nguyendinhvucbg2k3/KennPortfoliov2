'use server';

/**
 * @fileOverview An AI flow for generating critiques of design projects.
 *
 * - projectCritique - A function that generates a critique for a given design project.
 * - ProjectCritiqueInput - The input type for the projectCritique function.
 * - ProjectCritiqueOutput - The return type for the projectCritique function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ProjectCritiqueInputSchema = z.object({
  projectName: z.string().describe('The name of the design project.'),
  projectDescription: z.string().describe('A detailed description of the design project, including its goals, target audience, and design choices.'),
  designPrinciples: z.string().optional().describe('The design principles used in the project.'),
});
export type ProjectCritiqueInput = z.infer<typeof ProjectCritiqueInputSchema>;

const ProjectCritiqueOutputSchema = z.object({
  critique: z.string().describe('An AI-generated critique of the design project, highlighting its strengths and weaknesses.'),
});
export type ProjectCritiqueOutput = z.infer<typeof ProjectCritiqueOutputSchema>;

export async function projectCritique(input: ProjectCritiqueInput): Promise<ProjectCritiqueOutput> {
  return projectCritiqueFlow(input);
}

const projectCritiquePrompt = ai.definePrompt({
  name: 'projectCritiquePrompt',
  input: {schema: ProjectCritiqueInputSchema},
  output: {schema: ProjectCritiqueOutputSchema},
  prompt: `You are an expert design critic providing constructive feedback on graphic design projects.

  Based on the project description and any provided design principles, offer a critique that highlights both the strengths and weaknesses of the project.

  Project Name: {{projectName}}
  Description: {{projectDescription}}
  Design Principles: {{designPrinciples}}
  
  Critique:`,
});

const projectCritiqueFlow = ai.defineFlow(
  {
    name: 'projectCritiqueFlow',
    inputSchema: ProjectCritiqueInputSchema,
    outputSchema: ProjectCritiqueOutputSchema,
  },
  async input => {
    const {output} = await projectCritiquePrompt(input);
    return output!;
  }
);
