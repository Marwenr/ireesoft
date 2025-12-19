import React from "react";

const HeroSection: React.FC = () => {
  return (
    <div className="flex flex-col justify-between h-screen py-8 md:py-16 px-4 md:px-20">
      {/* Main Content */}
      <div className="flex-1 flex flex-col justify-center">
        {/* Headline */}
        <div className="mb-8">
          <div className="flex items-start space-x-3 mb-0">
            <span className="text-accent-red text-xl md:text-2xl font-bold">
              *
            </span>
            <p className="text-text-secondary text-base md:text-3xl font-bold">
              Software Development & Digital Solutions
            </p>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-[10rem] xl:text-[12rem] font-bold text-text-primary leading-none relative z-20 mt-0">
            SOFTWAISE
          </h1>
        </div>

        {/* Sub-headline */}
        <p className="text-text-secondary text-base md:text-lg max-w-2xl mb-16">
          From Idea to Implementation — We create custom software, websites, and
          mobile apps
        </p>

        {/* Button - Visible only on sm/md */}
        <div className="lg:hidden w-full text-center">
          <button className="lg:hidden bg-primary-dark rounded-2xl px-6 md:px-8 py-4 md:py-6 shadow-xl self-start">
            <p className="text-background-white text-base md:text-lg font-semibold">
              Free consultation
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
