import { Hero } from "@/components/sections/Hero";
import { Positioning } from "@/components/sections/Positioning";
import { Expertise } from "@/components/sections/Expertise";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { Method } from "@/components/sections/Method";
import { Skills } from "@/components/sections/Skills";
import { Experience } from "@/components/sections/Experience";
import { BlogPreview } from "@/components/sections/BlogPreview";
import { Contact } from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Positioning />
      <Expertise />
      <CaseStudies />
      <Method />
      <Skills />
      <Experience />
      <BlogPreview />
      <Contact />
    </>
  );
}
