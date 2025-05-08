"use client";
import Heading from "../../common/ui/Heading";
import React, { useEffect, useState } from "react";
import gsap from "gsap";
import Cta from "../../common/components/Cta";

const Task3 = () => {
  const [reload, SetReload] = useState(0);

  useEffect(() => {
    // Opacity fade-in with stagger

    gsap.set(
      ".to-chain",

      {
        x: -200,
      }
    );
    gsap.to(
      ".to-chain",

      {
        x: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out",
        delay: 0.5,
      }
    );
  }, [reload]);

  return (
    <div className="h-screen w-full flex flex-col justify-center items-center px-5 py-10">
      <Heading as="h2" variant="secondary">
        Task 3 Animate <span className="simple-code">To() chain</span>
      </Heading>
      <div className="animation-area relative">
        <Cta
          onClick={() => SetReload(reload + 1)}
          className="absolute right-3 top-3">
          Re-Load
        </Cta>
        <div className="flex flex-col gap-4">
          {Array(5)
            .fill()
            .map((_, index) => (
              <div
                key={index}
                className="to-chain size-20 border rounded-full border-white border-solid bg-custom-grdnt"></div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Task3;
