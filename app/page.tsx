"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import HeroSection from "@/components/HeroSection";
import RightSection from "@/components/RightSection";
import FeaturesSection from "@/components/FeaturesSection";
import ServicesSection from "@/components/ServicesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <main className="min-h-screen bg-background-white overflow-x-hidden">
      <Sidebar onToggle={setSidebarOpen} />
      <div
        className={`w-[calc(100%-64px)] md:w-[calc(100%-80px)] ${
          sidebarOpen ? "ml-64" : "ml-16 md:ml-20"
        }`}
      >
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 relative transition-all duration-300 ease-in-out`}
        >
          {/* Left Section - Hero */}
          <div className="bg-background-white relative z-10 overflow-visible">
            <HeroSection />
          </div>

          {/* Right Section - Abstract Background */}
          <div className="hidden lg:block bg-background-light relative overflow-hidden">
            <RightSection />
          </div>
        </div>

        {/* Features Section */}
        <div
          className={`bg-background-white relative z-10 transition-all duration-300 ease-in-out w-full max-w-full overflow-hidden box-border`}
        >
          <div className="w-full max-w-full px-4 md:px-8 lg:px-12 xl:px-20 py-6 md:py-8 flex flex-col box-border bg-background-white">
            <FeaturesSection />
          </div>
        </div>

        {/* Services Section */}
        <div
          className={`bg-background-white relative z-10 transition-all duration-300 ease-in-out w-full max-w-full overflow-hidden box-border`}
        >
          <div className="w-full max-w-full px-4 md:px-8 lg:px-12 xl:px-20 py-6 md:py-8 flex flex-col box-border">
            <ServicesSection />
          </div>
        </div>

        {/* Contact Section */}
        <div
          className={`bg-background-white relative z-10 transition-all duration-300 ease-in-out w-full max-w-full overflow-hidden box-border`}
        >
          <div className="w-full max-w-full px-4 md:px-8 lg:px-12 xl:px-20 py-6 md:py-8 flex flex-col box-border">
            <ContactSection />
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
}
