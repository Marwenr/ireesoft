"use client";

import React from "react";
import { cn } from "@/lib/utils";
import SectionContainer from "@/components/ui/SectionContainer";
import CheckIcon from "@/components/icons/Check";
import XIcon from "@/components/icons/X";
import ComparisonIcon from "@/components/icons/Comparison";

export interface ComparisonPoint {
  text: string;
}

export interface ComparisonCard {
  title: string;
  logo?: string;
  points: ComparisonPoint[];
  isPositive?: boolean;
}

export interface ComparisonProps extends React.HTMLAttributes<HTMLElement> {
  badgeText?: string;
  heading?: string;
  description?: string;
  cards?: ComparisonCard[];
}

const defaultCards: ComparisonCard[] = [
  {
    title: "Lander OS",
    logo: "https://framerusercontent.com/images/nMv7QpjHFBtmbFraoRRxar88cw.png?width=720&height=720",
    isPositive: true,
    points: [
      { text: "Fast setup with ready AI workflows" },
      { text: "Built to grow and adapt with you" },
      { text: "Real-time, AI-powered analytics" },
      { text: "Automates tasks, reducing overhead" },
      { text: "Expert support + AI guidance" },
    ],
  },
  {
    title: "Others",
    isPositive: false,
    points: [
      { text: "Slower execution and manual setup" },
      { text: "Requires manual updates as you scale" },
      { text: "Limited or delayed reporting" },
      { text: "Higher labor costs, less automation" },
      { text: "Generic support or none at all" },
    ],
  },
];

const Comparison = React.forwardRef<HTMLElement, ComparisonProps>(
  (
    {
      className,
      badgeText = "COMPARISON",
      heading = "Why Choose Us",
      description = "We help businesses harness the power of AI to work smarter, scale faster, and innovate boldly using custom automation & solutions.",
      cards = defaultCards,
      ...props
    },
    ref
  ) => {
    return (
      <SectionContainer
        ref={ref}
        id="comparison"
        maxWidth="1224"
        className={className}
        {...props}
      >
        <div className="relative z-10 w-full flex flex-col items-center gap-11">
          {/* Heading Section Container */}
          <div className="flex flex-col items-center justify-center gap-2.5 w-full max-w-[1144px] relative">
            {/* Badge with Icon */}
            <div className="mb-3 flex items-center gap-2 rounded-[60px] px-6 py-3 bg-gradient-to-b from-background-secondary/50 to-background/50 shadow-card">
              <div className="flex items-center justify-center w-6 h-6 opacity-30">
                <ComparisonIcon className="w-full h-full text-primary-500" />
              </div>
              <span className="text-sm font-medium text-foreground">
                {badgeText}
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
            <p className="text-base md:text-lg text-foreground-muted text-center max-w-3xl opacity-80">
              {description}
            </p>
          </div>

          {/* Comparison Cards */}
          <div className="flex flex-col md:flex-row justify-center items-start gap-[30px] w-full max-w-[1144px]">
            {cards.map((card, index) => (
              <div
                key={index}
                className={cn(
                  "flex flex-col gap-2 flex-1 min-w-[300px]",
                  "rounded-2xl p-6",
                  "bg-gradient-to-b from-background-secondary/50 to-background/50 shadow-card",
                  "relative"
                )}
              >
                {/* Card Title */}
                <div className="flex items-center gap-2 mb-2">
                  {card.logo && (
                    <div className="w-8 h-8 flex-shrink-0">
                      <img
                        src={card.logo}
                        alt={card.title}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  )}
                  {!card.logo && (
                    <svg
                      className="w-6 h-6 text-foreground-muted"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
                    </svg>
                  )}
                  <h3 className="text-xl font-semibold text-foreground">
                    {card.title}
                  </h3>
                </div>

                {/* Points List */}
                <div className="flex flex-col gap-2">
                  {card.points.map((point, pointIndex) => (
                    <div
                      key={pointIndex}
                      className="flex items-start gap-2 py-1"
                    >
                      <div
                        className={cn(
                          "flex-shrink-0 mt-0.5",
                          card.isPositive
                            ? "text-primary-500"
                            : "text-foreground-muted"
                        )}
                      >
                        {card.isPositive ? (
                          <CheckIcon className="w-5 h-5" />
                        ) : (
                          <XIcon className="w-5 h-5" />
                        )}
                      </div>
                      <p className="text-sm text-foreground-muted leading-relaxed">
                        {point.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionContainer>
    );
  }
);

Comparison.displayName = "Comparison";

export default Comparison;
