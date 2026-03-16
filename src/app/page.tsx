import { Card } from "@/components/ui/card";
import { Code2, Megaphone, Paintbrush, Search } from "lucide-react";

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
export default function Home() {
  return (
    <div className="py-4 px-8">
      <div>
        <h1 className="text-2xl font-bold text-white">About Me</h1>
        <div className="w-10 h-1.5 my-2 bg-amber-400 rounded-full"></div>
      </div>
      <div className="">
        <p className="text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, adipisci deleniti.
          Laudantium est, illo recusandae inventore facilis distinctio tempora, delectus libero
          consequatur nesciunt eveniet animi adipisci esse. Minus perspiciatis enim mollitia
          sapiente maiores officiis odio sequi obcaecati, quasi dignissimos repudiandae dolorum
          explicabo rerum reprehenderit, non maxime fugiat eligendi. Illo, qui.
        </p>
      </div>
      <div className="py-6">
        <div>
          <h1 className="text-2xl font-bold text-white">What I'm Doing</h1>
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
    </div>
  );
}
