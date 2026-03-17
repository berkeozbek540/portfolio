import Education from "@/components/resume/Education";
import Experience from "@/components/resume/Experience";
import Skills from "@/components/resume/Skills";

import PageTransition from "@/components/layout/PageTransition";

const page = () => {
  return (
    <PageTransition>
      <div className="py-4 px-8">
        <Experience />
        <Education />
        <Skills />
      </div>
    </PageTransition>
  );
};

export default page;
