"use client";
import React, { useEffect, useRef } from "react";
import Heading from "../common/ui/Heading";
import Text from "../common/ui/Text";
import Cta from "../common/components/Cta";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Definition = () => {
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
      className="text-center bg-gray-800 h-screen  mx-auto flex flex-col justify-center items-center ">
      <div className="space-y-5">
        <Heading variant="secondary">Definition of GSAP</Heading>
        <Text className="max-w-[700px] mx-auto">
          GSAP (GreenSock Animation Platform) is a robust JavaScript library
          that makes it easy to create high-performance animations across
          browsers. It powers everything from UI transitions to insane banner
          ads and immersive scroll websites
        </Text>
        <Cta as="a" href="/">
          Learn More
        </Cta>
      </div>
    </div>
  );
};

export default Definition;
