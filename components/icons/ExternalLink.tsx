import React from "react";

export interface ExternalLinkIconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

const ExternalLinkIcon = React.forwardRef<SVGSVGElement, ExternalLinkIconProps>(
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
        <path d="M224,104a8,8,0,0,0-8,8v88H40V48h88a8,8,0,0,0,0-16H40A16,16,0,0,0,24,48V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V112A8,8,0,0,0,224,104ZM192.61,60.69,114.34,139A8,8,0,0,1,101,125.66l78.28-78.27L152,40a8,8,0,0,1,16,0V96a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h44.69l16-16A8,8,0,0,1,192.61,60.69Z" />
      </svg>
    );
  }
);

ExternalLinkIcon.displayName = "ExternalLinkIcon";

export default ExternalLinkIcon;

