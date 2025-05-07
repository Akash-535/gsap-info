"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
const TimeLineE = () => {
  const containerRef = useRef(null);
  const headingRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.from(headingRef.current, {
      y: -50,
      opacity: 0,
    })
      .from(".box-timeline", {
        scale: 0.5,
        opacity: 0,
        stagger: 0.5,
      })
      .from(buttonRef.current, {
        y: 20,
        opacity: 0,
      });
  }, []);

  return (
    <div
      ref={containerRef}
      className="min-h-screen py-6 flex flex-col items-center justify-center text-white gap-10">
      <h1 ref={headingRef} className="text-4xl font-bold tracking-wide">
        Welcome to the <span className="simple-code">Timeline</span> Magic ✨
      </h1>
      <div className=" flex gap-4">
        {" "}
        <div className="box-timeline w-40 h-40 bg-gradient-to-br from-cyan-500 to-blue-700 rounded-xl shadow-xl"></div>
        <div className="box-timeline w-40 h-40 bg-gradient-to-br from-cyan-500 to-blue-700 rounded-xl shadow-xl"></div>
        <div className="box-timeline w-40 h-40 bg-gradient-to-br from-cyan-500 to-blue-700 rounded-xl shadow-xl"></div>
      </div>
      <div ref={buttonRef}>
        <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg ease-linear transition-all duration-300 text-lg">
          Let's Go 🚀
        </button>
      </div>
    </div>
  );
};

export default TimeLineE;
