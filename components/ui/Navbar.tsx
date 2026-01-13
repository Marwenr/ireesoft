import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Button from "@/components/ui/Button";

export interface NavbarProps extends React.HTMLAttributes<HTMLElement> {
  logoHref?: string;
  logoImage?: string;
  navItems?: Array<{ label: string; href: string }>;
  ctaText?: string;
  ctaHref?: string;
}

const Navbar = React.forwardRef<HTMLElement, NavbarProps>(
  (
    {
      className,
      logoHref = "/#hero",
      logoImage,
      navItems = [
        { label: "Services", href: "/#services" },
        { label: "Reviews", href: "/#reviews" },
        { label: "Pricing", href: "/#pricing" },
        { label: "Projects", href: "/#projects" },
        { label: "Contact Us", href: "/contact" },
      ],
      ctaText = "Get Template",
      ctaHref = "https://framer.link/rrn6xnD",
      ...props
    },
    ref
  ) => {
    return (
      <header
        ref={ref}
        className={cn(
          "fixed top-4 left-1/2 -translate-x-1/2 z-50",
          "w-full max-w-[720px] px-[25px] py-[10px]",
          "flex items-center justify-between gap-3",
          "rounded-full",
          "backdrop-blur-[5px]",
          "border border-white",
          "shadow-navbar",
          "opacity-100",
          className
        )}
        style={{
          background:
            "linear-gradient(180deg, rgba(246, 241, 252, 0.5) 0%, rgba(255, 255, 255, 0.5) 100%)",
        }}
        {...props}
      >
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href={logoHref} className="block opacity-100" aria-label="Home">
            <div className="relative w-10 h-10 rounded-lg bg-primary-500 flex items-center justify-center filter drop-shadow-[0_1px_2px_rgba(45,24,93,0.15)]">
              {logoImage ? (
                <img
                  src={logoImage}
                  alt="Logo"
                  className="w-full h-full object-contain"
                  width={40}
                  height={40}
                />
              ) : (
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-white"
                >
                  <path
                    d="M12 2L2 7L12 12L22 7L12 2Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 17L12 22L22 17"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 12L12 17L22 12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </div>
          </Link>
        </div>

        {/* Separation Line */}
        <div className="h-7 w-[1px] bg-white rounded-sm opacity-100 flex-shrink-0" />

        {/* Navigation */}
        <nav className="flex items-center gap-2.5 flex-1 justify-center opacity-100">
          <div className="flex items-center gap-2.5">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={cn(
                  "px-3 py-4 h-10",
                  "flex items-center justify-center",
                  "rounded-[10px]",
                  "text-sm font-sans",
                  "text-foreground",
                  "opacity-90",
                  "hover:opacity-100",
                  "transition-opacity",
                  "bg-transparent"
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>

        {/* CTA Button */}
        <div className="flex-shrink-0 opacity-100">
          <Button variant="template" href={ctaHref} noBorderShadow>
            {ctaText}
          </Button>
        </div>
      </header>
    );
  }
);

Navbar.displayName = "Navbar";

export default Navbar;
