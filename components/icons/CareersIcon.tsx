import React from "react";

export interface CareersIconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

const CareersIcon = React.forwardRef<SVGSVGElement, CareersIconProps>(
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
        <path d="M224,64H180V56a24,24,0,0,0-24-24H100A24,24,0,0,0,76,56v8H32A16,16,0,0,0,16,80V208a16,16,0,0,0,16,16H224a16,16,0,0,0,16-16V80A16,16,0,0,0,224,64ZM100,56h56a8,8,0,0,1,8,8v8H92V64A8,8,0,0,1,100,56ZM224,208H32V80H76V96a8,8,0,0,0,16,0V80h72V96a8,8,0,0,0,16,0V80h44Z" />
      </svg>
    );
  }
);

CareersIcon.displayName = "CareersIcon";

export default CareersIcon;
