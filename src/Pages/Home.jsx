import { ThemeToggle } from "../Components/ThemeToggle";
import { StarBackground } from "../Components/StarBackground";
import { Navbar } from "../Components/Navbar";
import { HeroSection } from "../Components/HeroSection";
import { AboutMe } from "../Components/AboutMe";
import { SkillsSection } from "../Components/SkillsSection";
import { ProjectSection } from "../Components/ProjectSection";
import { ContactSection } from "../Components/ContactSection";
import { Footer } from "../Components/Footer";
export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Theme Toggle  */}

      <ThemeToggle />
      {/* Background Effect  */}
      <StarBackground />
      {/* Navebar  */}
      <Navbar />
      {/* Main content  */}
      <main>
        <HeroSection />
        <AboutMe />
        <SkillsSection />
        <ProjectSection />
        <ContactSection />
      </main>
      {/* Footer  */}
      <Footer />
    </div>
  );
};
