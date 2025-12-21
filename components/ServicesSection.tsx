"use client";

import React, { useState } from "react";

interface Service {
  id: number;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  features: {
    left: string[];
    right: string[];
  };
}

interface ServicesSectionProps {
  serviceRefs?: React.MutableRefObject<(HTMLDivElement | null)[]>;
  serviceTranslates?: number[];
}

const ServicesSection: React.FC<ServicesSectionProps> = ({
  serviceRefs = [],
  serviceTranslates = [],
}) => {
  const [expandedService, setExpandedService] = useState<number | null>(1); // BRANDING expanded by default

  const services: Service[] = [
    {
      id: 1,
      number: "01",
      title: "UI / UX Design",
      subtitle: "Design personnalisé & expérience utilisateur",
      description:
        "Nous concevons des interfaces modernes, intuitives et alignées avec votre marque pour offrir une expérience fluide et engageante.",
      image: "mobile.webp",
      features: {
        left: ["UI design sur mesure", "UX research & parcours utilisateur"],
        right: [
          "Prototypage & wireframes",
          "Design system & cohérence visuelle",
        ],
      },
    },
    {
      id: 2,
      number: "02",
      title: "Développement Web",
      subtitle: "Sites web performants & évolutifs",
      description:
        "Nous créons des sites vitrines et plateformes web rapides, sécurisés et optimisés pour renforcer votre présence en ligne.",
      image: "mobile.webp",
      features: {
        left: ["Sites vitrines & corporate", "Design moderne & responsive"],
        right: ["Optimisation performance & SEO", "Maintenance & évolutivité"],
      },
    },
    {
      id: 3,
      number: "03",
      title: "Développement Mobile",
      subtitle: "Applications mobiles sur mesure",
      description:
        "Nous développons des applications mobiles fiables et intuitives, pensées pour offrir une expérience utilisateur optimale.",
      image: "mobile.webp",
      features: {
        left: ["Applications iOS & Android", "Développement cross-platform"],
        right: ["Intégration d'API & services", "Maintenance & mises à jour"],
      },
    },
    {
      id: 4,
      number: "04",
      title: "Logiciel sur mesure",
      subtitle: "Solutions SaaS & ERP évolutives",
      description:
        "Nous concevons des logiciels personnalisés pour automatiser vos processus et accompagner la croissance de votre activité.",
      image: "erp.webp",
      features: {
        left: ["Logiciels SaaS & ERP personnalisés", "Architecture scalable"],
        right: ["Bases de données & sécurité", "Maintenance & évolutivité"],
      },
    },
  ];

  const toggleService = (id: number) => {
    setExpandedService(expandedService === id ? null : id);
  };

  return (
    <div className="w-full max-w-full box-border flex flex-col py-[60px]">
      {/* Header */}
      <div className="mb-[20px] md:mb-[40px] flex-shrink-0">
        <p className="text-text-light text-sm md:text-base mb-2">
          (Our Services)
        </p>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-text-primary uppercase break-words">
          EXPLORE WHAT WE CAN DO FOR YOU
        </h2>
      </div>

      {/* Services List */}
      <div className="flex-1 min-h-0 space-y-3 md:space-y-4">
        {services.map((service, index) => {
          const isExpanded = expandedService === service.id;

          return (
            <div
              key={service.id}
              ref={(el) => {
                if (serviceRefs?.current) {
                  serviceRefs.current[index] = el;
                }
              }}
              className={`border-b border-background-gray pb-3 md:pb-4 flex-shrink-0 w-full max-w-full box-border ${
                index === 0 ? "border-t border-background-gray" : ""
              }`}
              style={{
                transform: `translateY(${serviceTranslates[index] || 0}px)`,
                transition: "transform 1s cubic-bezier(0.4, 0, 0.2, 1)",
                willChange: "transform",
              }}
            >
              {/* Service Header - Clickable */}
              <button
                onClick={() => toggleService(service.id)}
                className="w-full flex items-center justify-between group box-border py-[40px]"
              >
                <div className="flex items-start space-x-2 md:space-x-3 flex-1 min-w-0 box-border">
                  <span className="text-text-light text-sm md:text-base font-medium flex-shrink-0 mt-1">
                    {service.number}
                  </span>
                  <div className="flex items-end space-x-2 md:space-x-3 min-w-0 flex-1 box-border">
                    <h3
                      className={`text-3xl md:text-4xl lg:text-6xl font-bold uppercase transition-colors duration-300 break-words overflow-wrap-anywhere min-w-0 group-hover:text-accent-orange ${
                        isExpanded ? "text-accent-orange" : "text-text-primary"
                      }`}
                    >
                      {service.title}
                    </h3>
                    <span className="text-text-light text-xs md:text-sm flex-shrink-0">
                      {service.subtitle}
                    </span>
                  </div>
                </div>

                {/* Toggle Button */}
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-background-white flex items-center justify-center shadow-md hover:shadow-lg transition-shadow flex-shrink-0">
                  {isExpanded ? (
                    <svg
                      className="w-4 h-4 md:w-5 md:h-5 text-text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="w-4 h-4 md:w-5 md:h-5 text-text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                  )}
                </div>
              </button>

              {/* Expanded Content */}
              {isExpanded && (
                <div className="mt-4 md:mt-6 pl-4 md:pl-6 lg:pl-8 animate-fade-in w-full max-w-full box-border pb-[40px] relative">
                  <img
                    src={`/${service.image}`}
                    alt="design 1"
                    className="hidden lg:block absolute w-[200px] right-[190px] top-[-210px] rotate-[8deg] object-contain rounded-[15px]"
                  />
                  <div className="flex flex-col lg:flex-row justify-between gap-6 md:gap-8 lg:gap-10 w-full max-w-full">
                    {/* Left: Description */}
                    <div className="w-full lg:w-[48%] max-w-full min-w-0 box-border">
                      <p className="text-text-secondary text-sm md:text-base leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    {/* Right: Features List */}
                    <div className="w-full lg:w-[52%] max-w-full min-w-0 box-border">
                      <div className="flex justify-between gap-4 md:gap-6 lg:gap-8 w-full max-w-full box-border">
                        <ul className="w-[50%] space-y-2 min-w-0 max-w-full box-border">
                          {service.features.left.map((feature, index) => (
                            <li
                              key={index}
                              className="text-text-secondary text-sm md:text-base flex items-start"
                            >
                              <span className="text-text-secondary mr-2 flex-shrink-0">
                                •
                              </span>
                              <span className="min-w-0">{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <ul className="w-[45%] space-y-2 min-w-0 max-w-full box-border">
                          {service.features.right.map((feature, index) => (
                            <li
                              key={index}
                              className="text-text-secondary text-sm md:text-base flex items-start"
                            >
                              <span className="text-text-secondary mr-2 flex-shrink-0">
                                •
                              </span>
                              <span className="min-w-0">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ServicesSection;
