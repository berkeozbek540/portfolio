import PageTransition from "@/components/layout/PageTransition";
import ProjectCard from "@/components/projects/ProjectCard";

const page = () => {
  return (
    <PageTransition>
      <div className="py-4 px-8">
        <ProjectCard />
      </div>
    </PageTransition>
  );
};

export default page;
