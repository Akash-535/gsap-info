import React from "react";
import Heading from "../common/ui/Heading";
import Text from "../common/ui/Text";
import Cta from "../common/components/Cta";

const Definition = () => {
  return (
    <div className="text-center container h-screen  mx-auto flex flex-col justify-center items-center">
      <div className="space-y-5">
        <Heading variant="secondary">Definition of GSAP</Heading>
        <Text className="max-w-[700px] mx-auto">
          GSAP (GreenSock Animation Platform) is a robust JavaScript library
          that makes it easy to create high-performance animations across
          browsers. It powers everything from UI transitions to insane banner
          ads and immersive scroll websites
        </Text>
        <Cta as="a" href="/">
          Learn More
        </Cta>
      </div>
    </div>
  );
};

export default Definition;
