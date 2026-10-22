import { Project } from "@/types";

export const projectsData: Project[] = [
  {
    id: "commonroom",
    slug: "commonroom",
    title: "CommonRoom",
    tagline: "A marketplace for campus essentials",
    description:
      "A campus marketplace where students can buy, sell, rent, and borrow items.",
    fullDescription:
      "CommonRoom brings campus listings and real-time messaging together, with a Next.js frontend and a Django REST Framework backend.",
    technologies: [
      "Next.js",
      "Django REST Framework",
      "PostgreSQL",
      "Django Channels",
      "WebSockets",
      "Cloudinary",
    ],
    role: "Full Stack Engineer",
    featured: true,
    category: "Full Stack",
    githubUrl: "https://github.com/shivanginigupta573-dev/commonroom",
    liveUrl: "https://commonroom-five.vercel.app/",
    architectureHighlights: [
      "Live in-app chat using Django Channels and WebSockets",
      "Server-side search and filtering against PostgreSQL",
      "Cloudinary-backed image uploads",
    ],
  },
  {
    id: "studysphere",
    slug: "studysphere",
    title: "StudySphere",
    tagline: "Study planning and productivity tools",
    description:
      "A student platform for organizing study plans, tracking productivity, and viewing learning consistency through a heatmap.",
    fullDescription:
      "StudySphere brings study planning and productivity tracking into one responsive student-focused interface.",
    technologies: ["React", "Vite", "JavaScript", "HTML/CSS"],
    role: "Developer",
    featured: true,
    category: "Productivity",
    githubUrl: "https://github.com/shivanginigupta573-dev/Study-Sphere",
    liveUrl: "https://study-sphere-sooty.vercel.app/",
    architectureHighlights: [
      "Study planning and organization",
      "Productivity tracking with a learning consistency heatmap",
      "Responsive React interface built with Vite",
    ],
  },
  {
    id: "commentlens",
    slug: "commentlens",
    title: "CommentLens",
    tagline: "Themes in YouTube comment collections",
    description:
      "A Python NLP pipeline that cleans YouTube comments, embeds sentence meaning, and clusters recurring themes.",
    fullDescription:
      "CommentLens processes YouTube comments through filtering, sentence embeddings, UMAP dimensionality reduction, and HDBSCAN clustering, with a React interface and Django REST API.",
    technologies: ["Python", "Sentence Transformers", "UMAP", "HDBSCAN", "Django REST Framework", "React", "Vite"],
    role: "Software / NLP Engineer",
    featured: true,
    category: "NLP / Data Science",
    githubUrl: "https://github.com/shivanginigupta573-dev/CommentLens",
    liveUrl: "https://comment-lens-alpha.vercel.app/",
    architectureHighlights: [
      "Sentence Transformers embeddings followed by UMAP reduction",
      "HDBSCAN discovers semantic comment clusters",
      "Django REST API with a React and Vite frontend",
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
    featured: false,
    category: "Distributed Systems",
    architectureHighlights: [
      "Process-level isolation utilizing Python multiprocessing primitives",
      "Shared memory buffer management for grid cell occupancy",
      "Heuristic exploration logic with agent state coordination",
    ],
  },
];
