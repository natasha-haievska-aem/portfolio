import type { RoleKey } from '../components/RoleContext';

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
    satisfaction: string;
  };
}

const emEngExperience = `${new Date('2022.02.24').getFullYear() - new Date('2013.06.01').getFullYear()}+`;
const fsDevExperience = `${new Date().getFullYear() - 2021}+`;

export const profileData: Record<RoleKey, ProfileData> = {
  fullStackDev: {
    tagline: 'Full-Stack Developer',
    title: 'Crafting Beautiful Digital Experiences',
    description: [
      "I'm a passionate full-stack developer specializing in building exceptional digital experiences. I focus on creating responsive, performant, and accessible web applications using modern technologies like React, TypeScript, and Node.js.",
      'My expertise lies in transforming designs into pixel-perfect, interactive interfaces while maintaining clean, maintainable code and following best practices.',
    ],
    stats: {
      experience: fsDevExperience,
      projects: '50+',
      satisfaction: '100%',
    },
  },
  emEng: {
    tagline: 'Electromechanical Engineer',
    title: 'Building Intelligent Systems',
    description: [
      "I'm an electromechanical engineer with expertise in automation, control systems, and mechatronics. I design and implement integrated solutions combining electrical, mechanical, and software components.",
      'My background includes PLC programming, CAD design, power systems, and industrial automation with a focus on efficiency and reliability.',
    ],
    stats: {
      experience: emEngExperience,
      projects: '30+',
      satisfaction: '100%',
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
      title: 'Front-End',
      skills: [
        { name: 'React', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'JavaScript (ES6+)', level: 95 },
        { name: 'HTML5 & CSS3', level: 98 },
        { name: 'Tailwind CSS', level: 92 },
        { name: 'Next.js', level: 88 },
      ],
    },
    {
      title: 'Back-End & Tools',
      skills: [
        { name: 'Node.js', level: 88 },
        { name: 'PostgreSQL / MongoDB', level: 85 },
        { name: 'REST APIs & GraphQL', level: 88 },
        { name: 'Git & GitHub', level: 90 },
        { name: 'Docker', level: 80 },
        { name: 'AWS / GCP', level: 78 },
      ],
    },
  ],
  emEng: [
    {
      title: 'Engineering Software',
      skills: [
        { name: 'SolidWorks (PDM)', level: 90 },
        { name: 'ANSYS', level: 85 },
        { name: 'MATLAB / Simulink', level: 80 },
        { name: 'EPLAN Electric', level: 82 },
        { name: 'LabVIEW', level: 78 },
        { name: 'Altium Designer', level: 75 },
      ],
    },
    {
      title: 'Technical Skills',
      skills: [
        { name: 'Control Systems', level: 90 },
        { name: 'Industrial Automation', level: 88 },
        { name: 'Power Electronics', level: 85 },
        { name: 'Mechatronics', level: 87 },
        { name: 'Embedded Systems', level: 80 },
        { name: 'Technical Documentation', level: 92 },
      ],
    },
  ],
};

// ============================================
// PROJECTS DATA
// ============================================
export interface Project {
  title: string;
  description: string;
  tags: string[];
  github?: string;
  demo?: string;
  image: string;
  featured: boolean;
}

export const projectsData: Record<RoleKey, Project[]> = {
  fullStackDev: [
    {
      title: 'E-Commerce Platform',
      description:
        'A fully responsive e-commerce platform with shopping cart, payment integration, and admin dashboard. Features real-time inventory updates and seamless checkout experience.',
      tags: ['React', 'TypeScript', 'Stripe', 'Tailwind CSS'],
      github: '#',
      demo: '#',
      image:
        'https://images.unsplash.com/photo-1750056393300-102f7c4b8bc2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ24lMjBtb2NrdXB8ZW58MXx8fHwxNzY3MzM2ODQwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      featured: true,
    },
    {
      title: 'Dashboard Analytics',
      description:
        'Modern analytics dashboard with interactive charts, real-time data visualization, and customizable widgets. Built with performance and scalability in mind.',
      tags: ['Next.js', 'Recharts', 'PostgreSQL', 'React Query'],
      github: '#',
      demo: '#',
      image:
        'https://images.unsplash.com/photo-1604781109199-ced99b89b0f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzY3MzY4NjY5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      featured: true,
    },
    {
      title: 'Social Media App',
      description:
        'Mobile-first progressive web app with real-time messaging, user profiles, and social features. Optimized for performance and offline functionality.',
      tags: ['React', 'PWA', 'WebSockets', 'Firebase'],
      github: '#',
      demo: '#',
      image:
        'https://images.unsplash.com/photo-1605108222700-0d605d9ebafe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzY3MzQzODc0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      featured: false,
    },
  ],
  emEng: [
    {
      title: 'Automated Assembly Line',
      description:
        'Designed and programmed a fully automated assembly line with PLC control, robotic arms, and conveyor systems. Achieved 40% increase in production efficiency.',
      tags: ['PLC', 'Siemens S7', 'SCADA', 'Robotics'],
      github: undefined,
      demo: '#',
      image:
        'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
      featured: true,
    },
    {
      title: 'Smart Building Control System',
      description:
        'Integrated HVAC, lighting, and security systems for a commercial building. Implemented energy-efficient algorithms reducing power consumption by 30%.',
      tags: ['BMS', 'HVAC', 'IoT Sensors', 'Energy Management'],
      github: undefined,
      demo: '#',
      image:
        'https://images.unsplash.com/photo-1497366216548-37526070297c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
      featured: true,
    },
    {
      title: 'Motor Control System',
      description:
        'Developed a variable frequency drive (VFD) control system for industrial motors with soft start, regenerative braking, and fault protection features.',
      tags: ['VFD', 'Power Electronics', 'Motor Control', 'C/C++'],
      github: undefined,
      demo: '#',
      image:
        'https://images.unsplash.com/photo-1518770660439-4636190af475?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
      featured: false,
    },
  ],
};
