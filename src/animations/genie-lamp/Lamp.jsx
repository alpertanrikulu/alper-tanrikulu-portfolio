import React from "react";
import "./Lamp.scss";
import Magiclamp from "./magic-lamp.svg";

const Lamp = () => {
  return (
    <div className="lamp">
      <img src={Magiclamp} alt="magic lamp" />
    </div>
  );
};

export default Lamp;
