"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const Timeline = () => {
  const containerRef = useRef(null); // attach context to this

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.from("h2", {
        y: -20,
        opacity: 0,
        duration: 1,
        delay: 0.5,
      }).from("h4", {
        y: -20,
        opacity: 0,
        duration: 1.5,
        delay: 0.5,
        stagger: 0.2,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="px-16 flex items-center justify-between py-20 text-white">
      <h2>Palvi Tiwari</h2>
      <div className="flex gap-4">
        <h4>About</h4>
        <h4>Work</h4>
        <h4>Portfolios</h4>
        <h4>Contact</h4>
      </div>
    </div>
  );
};

export default Timeline;
