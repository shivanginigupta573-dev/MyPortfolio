import { SkillCategory } from "@/types";

export const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    skills: [
      { name: "Python", highlight: true },
      { name: "TypeScript", highlight: true },
      { name: "JavaScript", highlight: true },
      { name: "SQL", highlight: true },
      { name: "HTML5 / CSS3", highlight: false },
    ],
  },
  {
    title: "Frameworks & Web",
    skills: [
      { name: "Next.js (App Router)", highlight: true },
      { name: "React", highlight: true },
      { name: "Django REST Framework", highlight: true },
      { name: "Tailwind CSS", highlight: true },
      { name: "WebSockets", highlight: false },
    ],
  },
  {
    title: "Systems & Data",
    skills: [
      { name: "PostgreSQL", highlight: true },
      { name: "Multiprocessing", highlight: true },
      { name: "NLP Analysis", highlight: true },
      { name: "JWT Auth", highlight: false },
      { name: "Git & GitHub", highlight: true },
    ],
  },
];
