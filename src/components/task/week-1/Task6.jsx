"use client";
import Heading from "../../common/ui/Heading";
import React, { useEffect, useState } from "react";
import gsap from "gsap";
import Cta from "../../common/components/Cta";

const Task6 = () => {
  const [reload, SetReload] = useState(0);

  useEffect(() => {
    const tl = gsap.timeline({});
    tl.set(".text-anima", {
      scaleX: 0.3,
      scaleY: 0,
    });
    tl.to(".text-anima", {
      scaleX: 0.5,
      scaleY: 0.5,
    });
    tl.to(".text-anima", {
      scaleX: 1.2,
      scaleY: 1.2,
    });

    // Start 2nd anim slightly before 1st ends for smoother feel
  }, [reload]);

  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center px-5 py-10">
      <Heading as="h2" variant="secondary">
        Task 6 Text <span className="simple-code">Animation</span>
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
          className="bg-white/10 rounded-md px-6 pb-4 py-2 text-anima">
          Lorem ipsum dolor sit amet consectetur.
        </Heading>
      </div>
    </div>
  );
};

export default Task6;
