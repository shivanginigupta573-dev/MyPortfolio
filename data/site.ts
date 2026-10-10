import { SiteConfig } from "@/types";
import { publicEnv } from "@/lib/env";

const name = publicEnv("NEXT_PUBLIC_SITE_NAME", "Your Name");
const title =
  publicEnv("NEXT_PUBLIC_SITE_TITLE") ||
  `${name} — ${publicEnv("NEXT_PUBLIC_SITE_SUBTITLE", "Software Engineer")}`;

export const siteConfig: SiteConfig = {
  name,
  title,
  role: publicEnv("NEXT_PUBLIC_SITE_ROLE", "SOFTWARE ENGINEER"),
  tagline: publicEnv("NEXT_PUBLIC_SITE_TAGLINE", `Hello, I'm ${name.split(" ")[0]}.`),
  statement: publicEnv(
    "NEXT_PUBLIC_SITE_STATEMENT",
    "I build things, then figure out why they work."
  ),
  bio: publicEnv(
    "NEXT_PUBLIC_SITE_BIO",
    "Software engineer focused on building robust full-stack applications and exploring system internals."
  ),
  engineeringPhilosophy: publicEnv(
    "NEXT_PUBLIC_SITE_PHILOSOPHY",
    "I like understanding what happens underneath the button."
  ),
  location: publicEnv("NEXT_PUBLIC_SITE_LOCATION", "India"),
  email: publicEnv("NEXT_PUBLIC_SITE_EMAIL", "you@example.com"),
  socials: {
    github: publicEnv("NEXT_PUBLIC_SITE_GITHUB", "https://github.com/yourusername"),
    linkedin: publicEnv("NEXT_PUBLIC_SITE_LINKEDIN", "https://linkedin.com/in/yourusername"),
    ...(publicEnv("NEXT_PUBLIC_SITE_TWITTER")
      ? { twitter: publicEnv("NEXT_PUBLIC_SITE_TWITTER") }
      : {}),
  },
};

export const siteUrl = publicEnv("NEXT_PUBLIC_SITE_URL", "http://localhost:3000");

export const siteSubtitle = publicEnv("NEXT_PUBLIC_SITE_SUBTITLE", "Software Engineer");

export const siteHeroIntro = publicEnv(
  "NEXT_PUBLIC_SITE_HERO_INTRO",
  "I'm a software engineer focused on building clean web applications, exploring NLP pipelines, and diving into system internals."
);
