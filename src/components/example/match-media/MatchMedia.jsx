import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Heading from "../../common/ui/Heading";

const MatchMedia = () => {
  const boxRef = useRef(null);

  useEffect(() => {
    const mm = gsap.matchMedia();
    gsap.set(boxRef.current, { x: -500 });
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
    <div className="flex items-center flex-col justify-center py-12 text-center">
      <Heading className="mb-5">Gsap MatchMedia </Heading>
      <div ref={boxRef} className="w-20 h-20 bg-pink-500 rounded-lg"></div>
    </div>
  );
};

export default MatchMedia;
