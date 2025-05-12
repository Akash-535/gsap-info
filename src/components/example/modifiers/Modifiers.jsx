import React, { useEffect, useRef } from "react";
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
        x: (x) => `${parseFloat(x) % 500}px`, // loop back after hitting 500
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
