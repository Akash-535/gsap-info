"use client";
import Heading from "../../common/ui/Heading";
import React, { useEffect, useState } from "react";
import gsap from "gsap";
import Cta from "../../common/components/Cta";

const Task4 = () => {
  const [reload, SetReload] = useState(0);

  useEffect(() => {
    // Initial position for the elements
    gsap.set(".timeline-anim-2", {
      x: -200,
      opacity: 0,
    });
    gsap.set([".timeline-anim-1", ".timeline-anim-3"], {
      x: 200,
      opacity: 0,
    });

    // Timeline animation with stagger
    const tl = gsap.timeline();

    tl.to(".timeline-anim-1", {
      x: 0,
      opacity: 1,
      duration: 1,
      stagger: 0.1,
      ease: "power2.out",
    })
      .to(
        ".timeline-anim-2",
        {
          x: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.1,
          ease: "power2.out",
        },
        "-=0.5"
      )
      .to(
        ".timeline-anim-3",
        {
          x: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.1,
          ease: "power2.out",
        },
        "-=0.5"
      );
    // Start 2nd anim slightly before 1st ends for smoother feel
  }, [reload]);

  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center px-5 py-10">
      <Heading as="h2" variant="secondary">
        Task 4 Timeline <span className="simple-code">Example</span>
      </Heading>
      <div className="animation-area relative">
        <Cta
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
                className="timeline-anim-1 size-20 border rounded-full border-white border-solid bg-custom-grdnt"></div>
            ))}
        </div>
        <div className="flex gap-4 mt-5">
          {Array(5)
            .fill()
            .map((_, index) => (
              <div
                key={index}
                className="timeline-anim-2 size-20 border rounded-full border-white border-solid bg-custom-grdnt"></div>
            ))}
        </div>
        <div className="flex gap-4 mt-5">
          {Array(5)
            .fill()
            .map((_, index) => (
              <div
                key={index}
                className="timeline-anim-3 size-20 border rounded-full border-white border-solid bg-custom-grdnt"></div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Task4;
