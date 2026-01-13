import React from "react";

export interface CheckIconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

const CheckIcon = React.forwardRef<SVGSVGElement, CheckIconProps>(
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
        <path d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z" />
      </svg>
    );
  }
);

CheckIcon.displayName = "CheckIcon";

export default CheckIcon;




