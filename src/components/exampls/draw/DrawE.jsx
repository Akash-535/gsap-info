"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const DrawE = () => {
  const roofRef = useRef(null);
  const bodyRef = useRef(null);
  const doorRef = useRef(null);

  useEffect(() => {
    const animatePath = (ref, delay = 0) => {
      const path = ref.current;
      const length = path.getTotalLength();

      gsap.set(path, {
        strokeDasharray: length,
        strokeDashoffset: length,
      });

      gsap.to(path, {
        strokeDashoffset: 0,
        duration: 1.5,
        delay,
        ease: "power2.out",
      });
    };

    animatePath(roofRef);
    animatePath(bodyRef, 0.5);
    animatePath(doorRef, 1);
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#111]">
      <svg
        viewBox="0 0 200 200"
        className="w-64 h-64"
        fill="none"
        stroke="#ffcc00"
        strokeWidth="4">
        {/* Roof - triangle */}
        <path ref={roofRef} d="M50 100 L100 50 L150 100 Z" />

        {/* House body - rectangle */}
        <path ref={bodyRef} d="M60 100 L60 160 L140 160 L140 100 Z" />

        {/* Door - smaller rectangle */}
        <path ref={doorRef} d="M90 160 L90 120 L110 120 L110 160 Z" />
      </svg>
    </div>
  );
};

export default DrawE;
