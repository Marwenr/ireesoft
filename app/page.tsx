import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Approach from "@/components/sections/Approach";
import Technologies from "@/components/sections/Technologies";
import WhyUs from "@/components/sections/WhyUs";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Approach />
        <Technologies />
        <WhyUs />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

