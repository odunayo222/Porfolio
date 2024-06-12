import React from "react";
import About from "./About";
import Skills from "./Skills";

type Props = {};

const Right = (props: Props) => {
  return (
    <div className=" ">
      <div className=" p-7 ">
        <div className="  rounded  border bg-white">
          <About />
          <Skills/>
        </div>
      </div>
    </div>
  );
};

export default Right;
