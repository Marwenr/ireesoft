import React from "react";

export interface SupportIconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

const SupportIcon = React.forwardRef<SVGSVGElement, SupportIconProps>(
  ({ className = "w-6 h-6", ...props }, ref) => {
    return (
      <svg
        ref={ref}
        className={className}
        role="presentation"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        <path d="M13 8H7" />
        <path d="M17 12H7" />
      </svg>
    );
  }
);

SupportIcon.displayName = "SupportIcon";

export default SupportIcon;





