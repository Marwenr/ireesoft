import Hero from "@/components/sections/Hero";
import Process from "@/components/sections/Process";
import Projects from "@/components/sections/Projects";
import Comparison from "@/components/sections/Comparison";
import Integrations from "@/components/sections/Integrations";
import Careers from "@/components/sections/Careers";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";
import Button from "@/components/ui/Button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

export default function Home() {
  return (
    <main>
      <Hero
        videoSrc="https://framerusercontent.com/assets/V9SkoRvPZYT1Y9hArxh9cYxdQLA.mp4"
        badgeText="NEW GEN AI AUTOMATION PARTNER"
        heading="Lead your business with AI-Automation"
        description="We help businesses harness the power of AI to work smarter, scale faster, and innovate boldly using custom automation & intelligent solutions."
        ctaText="Book A Free Call Now"
        ctaHref="https://cal.com/"
        showVideo={true}
      />

      <Process />

      <Projects />

      <Comparison />

      <Integrations />

      <Careers />

      <FAQ />

      <Contact />
    </main>
  );
}
