import React, { useEffect, useRef } from "react";
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
    <div className="py-14">
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
