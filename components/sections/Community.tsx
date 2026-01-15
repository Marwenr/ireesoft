"use client";

import React from "react";
import { cn } from "@/lib/utils";
import SectionContainer from "@/components/ui/SectionContainer";
import ExternalLinkIcon from "@/components/icons/ExternalLink";

export interface CommunityCard {
  name: string;
  description: string;
  href: string;
  icon: React.ReactNode;
  tags: string[];
}

export interface CommunityProps extends React.HTMLAttributes<HTMLElement> {
  badgeText?: string;
  heading?: string;
  description?: string;
  cards?: CommunityCard[];
}

const CommunityIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 256"
    className="w-full h-full"
    fill="currentColor"
  >
    <path d="M64.12,147.8a4,4,0,0,1-4,4.2H16a8,8,0,0,1-7.8-6.17,8.35,8.35,0,0,1,1.62-6.93A67.79,67.79,0,0,1,37,117.51a40,40,0,1,1,66.46-35.8,3.94,3.94,0,0,1-2.27,4.18A64.08,64.08,0,0,0,64,144C64,145.28,64,146.54,64.12,147.8Zm182-8.91A67.76,67.76,0,0,0,219,117.51a40,40,0,1,0-66.46-35.8,3.94,3.94,0,0,0,2.27,4.18A64.08,64.08,0,0,1,192,144c0,1.28,0,2.54-.12,3.8a4,4,0,0,0,4,4.2H240a8,8,0,0,0,7.8-6.17A8.33,8.33,0,0,0,246.17,138.89Zm-89,43.18a48,48,0,1,0-58.37,0A72.13,72.13,0,0,0,65.07,212,8,8,0,0,0,72,224H184a8,8,0,0,0,6.93-12A72.15,72.15,0,0,0,157.19,182.07Z" />
  </svg>
);

