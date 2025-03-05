import React, { useState, useEffect, useRef } from "react";
import "./styles/skills.css";
import Universe from "../animations/universe/Universe";
import Cv from "../assets/CV-en-fd-Alper_tanrikulu.pdf";
import Darrow from "../assets/svg/darrow.svg";

const Skills = () => {
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
    <section id="summary" className="">
      <div className="text-white px-6 lg:px-20">
        <div className="h-1 p-0 m-0" ref={containerRef1}></div>
        <div
          className={`flex flex-wrap mt-10 font-semibold md:mb-5 ${
            isVisible1 ? "textInAbove" : "textOutAbove"
          }`}
        >
          <div className="w-full md:w-2/3">
            <h2 className="font-playfair text-4xl xs:text-5xl md:text-6xl text-center md:text-start">
              This Is My Little Journey <br /> To Getting Here
            </h2>
          </div>
          <div className="w-full md:w-1/3 text-center">
            <button className="myButton1 my-10">
              <a className="" href={Cv} download="CV-en-fd-Alper_tanrikulu.pdf">
                <span>Download my CV </span>
                <img
                  className="w-5 h-5 inline"
                  src={Darrow}
                  alt="Download icon"
                />
              </a>
            </button>
          </div>
        </div>
        <div className="m-0 p-0 h-1" ref={containerRef2}></div>
        <div className={`${isVisible2 ? "textInAbove" : "textOutAbove"}`}>
          <p className="font-roboto opacity-75 text-lg sm:text-xl">
            I am a junior Frontend Developer eager to build user-friendly and
            responsive web applications. I mainly work with React and Next.js on
            the frontend and use Django REST Framework for backend development.
            I continuously learn and improve my skills through personal
            projects, adapting well to evolving workflows. I thrive in
            collaborative environments and aim to gain more experience while
            creating engaging web experiences. My goal is to deepen my expertise
            in modern web technologies and contribute to impactful projects.
          </p>
        </div>
      </div>
      <Universe />
      <hr className="my-0 opacity-25 text-white" />
    </section>
  );
};

export default Skills;
