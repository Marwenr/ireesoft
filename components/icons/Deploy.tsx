import React from "react";

export interface DeployIconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

const DeployIcon = React.forwardRef<SVGSVGElement, DeployIconProps>(
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
        <path d="M5 12l5 5l10 -10" />
        <path d="M12 5l-7 7l7 7" />
      </svg>
    );
  }
);

DeployIcon.displayName = "DeployIcon";

export default DeployIcon;





