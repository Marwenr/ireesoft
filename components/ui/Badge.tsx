import React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: "default" | "gradient";
  showPulse?: boolean;
}

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, children, variant = "gradient", showPulse = true, ...props }, ref) => {
    const variants = {
      default: "bg-background-muted",
      gradient: "bg-gradient-to-b from-background-secondary/50 to-background/50",
    };

    return (
      <div
        ref={ref}
        className={cn(
          "inline-flex items-center gap-2 rounded-full px-4 py-2 border border-white/41 shadow-lg backdrop-blur-sm",
          variants[variant],
          className
        )}
        {...props}
      >
        {showPulse && (
          <div className="relative flex items-center justify-center">
            {/* Pulsing outer ring */}
            <div className="absolute w-3 h-3 bg-[#4d9096]/50 rounded-full animate-pulse" />
            {/* Solid inner dot */}
            <div className="relative w-2 h-2 bg-[#0d2426] rounded-full shadow-[0_0_20px_rgba(168,209,255,0.5)]" />
          </div>
        )}
        <span className="text-sm font-medium text-foreground/70">{children}</span>
      </div>
    );
  }
);

Badge.displayName = "Badge";

export default Badge;

