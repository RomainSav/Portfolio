import { projects } from "@/configs/project/project.config";
import type { ReactElement } from "react";

export const ProjectsSection = (): ReactElement => {
  return (
    <div className="bg-gray-300 m-2 p-4 rounded-lg">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="w-2 h-2 bg-gray-400 rounded-full" />
          <p className="text-lg text-white-100 font-medium">Projects</p>
        </div>
        <a href="/" className="flex items-center gap-2 px-2 py-2 bg-gray-400 sm:py-0.5 rounded-lg">
          <p className="text-sm text-white font-medium">View all</p>
        </a>
      </div>

      <div className="grid gap-4 mt-6">
        {projects.map((project) => (
          <div key={project.name} className="p-2 bg-gray-400 rounded-lg">

          </div>
        ))}
      </div>
    </div>
  );
};