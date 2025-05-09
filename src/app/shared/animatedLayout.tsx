"use client";
import { useState, useEffect } from "react";
import { gsap } from "gsap";
import NavigationBar from "../components/navigationBar/navigationBar";
import { AnimationProvider, useAnimation } from "./animationContext";
import { usePathname } from "next/navigation";

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
      .to(".blank-screen", { opacity: 1, duration: 0.3 })
      .to(".intro-text1", { opacity: 1, display: "block", duration: 0.7 })
      .to(".intro-text1", { opacity: 0, display: "none", duration: 0.3 })
      .to(".intro-text2", { opacity: 1, display: "block", duration: 0.7 })
      .to(".intro-text2", { opacity: 0, display: "none", duration: 0.7 })
      .to(".nav-text", {
        opacity: 1,
        duration: 1,
        onComplete: () => {
          setIsLoading(false);
          toggleAnimation(); // Sets shouldShowAnimation to false after the first run
        },
      });

    return () => {
      timeline.kill();
    }; // Cleanup
  }, [shouldShowAnimation, toggleAnimation]);
  const pathname = usePathname();

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
      {pathname === "/home" && (
        <div className={"navigation-bar"}>
          <NavigationBar />
        </div>
      )}
      <div className="nav-children">{!isLoading && children}</div>
      <div className="footer flex flex-row justify-between p-[25px] md:p-10 bg-[#0D0D0D] mt-5 rounded-[40px]">
        <div className="hidden md:block">Hrishi Murali K</div>
        <div className="text-[#C7C7BB]">Hrishimuraliwork321@gmail.com</div>
      </div>
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
