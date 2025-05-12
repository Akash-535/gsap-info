import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useEffect, useRef } from "react";

gsap.registerPlugin(SplitText, ScrollTrigger);

const RandomTask = () => {
  const containerRef = useRef(null);
  const textContainerRef = useRef(null);
  const layerRefs = useRef([]);
  const title =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quibusdam, magnam repudiandae assumenda eos possimus debitis eligendi similique omnis reiciendis? Asperiores numquam aut neque quas. Esse aspernatur iste, qui consectetur voluptatum expedita repellat. Officiis cum optio commodi, ratione magni expedita alias sapiente repellendus. Ut velit consequuntur, sit unde sapiente laboriosam!";
  const words = title.split(" ");
  // Reset layer refs
  layerRefs.current = [];

  useEffect(() => {
    // Make sure all refs are populated
    if (layerRefs.current.length !== words.length || !containerRef.current)
      return;

    // Create timeline for staggered animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: textContainerRef.current,
        start: "top 70%", // When the text container hits 70% from the top of the viewport
        end: "bottom 30%", // When the text container bottom hits 30% from the top of the viewport
        scrub: 0.5, // Smooth scrubbing effect with 0.5 seconds of smoothing
        markers: false, // Set to true for debugging
      },
    });

    // Add staggered animations to the timeline
    tl.to(layerRefs.current, {
      width: 0,
      duration: 1,
      stagger: 0.1, // Stagger effect - adjust timing as needed
      ease: "power2.out",
    });

    return () => {
      // Clean up ScrollTrigger instances when component unmounts
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [words.length]);

  // Add layer ref
  const addLayerRef = (el, index) => {
    if (el && !layerRefs.current.includes(el)) {
      layerRefs.current[index] = el;
    }
  };

  return (
    <div className="container px-5 min-h-screen" ref={containerRef}>
      {/* Add some space at the top for scrolling */}
      <div className="h-64"></div>
      <div className="text-white flex flex-wrap" ref={textContainerRef}>
        {words.map((word, i) => (
          <div key={i} className="relative mr-2 mb-2">
            <p className="z-0">{word}</p>
            <span
              ref={(el) => addLayerRef(el, i)}
              className="absolute layer-item top-0 right-0 h-full bg-white/30 z-10"
              style={{ width: "100%" }}></span>
          </div>
        ))}
      </div>
      <div className="h-screen"></div>
    </div>
  );
};

export default RandomTask;
