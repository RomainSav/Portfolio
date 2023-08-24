import type { ReactElement } from "react";
import type { ProjectCardProps } from "./project-card.type";
import Link from "next/link";
import Image from "next/image";

export const ProjectCard = ({ title, description, logo }: ProjectCardProps): ReactElement => {
  return (
    <Link href="/" className="grid sm:grid-cols-[1fr_5fr] items-center gap-1 sm:gap-4 p-4 bg-gray-400 rounded-lg">
      <Image src={logo} alt={title} width={60} height={60} />
      <div>
        <p className="text-white text-lg font-medium">{title}</p>
        <p className="text-white-200 text-sm line-clamp-2">{description}</p>
      </div>
    </Link>
  );
};