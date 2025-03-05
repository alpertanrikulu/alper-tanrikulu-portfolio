import React from "react";
import "./creation.css";
import Toolbox from "./svg/toolbox.svg";
import Tag from "./svg/tag.svg";
import Cerceve from "./svg/cerceve.svg";
import Buttonn from "./svg/button.svg";
import Cardframe from "./svg/cardframe.svg";
import Cursor from "./svg/cursor.svg";
import Radiobuttons from "./svg/radiobuttons.svg";
import Textframe1 from "./svg/textframe1.svg";
import Textframe2 from "./svg/textframe2.svg";
import Taggedcursor from "./svg/taggedcursor.svg";

const Creation = () => {
  return (
    <>
      <img className="cerceve" src={Cerceve} alt="HTML wireframing autline" />
      <img className="toolbox" src={Toolbox} alt="toolbox autline" />
      <img className="textframe1" src={Textframe1} alt="textframe autline" />
      <img className="textframe2" src={Textframe2} alt="textframe autline" />
      <img className="buttonn" src={Buttonn} alt="button autline" />
      <img className="cardframe1" src={Cardframe} alt="cardframe autline" />
      <img className="cardframe2" src={Cardframe} alt="cardframe autline" />
      <img className="cardframe3" src={Cardframe} alt="cardframe autline" />
      <img className="cardframe4" src={Cardframe} alt="cardframe autline" />
      <img
        className="radiobuttons"
        src={Radiobuttons}
        alt="radiobuttons autline"
      />
      <div className="taggedcursor">
        <img className="tagg" src={Tag} alt="HTML Tag autline" />
        <img className="cursorr" src={Cursor} alt="Cursor autline" />
      </div>
      <img className="cursorrr" src={Cursor} alt="Cursor autline" />
    </>
  );
};

export default Creation;
