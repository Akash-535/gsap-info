import React from "react";
import Heading from "../common/ui/Heading";
import Text from "../common/ui/Text";
import Cta from "../common/components/Cta";

const Hero = () => {
  return (
    <div className="text-center container h-screen  mx-auto flex flex-col justify-center items-center">
      <div className="space-y-5">
        <Heading variant="primary" as="h1">
          Bring Your Web to Life with GSAP
        </Heading>
        <Text>
          The JavaScript animation engine for ultra-smooth, high-performance
          animations
        </Text>
        <div className="space-x-3">
          <Cta>Learn Basics</Cta>
          <Cta>View Examples</Cta>
        </div>
      </div>
    </div>
  );
};

export default Hero;
