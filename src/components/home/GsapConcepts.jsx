"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Heading from "../common/ui/Heading";
import { gsapConcepts } from "../../utils/defaults";
import Text from "../common/ui/Text";
import Link from "next/link";
import { titleFormatter } from "../../utils/functions";
import Cta from "../common/components/Cta";

gsap.registerPlugin(ScrollTrigger);

const GsapConcepts = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const cards = cardsRef.current;
    const totalCards = cards.children.length;
    const cardWidth = cards.children[0].offsetWidth;
    const totalScroll = cardWidth * totalCards;
    // const reduseWidth = window.innerWidth / 1.2;
    gsap.to(cards, {
      x: () => `-${totalScroll}px`,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: () => `+=${totalScroll}`,
        scrub: true,
        pin: true,
        anticipatePin: 1,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen overflow-hidden bg-gray-900">
      <div className="h-full w-full flex flex-col justify-center">
        <Heading variant="secondary" className="text-center">
          GSAP Concepts
        </Heading>
        <div ref={cardsRef} className="mt-10 flex space-x-4 w-max px-10">
          {gsapConcepts.map((obj, index) => (
            <Link
              href={`/example/${titleFormatter(obj.title)}`}
              key={index}
              className="w-[300px]">
              <div className="border border-white rounded-2xl p-4 h-full hover:bg-white/10 transition-all duration-300 cursor-pointer text-center inline-flex flex-col justify-baseline">
                <Heading
                  as="h3"
                  variant="code"
                  className="text-center inline-block">
                  {obj.title}
                </Heading>
                <div className="flex grow flex-col justify-end">
                  <Text className="mt-3 text-center px-1">
                    {obj.description}
                  </Text>
                  <Cta className=" !px-2 !py-1 !text-sm mt-3">
                    Check Example
                  </Cta>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GsapConcepts;
