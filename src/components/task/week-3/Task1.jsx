"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const Page1 = () => {
  const boxRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add(
        {
          isMobile: "(max-width: 767px)",
          isDesktop: "(min-width: 768px)",
        },
        (context) => {
          const { isMobile, isDesktop } = context.conditions;

          if (isMobile) {
            boxRef.current.innerHTML = "Mobile View!";
            gsap.to(boxRef.current, {
              x: 50,
              y: -30,
              rotation: 360,
              scale: 0.8,
              duration: 1.5,
              ease: "elastic.out(1, 0.3)",
              backgroundColor: "#FF6B6B",
              boxShadow: "0 10px 20px rgba(0,0,0,0.3)",
              yoyo: true,
              repeat: -1,
              onStart: () => {
                boxRef.current.innerHTML = "Mobile View!";
              },
            });
          }

          if (isDesktop) {
            boxRef.current.innerHTML = "Desktop View!";
            gsap.to(boxRef.current, {
              x: 200,
              y: 50,
              scale: 1.2,
              rotation: -360,
              duration: 2,
              ease: "bounce.out",
              backgroundColor: "#4ECB71",
              boxShadow: "0 20px 30px rgba(0,0,0,0.4)",
              yoyo: true,
              repeat: -1,
              onStart: () => {
                boxRef.current.innerHTML = "Desktop View!";
              },
            });
          }
        }
      );

      return () => ctx.revert();
    }, boxRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-zinc-900 text-white">
      <div
        ref={boxRef}
        className="w-32 h-32 bg-green-500 rounded-lg shadow-lg flex items-center justify-center text-center">
        Animate Me
      </div>
    </div>
  );
};

export default Page1;
