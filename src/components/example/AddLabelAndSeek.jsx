import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const AddLabelAndSeek = () => {
  const boxRef = useRef(null);
  const timelineRef = useRef(null); // so we can access it later

  useEffect(() => {
    const tl = gsap.timeline({ paused: true }); // pause by default
    timelineRef.current = tl;

    tl.to(boxRef.current, { x: 100, duration: 1 })
      .addLabel("halfway")
      .to(boxRef.current, { y: 100, duration: 1 })
      .addLabel("end")
      .to(boxRef.current, { x: 0, y: 0, duration: 1 });

    tl.play(); // start playing from beginning

    // After 2s: jump to "halfway" and play from there
    setTimeout(() => {
      console.log("⏩ Playing from halfway...");
      tl.pause();
      tl.play("halfway");
    }, 2000);

    // After 4s: jump to "end" and play from there
    setTimeout(() => {
      console.log("⏩ Playing from end...");
      tl.pause();
      tl.play("end");
    }, 4000);
  }, []);

  return (
    <div className="py-12">
      <div
        ref={boxRef}
        style={{
          width: 60,
          height: 60,
          backgroundColor: "limegreen",
        }}
      />
    </div>
  );
};

export default AddLabelAndSeek;
