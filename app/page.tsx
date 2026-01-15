import Hero from "@/components/sections/Hero";
import Process from "@/components/sections/Process";
import Community from "@/components/sections/Community";
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
        badgeText="NEW-GEN SOFTWARE & AI PARTNER"
        heading="Power Your Business with Custom Software & Intelligent Solutions"
        description="Ireesoft delivers custom software, web & mobile applications, AI solutions, and secure hosting to help companies grow faster and smarter."
        ctaText="Let’s Build Your Solution"
        ctaHref="https://cal.com/"
        showVideo={true}
      />

      <Process />

      <Community />

      <Projects />

      <Comparison />

      <Integrations />

      <Careers />

      <FAQ />

      <Contact />
    </main>
  );
}
