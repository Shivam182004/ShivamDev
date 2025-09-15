import { AboutSection } from "@/sections/About";
import { ContactSection } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";
import { TapeSection } from "@/sections/Tape";
import { BlogsSection } from "@/sections/BlogsSection";
import { TestimonialsSection } from "@/sections/TestimonialsSection";

export default function Home() {
  return (
    <div>
   <Header />
      <HeroSection />
      <ProjectsSection  />
      <TapeSection  />
      {/* <BlogsSection  /> */}
      <TestimonialsSection/>
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
