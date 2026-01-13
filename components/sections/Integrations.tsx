"use client";

import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import Button from "@/components/ui/Button";
import SectionContainer from "@/components/ui/SectionContainer";

export interface IntegrationIcon {
  icon: React.ReactNode;
}

export interface IntegrationsProps extends React.HTMLAttributes<HTMLElement> {
  badgeText?: string;
  heading?: string;
  description?: string;
  ctaText?: string;
  ctaHref?: string;
  quoteText?: string;
  icons?: IntegrationIcon[][];
}

// Default integration icons - using inline SVGs
const createIcon = (paths: { main: string; secondary?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 256"
    className="w-full h-full text-primary-500"
    fill="currentColor"
  >
    {paths.secondary && <path d={paths.secondary} opacity="0.2" />}
    <path d={paths.main} />
  </svg>
);

// Simple icon paths for demonstration - can be replaced with actual integration logos
const defaultIcons: IntegrationIcon[][] = [
  // Column 1
  [
    {
      icon: createIcon({
        secondary: "M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z",
        main: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm8,191.63V152h24a8,8,0,0,0,0-16H136V112a16,16,0,0,1,16-16h16a8,8,0,0,0,0-16H152a32,32,0,0,0-32,32v24H96a8,8,0,0,0,0,16h24v63.63a88,88,0,1,1,16,0Z",
      }),
    },
    {
      icon: createIcon({
        secondary: "M208,216H160L48,40H96Z",
        main: "M214.75,211.71l-62.6-98.38,61.77-67.95a8,8,0,0,0-11.84-10.76L143.24,99.34,102.75,35.71A8,8,0,0,0,96,32H48a8,8,0,0,0-6.75,12.3l62.6,98.37-61.77,68a8,8,0,1,0,11.84,10.76l58.84-64.72,40.49,63.63A8,8,0,0,0,160,224h48a8,8,0,0,0,6.75-12.29ZM164.39,208,62.57,48h29L193.43,208Z",
      }),
    },
    {
      icon: createIcon({
        secondary: "M168,128a40,40,0,1,1-40-40A40,40,0,0,1,168,128Z",
        main: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,16a88,88,0,0,1,73.72,40H128a48.08,48.08,0,0,0-45.6,33l-23.08-40A87.89,87.89,0,0,1,128,40Zm32,88a32,32,0,1,1-32-32A32,32,0,0,1,160,128Zm-45.28,87A88,88,0,0,1,49.56,88.14L86.43,152c.06.1.13.19.19.28A48,48,0,0,0,137.82,175Zm18,.87L169.57,152c.08-.14.14-.28.22-.42a47.88,47.88,0,0,0-6-55.58H210a88,88,0,0,1-77.29,119.87Z",
      }),
    },
    {
      icon: createIcon({
        main: "M230.91,172A8,8,0,0,1,228,182.91l-96,56a8,8,0,0,1-8.06,0l-96-56A8,8,0,0,1,36,169.09l92,53.65,92-53.65A8,8,0,0,1,230.91,172ZM220,121.09l-92,53.65L36,121.09A8,8,0,0,0,28,134.91l96,56a8,8,0,0,0,8.06,0l96-56A8,8,0,1,0,220,121.09ZM24,80a8,8,0,0,1,4-6.91l96-56a8,8,0,0,1,8.06,0l96,56a8,8,0,0,1,0,13.82l-96,56a8,8,0,0,1-8.06,0l-96-56A8,8,0,0,1,24,80Zm23.88,0L128,126.74,208.12,80,128,33.26Z",
      }),
    },
  ],
  // Column 2 - duplicates for seamless scrolling
  [
    {
      icon: createIcon({
        secondary: "M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z",
        main: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm8,191.63V152h24a8,8,0,0,0,0-16H136V112a16,16,0,0,1,16-16h16a8,8,0,0,0,0-16H152a32,32,0,0,0-32,32v24H96a8,8,0,0,0,0,16h24v63.63a88,88,0,1,1,16,0Z",
      }),
    },
    {
      icon: createIcon({
        secondary: "M208,216H160L48,40H96Z",
        main: "M214.75,211.71l-62.6-98.38,61.77-67.95a8,8,0,0,0-11.84-10.76L143.24,99.34,102.75,35.71A8,8,0,0,0,96,32H48a8,8,0,0,0-6.75,12.3l62.6,98.37-61.77,68a8,8,0,1,0,11.84,10.76l58.84-64.72,40.49,63.63A8,8,0,0,0,160,224h48a8,8,0,0,0,6.75-12.29ZM164.39,208,62.57,48h29L193.43,208Z",
      }),
    },
    {
      icon: createIcon({
        secondary: "M168,128a40,40,0,1,1-40-40A40,40,0,0,1,168,128Z",
        main: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,16a88,88,0,0,1,73.72,40H128a48.08,48.08,0,0,0-45.6,33l-23.08-40A87.89,87.89,0,0,1,128,40Zm32,88a32,32,0,1,1-32-32A32,32,0,0,1,160,128Zm-45.28,87A88,88,0,0,1,49.56,88.14L86.43,152c.06.1.13.19.19.28A48,48,0,0,0,137.82,175Zm18,.87L169.57,152c.08-.14.14-.28.22-.42a47.88,47.88,0,0,0-6-55.58H210a88,88,0,0,1-77.29,119.87Z",
      }),
    },
    {
      icon: createIcon({
        main: "M230.91,172A8,8,0,0,1,228,182.91l-96,56a8,8,0,0,1-8.06,0l-96-56A8,8,0,0,1,36,169.09l92,53.65,92-53.65A8,8,0,0,1,230.91,172ZM220,121.09l-92,53.65L36,121.09A8,8,0,0,0,28,134.91l96,56a8,8,0,0,0,8.06,0l96-56A8,8,0,1,0,220,121.09ZM24,80a8,8,0,0,1,4-6.91l96-56a8,8,0,0,1,8.06,0l96,56a8,8,0,0,1,0,13.82l-96,56a8,8,0,0,1-8.06,0l-96-56A8,8,0,0,1,24,80Zm23.88,0L128,126.74,208.12,80,128,33.26Z",
      }),
    },
  ],
  // Column 3
  [
    {
      icon: createIcon({
        secondary:
          "M216,112c0,44.18-32,72-64,72s-41.63-21.07-41.63-21.07h0L128,88l13.14-55.83h0A80,80,0,0,1,216,112Z",
        main: "M224,112c0,22.57-7.9,43.2-22.23,58.11C188.39,184,170.25,192,152,192c-17.88,0-29.82-5.86-37.43-12l-10.78,45.82A8,8,0,0,1,96,232a8.24,8.24,0,0,1-1.84-.21,8,8,0,0,1-6-9.62l32-136a8,8,0,0,1,15.58,3.66l-16.9,71.8C122,166,131.3,176,152,176c27.53,0,56-23.94,56-64A72,72,0,1,0,73.63,148a8,8,0,0,1-13.85,8A88,88,0,1,1,224,112Z",
      }),
    },
    {
      icon: createIcon({
        secondary:
          "M176,32H80A48,48,0,0,0,32,80v96a48,48,0,0,0,48,48h96a48,48,0,0,0,48-48V80A48,48,0,0,0,176,32ZM128,168a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z",
        main: "M176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Zm64-84a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z",
      }),
    },
    {
      icon: createIcon({
        secondary: "M192,208H152L64,48h40Z",
        main: "M216,40H168a8,8,0,0,0,0,16h16V176.85L111,44.14A8,8,0,0,0,104,40H40a8,8,0,0,0,0,16H56V200H40a8,8,0,0,0,0,16H88a8,8,0,0,0,0-16H72V79.15l73,132.71a8,8,0,0,0,7,4.14h40a8,8,0,0,0,8-8V56h16a8,8,0,0,0,0-16ZM156.73,200,77.53,56H99.27l79.2,144Z",
      }),
    },
    {
      icon: createIcon({
        secondary:
          "M191.91,82.7a49,49,0,0,1-1.37,8.94h0A48,48,0,0,1,144,128H108a8,8,0,0,0-7.76,6.06l12-48A8,8,0,0,1,120,80h56A48.25,48.25,0,0,1,191.91,82.7Z",
        main: "M220.12,93.54a55.8,55.8,0,0,0-20.19-16.18A56,56,0,0,0,144,24H84A16,16,0,0,0,68.48,36.12l-36,144A16,16,0,0,0,48,200h27.5l-3,12.12A16,16,0,0,0,88,232h31.5A16,16,0,0,0,135,219.88L144,184h32a56,56,0,0,0,44.14-90.46ZM79.52,184H48L84,40h60a40,40,0,0,1,39.3,32.49A57,57,0,0,0,176,72H120a16,16,0,0,0-15.53,12.12ZM183,88.62c-.08.36-.15.72-.24,1.08A39.94,39.94,0,0,1,144,120H112l8-32h56A40.07,40.07,0,0,1,183,88.62Zm31.76,49.08A39.94,39.94,0,0,1,176,168H144a16,16,0,0,0-15.52,12.12l-9,35.88H88l20-80h36a55.9,55.9,0,0,0,54-41.39,40.2,40.2,0,0,1,9.48,8.77A39.73,39.73,0,0,1,214.78,137.7Z",
      }),
    },
  ],
];

const Integrations = React.forwardRef<HTMLElement, IntegrationsProps>(
  (
    {
      className,
      badgeText = "INTEGRATIONS",
      heading = "Seamless AI Integrations That Work Everywhere",
      description = "We integrate powerful AI tools directly into your existing platforms, enabling you to automate tasks, ensure your operations run seamlessly.",
      ctaText = "Get Started for Free",
      ctaHref = "./contact",
      quoteText = "Connect with 100's of apps without leaving the site",
      icons = defaultIcons,
      ...props
    },
    ref
  ) => {
    const scrollRefs = useRef<(HTMLUListElement | null)[]>([]);

    useEffect(() => {
      scrollRefs.current.forEach((ref, index) => {
        if (!ref) return;

        // Clone icons to create seamless loop
        const iconItems = Array.from(ref.children);
        const itemHeight = iconItems[0]?.getBoundingClientRect().height || 52;
        const gap = 24; // gap-6 = 24px
        const totalItemHeight = itemHeight + gap;

        // Clone items for seamless loop
        iconItems.forEach((item) => {
          ref.appendChild(item.cloneNode(true));
          ref.appendChild(item.cloneNode(true));
        });

        // Animate
        const totalHeight = iconItems.length * totalItemHeight;
        // Columns 0 and 2 scroll in reverse, column 1 scrolls normally
        const isReverse = index === 0 || index === 2;
        let position = isReverse ? totalHeight : 0;

        const animate = () => {
          if (isReverse) {
            position += 0.3;
            if (position >= totalHeight) {
              position = 0;
            }
          } else {
            position -= 0.3;
            if (position <= 0) {
              position = totalHeight;
            }
          }
          ref.style.transform = `translateY(-${position}px)`;
          requestAnimationFrame(animate);
        };

        // Start with delay for staggered effect
        setTimeout(() => {
          animate();
        }, index * 150);
      });
    }, [icons]);

    return (
      <SectionContainer
        ref={ref}
        id="integrations"
        className={className}
        {...props}
      >
        <div className="relative z-10 w-full">
          {/* Top line divider */}
          <div
            className="w-full h-px mb-11 rounded"
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.05)",
            }}
          />

          {/* Content Container */}
          <div className="flex flex-col items-center justify-center gap-11 w-full max-w-[1118px] mx-auto">
            {/* Main Content - Two Column Layout */}
            <div className="flex flex-row flex-wrap items-center justify-center gap-11 w-full">
              {/* Left Column - Text Content */}
              <div className="flex flex-col gap-6 flex-1 min-w-[360px] max-w-[640px]">
                {/* Badge with Icon */}
                <div className="flex items-center gap-2 rounded-[60px] px-6 py-3 bg-gradient-to-b from-background-secondary/50 to-background/50 shadow-card w-fit">
                  <div className="flex items-center justify-center w-6 h-6 opacity-30">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 256 256"
                      className="w-full h-full text-primary-500"
                      fill="currentColor"
                    >
                      <path d="M220,169.09l-92,53.65L36,169.09A8,8,0,0,0,28,182.91l96,56a8,8,0,0,0,8.06,0l96-56A8,8,0,1,0,220,169.09Z" />
                      <path d="M220,121.09l-92,53.65L36,121.09A8,8,0,0,0,28,134.91l96,56a8,8,0,0,0,8.06,0l96-56A8,8,0,1,0,220,121.09Z" />
                      <path d="M28,86.91l96,56a8,8,0,0,0,8.06,0l96-56a8,8,0,0,0,0-13.82l-96-56a8,8,0,0,0-8.06,0l-96,56a8,8,0,0,0,0,13.82Z" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-foreground">
                    {badgeText}
                  </span>
                </div>

                {/* Heading */}
                <h2 className="text-4xl md:text-5xl font-bold text-foreground text-left">
                  {heading}
                </h2>

                {/* Description */}
                <p className="text-base md:text-lg text-foreground-muted opacity-80 leading-relaxed">
                  {description}
                </p>

                {/* CTA Button */}
                <div className="mt-2">
                  <Button
                    variant="template"
                    href={ctaHref}
                    className="inline-flex"
                  >
                    {ctaText}
                  </Button>
                </div>
              </div>

              {/* Right Column - Scrolling Icons */}
              <div
                className="flex flex-none flex-row items-center justify-evenly place-content-center w-full max-w-[440px] p-0 relative overflow-hidden rounded-2xl"
                style={{
                  aspectRatio: "1.44262",
                  background:
                    "linear-gradient(180deg, var(--token-653fb8e6-ed8b-4fa1-aa7f-80b9b0ef4e78, #f6f1fc80) 0%, var(--token-9df5a416-ffb4-48d0-9fdd-336d53256c2b, #ffffff80) 100%)",
                  height: "var(--framer-aspect-ratio-supported, 305px)",
                  willChange: "var(--framer-will-change-override, transform)",
                  boxShadow:
                    "0 .796192px .796192px -1px #0000000a, 0 2.41451px 2.41451px -2px #0000000a, 0 6.38265px 6.38265px -3px #00000008, 0 20px 20px -4px #00000003, inset 0 0 1px 1px #fff",
                }}
              >
                {icons.map((column, colIndex) => (
                  <div
                    key={colIndex}
                    className="relative h-[320px] overflow-hidden"
                    style={{
                      maskImage:
                        "linear-gradient(rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 12.5%, rgb(0, 0, 0) 87.5%, rgba(0, 0, 0, 0) 100%)",
                    }}
                  >
                    <ul
                      ref={(el) => {
                        scrollRefs.current[colIndex] = el;
                      }}
                      className="flex flex-col gap-6 items-center list-none p-0 m-0"
                      style={{
                        willChange: "transform",
                      }}
                    >
                      {column.map((item, iconIndex) => (
                        <li
                          key={iconIndex}
                          className="flex-shrink-0 w-[54px] h-[52px]"
                        >
                          <div className="w-full h-full flex items-center justify-center rounded-lg bg-gradient-to-b from-background-secondary/50 to-background/50 shadow-card p-2">
                            <div className="w-full h-full flex items-center justify-center opacity-100">
                              {item.icon}
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Quote Text */}
            <div className="mt-6 text-center">
              <p className="text-base md:text-lg text-foreground-muted opacity-80 italic">
                "{quoteText}"
              </p>
            </div>
          </div>
        </div>
      </SectionContainer>
    );
  }
);

Integrations.displayName = "Integrations";

export default Integrations;
