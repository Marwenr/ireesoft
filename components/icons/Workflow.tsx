import React from "react";

export interface WorkflowIconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

const WorkflowIcon = React.forwardRef<SVGSVGElement, WorkflowIconProps>(
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
        <path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01" />
      </svg>
    );
  }
);

WorkflowIcon.displayName = "WorkflowIcon";

export default WorkflowIcon;




