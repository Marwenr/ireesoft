import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "icon";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}) => {
  const baseStyles = "rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variantStyles = {
    primary: "bg-background-white text-text-primary hover:bg-background-gray focus:ring-primary-dark",
    secondary: "bg-primary-dark text-background-white hover:bg-primary-light focus:ring-primary-light",
    icon: "bg-background-white text-text-primary hover:bg-background-gray focus:ring-primary-dark",
  };
  
  const sizeStyles = {
    sm: "p-2 text-sm",
    md: "p-3 text-base",
    lg: "p-4 text-lg",
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;

