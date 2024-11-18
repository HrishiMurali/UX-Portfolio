"use client";
import { useState, useEffect } from "react";
import { gsap } from "gsap";
import NavigationBar from "../components/navigationBar/navigationBar";
import { AnimationProvider, useAnimation } from "./animationContext";

function RootContent({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  const { shouldShowAnimation, toggleAnimation } = useAnimation();

  useEffect(() => {
    if (!shouldShowAnimation) {
      setIsLoading(false);
      return;
    }

    // Initial GSAP animation setup
    const timeline = gsap.timeline({});

    // Animation sequence
    timeline
      .to(".blank-screen", { opacity: 1, duration: 0.5 })
      // .to(".intro-text1", { opacity: 1, display: "block", duration: 1 })
      // .to(".intro-text1", { opacity: 0, display: "none", duration: 0.5 })
      // .to(".intro-text2", { opacity: 1, display: "block", duration: 1 })
      // .to(".intro-text2", { opacity: 0, display: "none", duration: 1 })
      .to(".nav-text", {
        opacity: 1,
        duration: 1,
        onComplete: () => {
          setIsLoading(false);
          toggleAnimation(); // Sets shouldShowAnimation to false after the first run
        },
      });
    // .to(".nav-children", { opacity: 1, duration: 3 });

    return () => {
      timeline.kill();
    }; // Cleanup
  }, [shouldShowAnimation, toggleAnimation]);

  return (
    <>
      {isLoading && shouldShowAnimation ? (
        <div className="blank-screen fixed inset-0 bg-black flex justify-center items-center">
          <span className="intro-text1 text-white text-4xl font-bold opacity-0 hidden">
            Hello
          </span>
          <span className="intro-text2 text-white text-4xl font-bold opacity-0 hidden">
            I am
          </span>
        </div>
      ) : null}
      <div className={"navigation-bar"}>
        <NavigationBar />
      </div>
      <div className="nav-children">{!isLoading && children}</div>
    </>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AnimationProvider>
      <RootContent>{children}</RootContent>
    </AnimationProvider>
  );
}
