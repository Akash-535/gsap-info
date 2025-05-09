"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
const TimeLineDefaultsE = () => {
  const containerRef = useRef(null);
  useEffect(() => {
    // Defaults
    const tl = gsap.timeline({ defaults: { opacity: 0, duration: 1 } });

    tl.from(".box-timeline", {
      scale: 0.5,
      stagger: 0.5,
    });
  }, []);
  return (
    <div
      ref={containerRef}
      className="py-24 flex flex-col items-center justify-center text-white gap-10">
      <div className=" flex gap-4">
        <div className="box-timeline w-40 h-40 bg-gradient-to-br from-cyan-500 to-blue-700 rounded-xl shadow-xl"></div>
        <div className="box-timeline w-40 h-40 bg-gradient-to-br from-cyan-500 to-blue-700 rounded-xl shadow-xl"></div>
        <div className="box-timeline w-40 h-40 bg-gradient-to-br from-cyan-500 to-blue-700 rounded-xl shadow-xl"></div>
      </div>
    </div>
  );
};

export default TimeLineDefaultsE;
