import React from "react";
import "./animatedrlines.css";
import Rlines from "../../assets/svg/rlines.svg";

const Animatedrlines = () => {
  return (
    <div className="animatedRLinesDiv hidden md:flex absolute top-200 opacity-25">
      <img className="animatedRLines " src={Rlines} alt="animated lines" />
    </div>
  );
};

export default Animatedrlines;
