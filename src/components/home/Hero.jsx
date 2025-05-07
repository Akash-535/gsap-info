"use client";
import React, { useEffect, useRef } from "react";
import Heading from "../common/ui/Heading";
import Text from "../common/ui/Text";
import Cta from "../common/components/Cta";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    gsap.to(section, {
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "+=200%",
        pin: true,
        pinSpacing: false,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
  return (
    <div
      ref={sectionRef}
      className="text-center container h-screen  mx-auto flex flex-col justify-center items-center">
      <div className="space-y-5">
        <Heading variant="primary" as="h1">
          Bring Your Web to Life with GSAP
        </Heading>
        <Text>
          The JavaScript animation engine for ultra-smooth, high-performance
          animations
        </Text>
        <div className="space-x-3">
          <Cta>Learn Basics</Cta>
          <Cta>View Examples</Cta>
        </div>
      </div>
    </div>
  );
};

export default Hero;
