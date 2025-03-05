import React from "react";
import "./animatedlines.css";
import Lines from "../../assets/svg/slines.svg";

const Animatedlines = () => {
  return (
    <div className="animatedLinesDiv hidden md:flex absolute top-40 opacity-25">
      <img className="animatedLines" src={Lines} alt="animated lines" />
    </div>
  );
};

export default Animatedlines;
