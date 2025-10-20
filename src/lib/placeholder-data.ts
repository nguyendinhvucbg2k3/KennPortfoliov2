import { PlaceHolderImages } from "./placeholder-images";

export type Skill = {
  name: string;
  level: number;
  description: string;
};

export const skills: Skill[] = [
  { name: "UI/UX Design", level: 95, description: "Creating intuitive and beautiful user interfaces." },
  { name: "Branding", level: 90, description: "Developing strong and consistent brand identities." },
  { name: "Illustration", level: 85, description: "Crafting unique and expressive digital illustrations." },
  { name: "Motion Graphics", level: 75, description: "Bringing designs to life with animation." },
  { name: "Figma", level: 98, description: "Prototyping and designing in Figma." },
  { name: "Adobe Suite", level: 92, description: "Photoshop, Illustrator, After Effects." },
];

export type Project = {
  id: string;
  slug: string;
  name: string;
  category: "Branding" | "Illustration" | "Art Direction" | "Packaging";
  shortDescription: string;
  description: string;
  designPrinciples: string;
  image: {
    src: string;
    alt: string;
    aiHint: string;
  };
  year: number;
};

export const projects: Project[] = [
  {
    id: "1",
    slug: "aurora-branding",
    name: "Aurora Branding",
    category: "Branding",
    shortDescription: "Identity design for a futuristic tech company.",
    description: "Aurora is a conceptual tech startup focused on next-generation energy solutions. The branding aims to convey innovation, clean energy, and a bright future. The logo, a stylized 'A', evokes both a mountain peak and a rising sun, rendered in vibrant, flowing gradients.",
    designPrinciples: "The design is guided by principles of minimalism, clarity, and futurism. A vibrant color palette is used to create an optimistic and energetic feel, while clean typography ensures readability and a professional tone.",
    image: {
      src: PlaceHolderImages.find(p => p.id === 'project-aurora-branding')?.imageUrl || '',
      alt: PlaceHolderImages.find(p => p.id === 'project-aurora-branding')?.description || '',
      aiHint: PlaceHolderImages.find(p => p.id === 'project-aurora-branding')?.imageHint || '',
    },
    year: 2023,
  },
  {
    id: "2",
    slug: "cyber-flora",
    name: "Cyber Flora Illustrations",
    category: "Illustration",
    shortDescription: "A series of illustrations blending nature and technology.",
    description: "Cyber Flora is a personal project exploring the fusion of organic forms with technological elements. Each illustration depicts a unique plant species from a hypothetical future, characterized by biomechanical parts and neon glows.",
    designPrinciples: "The core principle is contrast: organic vs. synthetic, dark vs. light. Detailed line work is combined with bold, glowing colors to create a visually striking series that feels both alien and familiar.",
    image: {
      src: PlaceHolderImages.find(p => p.id === 'project-cyber-flora')?.imageUrl || '',
      alt: PlaceHolderImages.find(p => p.id === 'project-cyber-flora')?.description || '',
      aiHint: PlaceHolderImages.find(p => p.id === 'project-cyber-flora')?.imageHint || '',
    },
    year: 2024,
  },
  {
    id: "3",
    slug: "retro-synth",
    name: "Retro Synth Album Art",
    category: "Art Direction",
    shortDescription: "Album cover design for a synth-wave artist.",
    description: "This project involved creating the cover art and promotional materials for 'Starlight Rider', a retro-synth album. The design is heavily inspired by 80s aesthetics, featuring neon grids, a chrome-effect title, and a classic sports car driving into a digital sunset.",
    designPrinciples: "Nostalgia and retrofuturism are the key design drivers. The project adheres to the visual language of the synth-wave genre, utilizing a limited but vibrant color palette, grid layouts, and period-specific typography to evoke a strong sense of the 1980s.",
    image: {
      src: PlaceHolderImages.find(p => p.id === 'project-retro-synth')?.imageUrl || '',
      alt: PlaceHolderImages.find(p => p.id === 'project-retro-synth')?.description || '',
      aiHint: PlaceHolderImages.find(p => p.id === 'project-retro-synth')?.imageHint || '',
    },
    year: 2023,
  },
  {
    id: "4",
    slug: "neo-tokyo",
    name: "Neo-Tokyo Concept Art",
    category: "Art Direction",
    shortDescription: "Environmental concept art for a cyberpunk game.",
    description: "A collection of concept pieces for 'Neo-Tokyo: 2088', a cyberpunk video game. The art establishes the visual tone of the game, focusing on sprawling cityscapes, holographic advertisements, and the stark contrast between high-tech skyscrapers and gritty street-level life.",
    designPrinciples: "The design emphasizes scale, atmosphere, and visual density. A dark, moody color palette is punctuated by intense neon lights from signage and vehicles. The composition aims to create a sense of awe and immersion in a vast, futuristic metropolis.",
    image: {
      src: PlaceHolderImages.find(p => p.id === 'project-neo-tokyo')?.imageUrl || '',
      alt: PlaceHolderImages.find(p => p.id === 'project-neo-tokyo')?.description || '',
      aiHint: PlaceHolderImages.find(p => p.id === 'project-neo-tokyo')?.imageHint || '',
    },
    year: 2022,
  },
  {
    id: "5",
    slug: "quantum-poster",
    name: "Quantum Poster",
    category: "Illustration",
    shortDescription: "Poster for an international science conference.",
    description: "A promotional poster for the 'Quantum Leaps' conference. The design visualizes complex quantum concepts through abstract, particle-like imagery and interconnected webs of light, representing the interconnectedness of quantum mechanics.",
    designPrinciples: "The design balances scientific accuracy with artistic interpretation. Abstract shapes and ethereal light effects are used to represent concepts that are difficult to visualize. A sophisticated, dark color scheme with highlights of primary and accent colors lends a serious but exciting tone.",
    image: {
      src: PlaceHolderImages.find(p => p.id === 'project-quantum-poster')?.imageUrl || '',
      alt: PlaceHolderImages.find(p => p.id === 'project-quantum-poster')?.description || '',
      aiHint: PlaceHolderImages.find(p => p.id === 'project-quantum-poster')?.imageHint || '',
    },
    year: 2023,
  },
  {
    id: "6",
    slug: "eco-packaging",
    name: "Eco Packaging",
    category: "Packaging",
    shortDescription: "Packaging design for an organic skincare line.",
    description: "Packaging design for 'Veridia', a new line of organic skincare products. The goal was to create a design that feels both natural and premium. The design features minimalist typography and delicate, single-line illustrations of botanical ingredients.",
    designPrinciples: "The design follows the 'less is more' principle. An earthy, muted color palette is used, and the packaging material itself is a key part of the design. The focus is on clean layouts, ample white space, and high-quality, sustainable materials to reflect the product's values.",
    image: {
      src: PlaceHolderImages.find(p => p.id === 'project-eco-packaging')?.imageUrl || '',
      alt: PlaceHolderImages.find(p => p.id === 'project-eco-packaging')?.description || '',
      aiHint: PlaceHolderImages.find(p => p.id === 'project-eco-packaging')?.imageHint || '',
    },
    year: 2024,
  },
];

