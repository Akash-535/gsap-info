"use client";
import Heading from "../../common/ui/Heading";
import React, { useEffect } from "react";
import gsap from "gsap";

const Task1 = () => {
  useEffect(() => {
    // Animate the circle with infinite yoyo effect
    gsap.fromTo(
      ".circle",
      { left: 0, rotate: 0 },
      {
        left: "100%",
        rotate: 360, // Only 360 so it rotates one way and reverses clean
        xPercent: -100,
        duration: 2, // Slower movement
        ease: "sine.inOut", // Smooth like space drift
        repeat: -1,
        yoyo: true,
      }
    );
  }, []);

  return (
    <div className="h-screen w-full flex flex-col justify-center items-center px-5 py-10">
      <Heading as="h2" variant="secondary">
        Task 1 Animate <span className="simple-code">Box/Circle</span>
      </Heading>
      <div className="animation-area relative">
        <div className="circle absolute top-1/2 left-0 -translate-y-1/2 size-20 border rounded-full border-white border-solid bg-custom-grdnt"></div>
      </div>
    </div>
  );
};

export default Task1;
