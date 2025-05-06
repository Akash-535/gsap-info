"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const AddE = () => {
  const cardRefs = useRef([]);

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { duration: 0.8, ease: "power2.out" },
    });

    // clear previous refs
    cardRefs.current.forEach((ref) => {
      gsap.set(ref, { opacity: 0, y: 50 });
    });

    // animate each card using .add()
    cardRefs.current.forEach((card, i) => {
      tl.add(
        gsap.to(card, {
          opacity: 1,
          y: 0,
        }),
        `+=${i === 0 ? 0 : 0.2}` // small delay between each add
      );
    });
  }, []);

  return (
    <div className="h-screen bg-zinc-900 text-white flex flex-col items-center justify-center p-10">
      <h1 className="text-4xl font-bold mb-10">
        Cards Animated with <code>.add()</code> 🎯
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-4xl">
        {[1, 2, 3, 4].map((num, index) => (
          <div
            key={index}
            ref={(el) => (cardRefs.current[index] = el)}
            className="bg-gradient-to-tr from-indigo-500 to-purple-600 rounded-xl p-6 shadow-lg text-center">
            <h2 className="text-xl font-semibold">Card {num}</h2>
            <p className="mt-2 text-sm text-white/80">
              This card fades in with GSAP’s timeline `.add()`
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddE;
