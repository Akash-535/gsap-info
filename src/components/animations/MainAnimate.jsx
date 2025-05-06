import React from "react";
import AnimateTo from "./AnimateTo";
import AnimateFrom from "./AnimateFrom";
import AnimateFromTo from "./AnimateFromTo";
import Draw from "./Draw";
import TimeLine from "./TimeLine";
import Add from "./Add";

const MainAnimate = () => {
  return (
    <div>
      <AnimateTo />
      from
      <AnimateFrom />
      fromto
      <AnimateFromTo />
      Draw <Draw />
      Timeline <TimeLine />
      add <Add />
    </div>
  );
};

export default MainAnimate;
