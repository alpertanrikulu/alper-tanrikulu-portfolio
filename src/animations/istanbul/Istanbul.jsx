import React from "react";
import "./istanbul.css";

import Bikebwheel from "./svg/bisiklet/arka-tekerlek.svg";
import Bikefwheel from "./svg/bisiklet/on-tekerlek.svg";
import Bikeframe from "./svg/bisiklet/bisiklet-govde.svg";
import Umbrella from "./svg/bisiklet/semsiye.svg";
import Hatman from "./svg/bisiklet/hatman.svg";
import Lamba from "./svg/lambaa.svg";
import Sittingcat from "./svg/oturankedi.svg";
import Walkingcat from "./svg/yuruyenkedii.svg";
import Lookingcat from "./svg/bakankedi.svg";
import Galata from "./svg/galata.svg";
import Hazerfen from "./svg/hazerfen.svg";
import Bayrak from "./svg/bayrak.svg";

const Istanbul = () => {
  return (
    <>
      <img className="lLamba opacity-25 " src={Lamba} alt="" />
      <img className="rLamba opacity-25 " src={Lamba} alt="" />
      <img className="galata opacity-25 " src={Galata} alt="" />
      <img className="sittingCat opacity-25 " src={Sittingcat} alt="" />
      <img className="lookingCat opacity-25 " src={Lookingcat} alt="" />
      <img className="bayrak opacity-25 " src={Bayrak} alt="" />
      <img className="hazerfen opacity-25" src={Hazerfen} alt="" />
      <div className=" bikeDiv">
        <img className="bikeBWheel opacity-25" src={Bikebwheel} alt="" />
        <img className="bikeFWheel opacity-25" src={Bikefwheel} alt="" />
        <img className="bikeFrame opacity-25" src={Bikeframe} alt="" />
        <img className="umbrella opacity-25" src={Umbrella} alt="" />
      </div>
    </>
  );
};

export default Istanbul;
