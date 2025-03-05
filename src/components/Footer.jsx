import React, { useState, useEffect, useRef } from "react";
import Cv from "../assets/CV-en-fd-Alper_tanrikulu.pdf";
import Darrow from "../assets/svg/darrow.svg";
import Istanbul from "../animations/istanbul/Istanbul";
import Lamba from "../animations/istanbul/svg/lambaa.svg";

const Footer = () => {
  const containerRef1 = useRef(null);
  const containerRef2 = useRef(null);

  const [isVisible1, setIsVisible1] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);

  const callbackFunction = (entries) => {
    entries.forEach((entry) => {
      if (entry.target === containerRef1.current) {
        setIsVisible1(entry.isIntersecting);
      }
      if (entry.target === containerRef2.current) {
        setIsVisible2(entry.isIntersecting);
      }
    });
  };

  const options = {
    root: null,
    rootMargin: "0px 0px 0px 0px",
    threshold: 0.1,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options);
    if (containerRef1.current) observer.observe(containerRef1.current);
    if (containerRef2.current) observer.observe(containerRef2.current);

    return () => {
      if (containerRef1.current) observer.unobserve(containerRef1.current);
      if (containerRef2.current) observer.unobserve(containerRef2.current);
    };
  }, [containerRef1, containerRef2, options]);

  return (
    <>
      <footer className="text-white px-6 md:px-22 space-y-20 md:space-y-30 mt-10 mb-5 md:h-[700px] md:flex md:flex-col md:justify-end">
        <div className="flex flex-col justify-end mb-0">
          <div className="flex flex-wrap xs:justify-between mb-5">
            <div className="w-full xs:w-8/12" ref={containerRef1}>
              <h3
                className={`text-center xs:text-start text-4xl xs:text-5xl md:text-6xl lg:text-8xl font-playfair mb-9 sm:mb-0 ${
                  isVisible1 ? "textInRight" : "textOutRight"
                }`}
              >
                Your Vision,
                <br /> My Code <br /> Let’s Create!
              </h3>
              <hr className="hidden md:block opacity-25 m-0 p-0 text-white translate-y-5" />
            </div>
            <div
              className="w-full xs:w-4/12 text-center sm:flex sm:items-end sm:justify-end md:items-center"
              ref={containerRef2}
            >
              <div
                className={`flex flex-wrap xs:space-y-5 lg:space-y-8 ${
                  isVisible2 ? "textInAbove" : "textOutAbove"
                }`}
              >
                <div className="w-7/12 xs:w-full xs:text-end">
                  <a
                    className="footerButton"
                    href={Cv}
                    download="CV-en-fd-Alper_tanrikulu.pdf"
                  >
                    <span>Download my CV </span>
                    <img
                      className="w-5 h-5 inline scale-[0.6] -translate-x-0.5 -translate-y-0.5"
                      src={Darrow}
                      alt="Download icon"
                    />
                  </a>
                </div>
                <div className="w-5/12 xs:w-full xs:text-end">
                  <a className="footerButton" href="/contact">
                    Contact me
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap-reverse sm:mt-10">
            <div className="w-full sm:w-2/5 opacity-50 flex items-end">
              <p className="text-xs sm:text-sm mb-0">
                Copyright © 2025 Alper Tanrıkulu
              </p>
            </div>
            <div className="w-full sm:w-3/5 flex justify-around mb-5 sm:mb-0 md:pr-30">
              <button className="myButton2 text-sm xs:text-md sm:text-lg md:text-2xl">
                <a
                  href="https://github.com/alpertanrikulu"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </a>
              </button>
              <button className="myButton2 text-sm xs:text-md sm:text-lg md:text-2xl">
                <a
                  href="https://www.linkedin.com/in/alper-tanr%C4%B1kulu-85488817a/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </button>
              <button className="myButton2 text-sm xs:text-md sm:text-lg md:text-2xl">
                <a
                  href="https://www.instagram.com/alp.ertanrikulu/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </button>
              <button className="myButton2 text-sm xs:text-md sm:text-lg md:text-2xl">
                <a
                  href="https://www.youtube.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Youtube
                </a>
              </button>
            </div>
          </div>
        </div>
      </footer>
      <div className="h-0 p-o m-0 relative hidden md:block">
        <Istanbul />
      </div>
    </>
  );
};

export default Footer;
