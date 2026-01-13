"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import StarIcon from "@/components/icons/Star";
import SectionContainer from "@/components/ui/SectionContainer";

export interface Project {
  id: string;
  name: string;
  year: string;
  image: string;
  title: string;
  description: string;
  href?: string;
}

export interface ProjectsProps extends React.HTMLAttributes<HTMLElement> {
  badgeText?: string;
  heading?: string;
  description?: string;
  projects?: Project[];
  companyLogos?: string[];
}

const defaultProjects: Project[] = [
  {
    id: "elevenlabs",
    name: "ElevenLabs",
    year: "2025",
    image:
      "https://framerusercontent.com/images/Jjd3aeyaIOfbSK47G6sftueqw7g.png?width=800&height=1200",
    title: "Sales Workflow Optimization",
    description:
      "We automated lead follow-ups and CRM tasks, reducing manual work by 70% and boosting qualified lead conversion rates.",
    href: "https://www.behance.net/",
  },
  {
    id: "medassist",
    name: "MedAssist AI",
    year: "2024",
    image:
      "https://framerusercontent.com/images/y3qelaaqWj1N7BKGIHNKl6VL5fs.png?width=907&height=1200",
    title: "Healthcare Intake Automation",
    description:
      "Built an intake automation system that cut admin time by 55% and improved patient onboarding efficiency by 38% across all clinics.",
    href: "https://www.behance.net/",
  },
  {
    id: "autotag",
    name: "AutoTag Pro",
    year: "2023",
    image:
      "https://framerusercontent.com/images/QGUnUdBrjJ7dPQtbr7XqO3p0KRE.png?width=1200&height=655",
    title: "E-commerce Product Tagging",
    description:
      "Created an AI tool that auto-tagged 10K+ SKUs with 92% accuracy, cutting tagging time by 80% and boosting product by 30%.",
    href: "https://www.behance.net/",
  },
];

const defaultCompanyLogos = [
  "https://framerusercontent.com/images/YUxV3rqZ7Wvh1h97M9ho3OJO0.svg?width=75&height=17", // Dune
  "https://framerusercontent.com/images/EboQqPMe8PvYShxr0q82nHBVaec.svg?width=45&height=14", // Asterisk
  "https://framerusercontent.com/images/bn15sRZOZ1zNW6U4lKel1VE9eA.svg?width=58&height=19", // Oasis
  "https://framerusercontent.com/images/iDUtqN0QXPf3CrA1JgKCl01lasg.svg?width=57&height=18", // Fooks
  "https://framerusercontent.com/images/vICkLbycO96hE8662eq2BfqKXs.svg?width=69&height=24", // Opal
];

const Projects = React.forwardRef<HTMLElement, ProjectsProps>(
  (
    {
      className,
      badgeText = "PROJECTS",
      heading = "Our Latest Projects",
      description = "See how we turn bold ideas into automated AI solutions carefully crafted to optimize, scale, and deliver measurable results.",
      projects = defaultProjects,
      companyLogos = defaultCompanyLogos,
      ...props
    },
    ref
  ) => {
    const [activeProject, setActiveProject] = useState<string>(
      projects[1]?.id || projects[0]?.id
    );
    const activeProjectData =
      projects.find((p) => p.id === activeProject) || projects[0];

    return (
      <SectionContainer
        ref={ref}
        id="projects"
        maxWidth="1224"
        className={className}
        {...props}
      >
        <div className="relative z-10 w-full flex flex-col gap-11">
          {/* Main Content Container */}
          <div className="flex flex-col lg:flex-row gap-11 w-full max-w-[1144px] mx-auto">
            {/* Left Panel */}
            <div className="flex flex-col gap-6 flex-1">
              {/* Heading Section */}
              <div className="flex flex-col gap-6">
                {/* Badge with Icon */}
                <div className="flex items-center gap-2 rounded-[60px] px-6 py-3 bg-gradient-to-b from-background-secondary/50 to-background/50 shadow-card w-fit">
                  <div className="flex items-center justify-center w-6 h-6 opacity-30">
                    <StarIcon className="w-full h-full text-primary-500" />
                  </div>
                  <span className="text-sm font-medium text-foreground">
                    {badgeText}
                  </span>
                </div>

                {/* Heading */}
                <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                  {heading}
                </h2>

                {/* Description */}
                <p className="text-base text-foreground-muted opacity-70 max-w-md">
                  {description}
                </p>
              </div>

              {/* Project List */}
              <div className="flex flex-col gap-3">
                {projects.map((project) => {
                  const isActive = project.id === activeProject;
                  return (
                    <button
                      key={project.id}
                      onClick={() => setActiveProject(project.id)}
                      className={cn(
                        "relative flex items-center justify-between p-4 rounded-[10px]",
                        "bg-gradient-to-b from-background-secondary/50 to-background/50 shadow-card",
                        "transition-opacity duration-300 cursor-pointer",
                        "hover:opacity-100",
                        isActive ? "opacity-100" : "opacity-60"
                      )}
                    >
                      <p className="text-base text-foreground">
                        {project.name}
                      </p>
                      <p className="text-base text-foreground">
                        {project.year}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right Panel - Featured Project */}
            <div className="flex-1 relative min-h-[545px]">
              {projects.map((project, index) => {
                const isActive = project.id === activeProject;
                const borderRadius =
                  index === 0 ? "14px" : index === 2 ? "10px" : "14px";

                return (
                  <a
                    key={project.id}
                    href={project.href || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "absolute inset-0 block overflow-hidden shadow-lg",
                      "transition-opacity duration-300",
                      isActive ? "opacity-100" : "opacity-0 pointer-events-none"
                    )}
                    style={{ borderRadius }}
                  >
                    {/* Project Image */}
                    <div className="relative w-full h-full">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                        style={{ borderRadius }}
                      />
                      {/* Overlay */}
                      <div
                        className="absolute inset-0"
                        style={{
                          backdropFilter: "blur(5px)",
                          backgroundColor: "rgba(1, 1, 13, 0.64)",
                          borderRadius,
                        }}
                      >
                        {/* Content */}
                        <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col gap-3">
                          <h3 className="text-2xl font-semibold text-white">
                            {project.title}
                          </h3>
                          <p className="text-base text-white/70">
                            {project.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Company Logos Section */}
          <div className="w-full overflow-hidden">
            <div
              className="flex items-center gap-[100px] py-10"
              style={{
                maskImage:
                  "linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 12.5%, rgb(0, 0, 0) 87.5%, rgba(0, 0, 0, 0) 100%)",
              }}
            >
              {/* Duplicated logos for infinite scroll effect */}
              {[...companyLogos, ...companyLogos, ...companyLogos].map(
                (logo, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 h-[24px] opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300"
                  >
                    <img
                      src={logo}
                      alt={`Company logo ${index}`}
                      className="h-full w-auto object-contain"
                    />
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </SectionContainer>
    );
  }
);

Projects.displayName = "Projects";

export default Projects;
