"use client";
import Heading from "../../common/ui/Heading";
import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import Cta from "../../common/components/Cta";

gsap.registerPlugin(SplitText);
const Task7 = () => {
  const [reload, SetReload] = useState(0);

  useEffect(() => {
    gsap.set(".split-anima", { opacity: 1 });

    let text = SplitText.create(".split-anima", { type: "chars" });
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
    <div className="min-h-screen w-full flex flex-col justify-center items-center px-5 py-10">
      <Heading as="h2" variant="secondary">
        Task 7 Text Split <span className="simple-code">Animation</span>
      </Heading>
      <div className="animation-area relative flex justify-center items-center">
        <Cta
          onClick={() => SetReload(reload + 1)}
          className="absolute right-3 top-3">
          Re-Load
        </Cta>
        <Heading
          as="h2"
          variant="primary"
          className="bg-white/10 rounded-md px-6 pb-4 py-2 split-anima">
          Lorem ipsum dolor sit amet consectetur.
        </Heading>
      </div>
    </div>
  );
};

export default Task7;
