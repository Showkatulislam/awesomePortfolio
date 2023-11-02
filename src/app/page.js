import Image from "next/image";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";

import AchievementsSection from "./components/AchievementsSection";
import Skill from "./components/Skill";

export default function Home() {
  return (
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <AchievementsSection />
        <AboutSection />
        <Skill/>
        <ProjectsSection />
        <EmailSection />
      </div>
  );
}
