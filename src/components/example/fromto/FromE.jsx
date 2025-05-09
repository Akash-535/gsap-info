"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const FromE = () => {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);
  const buttonRef = useRef(null);

  useEffect(() => {
    // Animate heading
    gsap.from(".heading", {
      opacity: 0,
      y: -50,
      duration: 1,
      ease: "power3.out",
    });

    // Animate cards staggered
    gsap.from(cardsRef.current, {
      opacity: 0,
      y: 30,
      stagger: 0.2,
      duration: 1,
      ease: "power2.out",
    });

    // Animate button
    gsap.from(buttonRef.current, {
      opacity: 0,
      scale: 0.8,
      delay: 1,
      duration: 0.5,
    });
  }, []);

  return (
    <div
      ref={containerRef}
      className="min-h-screen flex flex-col items-center justify-center gap-8 bg-gray-900 text-white p-8">
      <h1 className="heading text-4xl font-bold">
        GSAP <span className="simple-code">.from()</span> Animation Magic 🚀
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-4xl">
        {["Card One", "Card Two", "Card Three"].map((title, i) => (
          <div
            key={i}
            ref={(el) => (cardsRef.current[i] = el)}
            className="bg-gray-800 rounded-xl p-6 shadow-lg text-center">
            <h2 className="text-xl font-semibold">{title}</h2>
            <p className="text-sm text-gray-400 mt-2">
              This card slides in using GSAP animations.
            </p>
          </div>
        ))}
      </div>

      <button
        ref={buttonRef}
        className="mt-6 px-6 py-3 bg-green-500 rounded-full  opacity-100font-semibold hover:bg-green-400 ">
        Click Me
      </button>
    </div>
  );
};

export default FromE;
