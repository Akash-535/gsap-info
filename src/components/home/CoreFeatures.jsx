"use client";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Heading from "../common/ui/Heading";
import OrderedList from "../common/ui/OrderedList";
import Text from "../common/ui/Text";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const CoreFeatures = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    gsap.to(section, {
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "+=200%",
        pin: true,
        pinSpacing: false,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const coreFeatures = [
    {
      title: "Smooth Animations (No Jank)",
      detail:
        "GSAP delivers pixel-perfect, buttery smooth transitions without frame drops — even when things get wild. This means fewer performance issues and a top-tier user experience.",
    },
    {
      title: "Cross-Browser Support",
      detail:
        "Works like a charm on all major browsers (even those tricky edge cases). No need for polyfills or second-guessing if your animation will break somewhere.",
    },
    {
      title: "Timeline-Based Animations",
      detail:
        "Think of it like a movie director’s timeline. You can orchestrate complex animations in a structured, synchronized way — total control, baby.",
    },
    {
      title: "Easy-to-Chain Tweens",
      detail:
        "You can sequence animations like building with LEGO. .to(), .from(), .set() — all can be chained cleanly so your code stays elegant and readable.",
    },
    {
      title: "Works with Everything (SVG, DOM, Canvas)",
      detail:
        "Animate DOM elements, SVG paths, or Canvas objects — GSAP plays nice with all of them. It’s your one-stop shop for motion, no matter the medium.",
    },
  ];

  return (
    <div
      ref={sectionRef}
      className="text-center w-full  h-screen mx-auto flex flex-col justify-center items-center bg-gray-800">
      <div className="space-y-5 ">
        <Heading variant="primary" as="h1">
          The most powerful features of GSAP
        </Heading>
        <Text>
          This section is all about flexing GSAP's main powers — the stuff that
          makes it the GOAT for animating on the web.
        </Text>
        <div className="text-start max-w-[700px]">
          <OrderedList list={coreFeatures} />
        </div>
      </div>
    </div>
  );
};

export default CoreFeatures;
