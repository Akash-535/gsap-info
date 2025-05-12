"use client";
import Heading from "../../common/ui/Heading";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Cta from "../../common/components/Cta";
import { SplitText } from "gsap/SplitText";
gsap.registerPlugin(SplitText);

const Task2 = ({ title }) => {
  const [reload, SetReload] = useState(0);
  const refBox = useRef();

  useEffect(() => {
    gsap.set(refBox.current, { opacity: 1 });
    let text = SplitText.create(refBox.current, { type: "chars" });
    //now animate each character into place from 20px below, fading in:
    gsap.from(text.chars, {
      y: 30,
      autoAlpha: 0,
      stagger: 0.05,
      duration: 3,
      ease: "elastic.out(1,0.3)",
    });
  }, [reload]);

  return (
    <div className="h-screen w-full flex flex-col justify-center items-center px-5 py-10 bg-slate-950">
      <Heading as="h2" variant="secondary">
        Reusable Animation Content
      </Heading>
      <div className="animation-area relative flex justify-center items-center">
        <Cta
          onClick={() => SetReload(reload + 1)}
          className="absolute right-3 top-3">
          Re-Load
        </Cta>
        <Heading
          ref={refBox}
          as="h2"
          variant="primary"
          className="bg-white/10 rounded-md px-6 pb-4 py-2">
          {title}
        </Heading>
      </div>
    </div>
  );
};

export default Task2;
