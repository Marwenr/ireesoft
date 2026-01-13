"use client";

import React from "react";
import { cn } from "@/lib/utils";
import Button from "@/components/ui/Button";
import Image from "next/image";
import SectionContainer from "@/components/ui/SectionContainer";
import CareersIcon from "../icons/CareersIcon";

export interface JobCardProps {
  title: string;
  description: string;
  tags: string[];
  icon: React.ReactNode;
  href?: string;
}

export interface CareersProps extends React.HTMLAttributes<HTMLElement> {
  heading?: string;
  imageSrc?: string;
  quoteText?: string;
  quoteAuthor?: string;
  jobs?: JobCardProps[];
  ctaPrimaryText?: string;
  ctaPrimaryHref?: string;
  ctaSecondaryText?: string;
  ctaSecondaryHref?: string;
}

// Icon components
const ProductDesignerIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 256"
    className="w-full h-full text-primary-500"
    fill="currentColor"
  >
    <g>
      <path
        d="M224,56V96H32V56a8,8,0,0,1,8-8H216A8,8,0,0,1,224,56Z"
        opacity="0.2"
      />
      <path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,16V88H40V56Zm0,144H40V104H216v96Z" />
    </g>
  </svg>
);

const BackendDeveloperIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 256"
    className="w-full h-full text-primary-500"
    fill="currentColor"
  >
    <g>
      <path d="M240,128l-48,40H64L16,128,64,88H192Z" opacity="0.2" />
      <path d="M69.12,94.15,28.5,128l40.62,33.85a8,8,0,1,1-10.24,12.29l-48-40a8,8,0,0,1,0-12.29l48-40a8,8,0,0,1,10.24,12.3Zm176,27.7-48-40a8,8,0,1,0-10.24,12.3L227.5,128l-40.62,33.85a8,8,0,1,0,10.24,12.29l48-40a8,8,0,0,0,0-12.29ZM162.73,32.48a8,8,0,0,0-10.25,4.79l-64,176a8,8,0,0,0,4.79,10.26A8.14,8.14,0,0,0,96,224a8,8,0,0,0,7.52-5.27l64-176A8,8,0,0,0,162.73,32.48Z" />
    </g>
  </svg>
);

const ArrowIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className="w-5 h-5 text-primary-500 opacity-50"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const SearchIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className="w-5 h-5 text-white"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.35-4.35" />
  </svg>
);

const defaultJobs: JobCardProps[] = [
  {
    title: "Product designer",
    description:
      "looking for a product designer who really cares about the user experience and a team player who shapes our product",
    tags: ["2+ years exp", "Remote"],
    icon: <ProductDesignerIcon />,
    href: "https://www.linkedin.com/jobs/",
  },
  {
    title: "Back end developer",
    description:
      "looking for a back-end developer who have knowledge on dealing with complex codebase and who can communicate as a team",
    tags: ["5+ years exp", "Remote/ On-site"],
    icon: <BackendDeveloperIcon />,
    href: "https://www.linkedin.com/jobs/",
  },
];

