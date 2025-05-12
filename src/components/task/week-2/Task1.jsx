// import React, { useEffect } from "react";
// import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const Task1 = () => {
//   useEffect(() => {
//     // Animate and pin each section one by one
//     gsap.utils.toArray(".section").forEach((section) => {
//       gsap.to(section, {
//         scrollTrigger: {
//           trigger: section,
//           start: "top top",
//           end: "+=100%",
//           pin: true,
//           pinSpacing: false,
//         },
//       });
//     });

//     // Cleanup on unmount
//     return () => {
//       ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
//     };
//   }, []);

//   return (
//     <div className="relative z-0">
//       <div className="section bg-red-100 h-screen flex items-center justify-center text-3xl">
//         First Section
//       </div>
//       <div className="section bg-green-900 h-screen flex items-center justify-center text-3xl text-white">
//         Second Section
//       </div>
//       <div className="section bg-green-500 h-screen flex items-center justify-center text-3xl">
//         Third Section
//       </div>
//     </div>
//   );
// };

// export default Task1;

"use client";
import gsap from "gsap";
import { useEffect, useState } from "react";
import Heading from "../../common/ui/Heading";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const Task1 = () => {
  const [reload, SetReload] = useState(0);
  useEffect(() => {
    // Animate and pin each section one by one
    gsap.utils.toArray(".section").forEach((section) => {
      gsap.to(section, {
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=100%",
          pin: true,
          pinSpacing: false,
        },
      });
    });

    // Cleanup on unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [reload]);
  return (
    <div className=" w-full flex flex-col justify-center items-center px-5 py-10">
      <Heading as="h2" variant="secondary" className="mb-6">
        Gsap Pin Animation
      </Heading>

      <div className="relative z-0 w-dvw">
        <div className="section bg-red-100 h-screen flex items-center justify-center text-3xl">
          First Section
        </div>
        <div className="section bg-green-900 h-screen flex items-center justify-center text-3xl text-white">
          Second Section
        </div>
        <div className="section bg-green-500 h-screen flex items-center justify-center text-3xl">
          Third Section
        </div>
      </div>
    </div>
  );
};

export default Task1;
