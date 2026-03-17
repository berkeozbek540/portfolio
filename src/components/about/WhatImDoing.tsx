import { Card } from "@/components/ui/card";
import { whatImDoing } from "@/lib/data";

import { Code2, Megaphone, Paintbrush, Search } from "lucide-react";

import { IconName } from "@/lib/data";
import { JSX } from "react/jsx-dev-runtime";

const iconMap: Record<IconName, JSX.Element> = {
  paintbrush: <Paintbrush className="w-10 h-10 text-amber-400 shrink-0" />,
  code2: <Code2 className="w-10 h-10 text-amber-400 shrink-0" />,
  search: <Search className="w-10 h-10 text-amber-400 shrink-0" />,
  megaphone: <Megaphone className="w-10 h-10 text-amber-400 shrink-0" />,
};

const WhatImDoing = () => {
  return (
    <>
      <div className="py-4">
        <div>
          <h1 className="text-2xl font-bold text-white">What I'm Doing</h1>
          <div className="w-10 h-1.5 my-2 bg-amber-400 rounded-full"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-4 py-4">
          {whatImDoing.map(({ label, description, iconName }) => (
            <Card
              key={label}
              className="flex flex-row items-start gap-2 p-4 max-w-md bg-zinc-900 border-zinc-800">
              {iconMap[iconName]}
              <div className="flex flex-col gap-1">
                <h3 className="text-white font-semibold text-base">{label}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
};

export default WhatImDoing;
