"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const ToE = () => {
  const headingRef = useRef(null);
  const cardsRef = useRef([]);
  const buttonRef = useRef(null);

  useEffect(() => {
    // Set initial styles before animating "to" them
    gsap.set(headingRef.current, { opacity: 0, y: -40 });
    gsap.set(cardsRef.current, { opacity: 0, y: 30 });
    gsap.set(buttonRef.current, { opacity: 0, scale: 0.8 });

    // Animate heading to visible
    gsap.to(headingRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out",
    });

    // Animate cards in with stagger
    gsap.to(cardsRef.current, {
      opacity: 1,
      y: 0,
      stagger: 0.2,
      duration: 1,
      ease: "power2.out",
    });

    // Animate button
    gsap.to(buttonRef.current, {
      opacity: 1,
      scale: 1,
      duration: 2,
      ease: "back.out(1.7)",
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-8 bg-blue-950 text-white p-8">
      <h1 ref={headingRef} className="text-4xl font-bold">
        GSAP .to() Animation Magic ✨
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-4xl">
        {["Box A", "Box B", "Box C"].map((label, i) => (
          <div
            key={i}
            ref={(el) => (cardsRef.current[i] = el)}
            className="bg-blue-800 rounded-xl p-6 shadow-md text-center">
            <h2 className="text-xl font-semibold">{label}</h2>
            <p className="text-sm text-blue-200 mt-2">
              This animates *to* its final state.
            </p>
          </div>
        ))}
      </div>
      <div ref={buttonRef}>
        <button className="mt-6 px-6 py-3 bg-yellow-400 text-black rounded-full font-semibold hover:bg-yellow-300 transition-all duration-300 ease-linear">
          Let’s Go
        </button>
      </div>
    </div>
  );
};

export default ToE;
