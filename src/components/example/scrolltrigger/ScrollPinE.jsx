import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollPinE() {
  const container = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { duration: 1, ease: "power2.out" },
        scrollTrigger: {
          trigger: container.current,
          start: "top top",
          end: "+=300%",
          toggleActions: "play none none reverse",
          pin: true,
          scrub: true,
          markers: true,
        },
      });
      tl.from(".fade-up", {
        y: 100,
        opacity: 0,
        duration: 1,
        scaleX: 1,
        rotate: 0,
      })
        .to(".fade-up", {
          scaleX: 0.8,
          rotate: 0,
          borderRadius: "100%",
        })
        .to(".fade-up", {
          scaleX: 0.3,
          rotate: 120,
          borderRadius: "100%",
        })
        .to(".fade-up", {
          scaleX: 0.3,
          rotate: 180,
          borderRadius: "100%",
        })
        .to(".fade-up", {
          scaleX: 0.8,
          rotate: 360,
          borderRadius: "20px",
        });
    }, container);

    return () => ctx.revert(); // Clean up
  }, []);

  return (
    <div
      ref={container}
      className="h-screen flex flex-col text-white px-10 py-20 space-y-40">
      <h1 className="text-4xl">Scroll For Animation 👇</h1>
      <div className="flex justify-center items-center w-full h-full">
        <div className="fade-up w-full h-60 bg-green-500 flex items-center justify-center text-2xl rounded-xl shadow-lg">
          I scroll in 🎉
        </div>
      </div>
    </div>
  );
}
