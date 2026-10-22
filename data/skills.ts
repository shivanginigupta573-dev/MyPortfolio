import { SkillCategory } from "@/types";

export const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    skills: [
      { name: "C++", highlight: true },
      { name: "Python", highlight: true },
      { name: "Java", highlight: true },
      { name: "JavaScript", highlight: true },
      { name: "SQL", highlight: true },
    ],
  },
  {
    title: "Core Computer Science",
    skills: [
      { name: "Data Structures & Algorithms", highlight: true },
      { name: "Object-Oriented Programming", highlight: true },
      { name: "Database Management Systems (DBMS)", highlight: true },
      { name: "Operating Systems", highlight: true },
    ],
  },
  {
    title: "Web Technologies",
    skills: [
      { name: "Next.js", highlight: true },
      { name: "React", highlight: true },
      { name: "Django", highlight: true },
      { name: "Django REST Framework", highlight: true },
      { name: "Tailwind CSS", highlight: true },
      { name: "REST APIs", highlight: true },
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "Git", highlight: true },
      { name: "GitHub", highlight: true },
      { name: "PostgreSQL", highlight: true },
      { name: "Postman", highlight: true },
      { name: "Vercel", highlight: true },
      { name: "Render", highlight: true },
    ],
  },
];
