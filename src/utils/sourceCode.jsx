export const SOURCE_CODE = {
  to: `"use client";
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
  context: `"use client";

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
    <div ref={containerRef} className="p-10 flex gap-4">
      <div className="box-context w-20 h-20 bg-red-500 rounded-lg" />
      <div className="box-context w-20 h-20 bg-blue-500 rounded-lg" />
      <div className="box-context w-20 h-20 bg-green-500 rounded-lg" />
    </div>
  );
};

export default ContextE;
`,
  scrollPin: `import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollTriggerE() {
  const container = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { duration: 1, ease: "power2.out" },
        scrollTrigger: {
          trigger: container.current,
          start: "top top",
          end: "+=300%",
          toggleActions: "play none none reverse",
          pin: true,
          scrub: true,
          markers: true,
        },
      });
      tl.from(".fade-up", {
        y: 100,
        opacity: 0,
        duration: 1,
        scaleX: 1,
        rotate: 0,
      })
        .to(".fade-up", {
          scaleX: 0.8,
          rotate: 0,
          borderRadius: "100%",
        })
        .to(".fade-up", {
          scaleX: 0.3,
          rotate: 120,
          borderRadius: "100%",
        })
        .to(".fade-up", {
          scaleX: 0.3,
          rotate: 180,
          borderRadius: "100%",
        })
        .to(".fade-up", {
          scaleX: 0.8,
          rotate: 360,
          borderRadius: "20px",
        });
    }, container);

    return () => ctx.revert(); // Clean up
  }, []);

  return (
    <div
      ref={container}
      className="h-screen flex flex-col bg-zinc-900 text-white px-10 py-20 space-y-40">
      <h1 className="text-4xl">Scroll For Animation 👇</h1>
      <div className="flex justify-center items-center w-full h-full">
        <div className="fade-up w-full h-60 bg-green-500 flex items-center justify-center text-2xl rounded-xl shadow-lg">
          I scroll in 🎉
        </div>
      </div>
    </div>
  );
}
`,
  scrolltrigger: `import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollTriggerE() {
  const container = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { duration: 1, ease: "power2.out" },
        scrollTrigger: {
          trigger: container.current,
          start: "top top",
          end: "bottom bottom",
          toggleActions: "play none none reverse",
        },
      });
      tl.from(".fade-up", {
        y: 100,
        opacity: 0,
        duration: 1,
        scaleX: 1,
        rotate: 0,
      })
        .to(".fade-up", {
          scaleX: 0.8,
          rotate: 0,
          borderRadius: "100%",
        })
        .to(".fade-up", {
          scaleX: 0.3,
          rotate: 120,
          borderRadius: "100%",
        })
        .to(".fade-up", {
          scaleX: 0.3,
          rotate: 180,
          borderRadius: "100%",
        })
        .to(".fade-up", {
          scaleX: 0.8,
          rotate: 360,
          borderRadius: "20px",
        });
    }, container);

    return () => ctx.revert(); // Clean up
  }, []);

  return (
    <div
      ref={container}
      className="h-screen flex flex-col text-white px-10 py-20 space-y-40">
      <h1 className="text-4xl">Scroll For Animation 👇</h1>
      <div className="flex justify-center items-center w-full h-full">
        <div className="fade-up w-full h-60 bg-green-500 flex items-center justify-center text-2xl rounded-xl shadow-lg">
          I scroll in 🎉
        </div>
      </div>
    </div>
  );
}
`,
  repeatYoyo: `import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function YoyoRepeatE() {
  const container = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".ball", {
        y: -200,
        duration: 1,
        ease: "power1.in",
        repeat: -1,
        yoyo: true,
        transformOrigin: "center",
      });

      gsap.to(".ball", {
        scaleY: 0.8,
        duration: 0.5,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={container}
      className=" pb-24 pt-[198px] flex items-end justify-center">
      <div className="ball w-16 h-16 bg-orange-400 rounded-full mb-10 shadow-xl"></div>
    </div>
  );
}
`,
  defaults: `"use client";
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

