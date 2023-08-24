import type { ReactElement } from "react";
import type { SkillButtonProps } from "./skill-button.type";
import Image from "next/image";
import { LinkButton } from "@/components/atoms/link-button";

export const SkillButton = ({ name, logo, link }: SkillButtonProps): ReactElement => {
  return (
    <LinkButton href={link} className="flex items-center justify-center gap-2">
      <Image src={logo} alt={name} height={22} width={22} />
      <p className="text-white-200">{name}</p>
    </LinkButton>
  );
};