import type { RoleKey } from "../components/RoleContext";

import appButtonsImage from "@/assets/images/fsDev/appButtons.png";
import esudImage from "@/assets/images/fsDev/eSUD.png";
import pspMetricsImage from "@/assets/images/fsDev/psp_metrics_logo.jpeg";
import fmsImage from "@/assets/images/fsDev/FMS.png";
import portfolioImage from "@/assets/images/fsDev/Portfolio.png";
import mortalCombatImage from "@/assets/images/fsDev/MK.png";
import epImage from "@/assets/images/emEng/EP01.png";
import patentImage from "@/assets/images/emEng/Patent.png";

// ============================================
// PROFILE DATA
// ============================================
export interface ProfileData {
  tagline: string;
  title: string;
  description: string[];
  stats: {
    experience: string;
    projects: string;
  };
}

const emEngExperience = `${new Date("2021.09.01").getFullYear() - new Date("2012.06.01").getFullYear()}+`;
const fsDevExperience = `${new Date().getFullYear() - 2021}+`;

export const commonDescriptions = [
  "I have a Master’s degree in Electromechanics, and a significant part of my life has been dedicated to engineering: designing, putting new mechanisms for oil extraction into production, and scaling their serial manufacturing. Engineering shaped how I think: systematically, responsibly, and with respect for real-world constraints.",
  "During COVID, I began learning programming to build a profession that didn’t depend on being physically present in an office. After the war started in Ukraine in 2022, web development became a way for me to live and stay independent. Still, my heart belongs to engineering, especially at the intersection of electromechanical design and programming.",
  "Music is a long-term passion of mine, practiced at a professional level. I play piano, guitar, and drums, write original music, and have worked with an Ukrainian singer as a sound producer. I also participated as a performing musician and later led a worship band in a local church in Ukraine. Music gives me creative balance, discipline, and a deeper sense of harmony beyond technical work.",
  "I believe that if something doesn’t violate the laws of reality, it can be built.",
];

export const profileData: Record<RoleKey, ProfileData> = {
  fullStackDev: {
    tagline: "Full-Stack Developer",
    title: "Hi, nice to meet you! Let me tell you about myself.",
    description: [
      commonDescriptions[0],
      commonDescriptions[1],
      "Right now I'm a full-stack developer specializing in building exceptional digital experiences. I focus on creating responsive, performant, and accessible web applications using modern technologies like React, TypeScript, and Node.js.",
      "My expertise lies in transforming designs into pixel-perfect, scalable, interactive and mobile-first interfaces while maintaining clean, maintainable code and following best practices.",
      commonDescriptions[2],
      commonDescriptions[3],
    ],
    stats: {
      experience: fsDevExperience,
      projects: "7+",
    },
  },
  emEng: {
    tagline: "Electromechanical Engineer",
    title: "Hi, nice to meet you! Let me tell you about myself.",
    description: [
      commonDescriptions[0],
      "I started my career as a Junior Design Engineer, focusing on component-level design, calculations, and drafting for downhole oil extraction equipment. Over time, I built deep expertise in hydraulic, thermal, and strength analysis, gradually expanding my responsibility from individual parts to full tool assemblies operating under extreme downhole conditions.",
      "As I progressed into a Lead Design Engineer role, I took ownership of the complete development lifecycle - from concept and feasibility to prototyping, testing, and series production. I led the design of solutions for complex well geometries, including curved and nearly horizontal wells, working closely with manufacturing and field teams to ensure reliability and performance.",
      "One of the key outcomes of my work was the development of a unique downhole solution that advanced from concept to industrial deployment and resulted in multiple granted patents.",
      commonDescriptions[2],
      commonDescriptions[3],
    ],
    stats: {
      experience: emEngExperience,
      projects: "10+",
    },
  },
};

// ============================================
// SKILLS DATA
// ============================================
export interface Skill {
  name: string;
  level: number;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export const skillsData: Record<RoleKey, SkillCategory[]> = {
  fullStackDev: [
    {
      title: "Front-End",
      skills: [
        { name: "TypeScript", level: 90 },
        { name: "JavaScript (ES6+)", level: 95 },
        { name: "HTML5 & CSS3", level: 98 },
        { name: "Tailwind CSS", level: 92 },
        { name: "React", level: 95 },
        { name: "Vue.js", level: 75 },
        { name: "Next.js", level: 70 },
        { name: "Redux", level: 85 },
      ],
    },
    {
      title: "Back-End & Tools",
      skills: [
        { name: "Node.js", level: 88 },
        { name: "PostgreSQL / MySQL", level: 85 },
        { name: "MongoDB / Redis", level: 85 },
        { name: "REST APIs", level: 88 },
        { name: "Git & GitHub", level: 90 },
        { name: "AWS / GCP", level: 78 },
        { name: "Firebase", level: 80 },
        { name: "APIs integration", level: 85 },
      ],
    },
  ],
  emEng: [
    {
      title: "Engineering Software",
      skills: [
        { name: "SolidWorks (PDM)", level: 90 },
        { name: "ANSYS Maxwell", level: 90 },
        { name: "ANSYS Mechanical", level: 85 },
        { name: "ANSYS Fluent/CFD", level: 85 },
        { name: "ANSYS Workbench", level: 80 },
        { name: "MATLAB / Simulink", level: 75 },
      ],
    },
    {
      title: "Technical Skills",
      skills: [
        { name: "Technical Documentation", level: 95 },
        { name: "Technical Drawing Review", level: 95 },
        { name: "Techßnical Expertise", level: 90 },
        { name: "Project Management", level: 85 },
        { name: "Mechatronics", level: 75 },
        { name: "Power Electronics", level: 60 },
      ],
    },
  ],
};

// ============================================
// PROJECTS DATA
// ============================================

type ProjectBadge = "featured" | "fun" | "personal" | "under NDA";

export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;
  demo?: string;
  badge?: ProjectBadge[];
}

