import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import reactViteImg from "@/public/vite-react-app.png";
import angularLogoImg from "@/public/angular-logo.jpg";
import springBootImg from "@/public/spring-boot-logo.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "University Student",
    location: "Technological University of Peru",
    description: "I start studying Systems and Computer Engineering.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Independent Projects",
    location: "Technological University of Peru",
    description: "I do programming projects on my own.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - present",
  },
  {
    title: "Full-Stack Developer",
    location: "Technological University of Peru",
    description:
      "I offer full-stack services and am looking for full-time job opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Angular Zzootec Web",
    description:
      "This project was a web application for a course which is developed to a point of reports in jaspersoft.",
    tags: ["Angular", "Spring Boot", "Mysql", "Hibernate", "JPA"],
    imageUrl: angularLogoImg,
  },
  {
    title: "React Simple App Web",
    description:
      "Application in react but in a simple way that has a simple structure.",
    tags: ["React", "TypeScript", "Nestjs"],
    imageUrl: reactViteImg,
  },
  {
    title: "Spring Boot App",
    description:
      "A rest api made in spring boot that manages the endpoints through a middleware that filters the role of the users according to the token that is sent by the server.",
    tags: ["Spring Boot", "Spring Security", "JPA", "Hibernate"],
    imageUrl: springBootImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Spring Boot",
  "Git",
  "Tailwind",
  "Prisma",
  "TypeORM",
  "MongoDB",
  "Redux",
  "Express",
  "Nestjs",
  "Python",
  "Framer Motion",
] as const;
