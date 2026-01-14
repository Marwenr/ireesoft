"use client";

import React from "react";
import { cn } from "@/lib/utils";
import SectionContainer from "@/components/ui/SectionContainer";

export interface ContactProps extends React.HTMLAttributes<HTMLElement> {
  heading?: string;
  email?: string;
  phone?: string;
}

// Icon components
const AsteriskIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 256"
    className="w-5 h-5 text-primary-500 flex-shrink-0"
    fill="currentColor"
  >
    <g>
      <path d="M214.86,180.12a8,8,0,0,1-11,2.74L136,142.13V216a8,8,0,0,1-16,0V142.13L52.12,182.86a8,8,0,1,1-8.23-13.72L112.45,128,43.89,86.86a8,8,0,1,1,8.23-13.72L120,113.87V40a8,8,0,0,1,16,0v73.87l67.88-40.73a8,8,0,1,1,8.23,13.72L143.55,128l68.56,41.14A8,8,0,0,1,214.86,180.12Z" />
    </g>
  </svg>
);

const ChatIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 256"
    className="w-12 h-12 text-primary-500 flex-shrink-0"
    fill="currentColor"
  >
    <g>
      <path
        d="M163.94,80.11h0C162.63,80,161.32,80,160,80a72,72,0,0,0-67.93,95.88h0a71.53,71.53,0,0,1-30-8.39l-27.76,8.16a8,8,0,0,1-9.93-9.93L32.5,138A72,72,0,1,1,163.94,80.11Z"
        opacity="0.2"
      />
      <path d="M144,140a12,12,0,1,1-12-12A12,12,0,0,1,144,140Zm44-12a12,12,0,1,0,12,12A12,12,0,0,0,188,128Zm51.34,83.47a16,16,0,0,1-19.87,19.87l-24.71-7.27A80,80,0,0,1,86.43,183.42a79,79,0,0,1-25.19-7.35l-24.71,7.27a16,16,0,0,1-19.87-19.87l7.27-24.71A80,80,0,1,1,169.58,72.59a80,80,0,0,1,62.49,114.17ZM81.3,166.3a79.94,79.94,0,0,1,70.38-93.87A64,64,0,0,0,39.55,134.19a8,8,0,0,1,.63,6L32,168l27.76-8.17a8,8,0,0,1,6,.63A63.45,63.45,0,0,0,81.3,166.3Zm135.15,15.89a64,64,0,1,0-26.26,26.26,8,8,0,0,1,6-.63L224,216l-8.17-27.76A8,8,0,0,1,216.45,182.19Z" />
    </g>
  </svg>
);

const PhoneIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 256"
    className="w-12 h-12 text-primary-500 flex-shrink-0"
    fill="currentColor"
  >
    <g>
      <path
        d="M223.94,174.08A48.33,48.33,0,0,1,176,216,136,136,0,0,1,40,80,48.33,48.33,0,0,1,81.92,32.06a8,8,0,0,1,8.3,4.8l21.13,47.2a8,8,0,0,1-.66,7.53L89.32,117a7.93,7.93,0,0,0-.54,7.81c8.27,16.93,25.77,34.22,42.75,42.41a7.92,7.92,0,0,0,7.83-.59l25-21.3a8,8,0,0,1,7.59-.69l47.16,21.13A8,8,0,0,1,223.94,174.08Z"
        opacity="0.2"
      />
      <path d="M222.37,158.46l-47.11-21.11-.13-.06a16,16,0,0,0-15.17,1.4,8.12,8.12,0,0,0-.75.56L134.87,160c-15.42-7.49-31.34-23.29-38.83-38.51l20.78-24.71c.2-.25.39-.5.57-.77a16,16,0,0,0,1.32-15.06l0-.12L97.54,33.64a16,16,0,0,0-16.62-9.52A56.26,56.26,0,0,0,32,80c0,79.4,64.6,144,144,144a56.26,56.26,0,0,0,55.88-48.92A16,16,0,0,0,222.37,158.46ZM176,208A128.14,128.14,0,0,1,48,80,40.2,40.2,0,0,1,82.87,40a.61.61,0,0,0,0,.12l21,47L83.2,111.86a6.13,6.13,0,0,0-.57.77,16,16,0,0,0-1,15.7c9.06,18.53,27.73,37.06,46.46,46.11a16,16,0,0,0,15.75-1.14,8.44,8.44,0,0,0,.74-.56L168.89,152l47,21.05h0s.08,0,.11,0A40.21,40.21,0,0,1,176,208Z" />
    </g>
  </svg>
);

