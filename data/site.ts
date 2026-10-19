import { SiteConfig } from "@/types";
import { publicEnv } from "@/lib/env";

const name = publicEnv("NEXT_PUBLIC_SITE_NAME", "Shivangini");
const title =
  publicEnv("NEXT_PUBLIC_SITE_TITLE") ||
  `${name} — ${publicEnv("NEXT_PUBLIC_SITE_SUBTITLE", "Computer Science Student")}`;

export const siteConfig: SiteConfig = {
  name,
  title,
  role: publicEnv("NEXT_PUBLIC_SITE_ROLE", "UNDERGRAD CS STUDENT"),
  tagline: publicEnv("NEXT_PUBLIC_SITE_TAGLINE", "Hi, I'm Shivangini."),
  statement: publicEnv(
    "NEXT_PUBLIC_SITE_STATEMENT",
    "Undergrad CS student at NIT Durgapur."
  ),
  bio: publicEnv(
    "NEXT_PUBLIC_SITE_BIO",
    "Undergraduate Computer Science student at NIT Durgapur building thoughtful products and learning by shipping."
  ),
  engineeringPhilosophy: publicEnv(
    "NEXT_PUBLIC_SITE_PHILOSOPHY",
    "I like understanding how things work before I improve them."
  ),
  location: publicEnv("NEXT_PUBLIC_SITE_LOCATION", "India"),
  email: "shivanginigupta573@gmail.com",
  socials: {
    github: "https://github.com/shivanginigupta573-dev",
    linkedin: "https://www.linkedin.com/in/shivangini-gupta-nitd/",
    ...(publicEnv("NEXT_PUBLIC_SITE_TWITTER")
      ? { twitter: publicEnv("NEXT_PUBLIC_SITE_TWITTER") }
      : {}),
  },
};

export const siteUrl = publicEnv("NEXT_PUBLIC_SITE_URL", "http://localhost:3000");

export const siteSubtitle = publicEnv("NEXT_PUBLIC_SITE_SUBTITLE", "Computer Science Student");

export const siteHeroIntro = publicEnv(
  "NEXT_PUBLIC_SITE_HERO_INTRO",
  "I build thoughtful things and enjoy figuring out how they work."
);