`,
  onCompleteStart: `import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const OnCompleteAndStart = () => {
  const boxRef = useRef(null);
  const [status, setStatus] = useState("");

  useEffect(() => {
    gsap.fromTo(
      boxRef.current,
      {
        x: -300,
        duration: 2,
      },
      {
        onStart: () => {
          setStatus("🚀 Animation Started!");
        },
        x: 300,
        duration: 2,

        onComplete: () => {
          setStatus("🎉 Animation Completed!");
        },
      }
    );
  }, []);

  return (
    <div className="flex flex-col items-center justify-center py-12 bg-gray-900 text-white gap-6">
      <div ref={boxRef} className="w-20 h-20 bg-blue-500 rounded-md"></div>
      <p className="text-xl">Status:- {status}</p>
    </div>
  );
};

export default OnCompleteAndStart;
`,
  matchmedia: `import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const MatchMedia = () => {
  const boxRef = useRef(null);

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add(
      {
        isDesktop: "(min-width: 768px)",
        isMobile: "(max-width: 767px)",
      },
      (context) => {
        const { isDesktop, isMobile } = context.conditions;

        gsap.to(boxRef.current, {
          x: isDesktop ? 300 : 0,
          y: isMobile ? 300 : 0,
          duration: 2,
          ease: "power2.out",
          onStart: () => {
            console.log("📱 Responsive Animation Started");
          },
          onComplete: () => {
            console.log("✅ Responsive Animation Completed");
          },
        });

        return () => {
          // Clean up animations when screen size changes
          gsap.killTweensOf(boxRef.current);
        };
      }
    );

    return () => mm.revert(); // kill matchMedia listeners on unmount
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-zinc-800">
      <div ref={boxRef} className="w-20 h-20 bg-pink-500 rounded-lg"></div>
    </div>
  );
};

export default MatchMedia;
`,
  motionPath: `import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Modifiers = () => {
  const boxRef = useRef(null);

  useEffect(() => {
    gsap.to(boxRef.current, {
      x: 500,
      duration: 5,
      repeat: -1,
      ease: "none",
      modifiers: {
      // replace  ' with  backtick and remove space after $
        x: (x) => '$ {parseFloat(x) % 500}px', // loop back after hitting 500
      },
    });
  }, []);

  return (
    <div className="flex items-center justify-center py-12 overflow-hidden">
      <div
        ref={boxRef}
        className="w-20 h-20 bg-yellow-400 rounded-lg text-black font-bold flex items-center justify-center">
        🚀
      </div>
    </div>
  );
};

export default Modifiers;
`,
  kill: `import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Kill = () => {
  const boxRef = useRef(null);

  useEffect(() => {
    const tween = gsap.to(boxRef.current, {
      x: 300,
      duration: 2,
      onComplete: () => {
        console.log("✅ Animation completed, now killing it");
        gsap.killTweensOf(boxRef.current);
      },
    });

    return () => {
      // Just in case user navigates away early
      tween.kill();
    };
  }, []);

  return (
    <div style={{ height: "100vh", display: "flex", alignItems: "center" }}>
      <div
        ref={boxRef}
        style={{
          width: 60,
          height: 60,
          backgroundColor: "orange",
        }}
      />
    </div>
  );
};

export default Kill;
`,
  labelSeek: `import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const AddLabelAndSeek = () => {
  const boxRef = useRef(null);
  const timelineRef = useRef(null); // so we can access it later

  useEffect(() => {
    const tl = gsap.timeline({ paused: true }); // pause by default
    timelineRef.current = tl;

    tl.to(boxRef.current, { x: 100, duration: 1 })
      .addLabel("halfway")
      .to(boxRef.current, { y: 100, duration: 1 })
      .addLabel("end")
      .to(boxRef.current, { x: 0, y: 0, duration: 1 });

    tl.play(); // start playing from beginning

    // After 2s: jump to "halfway" and play from there
    setTimeout(() => {
      console.log("⏩ Playing from halfway...");
      tl.pause();
      tl.play("halfway");
    }, 2000);

    // After 4s: jump to "end" and play from there
    setTimeout(() => {
      console.log("⏩ Playing from end...");
      tl.pause();
      tl.play("end");
    }, 4000);
  }, []);

  return (
    <div className="py-12">
      <div
        ref={boxRef}
        style={{
          width: 60,
          height: 60,
          backgroundColor: "limegreen",
        }}
      />
    </div>
  );
};

export default AddLabelAndSeek;
`,
};
