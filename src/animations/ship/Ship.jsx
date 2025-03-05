import React, { useRef, useEffect, useState } from "react";
import Gemi from "./svg/gemi.svg";
import Ada from "./svg/island.svg";
import "./ship.css";

const Ship = () => {
  const containerRef1 = useRef(null);
  const [isVisible1, setIsVisible1] = useState(false);

  const callbackFunction = (entries) => {
    entries.forEach((entry) => {
      if (entry.target === containerRef1.current) {
        setIsVisible1(entry.isIntersecting);
      }
    });
  };

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.2,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options);
    if (containerRef1.current) observer.observe(containerRef1.current);

    return () => {
      if (containerRef1.current) observer.unobserve(containerRef1.current);
    };
  }, [containerRef1]);

  return (
    <>
      <div
        className={`shipDiv opacity-25 position-absolute z-n3`}
        ref={containerRef1}
      >
        <div
          className={`${isVisible1 && "movement"}`}
          style={{ transform: "translateX(-38vw)" }}
        >
          <img className="ship" src={Gemi} alt="ship animation autline" />
        </div>
        <img className="island" src={Ada} alt="İsland autline" />
      </div>
    </>
  );
};

export default Ship;
