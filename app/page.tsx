"use client";

import { useState, useEffect, useRef } from "react";
import Spline from "@splinetool/react-spline";
import Sidebar from "@/components/Sidebar";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
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
} from "../components/svg";
import Input from "@/components/Input";

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(1);
  const [translateX, setTranslateX] = useState(0);
  const [sidebarWidth, setSidebarWidth] = useState(64);
  const [aboutLeftTranslate, setAboutLeftTranslate] = useState(400);
  const [aboutRightTranslate, setAboutRightTranslate] = useState(-400);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const heroSectionRef = useRef<HTMLDivElement>(null);
  const aboutSectionRef = useRef<HTMLDivElement>(null);
  const featureRefs = useRef<(HTMLDivElement | null)[]>([]);
  const serviceRefs = useRef<(HTMLDivElement | null)[]>(Array(4).fill(null));
  const [serviceTranslates, setServiceTranslates] = useState<number[]>([
    250, 500, 750, 1000,
  ]);
  const servicesSectionRef = useRef<HTMLDivElement>(null);
  const projectRefs = useRef<(HTMLDivElement | null)[]>(Array(10).fill(null));
  const [projectTranslates, setProjectTranslates] = useState<number[]>([
    250, 500, 750, 1000, 1250, 1500, 1750, 2000, 2250, 2500,
  ]);
  const projectsSectionRef = useRef<HTMLDivElement>(null);
  const [featureTransforms, setFeatureTransforms] = useState<
    Array<{
      translateY: number;
      scale: number;
      rotateX: number;
    }>
  >(
    Array(5)
      .fill(null)
      .map(() => ({
        translateY: 20,
        scale: 0.75,
        rotateX: -12,
      }))
  );

  const technologyLogos = [
    { id: 1, component: ReactJs, title: "React js" },
    { id: 2, component: Next, title: "Next js" },
    { id: 3, component: Node, title: "Node js" },
    { id: 4, component: Mongo, title: "Mongo db" },
    { id: 5, component: Tailwind, title: "Tailwind css" },
    { id: 6, component: Docker, title: "Docker" },
    { id: 7, component: Expo, title: "Expo" },
    { id: 8, component: Android, title: "Android" },
    { id: 9, component: Ios, title: "IOS" },
    { id: 10, component: Vercel, title: "Vercel" },
    { id: 11, component: Ovh, title: "OVH Cloud" },
    { id: 12, component: ReactJs, title: "React js" },
    { id: 13, component: Next, title: "Next js" },
    { id: 14, component: Node, title: "Node js" },
    { id: 15, component: Mongo, title: "Mongo db" },
    { id: 16, component: Tailwind, title: "Tailwind css" },
    { id: 17, component: Docker, title: "Docker" },
    { id: 18, component: Expo, title: "Expo" },
    { id: 19, component: Android, title: "Android" },
    { id: 20, component: Ios, title: "IOS" },
    { id: 21, component: Vercel, title: "Vercel" },
    { id: 22, component: Ovh, title: "OVH Cloud" },
  ];

  interface Feature {
    id: number;
    emoji: string;
    title: string;
    img: string;
    description: string;
  }

  const features: Feature[] = [
    {
      id: 1,
      emoji: "💰",
      title: "Budget maîtrisé, valeur maximale",
      img: "choose1.svg",
      description:
        "Nous proposons des solutions digitales de haute qualité avec une optimisation intelligente des coûts, sans compromis sur la performance ni le design.",
    },
    {
      id: 2,
      emoji: "👥",
      title: "Équipe experte et engagée",
      img: "choose2.svg",
      description:
        "Vous collaborez avec une équipe dédiée, expérimentée et impliquée, qui comprend vos enjeux et travaille avec réactivité et transparence.",
    },
    {
      id: 3,
      emoji: "⏱️",
      title: "Livraison fiable et respect des délais",
      img: "choose3.svg",
      description:
        "Grâce à une méthodologie claire et agile, nous garantissons des livraisons structurées, dans les temps, avec une visibilité continue sur l'avancement.",
    },
    {
      id: 4,
      emoji: "🤝",
      title: "Accompagnement de A à Z",
      img: "choose4.svg",
      description:
        "De la planification au déploiement final, nous vous accompagnons à chaque étape avec une communication claire et un suivi constant.",
    },
    {
      id: 5,
      emoji: "💡",
      title: "Consultation gratuite dès l'idée",
      img: "choose5.svg",
      description:
        "Vous avez une idée mais ne savez pas si elle est réalisable ou quel budget prévoir ? Nous vous offrons une consultation gratuite pour analyser votre projet et vous orienter vers la meilleure solution.",
    },
  ];
  useEffect(() => {
    const updateSidebarWidth = () => {
      if (sidebarOpen) {
        setSidebarWidth(256); // w-64
      } else {
        // Check if md breakpoint (768px)
        if (window.innerWidth >= 768) {
          setSidebarWidth(80); // md:w-20
        } else {
          setSidebarWidth(64); // w-16
        }
      }
    };

    updateSidebarWidth();
    window.addEventListener("resize", updateSidebarWidth);

    return () => {
      window.removeEventListener("resize", updateSidebarWidth);
    };
  }, [sidebarOpen]);

  useEffect(() => {
    const handleScroll = () => {
      if (!scrollContainerRef.current || !heroSectionRef.current) return;

      const container = scrollContainerRef.current;
      const heroSection = heroSectionRef.current;
      const scrollTop = window.scrollY;
      const containerTop = container.offsetTop;
      const containerHeight = container.offsetHeight;
      const viewportHeight = window.innerHeight;
      const scrollableHeight = containerHeight - viewportHeight;

      // Check if we're within the scroll container
      if (
        scrollTop >= containerTop &&
        scrollTop <= containerTop + scrollableHeight
      ) {
        // Calculate scroll progress within the container (0 to 1)
        const scrollProgress = (scrollTop - containerTop) / scrollableHeight;

        // Calculate translateX: 0 at start (scroll down), -100% at end (fully left)
        // Scroll down = translate left (negative)
        const heroWidth = heroSection.offsetWidth;
        const maxTranslate = -heroWidth;
        const newTranslateX = scrollProgress * maxTranslate;

        setTranslateX(newTranslateX);
      } else if (scrollTop < containerTop) {
        // Before container, reset to 0 (translate right)
        setTranslateX(0);
      } else {
        // After container, keep at max translate (fully left)
        const heroWidth = heroSection.offsetWidth;
        setTranslateX(-heroWidth);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sidebarOpen, sidebarWidth]);

  // About section scroll animation - slides in from outside
  useEffect(() => {
    const handleAboutScroll = () => {
      if (!aboutSectionRef.current) return;

      const aboutSection = aboutSectionRef.current;
      const sectionRect = aboutSection.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Animation starts when section top is at viewport bottom (sectionRect.top = viewportHeight)
      // Animation ends when section top is at viewport center (sectionRect.top = viewportHeight * 0.5)
      const animationStart = viewportHeight;
      const animationEnd = viewportHeight * 0.3;

      // sectionRect.top is the distance from viewport top to section top
      // When section is below viewport: sectionRect.top > viewportHeight
      // When section enters viewport: sectionRect.top < viewportHeight
      const sectionTop = sectionRect.top;

      // Animation: slide content in from outside as section enters viewport
      if (sectionTop <= animationStart && sectionTop >= animationEnd) {
        // Calculate progress (0 to 1)
        // When sectionTop = animationStart (viewportHeight), progress = 0 (start)
        // When sectionTop = animationEnd (viewportHeight * 0.3), progress = 1 (end)
        const scrollProgress =
          (animationStart - sectionTop) / (animationStart - animationEnd);
        const clampedProgress = Math.max(0, Math.min(1, scrollProgress));

        // Use easing function for smoother animation
        const easeOutCubic = 1 - Math.pow(1 - clampedProgress, 3);

        // Text section (left): starts at -400 (off-screen left), translates to 0 (its position)
        const textSectionStart = -400;
        const textSectionTranslate =
          textSectionStart + easeOutCubic * Math.abs(textSectionStart);

        // Statistics section (right): starts at 400 (off-screen right), translates to 0 (its position)
        const statsSectionStart = 400;
        const statsSectionTranslate =
          statsSectionStart - easeOutCubic * statsSectionStart;

        setAboutRightTranslate(textSectionTranslate); // Text section (left side)
        setAboutLeftTranslate(statsSectionTranslate); // Stats section (right side)
      } else if (sectionTop > animationStart) {
        // Before section enters viewport, keep off-screen positions
        setAboutRightTranslate(-400); // Text section off-screen left
        setAboutLeftTranslate(400); // Stats section off-screen right
      } else {
        // After animation end, content is in place (at 0)
        setAboutRightTranslate(0);
        setAboutLeftTranslate(0);
      }
    };

    window.addEventListener("scroll", handleAboutScroll, { passive: true });
    handleAboutScroll(); // Initial call

    return () => {
      window.removeEventListener("scroll", handleAboutScroll);
    };
  }, []);

  // Feature scroll animation
  useEffect(() => {
    const handleFeatureScroll = () => {
      const viewportHeight = window.innerHeight;
      const scrollTop = window.scrollY;

      // Animation states: 8 smooth states for fluid animation
      const animationStates = [
        { translateY: 20, scale: 0.75, rotateX: -12 },
        { translateY: 17.756, scale: 0.77805, rotateX: -10.6536 },
        { translateY: 15.7628, scale: 0.802965, rotateX: -9.45768 },
        { translateY: 13.4632, scale: 0.83171, rotateX: -8.07792 },
        { translateY: 8.1684, scale: 0.897895, rotateX: -4.90104 },
        { translateY: 6.336, scale: 0.9208, rotateX: -3.8016 },
        { translateY: 3.526, scale: 0.955925, rotateX: -2.1156 },
        { translateY: 0, scale: 1, rotateX: 0 },
      ];

      featureRefs.current.forEach((ref, index) => {
        if (!ref) return;

        const rect = ref.getBoundingClientRect();
        const elementTop = rect.top;
        const elementCenter = elementTop + rect.height / 2;
        const viewportCenter = viewportHeight / 2;

        // Calculate distance from viewport center (positive = below center, negative = above center)
        const distanceFromCenter = elementCenter - viewportCenter;

        // Normalize: when element is 1 viewport height above center, progress = 0 (initial state)
        // when element is at center, progress = 1 (final state)
        // Animation range: from -viewportHeight to 0
        const animationRange = viewportHeight;
        let progress = 1 - distanceFromCenter / animationRange;

        // Clamp progress between 0 and 1
        progress = Math.max(0, Math.min(1, progress));

        // Map progress (0-1) to animation states (0-7)
        const stateProgress = progress * 7;
        let stateIndex = Math.floor(stateProgress);
        stateIndex = Math.min(stateIndex, 6); // Max index is 6 (for interpolation between 6 and 7)

        const localProgress = stateProgress - stateIndex;

        const state1 = animationStates[stateIndex];
        const state2 = animationStates[stateIndex + 1];

        const translateY =
          state1.translateY +
          (state2.translateY - state1.translateY) * localProgress;
        const scale =
          state1.scale + (state2.scale - state1.scale) * localProgress;
        const rotateX =
          state1.rotateX + (state2.rotateX - state1.rotateX) * localProgress;

        setFeatureTransforms((prev) => {
          const newTransforms = [...prev];
          newTransforms[index] = { translateY, scale, rotateX };
          return newTransforms;
        });
      });
    };

    window.addEventListener("scroll", handleFeatureScroll, { passive: true });
    handleFeatureScroll(); // Initial call

    return () => {
      window.removeEventListener("scroll", handleFeatureScroll);
    };
  }, []);

  // Services scroll animation - slides in from bottom (1000px), one after another
  useEffect(() => {
    const handleServiceScroll = () => {
      if (!servicesSectionRef.current) return;

      const servicesSection = servicesSectionRef.current;
      const viewportHeight = window.innerHeight;
      const sectionRect = servicesSection.getBoundingClientRect();
      const sectionTop = sectionRect.top;

      // Animation starts when section top is at viewport bottom
      // Animation ends when section top is at viewport center
      const animationStart = viewportHeight;
      const animationEnd = viewportHeight * 0.3;

      // Animation: slide services in from bottom (1000px) as section enters viewport
      if (sectionTop <= animationStart && sectionTop >= animationEnd) {
        // Calculate progress (0 to 1)
        const scrollProgress =
          (animationStart - sectionTop) / (animationStart - animationEnd);
        const clampedProgress = Math.max(0, Math.min(1, scrollProgress));

        // Use easing function for smoother animation
        const easeOutCubic = 1 - Math.pow(1 - clampedProgress, 3);

        // Each service animates with a delay based on index (staggered)
        serviceRefs.current.forEach((ref, index) => {
          if (!ref) return;

          const delay = index * 0.2; // 20% delay between each service
          const delayedProgress = Math.max(
            0,
            Math.min(1, (clampedProgress - delay) / (1 - delay))
          );

          // Use easing for delayed progress
          const easeOutCubicDelayed = 1 - Math.pow(1 - delayedProgress, 3);

          // Service starts at 1000px (below position), translates to 0 (its position)
          const serviceStart = 1000;
          const serviceTranslate =
            serviceStart - easeOutCubicDelayed * serviceStart;

          setServiceTranslates((prev) => {
            const newTranslates = [...prev];
            newTranslates[index] = serviceTranslate;
            return newTranslates;
          });
        });
      } else if (sectionTop > animationStart) {
        // Before section enters viewport, keep off-screen positions (1000px)
        setServiceTranslates([250, 500, 750, 1000]);
      } else {
        // After animation end, content is in place (at 0)
        setServiceTranslates([0, 0, 0, 0]);
      }
    };

    window.addEventListener("scroll", handleServiceScroll, { passive: true });
    handleServiceScroll(); // Initial call

    return () => {
      window.removeEventListener("scroll", handleServiceScroll);
    };
  }, []);

  // Projects scroll animation - slides in from bottom (1000px), one after another
  useEffect(() => {
    const handleProjectScroll = () => {
      if (!projectsSectionRef.current) return;

      const projectsSection = projectsSectionRef.current;
      const viewportHeight = window.innerHeight;
      const sectionRect = projectsSection.getBoundingClientRect();
      const sectionTop = sectionRect.top;

      // Animation starts when section top is at viewport bottom
      // Animation ends when section top is at viewport center
      const animationStart = viewportHeight;
      const animationEnd = viewportHeight * 0.3;

      // Animation: slide projects in from bottom (1000px) as section enters viewport
      if (sectionTop <= animationStart && sectionTop >= animationEnd) {
        // Calculate progress (0 to 1)
        const scrollProgress =
          (animationStart - sectionTop) / (animationStart - animationEnd);
        const clampedProgress = Math.max(0, Math.min(1, scrollProgress));

        // Use easing function for smoother animation
        const easeOutCubic = 1 - Math.pow(1 - clampedProgress, 3);

        // Each project animates with a delay based on index (staggered)
        projectRefs.current.forEach((ref, index) => {
          if (!ref) return;

          const delay = index * 0.15; // 15% delay between each project
          const delayedProgress = Math.max(
            0,
            Math.min(1, (clampedProgress - delay) / (1 - delay))
          );

          // Use easing for delayed progress
          const easeOutCubicDelayed = 1 - Math.pow(1 - delayedProgress, 3);

          // Project starts at 1000px (below position), translates to 0 (its position)
          const projectStart = 1000;
          const projectTranslate =
            projectStart - easeOutCubicDelayed * projectStart;

          setProjectTranslates((prev) => {
            const newTranslates = [...prev];
            newTranslates[index] = projectTranslate;
            return newTranslates;
          });
        });
      } else if (sectionTop > animationStart) {
        // Before section enters viewport, keep off-screen positions (1000px)
        setProjectTranslates([
          250, 500, 750, 1000, 1250, 1500, 1750, 2000, 2250, 2500,
        ]);
      } else {
        // After animation end, content is in place (at 0)
        setProjectTranslates([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
      }
    };

    window.addEventListener("scroll", handleProjectScroll, { passive: true });
    handleProjectScroll(); // Initial call

    return () => {
      window.removeEventListener("scroll", handleProjectScroll);
    };
  }, []);

  //contact form :
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    services: "",
  });

  const [errors, setErrors] = useState<{
    firstName?: string;
    lastName?: string;
    email?: string;
    message?: string;
  }>({});

  const services = [
    "Développement Web",
    "Développement Mobile",
    "UI / UX Design",
    "Logiciel sur mesure",
    "Stratégie & Consulting",
    "Autre",
  ];

  const faqs = [
    {
      question: "What is included in your branding services?",
      answer:
        "Our branding services include logo design, brand identity development, color palette selection, typography choices, and brand guidelines documentation.",
    },
    {
      question: "How long does it take to complete a branding project?",
      answer:
        "The timeline varies depending on the scope, but a typical branding project takes 4–6 weeks from initial consultation to final delivery.",
    },
    {
      question: "Do you offer mobile-friendly designs?",
      answer:
        "Yes, all our designs are mobile-responsive and optimized for various screen sizes and devices.",
    },
    {
      question: "Can you redesign an existing website?",
      answer:
        "Absolutely! We specialize in website redesigns that improve both aesthetics and functionality while maintaining your brand identity.",
    },
    {
      question: "Do you provide custom development solutions?",
      answer:
        "Yes, we offer custom development solutions tailored to your specific business needs and requirements.",
    },
  ];

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validateForm = () => {
    const newErrors: typeof errors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "Le prénom est requis";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Le nom est requis";
    }

    if (!formData.email.trim()) {
      newErrors.email = "L'email est requis";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Email invalide";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Le message est requis";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted:", formData);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
        services: "",
      });
      alert("Merci pour votre message ! Nous vous répondrons rapidement.");
    }
  };

  return (
    <main className="min-h-screen">
      <Sidebar onToggle={setSidebarOpen} />
      <div
        className={`w-[calc(100vw-64px)] md:w-[calc(100vw-95px)] ml-16 md:ml-20`}
      >
        <div
          ref={scrollContainerRef}
          className={`grid grid-cols-1 lg:grid-cols-2 relative overflow-hidden`}
          style={{
            height: "300vh",
          }}
        >
          <div
            className="grayscale-[70%]"
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              zIndex: 0,
            }}
          >
            <Spline scene="https://prod.spline.design/km-t8b4Ued3ER54i/scene.splinecode" />
          </div>
          {/* Left Section - Hero - Fixed during scroll */}
          <div
            ref={heroSectionRef}
            className="bg-background-white relative z-10 overflow-visible"
            style={{
              position: "fixed",
              top: 0,
              left: `${sidebarWidth}px`,
              width: `calc((100vw - ${sidebarWidth}px) / 2)`,
              height: "100vh",
              transform: `translateX(${translateX}px)`,
              transition:
                "transform 0.1s ease-out, left 0.3s ease-in-out, width 0.3s ease-in-out",
            }}
          >
            <div
              className="flex flex-col justify-between h-screen py-8 md:py-16 px-4 md:px-20"
              style={{
                position: "fixed",
                top: 0,
                width: `calc((100vw - ${sidebarWidth}px) / 2)`,
                height: "100vh",
                transform: `translateX(${translateX}px)`,
                transition:
                  "transform 0.2s ease-out, left 0.4s ease-in-out, width 0.4s ease-in-out",
              }}
            >
              {/* Main Content */}
              <div className="flex-1 flex flex-col justify-center">
                {/* Headline */}
                <div className="mb-8">
                  <div className="flex items-start space-x-3 mb-0">
                    <span className="text-accent-red text-xl md:text-2xl font-bold">
                      *
                    </span>
                    <p className="text-text-secondary text-base md:text-4xl font-bold">
                      Software Development & Digital Solutions
                    </p>
                  </div>
                  <h1 className="text-5xl md:text-6xl lg:text-[10rem] xl:text-[13rem] font-bold text-text-primary leading-none relative z-20 mt-0">
                    IREESOFT
                  </h1>
                </div>

                {/* Sub-headline */}
                <p className="text-text-secondary text-base md:text-lg max-w-2xl mb-16">
                  From Idea to Implementation — We create custom software,
                  websites, and mobile apps
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
          </div>

          {/* Right Section - Abstract Background - Fixed during scroll */}
          <div
            className="hidden lg:block relative overflow-hidden"
            style={{
              position: "fixed",
              top: 0,
              right: 0,
              width: "50%",
              height: "100vh",
            }}
          >
            <div className="relative h-screen flex items-end justify-end">
              {/* Content Overlay */}
              <div
                className="h-[30px] w-[50%] bg-white relative"
                style={{
                  transform: `translateX(${-translateX * 15}px)`,
                  transition:
                    "transform 0.1s ease-out, left 0.3s ease-in-out, width 0.3s ease-in-out",
                }}
              >
                <div className="absolute top-[-40px] right-0">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M40 40V0C40 22.0914 22.0914 40 0 40H40Z"
                      fill="#fcfcfc"
                    ></path>
                  </svg>
                </div>
                <div className="absolute top-[-40px] left-[47px] rotate-90">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M40 40V0C40 22.0914 22.0914 40 0 40H40Z"
                      fill="#fcfcfc"
                    ></path>
                  </svg>
                </div>
              </div>
              <div
                className="relative z-10 flex flex-col items-end space-y-6 bg-white p-[30px_10px] rounded-[40px_0_0_0] text-center"
                style={{
                  transform: `translateX(${-translateX}px)`,
                  transition:
                    "transform 0.1s ease-out, left 0.3s ease-in-out, width 0.3s ease-in-out",
                }}
              >
                {/* Text Box - Visible only on lg+ */}
                <p className="tracking-[0] uppercase mix-blend-normal text-[3vw] font-semibold leading-[3vw]">
                  Modern Software Solutions
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* About section */}
        <div
          ref={aboutSectionRef}
          className="bg-background-white relative z-10 transition-all duration-300 ease-in-out w-full max-w-full overflow-hidden box-border"
        >
          <div className="relative flex justify-center">
            <div className="w-full max-w-full px-4 md:px-8 lg:px-12 xl:px-20 py-6 md:py-8 flex flex-col">
              {/* Header */}
              <div className="mb-[20px] md:mb-[40px] flex-shrink-0">
                <p className="text-text-light text-sm md:text-base mb-2">
                  (Who We Are)
                </p>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-text-primary uppercase break-words">
                  We build smart digital solutions
                </h2>
              </div>
              <div className="flex justify-center items-center relative gap-5">
                {/* Center Section - Image */}
                <div className="w-[60%] flex-shrink-0 relative">
                  {/* left Section - Text Content */}
                  <div
                    className="flex flex-col w-[50%] gap-5 absolute bottom-0 left-[-31.3%] bg-background-white z-20 rounded-[0_40px_0] p-3"
                    style={{
                      transform: `translateX(${aboutRightTranslate}px)`,
                      transition: "transform 1s cubic-bezier(0.4, 0, 0.2, 1)",
                      willChange: "transform",
                    }}
                  >
                    <div className="flex flex-col gap-3 relative">
                      <div className="absolute top-[-52px] right-[127px] rotate-90 z-30">
                        <svg
                          width="40"
                          height="40"
                          viewBox="0 0 40 40"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M40 40V0C40 22.0914 22.0914 40 0 40H40Z"
                            fill="#fcfcfc"
                          ></path>
                        </svg>
                      </div>
                      <div className="absolute bottom-[-12px] right-[-52px] rotate-90 z-30">
                        <svg
                          width="40"
                          height="40"
                          viewBox="0 0 40 40"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M40 40V0C40 22.0914 22.0914 40 0 40H40Z"
                            fill="#fcfcfc"
                          ></path>
                        </svg>
                      </div>
                      <h3 className="text-lg md:text-2xl lg:text-3xl font-bold text-text-primary uppercase break-words relative">
                        💻 Development & Engineering
                      </h3>
                      <p className="text-[#7a7a7a]">
                        Nous développons des applications web, mobiles et
                        logicielles fiables, évolutives et performantes, pensées
                        pour soutenir la croissance de votre activité.
                      </p>
                      <Button
                        variant="secondary"
                        className="w-fit mt-2 mx-auto rounded-lg px-6 py-3"
                      >
                        Read More →
                      </Button>
                    </div>
                  </div>
                  <img
                    src="/about.jpg"
                    alt="About"
                    className="w-full grayscale-[70%] rounded-[40px]"
                  />
                </div>

                {/* rigth Section - Statistics */}
                <div
                  className="flex flex-col gap-8 w-[25%] absolute bottom-0 right-0"
                  style={{
                    transform: `translateX(${aboutLeftTranslate}px)`,
                    transition: "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
                    willChange: "transform",
                  }}
                >
                  <div className="bg-background-white rounded-[20px] p-3">
                    <div className="flex items-start">
                      <div className="text-[4rem] font-normal leading-[0.7]">
                        4
                      </div>
                      <div className="text-[2rem] font-semibold leading-[0.5] text-accent-red">
                        +
                      </div>
                    </div>
                    <div className="text-[#7a7a7a] text-xl font-extralight leading-[1.1] uppercase mt-[10px]">
                      years experience
                    </div>
                  </div>
                  <div className="bg-background-white rounded-[20px] p-3">
                    <div className="flex items-start">
                      <div className="text-[4rem] font-normal leading-[0.7]">
                        18
                      </div>
                      <div className="text-[2rem] font-semibold leading-[0.5] text-accent-red">
                        +
                      </div>
                    </div>
                    <div className="text-[#7a7a7a] text-xl font-extralight leading-[1.1] uppercase mt-[10px]">
                      projects done
                    </div>
                  </div>
                  <div className="bg-background-white rounded-[20px] p-3">
                    <div className="flex items-start">
                      <div className="text-[4rem] font-normal leading-[0.7]">
                        8
                      </div>
                      <div className="text-[2rem] font-semibold leading-[0.5] text-accent-red">
                        +
                      </div>
                    </div>
                    <div className="text-[#7a7a7a] text-xl font-extralight leading-[1.1] uppercase mt-[10px]">
                      happy clients
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="md:text-lg lg:text-lg font-bold text-text-primary my-8 greyscale">
                  Tools & Technology :
                </div>
                <div className="overflow-hidden w-full md:w-auto mt-4 md:mt-0">
                  <div className="flex items-center gap-6 md:gap-[40px] animate-scroll-left grayscale whitespace-nowrap">
                    {[...technologyLogos, ...technologyLogos].map(
                      (logo, index) => {
                        const LogoComponent = logo.component;
                        return (
                          <div
                            key={`left-${logo.id}-${index}`}
                            className="flex items-center justify-center flex-shrink-0 gap-5"
                          >
                            <LogoComponent />
                            <p className="text-text-secondary text-sm md:text-base font-medium">
                              {logo.title}
                            </p>
                          </div>
                        );
                      }
                    )}
                  </div>
                </div>
                <div className="overflow-hidden w-full md:w-auto mt-[20px] md:mt-[40px]">
                  <div className="flex items-center gap-6 md:gap-[40px] animate-scroll-right grayscale whitespace-nowrap">
                    {[...technologyLogos, ...technologyLogos].map(
                      (logo, index) => {
                        const LogoComponent = logo.component;
                        return (
                          <div
                            key={`right-${logo.id}-${index}`}
                            className="flex items-center justify-center flex-shrink-0 gap-5"
                          >
                            <LogoComponent />
                            <p className="text-text-secondary text-sm md:text-base font-medium">
                              {logo.title}
                            </p>
                          </div>
                        );
                      }
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="relative bg-white w-full block mt-0 pt-32 pb-16 px-4 md:px-8 lg:px-12 xl:px-20">
          {/* Header */}
          <div className="flex-shrink-0">
            <p className="text-text-light text-sm md:text-base mb-2">
              (Our Services)
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-text-primary uppercase break-words">
              EXPLORE WHAT WE CAN DO FOR YOU
            </h2>
          </div>
          {features.map((feature, index) => {
            const transform = featureTransforms[index] || {
              translateY: 20,
              scale: 0.75,
              rotateX: -12,
            };
            return (
              <div
                key={feature.id}
                ref={(el) => {
                  featureRefs.current[index] = el;
                }}
                className="w-full h-[100vh] sticky flex justify-center items-start top-[4vh]"
              >
                <div
                  className="rounded-[40px] w-full h-[80vh] relative overflow-hidden flex justify-center items-center"
                  style={{
                    willChange: "transform",
                    transform: `translate3d(0px, ${transform.translateY}%, 0px) scale3d(${transform.scale}, ${transform.scale}, 1) rotateX(${transform.rotateX}deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`,
                    transformStyle: "preserve-3d",
                  }}
                >
                  <div className="flex justify-center items-center absolute inset-0">
                    <img
                      src={`/${feature.img}`}
                      alt="Image"
                      className="object-cover w-full h-full absolute inset-0 rounded-[40px] grayscale-[70%]"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Services Section */}
        <div
          ref={servicesSectionRef}
          className={`bg-background-white relative z-10 transition-all duration-300 ease-in-out w-full max-w-full overflow-hidden box-border`}
        >
          <div className="w-full max-w-full px-4 md:px-8 lg:px-12 xl:px-20 py-6 md:py-8 flex flex-col box-border">
            <ServicesSection
              serviceRefs={serviceRefs}
              serviceTranslates={serviceTranslates}
            />
          </div>
        </div>

        {/* Last Projects Section */}
        <div
          ref={projectsSectionRef}
          className="bg-background-white relative z-10 transition-all duration-300 ease-in-out w-full max-w-full overflow-hidden box-border"
        >
          <div className="w-full max-w-full px-4 md:px-8 lg:px-12 xl:px-20 py-6 md:py-8 flex flex-col box-border">
            <ProjectsSection
              projectRefs={projectRefs}
              projectTranslates={projectTranslates}
            />
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-background-white relative z-10 transition-all duration-300 ease-in-out w-full max-w-full overflow-hidden box-border pt-[200px]">
          <div className="relative flex justify-center  h-[100vh]">
            <div className="w-full max-w-full px-4 md:px-8 lg:px-12 xl:px-20 py-6 md:py-8 flex flex-col">
              <div className="flex justify-between items-start gap-[64px]">
                {/* left Section */}
                <div className="w-[calc(50%-32px)]">
                  {/* Header */}
                  <div className="mb-[20px] md:mb-[40px] flex-shrink-0">
                    <p className="text-text-light text-sm md:text-base mb-2">
                      (Who We Are)
                    </p>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-text-primary uppercase break-words">
                      We build smart digital solutions
                    </h2>
                  </div>
                  <div className="mb-2 md:mb-3 flex-shrink-0">
                    <div>
                      <div className="mb-1 font-semibold">Email :</div>
                      <div>contact@xxxxagency.com</div>
                    </div>
                  </div>
                  <div className="mb-2 md:mb-3 flex-shrink-0">
                    <div>
                      <div className="mb-1 font-semibold">Email :</div>
                    </div>
                  </div>
                  <div className="mb-2 md:mb-3 flex-shrink-0">
                    <div>
                      <div className="mb-1 font-semibold">Email :</div>
                      <div>contact@xxxxagency.com</div>
                    </div>
                  </div>
                  <div className="mb-4 md:mb-5 flex-shrink-0">
                    <div>
                      <div className="mb-1 font-semibold">Telephone :</div>
                      <div>+216 21 211 211</div>
                    </div>
                  </div>
                  {/* Main Content: Form and Contact Methods */}
                  <div className="w-full">
                    <form onSubmit={handleSubmit}>
                      {/* First Name & Last Name */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-3">
                        <Input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          placeholder="Prénom"
                          error={errors.firstName}
                          required
                        />
                        <Input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          placeholder="Nom"
                          error={errors.lastName}
                          required
                        />
                      </div>

                      {/* Email */}
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="vous@entreprise.com"
                        error={errors.email}
                        required
                      />

                      {/* select */}
                      <div className="w-full my-3">
                        <select
                          name="services"
                          value={formData.services}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 rounded-lg bg-background-white border border-background-gray focus:outline-none focus:ring-2 focus:ring-primary-dark focus:border-transparent transition-all duration-200 ${
                            formData.services === ""
                              ? "text-text-light"
                              : "text-text-primary"
                          }`}
                        >
                          <option value="" disabled hidden>
                            Sélectionnez un service
                          </option>
                          {services.map((service) => (
                            <option key={service} value={service}>
                              {service}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Message */}
                      <div className="w-full my-3">
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Laissez-nous un message..."
                          rows={6}
                          className={`
                    w-full px-4 py-3 rounded-lg
                    bg-background-white border border-background-gray
                    text-text-primary placeholder-text-light
                    focus:outline-none focus:ring-2 focus:ring-primary-dark focus:border-transparent
                    transition-all duration-200 resize-none
                    ${
                      errors.message
                        ? "border-accent-red focus:ring-accent-red"
                        : ""
                    }
                  `}
                          required
                        />
                        {errors.message && (
                          <p className="mt-1 text-sm text-accent-red">
                            {errors.message}
                          </p>
                        )}
                      </div>

                      {/* Submit Button */}
                      <button
                        type="submit"
                        className="bg-primary-dark rounded-[12px] px-6 md:px-8 lg:px-10 py-2 md:py-3 lg:py-3 shadow-xl hover:bg-primary-light transition-all duration-200 w-full mt-4"
                      >
                        <p className="text-background-white text-base md:text-lg font-semibold">
                          Envoyer le message
                        </p>
                      </button>
                    </form>
                  </div>
                </div>
                {/* right Section */}
                <div className="w-[calc(50%-32px)] flex flex-col justify-center items-center relative gap-5">
                  {/* Center Section - Image */}
                  <div className="w-[100%] flex-shrink-0 relative">
                    {/* left Section - Text Content */}
                    <div className="w-[14vw] absolute bottom-0 left-[0] bg-background-white z-20 rounded-[0_40px_0] p-3">
                      <div className="flex justify-center items-center relative">
                        <div className="absolute top-[-52px] left-[-12px] rotate-90 z-30">
                          <svg
                            width="40"
                            height="40"
                            viewBox="0 0 40 40"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M40 40V0C40 22.0914 22.0914 40 0 40H40Z"
                              fill="#fcfcfc"
                            ></path>
                          </svg>
                        </div>
                        <div className="absolute bottom-[-12px] right-[-52px] rotate-90 z-30">
                          <svg
                            width="40"
                            height="40"
                            viewBox="0 0 40 40"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M40 40V0C40 22.0914 22.0914 40 0 40H40Z"
                              fill="#fcfcfc"
                            ></path>
                          </svg>
                        </div>
                        <p className="text-[1.25rem] font-extralight">
                          Let’s Make Something Amazing Together
                        </p>
                      </div>
                    </div>
                    <img
                      src="/about.jpg"
                      alt="About"
                      className="w-full grayscale-[70%] rounded-[40px]"
                    />
                  </div>
                  <div className="w-full mt-8">
                    <div className="space-y-0">
                      {faqs.map((faq, index) => {
                        const isOpen = openFaqIndex === index;
                        return (
                          <div
                            key={index}
                            className="border-b border-gray-300 last:border-b-0"
                          >
                            <button
                              onClick={() =>
                                setOpenFaqIndex(isOpen ? null : index)
                              }
                              className="w-full flex items-center justify-between py-4 text-left group"
                            >
                              <span
                                className={`text-base md:text-lg font-bold transition-colors ${
                                  isOpen
                                    ? "text-accent-red"
                                    : "text-text-primary"
                                }`}
                              >
                                {faq.question}
                              </span>
                              <div className="flex-shrink-0 ml-4">
                                <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center transition-colors group-hover:bg-gray-300">
                                  {isOpen ? (
                                    <svg
                                      width="12"
                                      height="12"
                                      viewBox="0 0 12 12"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M1 1L11 11M11 1L1 11"
                                        stroke="black"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                      />
                                    </svg>
                                  ) : (
                                    <svg
                                      width="12"
                                      height="12"
                                      viewBox="0 0 12 12"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M6 1V11M1 6H11"
                                        stroke="black"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                      />
                                    </svg>
                                  )}
                                </div>
                              </div>
                            </button>
                            {isOpen && (
                              <div className="pb-4 pt-2">
                                <p className="text-text-secondary text-sm md:text-base font-normal leading-relaxed">
                                  {faq.answer}
                                </p>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div
          className={`bg-background-white relative z-10 transition-all duration-300 ease-in-out w-full max-w-full overflow-hidden box-border`}
        >
          <div className="w-full max-w-full px-4 md:px-8 lg:px-12 xl:px-20 py-6 md:py-8 flex flex-col box-border">
            <ContactSection />
          </div>
        </div>
      </div>
    </main>
  );
}
