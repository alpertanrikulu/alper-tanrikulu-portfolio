import React, { useState, useEffect, useRef } from "react";
import "./styles/banner.css";
import Stickman from "../animations/stickman/Stickman";
import Creation from "../animations/createion/Creation";

const Banner = () => {
  const containerRef1 = useRef(null);
  const containerRef2 = useRef(null);
  const containerRef3 = useRef(null);
  const containerRef4 = useRef(null);

  const [isVisible1, setIsVisible1] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const [isVisible3, setIsVisible3] = useState(false);
  const [isVisible4, setIsVisible4] = useState(false);

  const callbackFunction = (entries) => {
    entries.forEach((entry) => {
      if (entry.target === containerRef1.current) {
        setIsVisible1(entry.isIntersecting);
      }
      if (entry.target === containerRef2.current) {
        setIsVisible2(entry.isIntersecting);
      }
      if (entry.target === containerRef3.current) {
        setIsVisible3(entry.isIntersecting);
      }
      if (entry.target === containerRef4.current) {
        setIsVisible4(entry.isIntersecting);
      }
    });
  };

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.8,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options);
    if (containerRef1.current) observer.observe(containerRef1.current);
    if (containerRef2.current) observer.observe(containerRef2.current);
    if (containerRef3.current) observer.observe(containerRef3.current);
    if (containerRef4.current) observer.observe(containerRef4.current);

    return () => {
      if (containerRef1.current) observer.unobserve(containerRef1.current);
      if (containerRef2.current) observer.unobserve(containerRef2.current);
      if (containerRef3.current) observer.unobserve(containerRef3.current);
      if (containerRef4.current) observer.unobserve(containerRef4.current);
    };
  }, [containerRef1, containerRef2, containerRef3, containerRef4, options]);
  return (
    <>
      <section className="bg-midnight text-white font-playfair">
        <div className="mx-4 py-10 text-4xl xs:text-6xl sm:text-7xl md:text-8xl lg:text-8xl xl:text-9xl space-y-7">
          <div className="flex flex-wrap-reverse justify-around items-center">
            <div ref={containerRef1}>
              <p
                className={`text-start ${
                  isVisible1 ? "textInLeft" : "textOutLeft"
                }`}
              >
                LET'S CREATE
              </p>
            </div>
            <div className="z-1 w-[350px] h-[124px] bg-sunny relative rounded-2xl shrink-0 mb-3 min-[857px]:mb-0">
              <Creation />
            </div>
          </div>
          <div ref={containerRef2}>
            <p
              className={`text-center ${
                isVisible2 ? "textInLeft" : "textOutLeft"
              }`}
            >
              SOMETHING GREAT
            </p>
          </div>
          <div className="flex flex-wrap justify-around items-center">
            <Stickman />
            {/* <img className="mb-5 xs:mb-0" src={Vplace} alt="" /> */}
            <div ref={containerRef3}>
              <p
                className={`mt-5 xs:mt-0 text-end ${
                  isVisible3 ? "textInRight" : "textOutRight"
                }`}
              >
                TOGETHER
              </p>
            </div>
          </div>
          <div ref={containerRef4}>
            <p
              className={`text-center ${
                isVisible4 ? "textInBottom" : "textOutBottom"
              }`}
            >
              WE’LL DEBUG THE REST!
            </p>
          </div>
        </div>
      </section>
      <hr className="my-0 py-0 text-white opacity-25" />
    </>
  );
};

export default Banner;
