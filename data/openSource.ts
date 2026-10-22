import { OpenSourceContribution, OpenSourceRecord } from "@/types";

const wagtailRecords: OpenSourceRecord[] = [
  {
    id: "pr-645",
    reference: "PR #645",
    title: "Gallery image titles fixture update",
    status: "Merged",
    url: "https://github.com/wagtail/bakerydemo/pull/645",
    detail: "Replaced six generic fixture titles in bakerydemo.json with descriptive image names.",
  },
  {
    id: "pr-660",
    reference: "PR #660",
    title: "HomePage editor help text",
    status: "Merged",
    url: "https://github.com/wagtail/bakerydemo/pull/660",
    detail: "Replaced placeholder help text with clear editing guidance in HomePage admin panels.",
  },
  {
    id: "issue-450",
    reference: "Issue #450",
    title: "Repeated HomePage help text investigation",
    status: "Closed",
    url: "https://github.com/wagtail/bakerydemo/issues/450",
    detail: "Investigated repeated help_text behavior and verified the fix was already in the main branch.",
  },
  {
    id: "issue-640",
    reference: "Issue #640",
    title: "Gallery image-title report",
    status: "Closed",
    url: "https://github.com/wagtail/bakerydemo/issues/640",
    detail: "Identified and reported generic fixture titles in the gallery; resolution shipped in PR #645.",
    relatedUrl: "https://github.com/wagtail/bakerydemo/pull/645",
    relatedReference: "PR #645",
  },
  {
    id: "issue-677",
    reference: "Issue #677",
    title: "Search heading hierarchy accessibility report",
    status: "Closed",
    url: "https://github.com/wagtail/bakerydemo/issues/677",
    detail: "Reported skipped heading levels on search results page; acknowledged and resolved based on finding.",
    relatedUrl: "https://github.com/wagtail/bakerydemo/pull/682",
    relatedReference: "PR #682",
  },
];

export const wagtailContribution: OpenSourceContribution & {
  contributions: OpenSourceRecord[];
} = {
  id: "wagtail",
  projectName: "Wagtail CMS (bakerydemo)",
  organization: "Wagtail Open Source Community",
  role: "Contributor",
  description:
    "Engineering contributions and issue reports across fixture data, admin editor guidance, and search accessibility in Wagtail CMS.",
  technologies: ["Python", "Django", "Wagtail CMS", "JSON Fixtures", "Accessibility"],
  impact: "Resolved fixture placeholders, updated admin guidance, and filed accessibility heading reports acknowledged and merged by maintainers.",
  year: "2025 — 2026",
  link: "https://github.com/wagtail/bakerydemo",
  contributions: wagtailRecords,
};

export const wagtailPrototypeContribution: OpenSourceContribution = {
  id: "wagtail-prototype",
  projectName: "Wagtail People-Section Prototype",
  organization: "Wagtail Demo Site",
  role: "Developer",
  description:
    "A full prototype site showcasing Wagtail CMS integration, custom People page types, and editorial workflows deployed to PythonAnywhere.",
  technologies: ["Python", "Django", "Wagtail CMS", "SQLite", "PythonAnywhere"],
  impact: "Live interactive demo showcasing Wagtail CMS content architecture and publishing workflow.",
  year: "2025",
  link: "https://shivangini.pythonanywhere.com",
};

export const openSourceData: OpenSourceContribution[] = [
  wagtailContribution,
  wagtailPrototypeContribution,
  {
    id: "hacktoberfest-2025",
    projectName: "Hacktoberfest 2025",
    organization: "DigitalOcean / Open Source Community",
    role: "Super Contributor",
    description:
      "Recognized Super Contributor in global open-source initiative, submitting verified pull requests across developer tooling and open documentation repositories.",
    technologies: ["Git", "Python", "TypeScript", "Markdown"],
    impact: "Earned Super Contributor recognition with accepted pull requests across community repositories.",
    year: "2025",
    link: "https://hacktoberfest.com",
  },
];
