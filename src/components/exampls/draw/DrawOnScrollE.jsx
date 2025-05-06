"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const DrawOnScrollE = () => {
  const roofRef = useRef(null);
  const bodyRef = useRef(null);
  const doorRef = useRef(null);

  useEffect(() => {
    const animatePathWithScroll = (ref, triggerEl) => {
      const path = ref.current;
      const length = path.getTotalLength();

      gsap.set(path, {
        strokeDasharray: length,
        strokeDashoffset: length,
      });

      gsap.to(path, {
        strokeDashoffset: 0,
        ease: "none", // no easing for smooth scrub control
        scrollTrigger: {
          trigger: triggerEl,
          start: "top center",
          end: "bottom bottom",
          scrub: 2, // key part — ties animation to scroll
        },
      });
    };

    animatePathWithScroll(roofRef, ".hut-wrapper");
    animatePathWithScroll(bodyRef, ".hut-wrapper");
    animatePathWithScroll(doorRef, ".hut-wrapper");
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-10">
      <h1 className="text-4xl font-bold mb-20 text-center">
        Scroll to Draw the Hut ✏️
      </h1>

      <div className="hut-wrapper flex justify-center items-center min-h-screen">
        <svg
          viewBox="0 0 200 200"
          className="w-64 h-64"
          fill="none"
          stroke="#00ffa6"
          strokeWidth="4">
          {/* Roof */}
          <path ref={roofRef} d="M50 100 L100 50 L150 100 Z" />

          {/* Body */}
          <path ref={bodyRef} d="M60 100 L60 160 L140 160 L140 100 Z" />

          {/* Door */}
          <path ref={doorRef} d="M90 160 L90 120 L110 120 L110 160 Z" />
        </svg>
      </div>
    </div>
  );
};

export default DrawOnScrollE;
