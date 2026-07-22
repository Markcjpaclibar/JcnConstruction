"use client";

import Navbar from "@/components/layout/Navbar";

import Hero from "@/components/home/Hero";
import CompanyStats from "@/components/home/CompanyStats";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Services from "@/components/home/Services";
import Process from "@/components/home/Process";
import HomeRecentProjects from "@/components/home/HomeRecentProjects";
import PromotionalServices from "@/components/home/PromotionalServices";
import Footer from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main>
        {/* Hero */}
        <Hero />

        {/* Company Statistics */}
        <CompanyStats />

        {/* Why Choose Us */}
        <WhyChooseUs />

        {/* Services */}
        <Services />

        {/* Construction Process */}
        <Process />

        {/* Recent Projects */}
        <HomeRecentProjects />

        {/* Promotional Services */}
        <PromotionalServices />

        <Footer />
        
      </main>
    </>
  );
}