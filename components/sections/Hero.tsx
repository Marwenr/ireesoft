"use client";

import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { cn } from "@/lib/utils";
import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import CalendarIcon from "@/components/icons/Calendar";

export interface HeroProps extends React.HTMLAttributes<HTMLElement> {
  videoSrc?: string;
  videoPoster?: string;
  badgeText?: string;
  heading: string;
  description: string;
  ctaText?: string;
  ctaHref?: string;
  showVideo?: boolean;
}

const Hero = React.forwardRef<HTMLElement, HeroProps>(
  (
    {
      className,
      videoSrc,
      videoPoster,
      badgeText = "NEW GEN AI AUTOMATION PARTNER",
      heading,
      description,
      ctaText = "Book A Free Call Now",
      ctaHref = "#",
      showVideo = true,
      ...props
    },
    ref
  ) => {
    return (
      <section
        ref={ref}
        id="hero"
        className={cn(
          "relative flex flex-col items-center justify-center h-screen w-full overflow-hidden",
          className
        )}
        style={{
          background:
            "linear-gradient(180deg, var(--token-efb08261-12c6-4aae-98bb-964bf28df1b6, #96b1ff) 0%, var(--token-23e885d8-17a1-42be-baa8-cba44b2d905e, #f6f1fc) 100%)",
        }}
        {...props}
      >
        {/* Content */}
        <Container size="lg" className="relative z-10 py-32">
          <div className="flex flex-col items-center justify-center gap-3 w-full text-center pt-[10vh]">
            {/* Badge */}
            {badgeText && (
              <div className="mb-4">
                <Badge variant="gradient" showPulse>
                  {badgeText}
                </Badge>
              </div>
            )}

            {/* Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight max-w-5xl">
              {heading}
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-foreground-muted max-w-3xl leading-relaxed">
              {description}
            </p>

            {/* CTA Button */}
            {ctaText && (
              <div className="mt-4 relative">
                <div className="absolute mx-auto flex justify-center items-center w-full top-[17px]">
                  <Button
                    variant="template"
                    href={ctaHref}
                    icon={<CalendarIcon className="w-5 h-5 text-white" />}
                  >
                    {ctaText}
                  </Button>
                </div>
                {/* Lottie Animation */}
                <div className="flex justify-center h-[25vw]">
                  <DotLottieReact
                    src="https://lottie.host/a091d4ec-32da-4335-9540-5fa4796da39e/QpuOCgoVs8.lottie"
                    loop
                    autoplay
                  />
                </div>
                <div className="framer-tj6ldg" data-framer-name="text">
                  <div
                    className="framer-y49jcl"
                    data-framer-component-type="RichTextContainer"
                    style={{ transform: "none" }}
                  >
                    <p
                      className="framer-text framer-styles-preset-3zlr0d"
                      data-styles-preset="sBrnbF4yF"
                      style={
                        {
                          "--framer-text-alignment": "center",
                        } as React.CSSProperties
                      }
                    >
                      Trusted by big brands around the world
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </Container>
        <div
          className="w-full h-[110px] absolute bottom-0"
          style={{
            background: "#ffffff",
            backgroundImage:
              "linear-gradient(0deg, rgba(255, 255, 255, 1) 36%, rgba(235, 234, 252, 1) 100%)",
          }}
        ></div>
      </section>
    );
  }
);

Hero.displayName = "Hero";

export default Hero;
