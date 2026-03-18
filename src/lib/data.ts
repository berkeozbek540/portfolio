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
export interface Education {
  school: string;
  degree: string;
  date: string;
}
export interface Experience {
  company: string;
  role: string;
  date: string;
  description: string;
}
export interface Skill {
  label: string;
  category: string;
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
export const education: Education[] = [
  {
    school: "Pamukkale University, Denizli",
    degree: "Computer Science",
    date: "2020 - 2022",
  },
];
export const experience: Experience[] = [
  {
    company: "Webkent Yazılım",
    role: "Intern",
    date: "02/2022 - 06/2022",
    description:
      "Learned the fundamentals of web development processes through hands-on experience with real-world projects. Contributed to live projects by implementing small-scale UI adjustments and bug fixes.",
  },
  {
    company: "Webent Yazılım",
    role: "Fullstack Developer",
    date: "07/2022 - 08/2023",
    description:
      "Designed responsive and fast-loading user interfaces using Bootstrap and modern UI principles. Integrated REST APIs to ensure seamless execution of payment (Virtual POS) and shipment tracking processes for users. Performed debugging, performance optimization, and code refactoring on existing projects to enhance overall system stability.",
  },
];
export const skills: Skill[] = [
  {
    label: "React.js",
    category: "Frontend",
  },
  {
    label: "Next.js",
    category: "Frontend",
  },
  {
    label: "TypeScript",
    category: "Frontend",
  },
  {
    label: "JavaScript",
    category: "Frontend",
  },
  {
    label: "Tailwind CSS",
    category: "Frontend",
  },
  {
    label: "Shadcn/ui",
    category: "Frontend",
  },
  {
    label: "Framer Motion",
    category: "Frontend",
  },
  {
    label: "Git",
    category: "Tools & Others",
  },
  {
    label: "Github",
    category: "Tools & Others",
  },
  {
    label: "Node.js",
    category: "Backend",
  },
];
