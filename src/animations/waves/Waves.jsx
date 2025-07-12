import React from "react";
import "./waves.css";

const Waves = () => {
  return (
    <div className="flex justify-center items-center absolute top-160 left-60 xs:top-160 xs:left-120 md:top-80 md:left-200 lg:left-230 xl:left-[65vw] max-md:-z-1">
      <div className="wave" style={{ animationDelay: "1s" }}></div>
      <div className="wave" style={{ animationDelay: "2s" }}></div>
      <div className="wave" style={{ animationDelay: "3s" }}></div>
      <div className="wave" style={{ animationDelay: "4s" }}></div>
      <div className="wave" style={{ animationDelay: "5s" }}></div>
      <div className="wave" style={{ animationDelay: "6s" }}></div>
      <div className="wave" style={{ animationDelay: "7s" }}></div>
      <div className="wave" style={{ animationDelay: "8s" }}></div>
      <div className="wave" style={{ animationDelay: "9s" }}></div>
      <div className="wave" style={{ animationDelay: "10s" }}></div>
      <div className="wave" style={{ animationDelay: "11s" }}></div>
      <div className="wave" style={{ animationDelay: "12s" }}></div>
      <div className="wave" style={{ animationDelay: "13s" }}></div>
      <div className="wave" style={{ animationDelay: "14s" }}></div>
    </div>
  );
};

export default Waves;