const defaultCards: CommunityCard[] = [
  {
    name: "UI/UX & Product Design",
    description:
      "User-centered design that transforms complex ideas into intuitive digital experiences.",
    href: "https://discord.com/",
    icon: (
      <div className="w-[38px] h-[38px] rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 256 256"
          className="w-5 h-5"
          fill="white"
        >
          <path d="M224,48H32a8,8,0,0,0-8,8V200a8,8,0,0,0,8,8H224a8,8,0,0,0,8-8V56A8,8,0,0,0,224,48ZM40,112H80v32H40Zm176,32H96V112H216v32Zm0-48H96V64H216v32ZM40,64H72v32H40Zm0,96H72v32H40Zm176,32H96V160H216v32Z" />
        </svg>
      </div>
    ),
    tags: [
      "UX research & wireframes",
      "UI design systems",
      "Prototyping & usability testing",
    ],
  },
  {
    name: "Web Development",
    description:
      "High-performance websites and web applications designed for scalability and SEO.",
    href: "https://x.com/home",
    icon: (
      <div className="w-[38px] h-[38px] rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 256 256"
          className="w-5 h-5"
          fill="white"
        >
          <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,0,1-71.07-35.19l142.86-142.87A88,88,0,0,1,128,216Zm71.07-35.19L56.21,38.93A88,88,0,0,1,199.07,180.81Z" />
        </svg>
      </div>
    ),
    tags: [
      "Corporate websites",
      "ERP & SaaS platforms",
      "Dashboards & admin panels",
    ],
  },
  {
    name: "Mobile App Development",
    description:
      "Native and cross-platform mobile apps built for performance and user engagement.",
    href: "https://x.com/home",
    icon: (
      <div className="w-[38px] h-[38px] rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 256 256"
          className="w-5 h-5"
          fill="white"
        >
          <path d="M176,16H80A24,24,0,0,0,56,40V216a24,24,0,0,0,24,24h96a24,24,0,0,0,24-24V40A24,24,0,0,0,176,16Zm8,200a8,8,0,0,1-8,8H80a8,8,0,0,1-8-8V40a8,8,0,0,1,8-8h96a8,8,0,0,1,8,8ZM140,56a12,12,0,1,1-12,12A12,12,0,0,1,140,56Z" />
        </svg>
      </div>
    ),
    tags: ["iOS & Android apps", "React Native Expo", "API integration"],
  },
  {
    name: "AI & Intelligent Systems",
    description: "Practical AI solutions focused on real business value.",
    href: "https://x.com/home",
    icon: (
      <div className="w-[38px] h-[38px] rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 256 256"
          className="w-5 h-5"
          fill="white"
        >
          <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm64-88a8,8,0,0,1-8,8H128a8,8,0,0,1,0-16h56A8,8,0,0,1,192,128Zm-96,0a8,8,0,0,1-8,8H72a8,8,0,0,1,0-16H88A8,8,0,0,1,96,128Zm48,48a8,8,0,0,1-8,8H128a8,8,0,0,1,0-16h16A8,8,0,0,1,144,176Zm-48,0a8,8,0,0,1-8,8H80a8,8,0,0,1,0-16h8A8,8,0,0,1,96,176Z" />
        </svg>
      </div>
    ),
    tags: [
      "OCR (Image → Text)",
      "AI-powered automation",
      "LLM integration & custom models",
    ],
  },
  {
    name: "Cloud & On-Premise Deployment",
    description:
      "Flexible deployment strategies adapted to your infrastructure and security needs.",
    href: "https://x.com/home",
    icon: (
      <div className="w-[38px] h-[38px] rounded-lg bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 256 256"
          className="w-5 h-5"
          fill="white"
        >
          <path d="M160,72a80,80,0,0,0-152,48.81A56,56,0,0,0,24,224h96a8,8,0,0,0,0-16H24a40,40,0,0,1-8-79.2,8,8,0,0,0,16-.8A64,64,0,0,1,160,88a8,8,0,0,0,0-16Zm40,80a48,48,0,0,0-48-48,8,8,0,0,0,0,16,32,32,0,0,1,32,32H88a8,8,0,0,0,0,16H192a48.05,48.05,0,0,0,8-96Z" />
        </svg>
      </div>
    ),
    tags: [
      "Cloud (Vercel, OVH, Azure)",
      "Hybrid & on-premise solutions",
      "DevOps & CI/CD pipelines",
    ],
  },
  {
    name: "Team Extension & Project Collaboration",
    description:
      "We integrate seamlessly into your existing team or take ownership of specific tasks.",
    href: "https://x.com/home",
    icon: (
      <div className="w-[38px] h-[38px] rounded-lg bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 256 256"
          className="w-5 h-5"
          fill="white"
        >
          <path d="M117.25,157.92a60,60,0,1,0-66.5,0A95.83,95.83,0,0,0,3.53,195.63a8,8,0,1,0,13.4,8.74,80,80,0,0,1,134.14,0,8,8,0,0,0,13.4-8.74A95.83,95.83,0,0,0,117.25,157.92ZM40,108a44,44,0,1,1,44,44A44.05,44.05,0,0,1,40,108Zm210.14,98.7a8,8,0,0,1-11.07,2.22A79.83,79.83,0,0,0,172,172a8,8,0,0,1,0-16,44,44,0,1,0-16.34-84.87,8,8,0,1,1-5.94-14.85,60,60,0,0,1,55.53,105.64,95.83,95.83,0,0,1,47.22,37.71A8,8,0,0,1,250.14,206.7Z" />
        </svg>
      </div>
    ),
    tags: [
      "Dedicated developers",
      "Feature-based delivery",
      "Short or long-term collaboration",
    ],
  },
];

