import type { ReactElement } from "react";
import { AboutSection } from "./_sections/about.section";
import { ProjectsSection } from "./_sections/projects.section";

const HomePage = (): ReactElement => {
  return (
    <>
      <AboutSection />

      <ProjectsSection />
    </>
  );
};

export default HomePage;