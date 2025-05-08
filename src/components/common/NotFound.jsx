"use client";
import React, { useEffect, useRef } from "react";
import Heading from "./ui/Heading";
import Cta from "./components/Cta";
import gsap from "gsap";
import Text from "./ui/Text";

const NotFound = () => {
  const gradientRef = useRef(null);

  useEffect(() => {
    // Animate background position to fake moving gradient
    gsap.to(gradientRef.current, {
      backgroundPosition: "200% center",
      duration: 10,
      ease: "linear",
      repeat: -1,
    });
  }, []);

  return (
    <div className="relative h-[calc(100vh-76px)] w-full overflow-hidden">
      {/* Colorful Animated Gradient BG */}
      <div
        ref={gradientRef}
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "linear-gradient(120deg, #ff6ec4, #7873f5, #4ADEDE, #ff9a8b)",
          backgroundSize: "400% 400%",
          backgroundPosition: "0% center",
          transition: "background-position 1s ease-in-out",
        }}></div>

      {/* Blur + Content Layer */}
      <div className="absolute inset-0 z-10 bg-black/30 backdrop-blur-md flex items-center justify-center">
        <div className="absolute h-full w-fit top-0 left-0 backdrop-blur-3xl"></div>
        <div className="text-center text-white p-6 rounded-lg ">
          <Heading>
            This Page May Not <span className="simple-code">Exist</span> or{" "}
            <span className="simple-code">Available</span>
          </Heading>
          <Cta as="a" href="/" className="mt-4">
            Back to Home
          </Cta>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
