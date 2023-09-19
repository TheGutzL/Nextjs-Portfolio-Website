"use client";

import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";

const About = () => {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
      ref={ref}
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3">
        I am a{" "}
        <span className="font-medium capitalize">
          systems and computer engineering
        </span>{" "}
        student with a passion for programming and problem solving. I am excited
        about future opportunities in the technology field and hope to
        contribute significantly as a <span className="underline">software developer</span>. Outside of
        the tech world, I enjoy a variety of interests that enrich my life and
        perspective.
      </p>
    </motion.section>
  );
};

export default About;
