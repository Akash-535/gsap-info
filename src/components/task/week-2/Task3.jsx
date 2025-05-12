"use client";
import Heading from "../../common/ui/Heading";
import React, { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Cta from "../../common/components/Cta";

gsap.registerPlugin(ScrollTrigger);

const Task3 = () => {
  const [reload, SetReload] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".on-enter-of-box",
        { opacity: 0, scale: 0, rotate: `${360 * 20}deg` },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          stagger: 0.2,
          ease: "power2.out",
          rotate: 0,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 30", // when top of trigger hits 80% of viewport
            end: "+=300%",
            pin: true,

            toggleActions: "play none none reset", // can tweak
            scrub: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert(); // cleanup for GSAP context
  }, [reload]);

  return (
    <div
      ref={sectionRef}
      className="h-screen w-full flex flex-col justify-center items-center px-5 py-10">
      <Heading as="h2" variant="secondary">
        Task 3 Animate <span className="simple-code">On ScrollTrigger</span>
      </Heading>
      <div className="animation-area relative">
        <Cta
          disabled
          onClick={() => SetReload(reload + 1)}
          className="absolute right-3 top-3">
          Re-Load
        </Cta>
        <div className="flex gap-4">
          {Array(5)
            .fill()
            .map((_, index) => (
              <div
                key={index}
                className="on-enter-of-box size-20 border rounded-full border-white border-solid bg-custom-grdnt"></div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Task3;
