import { projects } from "@/configs/project/project.config";
import Link from "next/link";
import type { ReactElement } from "react";
import { ProjectCard } from "../_components/project-card";

export const ProjectsSection = (): ReactElement => {
  return (
    <div className="bg-gray-300 m-2 p-4 rounded-lg">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="w-2 h-2 bg-gray-400 rounded-full" />
          <h2 className="text-lg text-white-100 font-medium">Projects</h2>
        </div>
        <Link href="/" className="flex items-center gap-2 px-2 py-2 bg-gray-400 rounded-lg">
          <p className="text-sm text-white font-medium">View all</p>
        </Link>
      </div>

      <div className="grid gap-4 mt-6">
        {projects.map((project) => <ProjectCard key={project.title} {...project} />)}
      </div>
    </div>
  );
};