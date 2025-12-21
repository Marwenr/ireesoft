"use client";

import React, { useState } from "react";
import Input from "./Input";

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    services: [] as string[],
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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleServiceChange = (service: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));
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
        services: [],
      });
      alert("Merci pour votre message ! Nous vous répondrons rapidement.");
    }
  };

  return (
    <div 
      className="w-full max-w-full box-border flex flex-col py-8 md:py-12 lg:py-16 relative"
    >
      <div className="w-full max-w-full box-border flex flex-col items-center relative z-10">
        {/* Header Section */}
        <div className="mb-8 md:mb-12 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 md:mb-6">
            Contactez notre équipe
          </h2>
          <p className="text-gray-200 text-base md:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
            Vous avez des questions sur nos produits ou nos services ? Nous sommes là pour vous aider.
            <br />
            Discutez avec notre équipe amicale et obtenez une consultation gratuite en moins de 5 minutes.
          </p>
        </div>

        {/* Main Content: Form and Contact Methods */}
        <div className="flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-16 max-w-6xl w-full">
          {/* Left: Contact Form */}
          <div className="w-full lg:flex-[2] bg-transparent p-6 md:p-8 rounded-lg">
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              {/* First Name & Last Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input
                  label="Prénom *"
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Prénom"
                  error={errors.firstName}
                  required
                />
                <Input
                  label="Nom *"
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
                label="Email *"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="vous@entreprise.com"
                error={errors.email}
                required
              />

              {/* Phone Number */}
              <div className="w-full">
                <label className="block text-sm font-medium text-white mb-2">
                  Téléphone
                </label>
                <div className="flex">
                  <select className="px-4 py-3 rounded-l-lg bg-background-white border border-r-0 border-background-gray text-text-primary focus:outline-none focus:ring-2 focus:ring-primary-dark focus:border-transparent">
                    <option value="FR">FR</option>
                    <option value="US">US</option>
                    <option value="GB">GB</option>
                    <option value="DE">DE</option>
                  </select>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+33 6 12 34 56 78"
                    className="flex-1 px-4 py-3 rounded-r-lg bg-background-white border border-background-gray text-text-primary placeholder-text-light focus:outline-none focus:ring-2 focus:ring-primary-dark focus:border-transparent transition-all duration-200"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="w-full">
                <label className="block text-sm font-medium text-white mb-2">
                  Message *
                </label>
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
                    ${errors.message ? "border-accent-red focus:ring-accent-red" : ""}
                  `}
                  required
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-accent-red">{errors.message}</p>
                )}
              </div>

              {/* Services Checkboxes */}
              <div className="w-full">
                <label className="block text-sm font-medium text-white mb-3">
                  Services
                </label>
                <div className="grid grid-cols-2 gap-3 md:gap-4">
                  {services.map((service) => (
                    <label
                      key={service}
                      className="flex items-center space-x-2 cursor-pointer group"
                    >
                      <input
                        type="checkbox"
                        checked={formData.services.includes(service)}
                        onChange={() => handleServiceChange(service)}
                        className="w-4 h-4 rounded border-gray-400 text-primary-dark focus:ring-2 focus:ring-primary-dark cursor-pointer"
                      />
                      <span className="text-sm md:text-base text-white group-hover:text-gray-200 transition-colors">
                        {service}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="bg-primary-dark rounded-2xl px-6 md:px-8 lg:px-10 py-4 md:py-5 lg:py-6 shadow-xl hover:bg-primary-light transition-all duration-200 w-full mt-4"
              >
                <p className="text-background-white text-base md:text-lg font-semibold">
                  Envoyer le message
                </p>
              </button>
            </form>
          </div>

          {/* Right: Contact Methods */}
          <div className="w-full lg:flex-1 flex flex-col gap-8 md:gap-10 bg-transparent p-6 md:p-8 rounded-lg">
            {/* Chat with us */}
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                Discutez avec nous
              </h3>
              <p className="text-gray-200 text-sm md:text-base mb-4">
                Parlez à notre équipe amicale via chat en direct.
              </p>
              <div className="space-y-3">
                <a
                  href="#"
                  className="flex items-center gap-3 text-white hover:text-gray-200 transition-colors group"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                  <span className="underline group-hover:no-underline">
                    Démarrer un chat en direct
                  </span>
                </a>
                <a
                  href="#"
                  className="flex items-center gap-3 text-white hover:text-gray-200 transition-colors group"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="underline group-hover:no-underline">
                    Envoyez-nous un email
                  </span>
                </a>
                <a
                  href="#"
                  className="flex items-center gap-3 text-white hover:text-gray-200 transition-colors group"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                  <span className="underline group-hover:no-underline">
                    Messagez-nous sur X
                  </span>
                </a>
              </div>
            </div>

            {/* Call us */}
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                Appelez-nous
              </h3>
              <p className="text-gray-200 text-sm md:text-base mb-4">
                Appelez notre équipe du lundi au vendredi de 8h à 17h.
              </p>
              <a
                href="tel:+33123456789"
                className="flex items-center gap-3 text-white hover:text-gray-200 transition-colors group"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span className="underline group-hover:no-underline">
                  +33 1 23 45 67 89
                </span>
              </a>
            </div>

            {/* Visit us */}
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                Visitez-nous
              </h3>
              <p className="text-gray-200 text-sm md:text-base mb-4">
                Discutez avec nous en personne à notre siège.
              </p>
              <a
                href="#"
                className="flex items-start gap-3 text-white hover:text-gray-200 transition-colors group"
              >
                <svg
                  className="w-5 h-5 mt-0.5 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="underline group-hover:no-underline">
                  100 Rue Example, 75001 Paris, France
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
