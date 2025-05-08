"use client";
import React from "react";
const Cta = ({
  as = "button", // default to button
  children,
  className = "",
  disabled = false,
  variant = "base",
  onClick = (e) => {}, // optional click handler
  ...rest // collect all other props
}) => {
  const allowedTags = ["button", "a"];
  const Tag = allowedTags.includes(as) ? as : "button";

  const variants = {
    base: "border border-solid border-white px-6 py-3 hover:bg-white/50 active:bg-white/20 hover:border-transparent active:duration-75 active:scale-95 active:ease-out",
  };

  return (
    <Tag
      onClick={onClick}
      className={`text-white rounded-xl inline-block transition-all ease-linear duration-300 cursor-pointer  ${
        disabled ? "pointer-events-none opacity-70" : ""
      } ${variants[variant] || variants.base} ${className}`}
      {...rest}>
      {children}
    </Tag>
  );
};

export default Cta;
