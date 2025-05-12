import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const OnCompleteAndStart = () => {
  const boxRef = useRef(null);
  const [status, setStatus] = useState("");

  useEffect(() => {
    gsap.fromTo(
      boxRef.current,
      {
        x: -300,
        duration: 2,
      },
      {
        onStart: () => {
          setStatus("🚀 Animation Started!");
        },
        x: 300,
        duration: 2,

        onComplete: () => {
          setStatus("🎉 Animation Completed!");
        },
      }
    );
  }, []);

  return (
    <div className="flex flex-col items-center justify-center py-12 bg-gray-900 text-white gap-6">
      <div ref={boxRef} className="w-20 h-20 bg-blue-500 rounded-md"></div>
      <p className="text-xl">Status:- {status}</p>
    </div>
  );
};

export default OnCompleteAndStart;
