import { OpenSourceContribution, OpenSourceRecord } from "@/types";

const wagtailRecords: OpenSourceRecord[] = [
  {
    id: "pr-645",
    reference: "PR #645",
    title: "Gallery image titles",
    status: "Merged",
    url: "https://github.com/wagtail/bakerydemo/pull/645",
    detail: "Replaced six generic fixture titles with descriptive names.",
  },
  {
    id: "pr-660",
    reference: "PR #660",
    title: "HomePage editor help text",
    status: "Merged",
    url: "https://github.com/wagtail/bakerydemo/pull/660",
    detail: "Added useful guidance to HomePage admin panels.",
  },
  {
    id: "issue-450",
    reference: "Issue #450",
    title: "Repeated HomePage help text",
    status: "Closed",
    url: "https://github.com/wagtail/bakerydemo/issues/450",
    detail: "Checked the main branch; the repeated help text was already fixed.",
  },
  {
    id: "issue-640",
    reference: "Issue #640",
    title: "Gallery image-title report",
    status: "Closed",
    url: "https://github.com/wagtail/bakerydemo/issues/640",
    detail: "Reported the generic gallery titles; the update shipped in PR #645.",
    relatedUrl: "https://github.com/wagtail/bakerydemo/pull/645",
    relatedReference: "PR #645",
  },
  {
    id: "issue-677",
    reference: "Issue #677",
    title: "Search heading hierarchy",
    status: "Closed",
    url: "https://github.com/wagtail/bakerydemo/issues/677",
    detail: "Reported skipped heading levels; the fix was merged separately.",
    relatedUrl: "https://github.com/wagtail/bakerydemo/pull/682",
    relatedReference: "PR #682",
  },
];

export const wagtailContribution: OpenSourceContribution & {
  contributions: OpenSourceRecord[];
} = {
  id: "wagtail",
  projectName: "Wagtail Bakery Demo",
  organization: "Wagtail Community",
  role: "Contributor",
  description:
    "Changes and reports across demo content, editor guidance, and search accessibility.",
  technologies: ["Python", "Django", "Wagtail"],
  impact: "Gallery fixture updates, clearer HomePage help text, and an accessibility report.",
  year: "2026",
  link: "https://github.com/wagtail/bakerydemo",
  contributions: wagtailRecords,
};

export const openSourceData: OpenSourceContribution[] = [
  wagtailContribution,
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
