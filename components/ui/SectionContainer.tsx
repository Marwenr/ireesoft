import React from "react";
import { cn } from "@/lib/utils";

export interface SectionContainerProps
  extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  maxWidth?: "1200" | "1224";
}

const SectionContainer = React.forwardRef<
  HTMLElement,
  SectionContainerProps
>(({ className, children, maxWidth = "1200", style, ...props }, ref) => {
  const maxWidthClass = maxWidth === "1224" ? "max-w-[1224px]" : "max-w-[1200px]";

  return (
    <section
      ref={ref}
      className={cn(
        "relative flex flex-col items-center justify-start w-full overflow-visible",
        "rounded-[32px] my-[160px] px-10",
        maxWidthClass,
        "mx-auto",
        className
      )}
      style={{
        scrollMarginTop: "100px",
        background:
          "radial-gradient(50% 50%, rgb(246, 241, 252) 0%, rgba(255, 255, 255, 0) 100%)",
        ...style,
      }}
      {...props}
    >
      {children}
    </section>
  );
});

SectionContainer.displayName = "SectionContainer";

export default SectionContainer;

