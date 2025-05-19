"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function Timeline02() {
  const timelineRef = useRef(null);

  useEffect(() => {
    // Register GSAP plugins
    gsap.registerPlugin(ScrollTrigger);

    // Set properties of common elements
    gsap.set(".svg-circle", {
      opacity: 0,
      scale: 0.25,
      transformOrigin: "50% 50%",
    });
    gsap.set(".from-right", { opacity: 0, x: 150 });
    gsap.set(".overlay", { opacity: 0 });

    const hscroll2 = timelineRef.current;

    const tl = gsap
      .timeline({
        scrollTrigger: {
          trigger: "#timeline-02",
          start: "top top",
          end: () => "+=3500",
          scrub: true,
          pin: true,
          invalidateOnRefresh: true,
        },
      })
      .to({}, { duration: 1 });

    tl.add(() => {
      // Handle direction changes
      if (tl.scrollTrigger.direction === -1) {
        gsap.to("#timeline-02 .svg-circle", {
          duration: 0.75,
          scale: 0,
          autoAlpha: 0,
        });
      } else {
        gsap.to("#timeline-02 .svg-circle", {
          duration: 0.75,
          scale: 1,
          autoAlpha: 1,
        });
      }
    })
      .to("#timeline-02 .text-1", { duration: 0.5, opacity: 0, x: 150 })
      .fromTo(
        "#timeline-02 .text-2",
        { opacity: 0, x: 800 },
        { duration: 1, opacity: 1, x: 350 }
      )
      .to({}, { duration: 1 })
      .to(hscroll2, {
        x: () =>
          -(hscroll2.scrollWidth - document.documentElement.clientWidth) + "px",
        ease: "none",
      });

    // Cleanup function
    return () => {
      if (tl.scrollTrigger) {
        tl.scrollTrigger.kill();
      }
      tl.kill();
    };
  }, []);

  return (
    <section
      id="timeline-02"
      ref={timelineRef}
      className="flex flex-wrap flex-col relative h-screen min-h-[800px] overflow bg-black">
      <div className="relative flex items-center w-full h-full">
        <div
          id="timeline-02-inner"
          className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="max-w-[1040px] px-5 mx-auto w-full flex items-center relative min-h-screen">
            <svg
              className="circle-bg absolute top-[-10%] right-[-48%] max-w-[1285px] h-auto"
              xmlns="http://www.w3.org/2000/svg"
              width="1320"
              height="1250"
              viewBox="0 0 1265 1250">
              <circle
                className="svg-circle fill-[rgba(13,118,165,0.75)]"
                cx="625"
                cy="625"
                r="625"
              />
            </svg>

            <div className="scroll-indicator text-[#0d76a5] text-2xl font-bold absolute top-0 left-0 w-full text-center p-4">
              Scroll down &darr;
            </div>

            <div className="block from-right textbox text-1 max-w-[500px] py-5 ml-auto z-5">
              <h2 className="text-2xl leading-10 m-0 mb-5 text-white">
                <span>This is a lead-in heading &hellip;</span>
              </h2>
            </div>

            <div className="block from-right textbox text-2 max-w-[500px] py-5 ml-auto">
              <p className="text-xl leading-[1.625] text-white">
                First block of text - Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
              <p className="continue font-bold text-white mt-4">
                Scroll to continue...
              </p>
            </div>

            <div className="block from-right textbox text-3 max-w-[500px] py-5 ml-auto">
              <p className="text-xl leading-[1.625] text-white">
                Second block of text - Placerat vestibulum lectus mauris
                ultrices eros in. Elit at imperdiet dui accumsan. Porta nibh
                venenatis cras sed felis. Molestie at elementum eu facilisis sed
                odio morbi quis. Sit amet consectetur adipiscing elit. Diam
                sollicitudin tempor id eu nisl nunc mi. Porttitor eget dolor
                morbi non. Purus sit amet volutpat consequat mauris nunc congue
                nisi.
              </p>
            </div>
          </div>
        </div>

        <div className="overlay absolute top-0 right-0 bottom-0 left-0 bg-black bg-opacity-50 z-[-1]"></div>
      </div>

      <div className="flex items-center h-full p-[5%] w-[30%]">
        <figure className="quote max-w-[425px]">
          <blockquote>
            <p className="text-[#0d76a5] text-xl leading-[1.875]">
              This is a blockquote! Faucibus in ornare quam viverra. At
              imperdiet dui accumsan sit amet.
            </p>
          </blockquote>
        </figure>
      </div>
    </section>
  );
}
