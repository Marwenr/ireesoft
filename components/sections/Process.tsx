"use client";

import React from "react";
import { cn } from "@/lib/utils";
import WorkflowIcon from "@/components/icons/Workflow";
import DeployIcon from "@/components/icons/Deploy";
import SupportIcon from "@/components/icons/Support";
import SectionContainer from "@/components/ui/SectionContainer";

export interface ProcessStep {
  number: number;
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface ProcessStats {
  value: string;
  suffix?: string;
  label: string;
}

export interface ProcessProps extends React.HTMLAttributes<HTMLElement> {
  badgeText?: string;
  heading?: string;
  description?: string;
  steps?: ProcessStep[];
  stats?: ProcessStats[];
}

const defaultSteps: ProcessStep[] = [
  {
    number: 1,
    icon: <WorkflowIcon className="w-6 h-6" />,
    title: "Workflow Assessment",
    description:
      "We begin by examining your existing workflows to identify where AI can deliver the greatest impact.",
  },
  {
    number: 2,
    icon: <DeployIcon className="w-6 h-6" />,
    title: "Deploy with Confidence",
    description:
      "Our team develops custom AI systems built around your goals, ensuring safe and reliable deployment.",
  },
  {
    number: 3,
    icon: <SupportIcon className="w-6 h-6" />,
    title: "Ongoing Support",
    description:
      "After deployment, we provide support and refine your AI systems to keep them performing at their best.",
  },
];

const defaultStats: ProcessStats[] = [
  { value: "10", suffix: "k+", label: "Happy users" },
  { value: "250", suffix: "k+", label: "Total hrs saved" },
  { value: "4.8", label: "Average Rating" },
];

const Process = React.forwardRef<HTMLElement, ProcessProps>(
  (
    {
      className,
      badgeText = "PROCESS",
      heading = "Process Is Performance",
      description = "Strategic, AI-driven steps built to grow your business faster, smarter, and stronger with measurable results",
      steps = defaultSteps,
      stats = defaultStats,
      ...props
    },
    ref
  ) => {
    return (
      <SectionContainer
        ref={ref}
        id="success-stories"
        maxWidth="1224"
        className={className}
        {...props}
      >
        <div className="relative z-10 w-full flex flex-col items-center gap-11">
          {/* Heading Section Container */}
          <div className="flex flex-col items-center justify-center gap-2.5 w-full max-w-[1144px] relative">
            {/* Badge with Icon */}
            <div className="flex items-center gap-2 rounded-[60px] px-6 py-3 bg-gradient-to-b from-background-secondary/50 to-background/50 shadow-card mb-3">
              <div className="flex items-center justify-center w-6 h-6 opacity-30">
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

          {/* Process Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-11 w-full">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="relative flex flex-col gap-6 p-6 rounded-2xl"
                style={{
                  background:
                    "linear-gradient(180deg, var(--token-653fb8e6-ed8b-4fa1-aa7f-80b9b0ef4e78, rgba(246, 241, 252, 0.5)) 0%, var(--token-9df5a416-ffb4-48d0-9fdd-336d53256c2b, rgba(255, 255, 255, 0.5)) 100%)",
                  boxShadow:
                    "rgba(0, 0, 0, 0.04) 0px 0.796192px 0.796192px -1px, rgba(0, 0, 0, 0.04) 0px 2.41451px 2.41451px -2px, rgba(0, 0, 0, 0.03) 0px 6.38265px 6.38265px -3px, rgba(0, 0, 0, 0.01) 0px 20px 20px -4px, rgb(255, 255, 255) 0px 0px 1px 1px inset",
                  borderRadius: "16px",
                }}
              >
                {/* Step Badge */}
                <div className="absolute top-0 right-0 flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-b from-background-secondary/50 to-background/50 shadow-card">
                  <span className="text-base font-medium text-foreground">
                    {step.number}
                  </span>
                </div>

                {/* Icon Container */}
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-b from-background-secondary/50 to-background/50 shadow-card">
                  <div className="text-primary-500">{step.icon}</div>
                </div>

                {/* Content */}
                <div className="flex flex-col gap-3">
                  <h3 className="text-xl font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-sm text-foreground-muted opacity-80 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Step Badge at Bottom */}
                <div className="mt-auto pt-4">
                  <div
                    className="inline-flex items-center rounded-full px-4 py-2"
                    style={{
                      background:
                        "linear-gradient(180deg, var(--token-653fb8e6-ed8b-4fa1-aa7f-80b9b0ef4e78, rgba(246, 241, 252, 0.5)) 0%, var(--token-9df5a416-ffb4-48d0-9fdd-336d53256c2b, rgba(255, 255, 255, 0.5)) 100%)",
                      boxShadow:
                        "rgba(0, 0, 0, 0.04) 0px 0.796192px 0.796192px -1px, rgba(0, 0, 0, 0.04) 0px 2.41451px 2.41451px -2px, rgba(0, 0, 0, 0.03) 0px 6.38265px 6.38265px -3px, rgba(0, 0, 0, 0.01) 0px 20px 20px -4px, rgb(255, 255, 255) 0px 0px 1px 1px inset",
                    }}
                  >
                    <span className="text-xs font-medium text-foreground">
                      Step {step.number}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-11 w-full pt-6">
            {stats.map((stat, index) => (
              <React.Fragment key={index}>
                <div className="flex flex-col items-center gap-3 p-4 rounded-[10px] bg-background-secondary/50">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold text-primary-500">
                      {stat.value}
                    </span>
                    {stat.suffix && (
                      <span className="text-3xl font-bold text-primary-500">
                        {stat.suffix}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-foreground-muted text-center">
                    {stat.label}
                  </p>
                </div>
                {index < stats.length - 1 && (
                  <div className="hidden md:block w-px h-16 bg-border" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </SectionContainer>
    );
  }
);

Process.displayName = "Process";

export default Process;
