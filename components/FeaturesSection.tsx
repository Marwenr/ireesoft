"use client";

import React from "react";
import {
  ReactJs,
  Next,
  Node,
  Express,
  Mongo,
  Tailwind,
  Docker,
  Expo,
  Android,
  Ios,
  Vercel,
  Ovh,
} from "./svg";

interface Feature {
  id: number;
  emoji: string;
  title: string;
  description: string;
}

const FeaturesSection: React.FC = () => {
  const features: Feature[] = [
    {
      id: 1,
      emoji: "💰",
      title: "Budget maîtrisé, valeur maximale",
      description:
        "Nous proposons des solutions digitales de haute qualité avec une optimisation intelligente des coûts, sans compromis sur la performance ni le design.",
    },
    {
      id: 2,
      emoji: "👥",
      title: "Équipe experte et engagée",
      description:
        "Vous collaborez avec une équipe dédiée, expérimentée et impliquée, qui comprend vos enjeux et travaille avec réactivité et transparence.",
    },
    {
      id: 3,
      emoji: "⏱️",
      title: "Livraison fiable et respect des délais",
      description:
        "Grâce à une méthodologie claire et agile, nous garantissons des livraisons structurées, dans les temps, avec une visibilité continue sur l'avancement.",
    },
    {
      id: 4,
      emoji: "🤝",
      title: "Accompagnement de A à Z",
      description:
        "De la planification au déploiement final, nous vous accompagnons à chaque étape avec une communication claire et un suivi constant.",
    },
    {
      id: 5,
      emoji: "💡",
      title: "Consultation gratuite dès l'idée",
      description:
        "Vous avez une idée mais ne savez pas si elle est réalisable ou quel budget prévoir ? Nous vous offrons une consultation gratuite pour analyser votre projet et vous orienter vers la meilleure solution.",
    },
  ];

  // First 4 features for the grid
  const gridFeatures = features.slice(0, 4);
  // 5th feature for top right
  const topRightFeature = features[4];

  // Technology logos array
  const technologyLogos = [
    { id: 1, component: ReactJs },
    { id: 2, component: Next },
    { id: 3, component: Node },
    { id: 4, component: Mongo },
    { id: 5, component: Tailwind },
    { id: 6, component: Docker },
    { id: 7, component: Expo },
    { id: 8, component: Android },
    { id: 9, component: Ios },
    { id: 10, component: Vercel },
    { id: 11, component: Ovh },
  ];

  return (
    <div className="w-full max-w-full box-border flex flex-col py-8 md:py-[120px]">
      {/* Table-like structure with borders */}
      <div className="relative">
        {/* Top border spanning full width */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-screen h-px bg-background-gray"></div>

        {/* Content with side borders */}
        <div className="w-full border-l border-r border-background-gray relative z-10">
          {/* First Row: Title and Top Right Feature */}
          <div className="flex flex-col md:flex-row border-b border-background-gray">
            {/* Main Title */}
            <div className="flex-1 p-6 md:p-8 border-t border-r border-background-gray flex items-center justify-center min-h-[200px] md:min-h-[250px]">
              <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-text-primary leading-tight text-center">
                VOTRE PARTENAIRE DE CONFIANCE
              </h2>
            </div>

            {/* Top Right Feature */}
            <div className="w-full md:w-[45%] lg:w-[40%] border-t border-background-gray p-6 md:p-8 flex items-center justify-center min-h-[200px] md:min-h-[250px]">
              <div className="flex flex-col space-y-3 w-full text-center">
                <div className="text-3xl md:text-4xl mb-2">
                  {topRightFeature.emoji}
                </div>
                <h3 className="text-lg md:text-xl font-bold text-text-primary leading-tight">
                  {topRightFeature.title}
                </h3>
                <p className="text-text-secondary text-sm md:text-base leading-relaxed">
                  {topRightFeature.description}
                </p>
              </div>
            </div>
          </div>

          {/* Second Row: 4 Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {gridFeatures.map((feature, index) => (
              <div
                key={feature.id}
                className={`p-6 md:p-8 border-b border-background-gray ${
                  index === gridFeatures.length - 1
                    ? ""
                    : "border-r border-background-gray"
                }`}
              >
                <div className="flex flex-col space-y-3 text-center">
                  <div className="text-3xl md:text-4xl mb-2">
                    {feature.emoji}
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-text-primary leading-tight">
                    {feature.title}
                  </h3>
                  <p className="text-text-secondary text-sm md:text-base leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom border spanning full width */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-screen h-px bg-background-gray"></div>
      </div>

      {/* Tools & Technology Section */}
      <div
        className="relative w-screen left-1/2 -translate-x-1/2 mt-8 md:mt-[100px] py-8 md:py-12"
        style={{ backgroundColor: "#f5f5f5" }}
      >
        <div className="ps-4 md:ps-[8rem]">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-8">
            {/* Left side: Badge, Title, and Line */}
            <div className="flex flex-col md:w-[130%]">
              {/* Main Title */}
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-4">
                Tools & Technology
              </h3>

              {/* Purple Line */}
              <div className="w-16 h-1 bg-purple-600"></div>
            </div>

            {/* Right side: Technology Logos */}
            <div className="overflow-hidden w-full md:w-auto mt-4 md:mt-0">
              <div className="flex items-center gap-6 md:gap-[90px] animate-scroll-left">
                {/* Technology logos - Duplicated for infinite scroll effect */}
                {[...technologyLogos, ...technologyLogos].map((logo, index) => {
                  const LogoComponent = logo.component;
                  return (
                    <div
                      key={`${logo.id}-${index}`}
                      className="flex items-center justify-center flex-shrink-0 w-20 h-20"
                    >
                      <LogoComponent />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