const Community = React.forwardRef<HTMLElement, CommunityProps>(
  (
    {
      className,
      badgeText = "OUR SERVICES",
      heading = "Custom Software Services",
      description = "Tailor-made software designed to fit your exact business needs, not generic solutions.",
      cards = defaultCards,
      ...props
    },
    ref
  ) => {
    return (
      <SectionContainer
        ref={ref}
        id="community"
        maxWidth="1200"
        className={cn("pb-[60px] pt-[60px]", className)}
        {...props}
      >
        {/* Background Grid */}
        <div
          className="absolute inset-0 rounded-[32px] opacity-[0.02] z-[1]"
          style={{
            backgroundImage:
              "url('https://framerusercontent.com/images/wGAHOWhVswEtWkOKTJN6s2CW0.svg?width=96&height=96')",
            backgroundRepeat: "repeat",
            backgroundPosition: "left top",
            backgroundSize: "48px auto",
          }}
        />

        <div className="relative z-[2] w-full flex flex-col items-center gap-11">
          {/* Heading Section Container */}
          <div className="flex flex-col items-start justify-center gap-2.5 w-full max-w-[1144px] relative">
            {/* Badge with Icon */}
            <div className="flex items-center gap-2 rounded-[60px] px-6 py-3 bg-gradient-to-b from-background-secondary/50 to-background/50 shadow-card mb-3">
              <div className="flex items-center justify-start w-6 h-6 opacity-30">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 256 256"
                  className="w-full h-full text-primary-500"
                  fill="currentColor"
                >
                  <path d="M240,56V200a8,8,0,0,1-8,8H8a8,8,0,0,1,0-16H56V152a8,8,0,0,1,8-8h48V104a8,8,0,0,1,8-8h48V56a8,8,0,0,1,8-8h56A8,8,0,0,1,240,56Z" />
                </svg>
              </div>
              <span className="text-sm font-medium text-foreground">
                {badgeText}
              </span>
            </div>

            {/* Heading with decorative lines */}
            <div className="flex justify-between items-center gap-2.5 w-full">
              {/* Heading */}
              <h2 className="text-4xl md:text-5xl font-bold text-foreground text-center">
                {heading}
              </h2>

              {/* Decorative line below */}
              <div
                className="hidden md:block w-[412px] h-1 rounded-[7px]"
                style={{
                  backgroundColor: "rgb(235, 234, 246)",
                  boxShadow: "rgba(0, 0, 0, 0.1) 0px 1px 1px 1px inset",
                }}
              />
            </div>

            {/* Description */}
            <p className="text-base md:text-lg text-foreground-muted max-w-xl opacity-80">
              {description}
            </p>
          </div>

          {/* Social Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-[1120px]">
            {cards.map((card, index) => (
              <a
                key={index}
                href={card.href}
                target="_blank"
                rel="noopener"
                className="relative w-full rounded-2xl p-6 group hover:scale-[1.02] transition-transform duration-200"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(246, 241, 252, 0.5) 0%, rgba(255, 255, 255, 0.5) 100%)",
                  boxShadow:
                    "rgba(0, 0, 0, 0.04) 0px 0.796192px 0.796192px -1px, rgba(0, 0, 0, 0.04) 0px 2.41451px 2.41451px -2px, rgba(0, 0, 0, 0.03) 0px 6.38265px 6.38265px -3px, rgba(0, 0, 0, 0.01) 0px 20px 20px -4px, rgb(255, 255, 255) 0px 0px 1px 1px inset",
                }}
              >
                {/* External Link Icon */}
                <div className="absolute top-4 right-4 opacity-50 group-hover:opacity-70 transition-opacity">
                  <ExternalLinkIcon className="w-4 h-4 text-foreground" />
                </div>

                {/* Top Section */}
                <div className="flex flex-col gap-4 mb-4">
                  {/* Icon and Title */}
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0">{card.icon}</div>
                    <h3 className="text-xl font-semibold text-foreground">
                      {card.name}
                    </h3>
                  </div>

                  {/* Separation Line */}
                  <div
                    className="w-full h-1 rounded-lg"
                    style={{ backgroundColor: "rgb(235, 234, 246)" }}
                  />

                  {/* Description */}
                  <p className="text-sm text-foreground-muted opacity-90 leading-relaxed">
                    {card.description}
                  </p>
                </div>

                {/* Bottom Tags */}
                <div className="flex flex-col items-start gap-2 mt-4">
                  {card.tags.map((tag, tagIndex) => (
                    <div
                      key={tagIndex}
                      className="px-3 py-1.5 rounded-lg text-xs font-medium text-primary-500 opacity-80"
                      style={{
                        background:
                          "linear-gradient(180deg, rgba(246, 241, 252, 0.5) 0%, rgba(255, 255, 255, 0.5) 100%)",
                        boxShadow:
                          "rgba(0, 0, 0, 0.04) 0px 0.796192px 0.796192px -1px, rgba(0, 0, 0, 0.04) 0px 2.41451px 2.41451px -2px, rgba(0, 0, 0, 0.03) 0px 6.38265px 6.38265px -3px, rgba(0, 0, 0, 0.01) 0px 20px 20px -4px, rgb(255, 255, 255) 0px 0px 1px 1px inset",
                      }}
                    >
                      - {tag}
                    </div>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </div>
      </SectionContainer>
    );
  }
);

Community.displayName = "Community";

export default Community;
