import { useTranslations } from "next-intl";
import { Skill, skills } from "@/lib/data";
import { Separator } from "../ui/separator";

const SkillCategory = ({ title, items }: { title: string; items: Skill[] }) => {
  return (
    <div>
      <p className="text-lg font-bold text-amber-400 mb-2">{title}</p>
      <div className="flex flex-wrap gap-2">
        {items.map((skill, index) => (
          <div
            key={skill.label}
            className="flex items-center justify-center rounded-lg p-2 hover:border-amber-400 transition-all border bg-zinc-800 border-zinc-700 ">
            <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-400 mr-1" />
            <span className="text-sm text-white">{skill.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  const frontend = skills.filter((s) => s.category === "Frontend");
  const tools = skills.filter((s) => s.category === "Tools & Others");
  const backend = skills.filter((s) => s.category === "Backend");

  const t = useTranslations("skills");

  return (
    <div>
      <div>
        <h1 className="text-2xl font-bold text-white">{t("title")}</h1>
        <div className="w-10 h-1.5 my-2 bg-amber-400 rounded-full"></div>
      </div>
      <SkillCategory title={t("frontend")} items={frontend} />
      <Separator className="my-4" />
      <SkillCategory title={t("tools")} items={tools} />
      <Separator className="my-4" />
      <SkillCategory title={t("backend")} items={backend} />
    </div>
  );
};

export default Skills;
