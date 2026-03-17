import Education from "@/components/resume/Education";
import Experience from "@/components/resume/Experience";
import Skills from "@/components/resume/Skills";

const page = () => {
  return (
    <div className="py-4 px-8">
      <Experience />
      <Education />
      <Skills />
    </div>
  );
};

export default page;
