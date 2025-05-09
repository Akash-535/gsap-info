"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const ContextE = () => {
  const containerRef = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".box-context", {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out",
      });
    }, containerRef);

    return () => ctx.revert(); // clean up on unmount
  }, []);

  return (
    <div ref={containerRef} className="p-10 flex gap-4 py-24 justify-center">
      <div className="box-context w-20 h-20 bg-red-500 rounded-lg" />
      <div className="box-context w-20 h-20 bg-blue-500 rounded-lg" />
      <div className="box-context w-20 h-20 bg-green-500 rounded-lg" />
    </div>
  );
};

export default ContextE;
