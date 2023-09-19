"use client";

import { projectsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import Project from "./project";
import SectionHeading from "./section-heading";

const Projects = () => {
  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <section
      ref={ref}
      id="projects"
      className="scroll-mt-28 mb-28"
    >
      <SectionHeading>Projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          // <React.Fragment key={index}>
          //   <Project {...project}/>
          // </React.Fragment>
          <Project
            key={index}
            {...project}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
