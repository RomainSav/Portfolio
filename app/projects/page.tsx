import { projects } from "@/configs/project/project.config";
import type { ReactElement } from "react";
import { ProjectCard } from "../_components/project-card";

const ProjectsPage = (): ReactElement => {
  return (
    <div>
      <div className="p-6">
        <div className="flex items-center gap-4">
          <div className="w-2 h-2 bg-gray-400 rounded-full" />
          <p className="text-lg text-white-100 font-medium">Projects</p>
        </div>

        <h1 className="text-white text-3xl font-semibold mt-10">My Works</h1>
        <p className="mt-2 text-white-200 text-start">
        Here are the projects I{"'"}ve contributed to, as well as those I{"'"}ve created.
        </p>

      </div>

      <div className="grid gap-4 m-2 p-4 bg-gray-300 rounded-lg">
        {projects.map((project) => <ProjectCard key={project.title} {...project} />)}
      </div>
    </div>
  );
};

export default ProjectsPage;