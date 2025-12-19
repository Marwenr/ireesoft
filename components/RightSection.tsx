import React from "react";

const RightSection: React.FC = () => {
  return (
    <div className="relative h-screen flex items-end justify-end p-8">
      {/* Abstract Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="hidden md:block relative w-full h-full">
          {/* Geometric shapes with 3D effect */}
          <div className="absolute top-20 right-20 w-64 h-64 bg-background-gray transform rotate-12 shadow-2xl border border-background-light"></div>
          <div className="absolute top-40 right-40 w-48 h-48 bg-background-white transform -rotate-12 shadow-xl border border-background-gray"></div>
          <div className="absolute bottom-32 right-32 w-56 h-56 bg-background-light transform rotate-6 shadow-2xl border border-background-gray"></div>
          <div className="absolute bottom-52 right-52 w-40 h-40 bg-background-gray transform -rotate-6 shadow-xl border border-background-light"></div>
          <div className="absolute top-64 right-64 w-32 h-32 bg-background-white transform rotate-45 shadow-lg border border-background-gray"></div>
          <div className="absolute top-96 right-96 w-24 h-24 bg-background-light transform rotate-45 shadow-xl border border-background-gray"></div>
        </div>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col items-end space-y-6">
        {/* Circular Element with Orange Background */}
        <div className="relative w-48 h-48 rounded-full bg-accent-orange flex items-center justify-center shadow-2xl">
          {/* Downward Arrow */}
          <svg
            className="w-12 h-12 text-background-white z-10"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>

          {/* Text around perimeter */}
          <div className="absolute inset-0 flex items-center justify-center">
            <svg
              className="w-full h-full"
              viewBox="0 0 200 200"
              style={{ transform: "rotate(-90deg)" }}
            >
              <defs>
                <path
                  id="circle"
                  d="M 100, 100 m -80, 0 a 80,80 0 1,1 160,0 a 80,80 0 1,1 -160,0"
                />
              </defs>
              <text
                fill="white"
                fontSize="11"
                fontWeight="600"
                letterSpacing="1"
              >
                <textPath href="#circle" startOffset="0%">
                  CREATE • IDEA • INSIGHT • SOLUTION
                </textPath>
              </text>
            </svg>
          </div>
        </div>

        {/* Text Box - Visible only on lg+ */}
        <div>
          <button className="bg-primary-dark rounded-2xl px-6 md:px-8 py-4 md:py-6 shadow-xl">
            <p className="text-background-white text-base md:text-lg font-semibold">
              Free consultation
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightSection;
