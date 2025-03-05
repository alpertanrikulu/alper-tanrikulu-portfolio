import React from "react";
import "./space.css";
import Hatman from "./svg/hatman.svg";
import Saturn from "./svg/hsaturn.svg";
import Portal from "./svg/portal.svg";
import Kidnap from "./svg/kidnap.svg";
import Hatmans from "./svg/hatmans.svg";
import Alien from "./svg/alien.svg";

const Space = () => {
  return (
    <>
      <img
        draggable="false"
        className="hatman opacity-25"
        src={Hatman}
        alt=""
      />
      <img
        draggable="false"
        className="opacity-25 saturn"
        src={Saturn}
        alt="Saturn autline"
      />
      <img
        draggable="false"
        className="opacity-25 portal"
        src={Portal}
        alt=""
      />
      <img draggable="false" className="kidnap" src={Kidnap} alt="" />
      <img draggable="false" className="kidnap1" src={Kidnap} alt="" />
      <img
        draggable="false"
        className="hatmans opacity-25"
        src={Hatmans}
        alt=""
      />
      <img draggable="false" className="alien" src={Alien} alt="" />
      {/* <div className="absolute w-[800px] h-[1200px] bg-red-200 ml-5 -z-1 overflow-hidden"></div> */}
    </>
  );
};

export default Space;
