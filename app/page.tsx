import { Hero } from "@/components/sections/Hero";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { About } from "@/components/sections/About";
import { Education } from "@/components/sections/Education";
import { Blog } from "@/components/sections/Blog";
import { Contact } from "@/components/sections/Contact";
import { features } from "@/lib/features";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Skills />
      <Projects />
      <Experience />
      <About />
      <Education />
      {features.blog && <Blog />}
      <Contact />
    </>
  );
}
