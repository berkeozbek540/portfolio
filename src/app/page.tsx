import AboutMe from "@/components/about/AboutMe";
import WhatImDoing from "@/components/about/WhatImDoing";
import TechStack from "@/components/about/TechStack";
import OpenToWork from "@/components/about/OpenToWork";

export default function Home() {
  return (
    <div className="py-4 px-8">
      <AboutMe />
      <WhatImDoing />
      <TechStack />
      <OpenToWork />
    </div>
  );
}
