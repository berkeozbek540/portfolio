export type IconName = "paintbrush" | "code2" | "search" | "megaphone";

export interface WhatImDoing {
  label: string;
  description: string;
  iconName: IconName;
}

export interface TechStack {
  label: string;
  iconName: string;
}

export const whatImDoing: WhatImDoing[] = [
  {
    label: "Web Design",
    description: "Modern, clean and visually striking designs tailored to your brand identity.",
    iconName: "paintbrush",
  },
  {
    label: "Web Development",
    description:
      "Fast, scalable and responsive web applications built with cutting-edge technologies.",
    iconName: "code2",
  },
  {
    label: "SEO",
    description:
      "Data-driven SEO strategies to boost your visibility and rank higher on search engines.",
    iconName: "search",
  },
  {
    label: "Advertising",
    description:
      "Targeted ad campaigns that reach the right audience and turn clicks into customers.",
    iconName: "megaphone",
  },
];

export const techStack: TechStack[] = [
  {
    label: "React.js",
    iconName: "/icons/react.svg",
  },
  {
    label: "Next.js",
    iconName: "/icons/nextjs.svg",
  },
  {
    label: "TypeScript",
    iconName: "/icons/typescript.svg",
  },
  {
    label: "JavaScript",
    iconName: "/icons/javascript.svg",
  },
  {
    label: "Tailwind",
    iconName: "/icons/tailwind.svg",
  },
  {
    label: "Shadcn/ui",
    iconName: "/icons/shadcnui.svg",
  },
  {
    label: "Git",
    iconName: "/icons/git.svg",
  },
  {
    label: "Github",
    iconName: "/icons/github.svg",
  },
];