export const projectCategories = ["All", ...Array.from(new Set(projects.map(p => p.category)))];

export type Resource = {
  title: string;
  description: string;
  url: string;
};

export type ResourceCategory = {
  category: string;
  resources: Resource[];
};

export const resources: ResourceCategory[] = [
  {
    category: "Inspiration",
    resources: [
      { title: "Awwwards", description: "The best of web design and development.", url: "#" },
      { title: "Dribbble", description: "A community for creatives to share their work.", url: "#" },
      { title: "Behance", description: "Showcase and discover the latest work from top creatives.", url: "#" },
    ],
  },
  {
    category: "Tools",
    resources: [
      { title: "Figma", description: "The collaborative interface design tool.", url: "#" },
      { title: "Adobe Creative Cloud", description: "The ultimate creative toolkit.", url: "#" },
      { title: "Coolors", description: "Generate beautiful color palettes.", url: "#" },
    ],
  },
  {
    category: "Typography",
    resources: [
      { title: "Google Fonts", description: "A library of free and open source fonts.", url: "#" },
      { title: "Fonts in Use", description: "A public archive of typography.", url: "#" },
      { title: "Typewolf", description: "The definitive guide to typography on the web.", url: "#" },
    ],
  },
  {
    category: "Resources",
    resources: [
      { title: "Unsplash", description: "Free high-resolution photos.", url: "#" },
      { title: "Pexels", description: "The best free stock photos and videos.", url: "#" },
      { title: "Icon-Icons", description: "Free Icons, PNG, ICO, ICNS.", url: "#" },
    ],
  },
];
