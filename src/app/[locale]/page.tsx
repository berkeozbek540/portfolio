import AboutMe from "@/components/about/AboutMe";
import WhatImDoing from "@/components/about/WhatImDoing";
import TechStack from "@/components/about/TechStack";
import OpenToWork from "@/components/about/OpenToWork";

import PageTransition from "@/components/layout/PageTransition";

export default function Home() {
  return (
    <PageTransition>
      <div className="py-4 px-8">
        <AboutMe />
        <WhatImDoing />
        <TechStack />
        <OpenToWork />
      </div>
    </PageTransition>
  );
}
