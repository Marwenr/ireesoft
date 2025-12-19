import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-primary-dark py-6 md:py-8">
      <div className="flex items-center justify-center">
        <p className="text-background-white text-sm md:text-base">
          Copyright © 2025{" "}
          <a
            href="https://ireesoft.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent-red hover:opacity-80 transition-opacity cursor-pointer"
          >
            ireesoft
          </a>
          . All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
