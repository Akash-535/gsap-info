"use client";
import Heading from "../../common/ui/Heading";
import React, { useEffect } from "react";
import gsap from "gsap";

const Task2 = () => {
  useEffect(() => {
    // Opacity fade-in with stagger
    gsap.fromTo(
      ".fade-box",
      { opacity: 0, scale: 0 },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out",
        delay: 0.5,
      }
    );
  }, []);

  return (
    <div className="h-screen w-full flex flex-col justify-center items-center px-5 py-10">
      <Heading as="h2" variant="secondary">
        Task 2 Animate <span className="simple-code">Fade/Opacity</span>
      </Heading>
      <div className="animation-area relative">
        <div className="flex gap-4">
          {Array(5)
            .fill()
            .map((_, index) => (
              <div
                key={index}
                className="fade-box size-20 border rounded-full border-white border-solid bg-custom-grdnt"></div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Task2;
