"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import Button from "@/components/ui/Button";
import SectionContainer from "@/components/ui/SectionContainer";

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQProps extends React.HTMLAttributes<HTMLElement> {
  heading?: string;
  description?: string;
  ctaText?: string;
  ctaHref?: string;
  email?: string;
  emailText?: string;
  faqs?: FAQItem[][];
}

// Plus/Cross Icon Component
const PlusIcon = ({ isOpen }: { isOpen: boolean }) => (
  <div
    className="flex items-center justify-center w-6 h-6 flex-shrink-0"
    style={{
      transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
      transition: "transform 0.3s ease",
    }}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      className="w-5 h-5 text-primary-500"
      fill="currentColor"
    >
      <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm48-88a8,8,0,0,1-8,8H136v32a8,8,0,0,1-16,0V136H88a8,8,0,0,1,0-16h32V88a8,8,0,0,1,16,0v32h32A8,8,0,0,1,176,128Z" />
    </svg>
  </div>
);

// Email Icon Component
const EmailIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 256"
    className="w-5 h-5 text-foreground flex-shrink-0"
    fill="currentColor"
  >
    <path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48Zm-96,85.15L52.57,64H203.43ZM98.71,128,40,181.81V74.19Zm11.84,10.85,12,11.05a8,8,0,0,0,10.82,0l12-11.05,58,53.15H52.57ZM157.29,128,216,74.18V181.82Z" />
  </svg>
);

const defaultFAQs: FAQItem[][] = [
  // Left column
  [
    {
      question: "What industries do you work with?",
      answer:
        "We work with startups, SMEs, and enterprises across multiple industries, including technology, healthcare, logistics, e-commerce, and professional services.",
    },
    {
      question: "Can you join an existing project?",
      answer:
        "Yes. We can integrate into your existing team, take ownership of specific features or modules, or collaborate on defined technical tasks at any stage of the project.",
    },
    {
      question: "Do you provide long-term support?",
      answer:
        "Absolutely. We offer ongoing maintenance, monitoring, performance optimization, and continuous improvements after launch.",
    },
    {
      question: "Do you build custom software or use ready-made solutions?",
      answer:
        "We specialize in custom-built solutions tailored to your exact business needs. When relevant, we also integrate trusted third-party tools to accelerate delivery without compromising quality.",
    },
  ],
  // Right column
  [
    {
      question: "Do you work with startups or only large companies?",
      answer:
        "Both. We support early-stage startups, growing companies, and enterprises by adapting our process, scope, and team size to each client’s maturity and budget.",
    },
    {
      question: "Can you handle cloud and on-premise deployments?",
      answer: "Yes. We design and deploy solutions on cloud platforms (OVH, Vercel, GCP), hybrid infrastructures, or fully on-premise environments based on your security and compliance needs.",
    },
    {
      question: "Do you offer AI and automation solutions?",
      answer:
        "Yes. We develop and integrate AI solutions such as OCR (image-to-text), intelligent automation, data processing, and LLM-based systems focused on real business value.",
    },
    {
      question: "How do you ensure project quality and security?",
      answer:
        "We follow best practices in architecture, code quality, testing, and security. Our process includes code reviews, automated testing, and performance monitoring to ensure reliable and scalable solutions.",
    },
  ],
];

const FAQ = React.forwardRef<HTMLElement, FAQProps>(
  (
    {
      className,
      heading = "Questions answered",
      description = "We're here to help you and solve objections. Find answers to the most common questions below.",
      ctaText = "Contact Sales Now",
      ctaHref = "./contact",
      email = "contact@ireesoft.com",
      emailText = "Feel free to mail us for any enquiries : ",
      faqs = defaultFAQs,
      ...props
    },
    ref
  ) => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
      setOpenIndex(openIndex === index ? null : index);
    };

    return (
      <SectionContainer ref={ref} id="faq" className={className} {...props}>
        <div className="relative z-10 w-full">
          {/* Container */}
          <div className="flex flex-col items-center justify-center gap-11 w-full max-w-[1120px] mx-auto">
            {/* Top Section */}
            <div className="flex flex-row flex-wrap items-center justify-end gap-6 w-full">
              {/* Heading and Description */}
              <div className="flex flex-col gap-4 flex-1 min-w-[300px]">
                <h2 className="text-4xl md:text-5xl font-bold text-foreground text-left">
                  {heading}
                </h2>
                <p className="text-base md:text-lg text-foreground-muted opacity-80 leading-relaxed">
                  {description}
                </p>
              </div>

              {/* CTA Button */}
              <div className="flex-shrink-0">
                <Button variant="template" href={ctaHref}>
                  {ctaText}
                </Button>
              </div>
            </div>

            {/* FAQ Items - Two Column Layout */}
            <div className="flex flex-row flex-wrap items-start justify-center gap-4 w-full max-w-[1120px] mx-auto">
              {faqs.map((column, colIndex) => (
                <div
                  key={colIndex}
                  className="flex flex-col gap-4 flex-1 min-w-[280px] max-w-[552px]"
                >
                  {column.map((faq, itemIndex) => {
                    const globalIndex = colIndex * column.length + itemIndex;
                    const isOpen = openIndex === globalIndex;

                    return (
                      <div
                        key={itemIndex}
                        className={cn(
                          "rounded-xl bg-gradient-to-b from-background-secondary/50 to-background/50",
                          "shadow-card",
                          "cursor-pointer transition-all",
                          "hover:shadow-md"
                        )}
                        onClick={() => toggleFAQ(globalIndex)}
                        tabIndex={0}
                        role="button"
                        aria-expanded={isOpen}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" || e.key === " ") {
                            e.preventDefault();
                            toggleFAQ(globalIndex);
                          }
                        }}
                      >
                        <div className="flex items-center justify-between gap-4 p-4">
                          <p className="text-base font-medium text-foreground flex-1">
                            {faq.question}
                          </p>
                          <PlusIcon isOpen={isOpen} />
                        </div>
                        {isOpen && (
                          <div className="px-4 pb-4 pt-0">
                            <p className="text-sm text-foreground-muted opacity-80 leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>

            {/* Email Contact Section */}
            <div className="flex flex-col items-center gap-4 w-full pt-4">
              <div className="flex items-center gap-3">
                <EmailIcon />
                <p className="text-base text-foreground">
                  {emailText}
                  <a
                    href={`mailto:${email}`}
                    className="text-primary-500 underline hover:text-primary-600 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {email}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>
    );
  }
);

FAQ.displayName = "FAQ";

export default FAQ;
