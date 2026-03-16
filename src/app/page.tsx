import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

import { Code2, Megaphone, Paintbrush, Search } from "lucide-react";

import { Marquee } from "@/components/ui/marquee";

const whatImDoing = [
  {
    label: "Web Design",
    description: "Modern, clean and visually striking designs tailored to your brand identity.",
    icon: <Paintbrush className="w-10 h-10 text-amber-400 shrink-0" />,
  },
  {
    label: "Web Development",
    description:
      "Fast, scalable and responsive web applications built with cutting-edge technologies.",
    icon: <Code2 className="w-10 h-10 text-amber-400 shrink-0" />,
  },
  {
    label: "SEO",
    description:
      "Data-driven SEO strategies to boost your visibility and rank higher on search engines.",
    icon: <Search className="w-10 h-10 text-amber-400 shrink-0" />,
  },
  {
    label: "Advertising",
    description:
      "Targeted ad campaigns that reach the right audience and turn clicks into customers.",
    icon: <Megaphone className="w-10 h-10 text-amber-400 shrink-0" />,
  },
];

const techStack = [
  {
    label: "React.js",
    icon: "/icons/react.svg",
  },
  {
    label: "Next.js",
    icon: "/icons/nextjs.svg",
  },
  {
    label: "TypeScript",
    icon: "/icons/typescript.svg",
  },
  {
    label: "JavaScript",
    icon: "/icons/javascript.svg",
  },
  {
    label: "Tailwind",
    icon: "/icons/tailwind.svg",
  },
  {
    label: "Shadcn/ui",
    icon: "/icons/shadcnui.svg",
  },
  {
    label: "Git",
    icon: "/icons/git.svg",
  },
  {
    label: "Github",
    icon: "/icons/github.svg",
  },
];

export default function Home() {
  return (
    <div className="py-4 px-8">
      <div>
        <h1 className="text-2xl font-bold text-white">About Me</h1>
        <div className="w-10 h-1.5 my-2 bg-amber-400 rounded-full"></div>
      </div>
      <div>
        <p className="text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, adipisci deleniti.
          Laudantium est, illo recusandae inventore facilis distinctio tempora, delectus libero
          consequatur nesciunt eveniet animi adipisci esse. Minus perspiciatis enim mollitia
          sapiente maiores officiis odio sequi obcaecati, quasi dignissimos repudiandae dolorum
          explicabo rerum reprehenderit, non maxime fugiat eligendi. Illo, qui.
        </p>
      </div>
      <div className="py-4">
        <div>
          <h1 className="text-2xl font-bold text-white">What I'm Doing</h1>
          <div className="w-10 h-1.5 my-2 bg-amber-400 rounded-full"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-4 py-4">
          {whatImDoing.map(({ label, description, icon }) => (
            <Card
              key={label}
              className="flex flex-row items-start gap-2 p-4 max-w-md bg-zinc-900 border-zinc-800">
              {icon}
              <div className="flex flex-col gap-1">
                <h3 className="text-white font-semibold text-base">{label}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
      <div className="py-4">
        <div className="text-center">
          <h1 className="text-2xl font-bold py-1 text-white text-center">Tech Stack</h1>
          <div className="mx-auto w-30 h-1.5 my-2 bg-amber-400 rounded-full"></div>
          <Marquee pauseOnHover className="[--duration:20s] overflow-hidden">
            {techStack.map(({ label, icon }) => (
              <div
                key={label}
                className="flex flex-col items-center justify-center w-20 h-20 p-6 rounded-lg bg-zinc-900 border border-zinc-700">
                <img src={icon} alt={label} />
                <p>{label}</p>
              </div>
            ))}
          </Marquee>
        </div>
        <div className="grid md:grid-cols-2 gap-4 py-4"></div>
      </div>
      <div>
        <div className="border border-zinc-800 border-t-2 border-t-green-400 rounded-lg p-4 bg-zinc-900">
          <Badge
            className="border-green-400 rounded-full"
            variant="secondary"
            style={{
              background:
                "radial-gradient(circle at 0% 100%, rgba(74,222,128,0.3) 0%, #18181b 100%)",
            }}>
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500" />
            </span>
            <span className="text-md text-green-500">Open To Work</span>
          </Badge>
          <p className="text-gray-400 py-2">
            I am available for freelance projects and full-time positions.
          </p>
          <Button className="text-amber-400" variant="outline">
            <Link href="/contact">Contact</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
