"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Heading from "../../common/ui/Heading";
import Cta from "../../common/components/Cta";

gsap.registerPlugin(ScrollTrigger);

const Task5 = () => {
  const roofRef = useRef(null);
  const bodyRef = useRef(null);
  const doorRef = useRef(null);
  const [reload, SetReload] = useState(0);

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
  }, [reload]);

  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center px-5 py-10">
      <Heading as="h2" variant="secondary">
        Task 5 Draw on Scroll <span className="simple-code">Example</span>
      </Heading>
      <div className="animation-area relative">
        <Cta
          disabled
          onClick={() => SetReload(reload + 1)}
          className="absolute right-3 top-3">
          Re-Load
        </Cta>
        <div className="hut-wrapper flex justify-center items-center">
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
    </div>
  );
};

export default Task5;
