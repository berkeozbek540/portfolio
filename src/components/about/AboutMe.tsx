import { useTranslations } from "next-intl";

const AboutMe = () => {
  const t = useTranslations("about");
  return (
    <>
      <div>
        <h1 className="text-2xl font-bold text-white">{t("title")}</h1>
        <div className="w-10 h-1.5 my-2 bg-amber-400 rounded-full"></div>
      </div>
      <div>
        <p className="text-gray-400">{t("description")}</p>
      </div>
    </>
  );
};

export default AboutMe;
