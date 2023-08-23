import { skills } from "@/configs/skill";
import Image from "next/image";
import Link from "next/link";
import type { ReactElement } from "react";

export const SkillsSection = (): ReactElement => {
  return (
    <div className="my-10">
      <h2 className="text-center text-lg text-white-100 font-medium">Skills</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 justify-center gap-2 mt-4 px-2">
        {skills.map((skill) => (
          <Link key={skill.name} href={skill.link} className="border border-gray-400 bg-gray-300 rounded-lg py-2">
            <span className="flex items-center gap-2 justify-center">
              <Image src={skill.logo} alt={skill.name} height={22} width={22} />
              <p className="text-white-200">{skill.name}</p>
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};