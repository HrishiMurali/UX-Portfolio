import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const homeAnimations = () => {
  // Hero Section Animations
  gsap.fromTo(
    ".hero-heading-container",
    { opacity: 0, scale: 0, transformOrigin: "0% 100%" },
    { opacity: 1, scale: 1, duration: 1, ease: "power2" }
  );
  gsap.fromTo(
    ".hero-img",
    { opacity: 0, scale: 0, transformOrigin: "0% 100%" },
    { opacity: 1, scale: 1, duration: 1, ease: "power2" }
  );
  gsap.fromTo(
    ".experience-img",
    { opacity: 0, scale: 0, transformOrigin: "100% 100%" },
    { opacity: 1, scale: 1, duration: 1, ease: "power2" }
  );
  gsap.fromTo(
    ".hero-heading",
    { opacity: 0, x: -50 },
    { opacity: 1, x: 0, duration: 1, delay: 1, ease: "power2" }
  );

  // Info Section Animation
  gsap.fromTo(
    ".info-expertise",
    { opacity: 0 },
    {
      opacity: 1,
      duration: 1,
      ease: "power2",
      scrollTrigger: {
        trigger: ".info-expertise",
        start: "top 90%",
        once: true,
        onEnter: () => {
          gsap.fromTo(
            ".info-section",
            { opacity: 0, scale: 0, transformOrigin: "0% 100%" },
            { opacity: 1, scale: 1, duration: 1, ease: "power2" }
          );
          gsap.fromTo(
            ".info-text",
            { opacity: 0, x: -50 },
            { opacity: 1, x: 0, duration: 1, delay: 1, ease: "power2" }
          );
          gsap.fromTo(
            ".expertise-section",
            { opacity: 0, scale: 0, transformOrigin: "100% 100%" },
            { opacity: 1, scale: 1, duration: 1, ease: "power2" }
          );
          gsap.fromTo(
            ".expertise-img",
            { opacity: 0 },
            { opacity: 1, duration: 1, delay: 1, ease: "power2" }
          );
          gsap.fromTo(
            ".expertise-text",
            { opacity: 0, x: -50 },
            { opacity: 1, x: 0, duration: 1, delay: 1, ease: "power2" }
          );
        },
      },
    }
  );

  // Work Sections Animations
  gsap.fromTo(
    ".work-section-1",
    { opacity: 0 },
    {
      opacity: 1,
      duration: 1,

      ease: "power2",
      scrollTrigger: {
        trigger: ".work-section-1",
        start: "top 70%",
        once: true,
        onEnter: () => {
          // Animation for InfoSection content after loader completes
          gsap.fromTo(
            ".work-1-container",
            { opacity: 0, scale: 0, transformOrigin: "50% 0%" },
            { opacity: 1, scale: 1, duration: 1, ease: "power2" }
          );

          gsap.fromTo(
            ".work-1-img-container",
            { opacity: 0, scale: 0, transformOrigin: "100% 0%" },
            { opacity: 1, scale: 1, duration: 1, ease: "power2" }
          );
          gsap.fromTo(
            ".work-1-img",
            { opacity: 0, y: 200 },
            { opacity: 1, y: 0, duration: 1, delay: 1.5, ease: "power2" }
          );
          gsap.fromTo(
            ".work-1-summary",
            { opacity: 0, scale: 0, transformOrigin: "0% 0%" },
            { opacity: 1, scale: 1, duration: 1, ease: "power2" }
          );
          gsap.fromTo(
            ".work-1-summary-text",
            { opacity: 0 },
            { opacity: 1, duration: 1, delay: 1, ease: "power2" }
          );
          gsap.fromTo(
            ".work-1-summary-button",
            { opacity: 0, y: 100 },
            { opacity: 1, y: 0, duration: 1, delay: 1, ease: "power2" }
          );
        },
      },
    }
  );

  gsap.fromTo(
    ".work-section-2",
    { opacity: 0 },
    {
      opacity: 1,
      duration: 1,
      ease: "power2",
      scrollTrigger: {
        trigger: ".work-section-2",
        start: "top 50%",
        once: true,
        onEnter: () => {
          gsap.fromTo(
            ".work-2-img",
            { opacity: 0, y: 200 },
            { opacity: 1, y: 0, duration: 1, delay: 1.5, ease: "power2" }
          );
          gsap.fromTo(
            ".work-2-img-container",
            { opacity: 0, scale: 0, transformOrigin: "100% 100%" },
            { opacity: 1, scale: 1, duration: 1, ease: "power2" }
          );
          gsap.fromTo(
            ".work-2-summary",
            { opacity: 0, scale: 0, transformOrigin: "100% 0%" },
            { opacity: 1, scale: 1, duration: 1, ease: "power2" }
          );
          gsap.fromTo(
            ".work-2-summary-text",
            { opacity: 0 },
            { opacity: 1, duration: 1, delay: 1, ease: "power2" }
          );
          gsap.fromTo(
            ".work-2-summary-button",
            { opacity: 0, y: 100 },
            { opacity: 1, y: 0, duration: 1, delay: 1, ease: "power2" }
          );

          gsap.fromTo(
            ".work-3-img",
            { opacity: 0, y: 200 },
            { opacity: 1, y: 0, duration: 1, delay: 1.5, ease: "power2" }
          );
          gsap.fromTo(
            ".work-3-img-container",
            { opacity: 0, scale: 0, transformOrigin: "0% 100%" },
            { opacity: 1, scale: 1, duration: 1, ease: "power2" }
          );
          gsap.fromTo(
            ".work-3-summary",
            { opacity: 0, scale: 0, transformOrigin: "0% 0%" },
            { opacity: 1, scale: 1, duration: 1, ease: "power2" }
          );
          gsap.fromTo(
            ".work-3-summary-text",
            { opacity: 0 },
            { opacity: 1, duration: 1, delay: 1, ease: "power2" }
          );
          gsap.fromTo(
            ".work-3-summary-button",
            { opacity: 0, y: 100 },
            { opacity: 1, y: 0, duration: 1, delay: 1, ease: "power2" }
          );
        },
      },
    }
  );

  gsap.fromTo(
    ".work-section-3",
    { opacity: 0 },
    {
      opacity: 1,
      duration: 1,
      ease: "power2",
      scrollTrigger: {
        trigger: ".work-section-3",
        start: "top 50%",
        once: true,
        onEnter: () => {
          gsap.fromTo(
            ".work-4-img",
            { opacity: 0, y: 200 },
            { opacity: 1, y: 0, duration: 1, delay: 1.5, ease: "power2" }
          );
          gsap.fromTo(
            ".work-4-img-container",
            { opacity: 0, scale: 0, transformOrigin: "100% 100%" },
            { opacity: 1, scale: 1, duration: 1, ease: "power2" }
          );
          gsap.fromTo(
            ".work-4-summary",
            { opacity: 0, scale: 0, transformOrigin: "100% 0%" },
            { opacity: 1, scale: 1, duration: 1, ease: "power2" }
          );
          gsap.fromTo(
            ".work-4-summary-text",
            { opacity: 0 },
            { opacity: 1, duration: 1, delay: 1, ease: "power2" }
          );
          gsap.fromTo(
            ".work-4-summary-button",
            { opacity: 0, y: 100 },
            { opacity: 1, y: 0, duration: 1, delay: 1, ease: "power2" }
          );

          gsap.fromTo(
            ".work-5-img",
            { opacity: 0, y: 200 },
            { opacity: 1, y: 0, duration: 1, delay: 1.5, ease: "power2" }
          );
          gsap.fromTo(
            ".work-5-img-container",
            { opacity: 0, scale: 0, transformOrigin: "0% 100%" },
            { opacity: 1, scale: 1, duration: 1, ease: "power2" }
          );
          gsap.fromTo(
            ".work-5-summary",
            { opacity: 0, scale: 0, transformOrigin: "0% 0%" },
            { opacity: 1, scale: 1, duration: 1, ease: "power2" }
          );
          gsap.fromTo(
            ".work-5-summary-text",
            { opacity: 0 },
            { opacity: 1, duration: 1, delay: 1, ease: "power2" }
          );
          gsap.fromTo(
            ".work-5-summary-button",
            { opacity: 0, y: 100 },
            { opacity: 1, y: 0, duration: 1, delay: 1, ease: "power2" }
          );
        },
      },
    }
  );

  // Contact Section Animation
  gsap.fromTo(
    ".contact-section",
    { opacity: 0 },
    {
      opacity: 1,
      duration: 1,
      ease: "power2",
      scrollTrigger: {
        trigger: ".contact-section",
        start: "top 99%",
        once: true,
        onEnter: () => {
          gsap.fromTo(
            ".contact-container",
            { opacity: 0, scale: 0, transformOrigin: "0% 0%" },
            { opacity: 1, scale: 1, duration: 1, ease: "power2" }
          );
          gsap.fromTo(
            ".contact-button-icon",
            { right: 30 },
            {
              right: 75,
              duration: 0.5,
              delay: 1,
              ease: "power2",
            }
          );
          gsap.fromTo(
            ".contact-button-background",
            { opacity: 0, width: 0, transformOrigin: "center" },
            {
              opacity: 1,
              width: 274,
              delay: 1,
              duration: 0.5,
              ease: "power2",
            }
          );
          gsap.fromTo(
            ".contact-button-text",
            { opacity: 0, y: 100 },
            { opacity: 1, y: 0, delay: 2.5, duration: 1, ease: "power2" }
          );
        },
      },
    }
  );
};