const Contact = React.forwardRef<HTMLElement, ContactProps>(
  (
    {
      className,
      heading = "Get in touch with Us",
      email = "contact@ireesoft.com",
      phone = "+1234567890",
      ...props
    },
    ref
  ) => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      // Handle form submission here
      console.log("Form submitted");
    };

    return (
      <SectionContainer ref={ref} id="contact" className={className} {...props}         style={{
        scrollMarginTop: "100px",
        paddingBlock: "80px",
        background:
          "linear-gradient(rgb(224, 232, 255) 0%, rgb(250, 220, 236) 100%)",
        boxShadow:
          "rgba(142, 69, 161, 0.21) 0px 0.796192px 0.796192px -1px, rgba(142, 69, 161, 0.2) 0px 2.41451px 2.41451px -2px, rgba(142, 69, 161, 0.16) 0px 6.38265px 6.38265px -3px, rgba(142, 69, 161, 0.05) 0px 20px 20px -4px",
      }}>
        <div className="relative z-10 w-full max-w-[1120px] mx-auto">
          {/* Top Row - Left Content and Form */}
          <div className="flex flex-col lg:flex-row items-end justify-center gap-6 lg:gap-[44px] w-full">
            {/* Left Section */}
            <div className="flex flex-col items-start justify-center gap-6 flex-1 min-w-[360px] max-w-[640px] w-full lg:w-auto">
              {/* Title */}
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                {heading}
              </h2>

              {/* Points */}
              <div className="flex flex-col gap-6 w-full">
                {/* Point 1 */}
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <AsteriskIcon />
                  </div>
                  <p className="text-base text-foreground leading-relaxed">
                    <strong>Effortless Assistance:</strong> Connect with our
                    team anytime
                  </p>
                </div>

                {/* Point 2 */}
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <AsteriskIcon />
                  </div>
                  <p className="text-base text-foreground leading-relaxed">
                    <strong>Book a Demo Today:</strong> Experience our platform
                    in action
                  </p>
                </div>
              </div>

              {/* Contact Cards */}
              <div className="flex flex-col sm:flex-row gap-6 w-full">
                {/* Reach Out Card */}
                <div
                  className={cn(
                    "flex flex-col gap-4 p-5 rounded-2xl flex-1",
                    "bg-gradient-to-b from-background-secondary/50 to-background/50",
                    "shadow-card"
                  )}
                >
                  <div className="w-12 h-12 flex items-center justify-center">
                    <ChatIcon />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-xl font-semibold text-foreground">
                      Reach Out to Us
                    </h3>
                    <p className="text-sm text-foreground opacity-80">
                      Need assistance? Drop us a message anytime.
                    </p>
                    <a
                      href={`mailto:${email}`}
                      className="text-sm text-primary-500 font-medium hover:underline"
                    >
                      {email}
                    </a>
                  </div>
                </div>

                {/* Call Us Card */}
                <div
                  className={cn(
                    "flex flex-col gap-4 p-5 rounded-2xl flex-1",
                    "bg-gradient-to-b from-background-secondary/50 to-background/50",
                    "shadow-card"
                  )}
                >
                  <div className="w-12 h-12 flex items-center justify-center">
                    <PhoneIcon />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-xl font-semibold text-foreground">
                      Call Us
                    </h3>
                    <p className="text-sm text-foreground opacity-80">
                      Need help? Give us a call—we're here for you.
                    </p>
                    <a
                      href={`tel:${phone}`}
                      className="text-sm text-primary-500 font-medium hover:underline"
                    >
                      {phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Section - Form */}
            <div className="flex-1 min-w-[360px] max-w-[528px] w-full lg:w-auto">
              <form
                onSubmit={handleSubmit}
                className={cn(
                  "flex flex-col gap-4 p-5 rounded-2xl",
                  "bg-gradient-to-b from-background-secondary/50 to-background/50",
                  "shadow-card"
                )}
              >
                {/* Name Field */}
                <label className="flex flex-col gap-2.5">
                  <p className="text-sm font-medium text-foreground opacity-50">
                    Name
                  </p>
                  <div className="relative">
                    <input
                      type="text"
                      name="Name"
                      placeholder="Jane Smith"
                      className={cn(
                        "w-full h-[42px] px-3 py-3 rounded-[10px]",
                        "bg-white border-none outline-none",
                        "text-sm text-foreground placeholder:text-foreground/50",
                        "focus:ring-2 focus:ring-primary-500/20"
                      )}
                    />
                  </div>
                </label>

                {/* Email Field */}
                <label className="flex flex-col gap-2.5">
                  <p className="text-sm font-medium text-foreground opacity-50">
                    Email
                  </p>
                  <div className="relative">
                    <input
                      type="email"
                      name="Email"
                      required
                      placeholder="jane@framer.com"
                      className={cn(
                        "w-full h-[42px] px-3 py-3 rounded-[10px]",
                        "bg-white border-none outline-none",
                        "text-sm text-foreground placeholder:text-foreground/50",
                        "focus:ring-2 focus:ring-primary-500/20"
                      )}
                    />
                  </div>
                </label>

                {/* Subject Field */}
                <label className="flex flex-col gap-2.5">
                  <p className="text-sm font-medium text-foreground opacity-50">
                    Subject of Interest
                  </p>
                  <div className="relative">
                    <input
                      type="text"
                      name="Subject of Interest"
                      placeholder="Subject"
                      className={cn(
                        "w-full h-[42px] px-3 py-3 rounded-[10px]",
                        "bg-white border-none outline-none",
                        "text-sm text-foreground placeholder:text-foreground/50",
                        "focus:ring-2 focus:ring-primary-500/20"
                      )}
                    />
                  </div>
                </label>

                {/* Message Field */}
                <label className="flex flex-col gap-2.5">
                  <p className="text-sm font-medium text-foreground opacity-50">
                    Message
                  </p>
                  <div className="relative">
                    <textarea
                      name="Message"
                      placeholder="message goes here..."
                      rows={4}
                      className={cn(
                        "w-full min-h-[100px] px-3 py-3 rounded-[10px] resize-y",
                        "bg-white border-none outline-none",
                        "text-sm text-foreground placeholder:text-foreground/50",
                        "focus:ring-2 focus:ring-primary-500/20"
                      )}
                    />
                  </div>
                </label>

                {/* Submit Button */}
                <div className="mt-2">
                  <button
                    type="submit"
                    className={cn(
                      "w-full h-12 rounded-[10px]",
                      "bg-gradient-to-br from-background-secondary to-primary-500",
                      "text-white font-medium text-sm",
                      "shadow-hero-button",
                      "hover:opacity-90 transition-opacity",
                      "flex items-center justify-center"
                    )}
                    style={{
                      background:
                        "linear-gradient(303deg, rgb(246, 241, 252) -197%, rgb(56, 26, 125) 100%)",
                    }}
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </SectionContainer>
    );
  }
);

Contact.displayName = "Contact";

export default Contact;
