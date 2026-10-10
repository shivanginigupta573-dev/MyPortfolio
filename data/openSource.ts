import { OpenSourceContribution } from "@/types";

export const openSourceData: OpenSourceContribution[] = [
  {
    id: "wagtail",
    projectName: "Wagtail CMS",
    organization: "Wagtail Community",
    role: "Open Source Contributor",
    description:
      "Contributed bug fixes and feature enhancements to Wagtail, the leading Django-based open source Content Management System.",
    technologies: ["Python", "Django", "JavaScript", "HTML/CSS"],
    impact: "Improved admin user experience and refined template tag utilities.",
    year: "2024 - Present",
    link: "https://github.com/wagtail/wagtail",
  },
  {
    id: "studysphere",
    projectName: "StudySphere",
    organization: "Student Community Project",
    role: "Maintainer & Lead Developer",
    description:
      "Open-source collaborative learning platform for note sharing, revision tracking, and peer study rooms.",
    technologies: ["React", "Python", "Django REST Framework", "Tailwind CSS"],
    impact: "Built foundational search and category tag filter engines.",
    year: "2024",
    link: "https://github.com/shivanginigupta/studysphere",
  },
  {
    id: "hacktoberfest-2025",
    projectName: "Hacktoberfest 2025",
    organization: "DigitalOcean / Open Source",
    role: "Active Contributor",
    description:
      "Participated in global open-source initiative, submitting verified pull requests across software tooling repositories.",
    technologies: ["Git", "Python", "TypeScript"],
    impact: "Successfully completed pull requests enhancing docs and algorithm test suites.",
    year: "2025",
    link: "https://hacktoberfest.com",
  },
];
