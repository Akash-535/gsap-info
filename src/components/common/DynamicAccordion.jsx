"use client";
import { useEffect, useRef, useState } from "react";

const DynamicAccordion = ({
  children,
  defaultOpen = false,
  className = "",
  contentClassName = "",
  speed = 300,
  height = 0,
  refreshOn,
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const [maxHeight, setMaxHeight] = useState("0px");
  const contentRef = useRef();

  const updateHeight = () => {
    if (contentRef.current) {
      const scrollHeight = contentRef.current.scrollHeight;
      const targetHeight = height || scrollHeight;
      setMaxHeight(`${targetHeight}px`);
    }
  };

  useEffect(() => {
    if (isOpen) {
      updateHeight();
    } else {
      setMaxHeight("0px");
    }
  }, [isOpen, height]);
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        updateHeight();
      }, speed);
    } else {
      setMaxHeight("0px");
    }
  }, [refreshOn]);

  useEffect(() => {
    // Update state in case defaultOpen is changed externally
    setIsOpen(defaultOpen);
  }, [defaultOpen]);

  return (
    <div
      className={`${className}`}
      style={{
        transition: `all ${speed}ms ease-in-out`,
      }}>
      <div
        className={`transition-all ease-in-out duration-[${speed}ms] overflow-hidden`}
        style={{
          maxHeight,
          opacity: isOpen ? 1 : 0,
          transition: `max-height ${speed}ms ease-in-out, opacity ${speed}ms ease-in-out`,
        }}>
        <div ref={contentRef} className={`${contentClassName}`}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default DynamicAccordion;
