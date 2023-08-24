import type { ReactElement } from "react";
import { skills } from "@/configs/skill";
import { SkillButton } from "./_components/skill-button";

export const SkillsSection = (): ReactElement => {
  return (
    <div className="my-10">
      <h2 className="text-center text-lg text-white-100 font-medium">Skills</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 justify-center gap-2 mt-4 px-2">
        {skills.map((skill) => <SkillButton key={skill.name} {...skill} />)}
      </div>
    </div>
  );
};