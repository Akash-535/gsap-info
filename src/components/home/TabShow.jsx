"use client";
import React, { useState } from "react";
import Cta from "../common/components/Cta";
import Timeline from "../Dummy";

const TabShow = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <Cta onClick={() => setVisible(true)}> Show</Cta>
      {visible && <Timeline />}
    </div>
  );
};

export default TabShow;
