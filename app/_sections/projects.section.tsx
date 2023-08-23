import { projects } from "@/configs/project/project.config";
import Image from "next/image";
import Link from "next/link";
import type { ReactElement } from "react";

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
        {projects.map((project) => (
          <div key={project.name} className="flex items-center gap-4 p-4 bg-gray-400 rounded-lg">
            <Image src={project.logo} alt={project.name} width={80} height={80} />
            <div>
              <p className="text-white text-lg font-medium">{project.name}</p>
              <p className="text-white-200 text-sm">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};