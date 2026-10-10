import React from "react";
import { Hero } from "@/components/home/Hero";
import { EngineeringIntro } from "@/components/home/EngineeringIntro";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { OpenSourcePreview } from "@/components/home/OpenSourcePreview";
import { AssistantPreview } from "@/components/home/AssistantPreview";
import { ContactCTA } from "@/components/home/ContactCTA";

export default function HomePage() {
  return (
    <div className="flex flex-col space-y-0">
      <Hero />
      <EngineeringIntro />
      <FeaturedProjects />
      <OpenSourcePreview />
      <AssistantPreview />
      <ContactCTA />
    </div>
  );
}
