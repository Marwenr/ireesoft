import React from "react";

const AbstractBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Abstract geometric shapes */}
      <div className="relative w-full h-full">
        {/* Large rectangles with 3D effect */}
        <div className="absolute top-20 right-20 w-64 h-64 bg-background-gray transform rotate-12 shadow-lg"></div>
        <div className="absolute top-40 right-40 w-48 h-48 bg-background-white transform -rotate-12 shadow-md"></div>
        <div className="absolute bottom-32 right-32 w-56 h-56 bg-background-light transform rotate-6 shadow-lg"></div>
        <div className="absolute bottom-52 right-52 w-40 h-40 bg-background-gray transform -rotate-6 shadow-md"></div>
        <div className="absolute top-64 right-64 w-32 h-32 bg-background-white transform rotate-45 shadow-sm"></div>
        
        {/* Smaller accent pieces */}
        <div className="absolute top-96 right-96 w-24 h-24 bg-background-light transform rotate-45 shadow-md"></div>
        <div className="absolute bottom-72 right-72 w-20 h-20 bg-background-white transform -rotate-45 shadow-sm"></div>
      </div>

      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-background-light opacity-30"></div>
    </div>
  );
};

export default AbstractBackground;

