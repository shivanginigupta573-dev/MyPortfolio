import { Project } from "@/types";

export const projectsData: Project[] = [
  {
    id: "commonroom",
    slug: "commonroom",
    title: "CommonRoom",
    tagline: "Real-time collaborative workspace platform",
    description:
      "A full-stack collaborative platform providing real-time room communication, persistent event streams, and JWT authentication backed by Django REST Framework and Next.js.",
    fullDescription:
      "CommonRoom bridges frontend real-time interaction with a robust backend architecture. Built using Django REST Framework and PostgreSQL, it handles live updates via WebSockets and secures REST endpoints with JWT authentication.",
    technologies: ["Next.js", "Django REST Framework", "PostgreSQL", "JWT", "WebSockets"],
    role: "Full Stack Engineer",
    featured: true,
    category: "Full Stack",
    architectureHighlights: [
      "WebSocket gateway for low-latency event broadcasting",
      "Django REST Framework APIs with JWT authentication",
      "Relational schema design with PostgreSQL persistence",
    ],
  },
  {
    id: "commentlens",
    slug: "commentlens",
    title: "CommentLens",
    tagline: "Natural language comment analytics and sentiment extraction platform",
    description:
      "An intelligent comment processing tool leveraging Python NLP pipelines to cluster, classify, and summarize textual feedback in real time.",
    fullDescription:
      "CommentLens automates textual analysis across user feedback channels. Combining Python NLP algorithms with a React dynamic frontend and Django REST Framework backend API, it extracts action items and groups thematic discussions.",
    technologies: ["Python", "NLP", "React", "Django REST Framework"],
    role: "Software / NLP Engineer",
    featured: true,
    category: "NLP / Data Science",
    architectureHighlights: [
      "Custom NLP preprocessing pipeline for tokenization & sentiment scoring",
      "Django REST API endpoint composition for fast frontend querying",
      "Interactive data visualization interface built with React",
    ],
  },
  {
    id: "swarm-grid",
    slug: "swarm-grid",
    title: "Swarm Grid",
    tagline: "Parallel multi-agent exploration simulation framework",
    description:
      "A distributed agent exploration engine written in Python, utilizing process pools and inter-process IPC to simulate autonomous swarm search logic.",
    fullDescription:
      "Swarm Grid tests multi-agent traversal algorithms across grid environments. Designed with Python multiprocessing, it coordinates concurrent state updates and barrier synchronization across independent agent processes.",
    technologies: ["Python", "multiprocessing", "multi-agent exploration"],
    role: "Systems / Algorithmic Developer",
    featured: true,
    category: "Distributed Systems",
    architectureHighlights: [
      "Process-level isolation utilizing Python multiprocessing primitives",
      "Shared memory buffer management for grid cell occupancy",
      "Heuristic exploration logic with agent state coordination",
    ],
  },
];
