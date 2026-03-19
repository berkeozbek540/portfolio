import { projects } from "@/lib/data";
import { Eye } from "lucide-react";
import Link from "next/link";

const ProjectCard = () => {
  return (
    <>
      <div>
        <h1 className="text-2xl font-bold text-white">Projects</h1>
        <div className="w-10 h-1.5 my-2 bg-amber-400 rounded-full"></div>
      </div>
      <div className="md:grid md:grid-cols-3 gap-x-4">
        {projects.map((project) => (
          <div key={project.name} className="group relative flex flex-col justify-center py-4">
            <div className="relative w-full overflow-hidden rounded-xl">
              <img
                src={project.imageUrl}
                alt={project.name}
                className="w-full h-48 object-cover group-hover:scale-105 transition-all duration-300"
              />
              <Link
                href={project.projectUrl}
                className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                <Eye className="w-10 h-10 text-amber-400" />
              </Link>
            </div>
            <h2 className="text-lg font-semibold text-white py-1">{project.name}</h2>
            <p className="text-sm text-gray-400">{project.description}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProjectCard;
