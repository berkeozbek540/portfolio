import { Book } from "lucide-react";
import { education } from "@/lib/data";

const Education = () => {
  return (
    <div className="mb-4">
      <div>
        <h1 className="text-2xl font-bold text-white">Education</h1>
        <div className="w-10 h-1.5 my-2 bg-amber-400 rounded-full"></div>
      </div>
      <div className="py-2">
        <div className="flex justify-center items-center w-15 h-15 rounded-lg bg-zinc-900 border border-zinc-800">
          <Book className="w-10 h-10 text-amber-400" />
        </div>
        <div className="relative border-l-2 border-zinc-800 ml-7 pt-4">
          {education.map((item, index) => (
            <div
              key={item.school}
              className={`relative pl-6 ${index === education.length - 1 ? "" : "pb-8"}`}>
              <div
                className="absolute -left-2 top-2 w-4 h-4 bg-amber-400 rounded-full"
                style={{
                  background:
                    "radial-gradient(circle at center, rgba(251, 191, 36, 0.9) 10%, rgba(251, 191, 36, 0.2) 50%, #18181b 100%",
                }}></div>
              <h3 className="text-lg font-semibold text-white">{item.degree}</h3>
              <p className="text-amber-400">{item.school}</p>
              <p className="text-zinc-400">{item.date}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