const JobCard: React.FC<JobCardProps> = ({
  title,
  description,
  tags,
  icon,
  href = "#",
}) => {
  const isExternal = href.startsWith("http");
  const LinkComponent = isExternal ? "a" : "a";

  return (
    <LinkComponent
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener" : undefined}
      className={cn(
        "group relative flex flex-col gap-4 w-full rounded-2xl p-6",
        "bg-gradient-to-b from-background-secondary/50 to-background/50",
        "shadow-card",
        "hover:opacity-90 transition-all",
        "cursor-pointer"
      )}
    >
      {/* Top section */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          {/* Icon container */}
          <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-b from-background-secondary/50 to-background/50 shadow-card p-2">
            <div className="w-full h-full flex items-center justify-center">
              {icon}
            </div>
          </div>
          {/* Title */}
          <h3 className="text-xl font-semibold text-primary-500">{title}</h3>
        </div>
        {/* Arrow icon */}
        <div className="flex-shrink-0 opacity-50 group-hover:opacity-100 transition-opacity">
          <ArrowIcon />
        </div>
      </div>

      {/* Description */}
      <p className="text-base text-foreground opacity-90 leading-relaxed">
        {description}
      </p>

      {/* Bottom tags */}
      <div className="flex items-center gap-2 flex-wrap">
        {tags.map((tag, index) => (
          <div
            key={index}
            className={cn(
              "px-3 py-1.5 rounded-lg text-sm font-medium",
              "bg-gradient-to-b from-background-secondary/50 to-background/50",
              "shadow-card text-primary-500 opacity-80"
            )}
          >
            {tag}
          </div>
        ))}
      </div>
    </LinkComponent>
  );
};

const Careers = React.forwardRef<HTMLElement, CareersProps>(
  (
    {
      className,
      heading = "Making future easy",
      imageSrc = "https://framerusercontent.com/images/DXfOsleNgbkx2P2iCFSWIjtgh8s.jpg?scale-down-to=2048&width=1597&height=2772",
      quoteText = "We Know your problems. We know your target audience and how you can grow rapidly with the help of automation",
      quoteAuthor = "Co-founder at landerOS",
      jobs = defaultJobs,
      ctaPrimaryText = "Check All Job Openings",
      ctaPrimaryHref = "https://www.linkedin.com/",
      ctaSecondaryText = "Contact Sales Now",
      ctaSecondaryHref = "./contact",
      ...props
    },
    ref
  ) => {
    return (
      <SectionContainer ref={ref} id="careers" className={className} {...props}>
        <div className="relative z-10 w-full">
          {/* Content Container */}
          <div className="flex flex-col items-center justify-center gap-11 w-full max-w-[1120px] mx-auto">
            {/* Heading Section */}

            {/* Heading Section Container */}
            <div className="flex flex-col items-center justify-center gap-2.5 w-full max-w-[1144px] relative">
              {/* Badge with Icon */}
              <div className="mb-3 flex items-center gap-2 rounded-[60px] px-6 py-3 bg-gradient-to-b from-background-secondary/50 to-background/50 shadow-card">
                <div className="flex items-center justify-center w-6 h-6 opacity-30">
                  <CareersIcon className="w-full h-full text-primary-500" />
                </div>
                <span className="text-sm font-medium text-foreground">
                  {"CAREERS"}
                </span>
              </div>

              {/* Heading with decorative lines */}
              <div className="flex justify-between items-center gap-2.5 w-full">
                {/* Decorative line above */}
                <div
                  className="hidden md:block w-[212px] h-1 rounded-[7px]"
                  style={{
                    backgroundColor: "rgb(235, 234, 246)",
                    boxShadow: "rgba(0, 0, 0, 0.1) 0px 1px 1px 1px inset",
                  }}
                />

                {/* Heading */}
                <h2 className="text-4xl md:text-5xl font-bold text-foreground text-center">
                  {heading}
                </h2>

                {/* Decorative line below */}
                <div
                  className="hidden md:block w-[212px] h-1 rounded-[7px]"
                  style={{
                    backgroundColor: "rgb(235, 234, 246)",
                    boxShadow: "rgba(0, 0, 0, 0.1) 0px 1px 1px 1px inset",
                  }}
                />
              </div>

              {/* Description */}
              <p className="text-base md:text-lg text-foreground-muted text-center max-w-3xl opacity-80"></p>
            </div>

            {/* Top Content - Image and Quote */}
            <div className="flex flex-col md:flex-row items-stretch gap-6 w-full">
              {/* Image Card */}
              <div className="flex-1 rounded-2xl overflow-hidden">
                <div className="relative w-full h-full min-h-[300px] md:min-h-[400px]">
                  <Image
                    src={imageSrc}
                    alt="Office team"
                    fill
                    className="object-cover rounded-2xl"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>

              {/* Quote Card */}
              <div className="flex-1 relative rounded-2xl overflow-hidden">
                <div
                  className="relative w-full h-full min-h-[300px] md:min-h-[400px] p-8 flex flex-col justify-center items-center"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(246, 241, 252, 0.5) 0%, rgba(255, 255, 255, 0.5) 100%)",
                  }}
                >
                  {/* Quote content */}
                  <div className="relative z-10 text-center">
                    <h3
                      className="text-2xl md:text-3xl font-medium italic text-primary-500 leading-relaxed mb-4"
                      style={{
                        fontFamily: '"Playpen Sans", sans-serif',
                        letterSpacing: "-0.03em",
                        lineHeight: "1.4em",
                      }}
                    >
                      "{quoteText}"
                    </h3>
                    <p className="text-base text-foreground opacity-80">
                      {quoteAuthor}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Content - Job Cards */}
            <div className="flex flex-col md:flex-row items-stretch gap-6 w-full">
              {jobs.map((job, index) => (
                <div key={index} className="flex-1">
                  <JobCard {...job} />
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
              <Button
                variant="template"
                href={ctaPrimaryHref}
                icon={<SearchIcon />}
                className="w-full sm:w-auto"
              >
                {ctaPrimaryText}
              </Button>
              <Button
                variant="template"
                href={ctaSecondaryHref}
                className="w-full sm:w-auto"
              >
                {ctaSecondaryText}
              </Button>
            </div>
          </div>
        </div>
      </SectionContainer>
    );
  }
);

Careers.displayName = "Careers";

export default Careers;
