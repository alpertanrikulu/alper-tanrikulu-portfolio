import React from "react";
import Pangea1 from "./svg/pangea1.svg";
import Pangea2 from "./svg/pangea2.svg";
import Pangea3 from "./svg/pangea3.svg";
import Pangea4 from "./svg/pangea4.svg";
import Pangea5 from "./svg/pangea5.svg";
import Pangea6 from "./svg/pangea6.svg";
import Pangea7 from "./svg/pangea7.svg";
import "./pangea.css";

const Pangea = () => {
  return (
    <div className="pangea opacity-25 z-n3">
      <img className="pangea1" src={Pangea1} alt="pangea 1" />
      <img className="pangea2" src={Pangea2} alt="pangea 2" />
      <img className="pangea3" src={Pangea3} alt="pangea 3" />
      <img className="pangea4" src={Pangea4} alt="pangea 4" />
      <img className="pangea5" src={Pangea5} alt="pangea 5" />
      <img className="pangea6" src={Pangea6} alt="pangea 6" />
      <img className="pangea7" src={Pangea7} alt="pangea 7" />
    </div>
  );
};

export default Pangea;
