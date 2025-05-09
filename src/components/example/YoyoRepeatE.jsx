import { useEffect, useRef } from "react";
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
