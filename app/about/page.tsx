import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import AboutHero from "@/components/about/AboutHero";
import CompanyStory from "@/components/about/CompanyStory";
import MissionVision from "@/components/about/MissionVision";
import Licenses from "@/components/about/Licenses";
import TeamSection from "@/components/about/TeamSection";

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main>
        <AboutHero />

        <CompanyStory />

        <MissionVision />

        <Licenses />

        <TeamSection />
      </main>

      <Footer />
    </>
  );
}