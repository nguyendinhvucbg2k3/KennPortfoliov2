export type Project = {
    id: string;
    slug: string;
    name: string;
    category: "Branding" | "Illustration" | "Art Direction" | "Packaging" | "Graphic Design" | "UI/UX" | "Web Design" | "Game Design";
    shortDescription: string;
    description: string;
    designPrinciples: string;
    image: {
      src: string;
      alt: string;
      aiHint: string;
    };
    year: number;
    behanceUrl: string;
};
  
export type Resource = {
    id: string;
    title: string;
    url: string;
    category: string;
    description: string;
};

export type Experience = {
    id: string;
    title: string;
    organization: string;
    date: string;
    description: string;
};

export type Skill = {
    id: string;
    name: string;
    level: number;
    description: string;
};

export type PersonalInfo = {
    fullName: string;
    footerName: string;
    title: string;
    fieldOfStudy: string;
    dateOfBirth: string;
    email: string;
    phone: string;
    phoneHref: string;
    address: string;
};
