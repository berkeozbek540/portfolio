export type IconName = "paintbrush" | "code2" | "search" | "megaphone";
export interface WhatImDoing {
  iconName: IconName;
  key: string;
}
export interface TechStack {
  label: string;
  iconName: string;
}
export interface Education {
  date: string;
  key: string;
}
export interface Experience {
  company: string;
  date: string;
  key: string;
}
export interface Skill {
  label: string;
  category: string;
  key: string;
}
export interface Project {
  name: string;
  description: string;
  imageUrl: string;
  projectUrl: string;
}

export const whatImDoing: WhatImDoing[] = [
  {
    iconName: "paintbrush",
    key: "webDesign",
  },
  {
    iconName: "code2",
    key: "webDevelopment",
  },
  {
    iconName: "search",
    key: "seo",
  },
  {
    iconName: "megaphone",
    key: "advertising",
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
export const education: Education[] = [
  {
    date: "2020 - 2022",
    key: "computerScience",
  },
];
export const experience: Experience[] = [
  {
    company: "Webkent Yazılım",
    date: "02/2022 - 06/2022",
    key: "intern",
  },
  {
    company: "Webent Yazılım",
    date: "07/2022 - 08/2023",
    key: "fullstack",
  },
];
export const skills: Skill[] = [
  {
    label: "React.js",
    category: "Frontend",
    key: "react",
  },
  {
    label: "Next.js",
    category: "Frontend",
    key: "nextjs",
  },
  {
    label: "TypeScript",
    category: "Frontend",
    key: "typescript",
  },
  {
    label: "JavaScript",
    category: "Frontend",
    key: "javascript",
  },
  {
    label: "Tailwind CSS",
    category: "Frontend",
    key: "tailwind",
  },
  {
    label: "Shadcn/ui",
    category: "Frontend",
    key: "shadcnui",
  },
  {
    label: "Framer Motion",
    category: "Frontend",
    key: "framermotion",
  },
  {
    label: "Git",
    category: "Tools & Others",
    key: "git",
  },
  {
    label: "Github",
    category: "Tools & Others",
    key: "github",
  },
  {
    label: "Node.js",
    category: "Backend",
    key: "nodejs",
  },
];
export const projects: Project[] = [
  {
    name: "E-Commerce Website",
    description:
      "A fully responsive e-commerce website built with Next.js and Tailwind CSS, featuring a modern design and seamless user experience.",
    imageUrl: "/projects/placeholder.jpg",
    projectUrl: "https://example.com/ecommerce",
  },
  {
    name: "Personal Portfolio",
    description:
      "A sleek and modern personal portfolio website built with React.js and Framer Motion, showcasing my skills, projects, and experience.",
    imageUrl: "/projects/placeholder.jpg",
    projectUrl: "https://example.com/portfolio",
  },
  {
    name: "Demo Project",
    description:
      "A sleek and modern personal portfolio website built with React.js and Framer Motion, showcasing my skills, projects, and experience.",
    imageUrl: "/projects/placeholder.jpg",
    projectUrl: "https://example.com/portfolio",
  },
  {
    name: "Demo Project 2",
    description:
      "A sleek and modern personal portfolio website built with React.js and Framer Motion, showcasing my skills, projects, and experience.",
    imageUrl: "/projects/placeholder.jpg",
    projectUrl: "https://example.com/portfolio",
  },
];
