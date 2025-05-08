export const SOURCE_CODE = {
  to: `
"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const GsapToExample = () => {
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
    <div className=" py-20 flex flex-col items-center justify-center gap-8  text-white p-8">
      <h1 ref={headingRef} className="text-4xl font-bold">
        <code>GSAP.to()</code> Animation Magic ✨
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
export default GsapToExample;

`,
  from: `"use client";
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

`,
  fromTo: `"use client";
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
              Clean 'fromTo' animation. Precision flex 💯
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
`,
  timeline: `"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
const GsapTimeLineExample = () => {
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
        Welcome to the Timeline Magic ✨
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

export default GsapTimeLineExample;

`,
  draw: `"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const GsapDrawExample = () => {
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
        <path ref={roofRef} d="M50 100 L100 50 L150 100 Z" />
        <path ref={bodyRef} d="M60 100 L60 160 L140 160 L140 100 Z" />
        <path ref={doorRef} d="M90 160 L90 120 L110 120 L110 160 Z" />
      </svg>
    </div>
  );
};

export default GsapDrawExample;
`,
  add: `"use client";

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
        //here replace tha " with backtick and  remove space between $ & {}
        "+=$ {i === 0 ? 0 : 0.2}" // small delay between each add
      );
    });
  }, []);

  return (
    <div className="h-screen text-white flex flex-col items-center justify-center p-10">
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
              This card fades in with GSAP’s timeline '.add()'
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddE;
`,
};
