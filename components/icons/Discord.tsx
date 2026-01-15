import React from "react";

export interface DiscordIconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

const DiscordIcon = React.forwardRef<SVGSVGElement, DiscordIconProps>(
  ({ className = "w-6 h-6", ...props }, ref) => {
    return (
      <svg
        ref={ref}
        className={className}
        role="presentation"
        viewBox="0 0 256 256"
        fill="currentColor"
        {...props}
      >
        <path d="M216,64H40A16,16,0,0,0,24,80V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V80A16,16,0,0,0,216,64Zm0,128H40V80H216V192ZM88,112a16,16,0,1,1-16,16A16,16,0,0,1,88,112Zm96,0a16,16,0,1,1-16,16A16,16,0,0,1,184,112Z" />
      </svg>
    );
  }
);

DiscordIcon.displayName = "DiscordIcon";

export default DiscordIcon;