export const projectsData: Record<RoleKey, Project[]> = {
  fullStackDev: [
    {
      title: "AppButtons - The App Helper",
      description:
        "Add custom buttons and actions to business-critical CRMs and apps. Just add the button wherever you need it.",
      tags: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Chrome Extension",
        "NestJS",
        "MySQL",
        "REST APIs",
        "Firebase",
        "Stripe",
        "OpenAI",
        "GCP",
      ],
      demo: "https://chromewebstore.google.com/detail/appbuttons-the-app-helper/jgjipknilejkkehninepjgfcijpomnaj",
      image: appButtonsImage,
      badge: ["featured"],
    },
    {
      title: "Vivo+ - veterinary clinic web-site",
      description: "Single page web-site for veterinary clinic.",
      tags: ["No-code / low-code"],
      demo: "https://vivoplus-vet.com/",
      image: "https://pagemaker.b-cdn.net/media/103305/820x811.png",
    },
    {
      title: "E-SUD - online lawyer platform",
      description: "",
      tags: ["Vue.js"], //TODO: update
      demo: "https://e-sud.com.ua/",
      image: esudImage,
      badge: ["featured"],
    },
    {
      title: "Mortal Combat online game",
      description: "Fun project to practice JavaScript, HTML5, CSS3.",
      tags: ["JavaScript", "HTML5", "CSS3"],
      image: mortalCombatImage,
      badge: ["fun", "personal"],
      demo: "https://natasha-haievska-aem.github.io/MortalKombat/",
      github: "https://github.com/natasha-haievska-aem/MortalKombat",
    },
    {
      title: "PSP-Metrics",
      description: "Legacy system modernization using modern web technologies.",
      tags: ["React", "TypeScript", "NestJS", "REST APIs", "PostgreSQL"],
      image: pspMetricsImage,
      badge: ["featured", "under NDA"],
    },
    {
      title: "Forecast Management System",
      description: "Legacy system modernization using modern web technologies.",
      tags: ["React", "TypeScript", "Redux", "REST APIs", "MongoDB", "AWS"],
      image: fmsImage,
      badge: ["featured", "under NDA"],
    },
    {
      title: "Portfolio Web-site",
      description: "",
      tags: ["React", "TypeScript", "Tailwind CSS", "Ant Design"],
      image: portfolioImage,
      badge: ["personal"],
      github: "https://github.com/natasha-haievska-aem/Portfolio",
      demo: "https://natasha-haievska-aem.github.io/portfolio/",
    },
  ],
  emEng: [
    {
      title: "EP01",
      description:
        "EP01 is an innovative method designed to increase oil production in the most profitable way. I led this project from the skatch to the serial production.",
      tags: ["ANSYS", "SolidWorks", "PDM", "FEMM", "MATLAB", "Simulink", "Manufacturing Process"],
      demo: "https://www.youtube.com/watch?v=qE2feX8oYBs",
      image: epImage,
      badge: ["featured", "under NDA"],
    },
    {
      title: "Valve for a linear electric submersible pump",
      description:
        "Valve construction that allows to work in any angle of the pump installation. Works with minimal leackage and high efficiency.",
      tags: ["ANSYS", "CFX", "SolidWorks", "MATLAB", "Simulink"],
      demo: "https://patents.google.com/patent/USD963118S1",
      image: patentImage,
      badge: ["featured", "under NDA"],
    },
    {
      title: "Slider of a submersible linear motor",
      description:
        "The main moving part of a submersible linear motor. Having an innovative and optimized design, working as a part of a magnetic system, as well as a friction element.",
      tags: ["ANSYS", "Maxwell", "SolidWorks", "FEMM"],
      demo: "https://patents.google.com/patent/USD1009079S1",
      image: patentImage,
      badge: ["featured", "under NDA"],
    },
    {
      title: "Cable connection device for submersible linear electric motor",
      description: "",
      tags: ["SolidWorks"],
      demo: "https://patents.google.com/patent/UA141739U",
      image: patentImage,
      badge: ["featured", "under NDA"],
    },
    {
      title: "Submitted pump filter module",
      description: "",
      tags: ["ANSYS", "CFX", "SolidWorks"],
      demo: "https://patents.google.com/patent/UA148342U",
      image: patentImage,
      badge: ["featured", "under NDA"],
    },
    {
      title: "Plunger pump module with a gravity gas separator",
      description: "",
      tags: ["ANSYS", "CFX", "SolidWorks"],
      demo: "https://patents.google.com/patent/UA150259U",
      image: patentImage,
      badge: ["featured", "under NDA"],
    },
    {
      title:
        "Method of cooling of a current linear electric motor and devices of the device for its implementation",
      description: "",
      tags: ["ANSYS", "CFX", "SolidWorks"],
      demo: "https://patents.google.com/patent/UA121280C2",
      image: patentImage,
      badge: ["featured", "under NDA"],
    },
    {
      title: "Pump valve device",
      description: "",
      tags: ["ANSYS", "CFX", "SolidWorks", "MATLAB", "Simulink"],
      demo: "https://patents.google.com/patent/UA132059U",
      image: patentImage,
      badge: ["featured", "under NDA"],
    },
  ],
};
