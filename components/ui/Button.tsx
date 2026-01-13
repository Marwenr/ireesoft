import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "hero" | "template";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  href?: string;
  icon?: React.ReactNode;
  asChild?: boolean;
  noBorderShadow?: boolean;
}

const Button = React.forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      children,
      href,
      icon,
      asChild = false,
      noBorderShadow = false,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-sans text-base font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

    const variants = {
      primary:
        "bg-primary-500 text-white hover:bg-primary-600 active:bg-primary-600 rounded-md",
      secondary:
        "bg-secondary-500 text-white hover:bg-secondary-500/90 active:bg-secondary-500/90 rounded-md",
      ghost:
        "bg-transparent text-primary-500 hover:bg-primary-50 active:bg-primary-100 rounded-md",
      hero: cn(
        // Outer container styles (border and shadow)
        "rounded-full border-b border-white/41 cursor-pointer relative overflow-hidden",
        "shadow-[0_0_1px_1px_rgb(255,255,255),0_2px_4px_rgba(0,0,0,0.25),0_0_0_1px_rgba(0,0,0,0.4)]",
        // Remove default button styles for hero variant
        "bg-transparent p-0"
      ),
      template: cn(
        "inline-flex items-center justify-center",
        "py-2.5 px-4",
        "rounded-full",
        "text-white text-sm font-sans font-semibold",
        "hover:opacity-90",
        "transition-all",
        "whitespace-nowrap"
      ),
    };

    const sizes = {
      sm: "py-2 px-3 text-sm",
      md: "py-4 px-4",
      lg: "py-4 px-6 text-lg",
    };

    const innerContainerStyles = cn(
      "flex items-center justify-center rounded-full py-4 px-5 gap-2.5",
      "bg-gradient-to-br-hero",
      "shadow-hero-button",
      "hover:opacity-90",
      "transition-all",
      "box-border",
      "overflow-visible",
      "relative"
    );

    // Template variant - render as link with navbar button style
    if (variant === "template") {
      const isExternal = href?.startsWith("http");
      const LinkComponent = isExternal ? "a" : Link;

      const linkProps = isExternal
        ? {
            href,
            target: "_blank",
            rel: "noopener noreferrer",
          }
        : {
            href: href || "#",
          };

      const templateStyle: React.CSSProperties = {
        ...(noBorderShadow
          ? {}
          : {
              border: "1px solid rgba(255, 255, 255, 0.41)",
              boxShadow:
                "rgb(255, 255, 255) 0px 0px 1px 1px, rgba(0, 0, 0, 0.25) 0px 2px 4px 0px, rgba(0, 0, 0, 0.4) 0px 0px 0px 1px",
            }),
        borderRadius: "100px",
        opacity: 1,
        width: "fit-content",
        ...(props.style as React.CSSProperties),
      };

      return (
        <div
          style={templateStyle}
          className={cn(!noBorderShadow && "shadow-button-hover")}
        >
          <LinkComponent
            ref={ref as any}
            className={cn(variants[variant], className)}
            style={{
              background:
                "linear-gradient(303deg, var(--token-23e885d8-17a1-42be-baa8-cba44b2d905e, rgb(246, 241, 252)) -197%, var(--token-3a3b43c7-4f25-4f6f-ae4f-95d5ddf56023, rgb(56, 26, 125)) 100%)",
              ...(noBorderShadow ? {} : { margin: "5px" }),
            }}
            {...(linkProps as any)}
            {...(props as any)}
          >
            {icon && (
              <span className="flex-shrink-0 flex items-center justify-center mr-2">
                {icon}
              </span>
            )}
            {children}
          </LinkComponent>
        </div>
      );
    }

    // Hero variant - render as link with special structure
    if (variant === "hero") {
      const isExternal = href?.startsWith("http");
      const LinkComponent = isExternal ? "a" : Link;

      const linkProps = isExternal
        ? {
            href,
            target: "_blank",
            rel: "noopener noreferrer",
          }
        : {
            href: href || "#",
          };

      const heroStyle: React.CSSProperties = {
        border: "1px solid rgba(255, 255, 255, 0.41)",
        borderRadius: "100px",
        boxShadow:
          "rgb(255, 255, 255) 0px 0px 1px 1px, rgba(0, 0, 0, 0.25) 0px 2px 4px 0px, rgba(0, 0, 0, 0.4) 0px 0px 0px 1px",
        opacity: 1,
        ...(props.style as React.CSSProperties),
      };

      return (
        <LinkComponent
          ref={ref as any}
          className={cn(baseStyles, variants[variant], sizes[size], className)}
          style={heroStyle}
          {...(linkProps as any)}
          {...(props as any)}
        >
          <span className={innerContainerStyles}>
            {icon && (
              <span className="flex-shrink-0 flex items-center justify-center">
                {icon}
              </span>
            )}
            <span className="text-white">{children}</span>
          </span>
        </LinkComponent>
      );
    }

    // Regular button variants
    const buttonClass = cn(
      baseStyles,
      variants[variant],
      sizes[size],
      className
    );

    const buttonStyle: React.CSSProperties = {
      border: "1px solid rgba(255, 255, 255, 0.41)",
      borderRadius: "100px",
      boxShadow:
        "rgb(255, 255, 255) 0px 0px 1px 1px, rgba(0, 0, 0, 0.25) 0px 2px 4px 0px, rgba(0, 0, 0, 0.4) 0px 0px 0px 1px",
      opacity: 1,
      ...(props.style as React.CSSProperties),
    };

    // If href is provided, render as link with button styles
    if (href) {
      const isExternal = href.startsWith("http");
      const LinkComponent = isExternal ? "a" : Link;

      const linkProps = isExternal
        ? {
            href,
            target: "_blank",
            rel: "noopener noreferrer",
          }
        : {
            href,
          };

      return (
        <LinkComponent
          ref={ref as any}
          className={buttonClass}
          style={buttonStyle}
          {...(linkProps as any)}
          {...(props as any)}
        >
          {icon && <span className="mr-2">{icon}</span>}
          {children}
        </LinkComponent>
      );
    }

    // Regular button
    return (
      <button
        ref={ref as any}
        className={buttonClass}
        style={buttonStyle}
        {...props}
      >
        {icon && <span className="mr-2">{icon}</span>}
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
