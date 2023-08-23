import type { ReactElement } from "react";
import { AboutSection } from "./_sections/about.section";
import { ProjectsSection } from "./_sections/projects.section";
import { SkillsSection } from "./_sections/skills.section";

const HomePage = (): ReactElement => {
  return (
    <>
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
    </>
  );
};

export default HomePage;