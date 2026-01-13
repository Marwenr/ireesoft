import React from "react";
import { cn } from "@/lib/utils";

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  variant?: "default" | "gradient" | "muted";
}

const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ className, children, variant = "default", ...props }, ref) => {
    const variants = {
      default: "bg-background",
      gradient: "bg-gradient-radial-section",
      muted: "bg-background-muted",
    };

    return (
      <section
        ref={ref}
        className={cn(
          "flex flex-col items-center justify-center gap-8 w-full py-16 scroll-mt-24",
          variants[variant],
          className
        )}
        {...props}
      >
        {children}
      </section>
    );
  }
);

Section.displayName = "Section";

export default Section;

