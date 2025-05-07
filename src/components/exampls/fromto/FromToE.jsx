"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const FromToE = () => {
  const headingRef = useRef(null);
  const cardsRef = useRef([]);
  const buttonRef = useRef(null);

  useEffect(() => {
    // Heading fromTo
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );

    // Cards fromTo with stagger
    gsap.fromTo(
      cardsRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 1,
        ease: "power2.out",
      }
    );

    // Button fromTo
    gsap.fromTo(
      buttonRef.current,
      { opacity: 0, scale: 0.6 },
      {
        opacity: 1,
        scale: 1,
        delay: 1,
        duration: 0.6,
        ease: "back.out(1.7)",
      }
    );
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-8 text-white p-8">
      <h1 ref={headingRef} className="text-4xl font-bold">
        GSAP <span className="simple-code">.fromTo()</span> Power 💥
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-4xl">
        {["Alpha", "Beta", "Gamma"].map((label, i) => (
          <div
            key={i}
            ref={(el) => (cardsRef.current[i] = el)}
            className="bg-purple-800 rounded-xl p-6 shadow-lg text-center">
            <h2 className="text-xl font-semibold">{label}</h2>
            <p className="text-sm text-purple-300 mt-2">
              Clean `fromTo` animation. Precision flex 💯
            </p>
          </div>
        ))}
      </div>

      <button
        ref={buttonRef}
        className="mt-6 px-6 py-3 bg-pink-400 text-black rounded-full font-semibold hover:bg-pink-300">
        Animate Me
      </button>
    </div>
  );
};

export default FromToE;
