"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import XIcon from "@/components/icons/X";
import InstagramIcon from "@/components/icons/Instagram";
import FacebookIcon from "@/components/icons/Facebook";
import DribbbleIcon from "@/components/icons/Dribbble";

export interface FooterProps extends React.HTMLAttributes<HTMLElement> {
  logoHref?: string;
  logoImage?: string;
  navItems?: Array<{ label: string; href: string }>;
  socialLinks?: Array<{ name: string; href: string; icon: React.ReactNode }>;
  copyrightText?: string;
}

const Footer = React.forwardRef<HTMLElement, FooterProps>(
  (
    {
      className,
      logoHref = "/",
      logoImage = "https://framerusercontent.com/images/JsGMOpYyOI1Bo4sAwlN6nDlrh8.svg",
      navItems = [
        { label: "Product", href: "/#services" },
        { label: "Integrations", href: "/#integrations" },
        { label: "Success Stories", href: "/#:LpR0qY_3_" },
        { label: "Contact Us", href: "/contact" },
        { label: "Pricing", href: "/#pricing" },
        { label: "Careers", href: "/#careers" },
      ],
      socialLinks,
      copyrightText = "© 2025 LanderOS",
      ...props
    },
    ref
  ) => {
    const defaultSocialLinks = socialLinks || [
      {
        name: "Twitter/X",
        href: "https://x.com/home",
        icon: <XIcon className="w-full h-full" />,
      },
      {
        name: "Instagram",
        href: "https://www.instagram.com/",
        icon: <InstagramIcon className="w-full h-full" />,
      },
      {
        name: "Facebook",
        href: "https://www.facebook.com/",
        icon: <FacebookIcon className="w-full h-full" />,
      },
      {
        name: "Dribbble",
        href: "https://dribbble.com/",
        icon: <DribbbleIcon className="w-full h-full" />,
      },
    ];

    return (
      <footer
        ref={ref}
        id="footer"
        className={cn(
          "w-full",
          "flex flex-col items-center justify-center",
          "py-[60px] px-[60px]",
          "opacity-100",
          className
        )}
        style={{
          background: "linear-gradient(180deg, rgb(246, 241, 252) 20%, rgb(255, 255, 255) 64%)",
        }}
        {...props}
      >
        <div
          className={cn(
            "w-full max-w-[1240px]",
            "flex flex-col items-center justify-center",
            "gap-8",
            "opacity-100"
          )}
        >
          {/* Top section: Logo and Social Icons */}
          <div
            className={cn(
              "w-full max-w-[1104px]",
              "flex flex-row items-start justify-between",
              "gap-0",
              "opacity-100"
            )}
          >
            {/* Left side: Logo */}
            <div className="opacity-100">
              <Link
                href={logoHref}
                className="block"
                aria-label="Home"
              >
                <div className="relative w-[300px] h-[127px]">
                  <Image
                    src={logoImage}
                    alt="Logo"
                    fill
                    className="object-contain object-left"
                    sizes="300px"
                  />
                </div>
              </Link>
            </div>

            {/* Right side: Social Media Icons */}
            <div className="flex items-center gap-0 opacity-100">
              {defaultSocialLinks.map((social, index) => {
                const isExternal = social.href.startsWith("http");
                const LinkComponent = isExternal ? "a" : Link;
                const linkProps = isExternal
                  ? {
                      target: "_blank",
                      rel: "noopener",
                    }
                  : {};

                return (
                  <React.Fragment key={social.name}>
                    <div className="flex items-center justify-center opacity-100">
                      <LinkComponent
                        href={social.href}
                        {...linkProps}
                        className={cn(
                          "flex items-center justify-center",
                          "w-10 h-10",
                          "rounded-full",
                          "border border-white/70",
                          "bg-gradient-to-b from-[rgba(246,241,252,0.5)] to-[rgba(255,255,255,0.5)]",
                          "shadow-navbar",
                          "text-primary-500",
                          "opacity-100",
                          "hover:opacity-90",
                          "transition-opacity"
                        )}
                        aria-label={social.name}
                      >
                        <div className="w-5 h-5 opacity-70 flex items-center justify-center">
                          {social.icon}
                        </div>
                      </LinkComponent>
                    </div>
                    {index < defaultSocialLinks.length - 1 && (
                      <div
                        className="w-[1px] h-7 bg-[rgb(235,234,246)] mx-0 opacity-100"
                        aria-hidden="true"
                      />
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          </div>

          {/* Navigation Links */}
          <nav
            className={cn(
              "w-full max-w-[1104px]",
              "flex flex-row items-center justify-start",
              "gap-6",
              "opacity-100"
            )}
          >
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={cn(
                  "text-sm font-sans",
                  "text-foreground",
                  "opacity-90",
                  "hover:opacity-100",
                  "transition-opacity"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Divider */}
          <div
            className="w-full max-w-[1104px] h-[1px] bg-foreground/10 opacity-100"
            aria-hidden="true"
          />

          {/* Copyright */}
          <div
            className={cn(
              "w-full max-w-[1104px]",
              "flex items-center justify-start",
              "opacity-100"
            )}
          >
            <p className="text-sm font-sans text-foreground opacity-90">
              {copyrightText}
            </p>
          </div>
        </div>
      </footer>
    );
  }
);

Footer.displayName = "Footer";

export default Footer;

