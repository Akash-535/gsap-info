// // components/FadeInBox.tsx
// "use client"; // for Next.js App Router (if needed)

// import { useEffect } from "react";
// import gsap from "gsap";

// const Timeline = () => {
//   var tl = gsap.timeline();

//   useEffect(() => {
//     tl.from("h2", {
//       y: -20,
//       opacity: 0,
//       duration: 1,
//       delay: 0.5,
//     }).from("h4", {
//       y: -20,
//       opacity: 0,
//       duration: 1.5,
//       delay: 0.5,
//       stagger: 0.2,
//     });
//   }, []);

//   return (
//     <>
//       <div className="px-16 flex items-center justify-between text-white py-4 ">
//         <h2>Palvi Tiwari</h2>
//         <div className="flex gap-4">
//           <h4>About</h4>
//           <h4>Work</h4>
//           <h4>Portfolios</h4>
//           <h4>Contact</h4>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Timeline;
"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";

export default function BoxFrom() {
  const ref = useRef();

  useLayoutEffect(() => {
    // Use GSAP context to safely cleanup/restart animations
    const ctx = gsap.context(() => {
      gsap.from(ref.current, {
        x: 600,
        duration: 0.5,
        ease: "power2.inOut",
      });
    }, ref); // 👈 limit scope to this ref

    return () => ctx.revert(); // 👈 cleanup on unmount or re-run
  }, []);

  return (
    <div
      ref={ref}
      className="w-[100px] h-[100px] relative translate-x-0 bg-green-500">
      BoxFrom (.from)
    </div>
  );
}
