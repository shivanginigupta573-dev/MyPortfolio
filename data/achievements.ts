export interface AchievementItem {
  id: string;
  title: string;
  description: string;
  metric?: string;
  year?: string;
}

export const achievementsData: AchievementItem[] = [
  {
    id: "hacktoberfest",
    title: "Hacktoberfest 2025 Super Contributor",
    description:
      "Awarded Super Contributor status for verified open-source pull requests merged across developer community repositories.",
    year: "2025",
  },
  {
    id: "dsa-problems",
    title: "450+ DSA Problems Solved",
    description:
      "Algorithmic problem solving across LeetCode, CodeChef, and Codeforces covering data structures, dynamic programming, and graphs.",
    metric: "450+ Solved",
  },
  {
    id: "google-big-code",
    title: "Google The Big Code 2026 Qualifier & Round 1",
    description:
      "Qualified and competed in Round 1 of Google's competitive problem-solving event.",
    year: "2026",
  },
  {
    id: "svmcm-scholarship",
    title: "Swami Vivekananda Merit-cum-Means Scholarship",
    description:
      "Merit-based scholarship recipient awarded for academic excellence in undergraduate computer science studies.",
  },
  {
    id: "entrance-ranks",
    title: "Competitive Entrance Ranks",
    description:
      "Secured JEE Advanced All India Rank 18,813 and WBJEE General Merit Rank 1,284.",
  },
];
