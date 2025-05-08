"use client";
import React, { useRef, useState, useEffect } from "react";
import Text from "../ui/Text";
import Link from "next/link";
import { gsapConcepts } from "../../../utils/defaults";
import { titleFormatter } from "../../../utils/functions";
import useOutSideClick from "../../../utils/useOutsideClick";
import gsap from "gsap";

const Header = () => {
  const [isDropOpen, setIsDropOpen] = useState(-1);
  const dropdownRefs = useRef([]);
  const navList = [
    {
      title: "task",
      baseLinkUrl: "/task/",
      useTitleAsUrl: false,
      list: [
        { title: "Week 1", url: "week-1" },
        { title: "Week 2", url: "week-2" },
        { title: "Week 3", url: "week-3" },
        { title: "Week 4", url: "week-4" },
      ],
    },
    {
      title: "concepts",
      baseLinkUrl: "/example/",
      useTitleAsUrl: true,
      list: gsapConcepts,
    },
  ];

  const outSideRef = useOutSideClick(() => setIsDropOpen(-1));

  // Animate dropdowns on state change
  useEffect(() => {
    dropdownRefs.current.forEach((ref, index) => {
      if (!ref) return;
      if (index === isDropOpen) {
        gsap.to(ref, {
          height: "auto",
          opacity: 1,
          duration: 1,
          ease: "elastic.out(2,0.4)",
          pointerEvents: "auto",
        });
      } else {
        gsap.to(ref, {
          height: 0,
          opacity: 0,
          duration: 0.3,
          ease: "linear",
          pointerEvents: "none",
        });
      }
    });
  }, [isDropOpen]);

  return (
    <div className="sticky backdrop-blur-2xl top-0 z-50">
      <div className="container mx-auto p-4 ">
        <nav ref={outSideRef} className="flex items-center justify-between">
          <Link href="/">
            {" "}
            <Text variant="nav">Gsap Tasks</Text>
          </Link>
          <div className="flex items-center gap-6">
            {navList.map((obj, i) => (
              <div key={i} className="relative">
                <Text
                  onClick={() => setIsDropOpen(i === isDropOpen ? -1 : i)}
                  variant="nav"
                  className="capitalize relative group cursor-pointer py-2">
                  {obj.title}
                  <Text
                    as="span"
                    className={`absolute top-[calc(100%-8px)] left-1/2 -translate-x-1/2 h-px bg-white w-0 group-hover:w-full translate-full ease-linear duration-300 ${
                      i === isDropOpen ? "w-full" : ""
                    }`}></Text>
                </Text>
                <div
                  ref={(el) => (dropdownRefs.current[i] = el)}
                  className={`absolute opacity-0 max-h-[300px] min-w-[200px] rounded right-0 top-full text-white py-1 border border-solid flex flex-col z-10 bg-gray-900 space-y-1 pointer-events-none overflow-auto  ${
                    obj.list.length >= 7 ? "scroll-bar-mini" : "scroll-bar-none"
                  }`}>
                  {obj.list.map((list, index) => (
                    <div key={index}>
                      <Link
                        onClick={() => setIsDropOpen(-1)}
                        className="text-base block !py-2 px-4 hover:!bg-white/20 transition-all ease-linear duration-300 w-full text-center simple-code"
                        href={
                          obj.useTitleAsUrl
                            ? obj.baseLinkUrl + titleFormatter(list.title)
                            : obj.baseLinkUrl + list.url
                        }>
                        {list.title}
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
