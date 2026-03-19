"use client";
import { Marquee } from "../ui/marquee";
import { techStack } from "@/lib/data";
import Image from "next/image";

const TechStack = () => {
  return (
    <>
      <div className="py-4">
        <div className="text-center">
          <h1 className="text-2xl font-bold py-1 text-white text-center">Tech Stack</h1>
          <div className="mx-auto w-30 h-1.5 my-2 bg-amber-400 rounded-full overflow-hidden"></div>
          <Marquee pauseOnHover>
            {techStack.map(({ label, iconName }) => (
              <div
                key={label}
                className="flex flex-col items-center justify-center w-20 h-20 p-6 rounded-lg bg-zinc-900 border border-zinc-700">
                <Image src={iconName} alt={label} width={32} height={32} />
                <p>{label}</p>
              </div>
            ))}
          </Marquee>
        </div>
        <div className="grid md:grid-cols-2 gap-4 py-4"></div>
      </div>
    </>
  );
};

export default TechStack;
