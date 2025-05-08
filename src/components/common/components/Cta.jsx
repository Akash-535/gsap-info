"use client";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";

const Cta = ({
  as = "button",
  children,
  className = "",
  disabled = false,
  variant = "base",
  onClick = () => {},
  ...rest
}) => {
  const buttonRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const el = buttonRef.current;

      // Hover in animation
      const handleEnter = () => {
        gsap.to(el, {
          borderColor: "#ffffff88",
          backgroundColor: "rgba(255, 255, 255, 0.15)",
          scale: 1.05,
          duration: 0.3,
          ease: "power2.out",
        });
      };

      // Hover out animation
      const handleLeave = () => {
        gsap.to(el, {
          borderColor: "#ffffff",
          backgroundColor: "transparent",
          scale: 1,
          duration: 0.3,
          ease: "power2.out",
        });
      };

      el.addEventListener("mouseenter", handleEnter);
      el.addEventListener("mouseleave", handleLeave);

      return () => {
        el.removeEventListener("mouseenter", handleEnter);
        el.removeEventListener("mouseleave", handleLeave);
      };
    }, buttonRef);

    return () => ctx.revert();
  }, []);

  const Tag = ["button", "a"].includes(as) ? as : "button";

  return (
    <Tag
      ref={buttonRef}
      onClick={onClick}
      disabled={disabled}
      className={`text-white border border-solid border-white px-6 py-3 rounded-xl inline-block transition-transform duration-200 cursor-pointer ${
        disabled ? "pointer-events-none opacity-70" : ""
      } ${className}`}
      {...rest}>
      <span className="inline-block">{children}</span>
    </Tag>
  );
};

export default Cta;
