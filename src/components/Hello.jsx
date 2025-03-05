import React from "react";
import "./styles/hello.css";
import Alper from "../assets/images/alperavatar.png";
import Cv from "../assets/CV-en-fd-Alper_tanrikulu.pdf";
import Darrow from "../assets/svg/darrow.svg";

const Hello = () => {
  return (
    <section className="mt-22 border-b-1 border-whitet relative">
      <div className="flex flex-wrap mx-6 lg:mx-20 text-white md:pt-10 lg:mt-20">
        <div className="w-full md:w-6/12 lg:w-6/12">
          <div className="flex flex-wrap-reverse">
            <div className="w-full md:w-1/2 py-3 flex items-center justify-center md:justify-normal">
              <p className="text-4xl font-playfair">Hello 👋, I'm</p>
            </div>
            <div className="w-full text-center md:text-end md:w-1/2 py-3 md:translate-y-10 lsileded">
              <button className="myButton1">
                <a
                  className=""
                  href={Cv}
                  download="CV-en-fd-Alper_tanrikulu.pdf"
                >
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
          <h1 className="font-playfair text-7xl md:text-8xl lg:text-9xl text-center md:text-left lg:leading-35 sm:my-5 md:my-10 lg:my-5 ">
            Alper Tanrıkulu
          </h1>
          <h3 className="font-roboto text-xl lg:text-2xl text-center md:text-left opacity-75 my-5 sm:my-10 md:my-20 lg:my-10 lg:mr-10">
            I craft dynamic web experiences using React, creating animated
            websites and functional application interfaces with clean,
            responsive designs
          </h3>
        </div>
        <div className="w-full md:w-6/12 lg:w-5/12 flex justify-between">
          <div className="md:hidden absolute mt-5 xs:mt-20 sm:mt-20 sm:ml-20">
            <a className="myButton1" href="/contact">
              Conteact me
            </a>
          </div>
          <img
            className="translate-x-6 sm:translate-x-30 md:-translate-x-10 object-cover overflow-visible"
            src={Alper}
            alt="Alper Tanrıkulu avatar"
          />
        </div>
        <div className="hidden font-roboto lg:flex lg:flex-col lg:w-1/12 justify-center py-0 max-w-1/12 ">
          <div className="text-white flex flex-col items-center justify-center transform -rotate-90">
            <ul className="flex justify-around w-125 text-xl">
              <li className="myButton2">
                <a
                  href="https://github.com/alpertanrikulu"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </a>
              </li>
              <li className="myButton2">
                <a
                  href="https://www.linkedin.com/in/alper-tanr%C4%B1kulu-85488817a/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </li>
              <li className="myButton2">
                <a
                  href="https://www.instagram.com/alp.ertanrikulu/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </li>
              <li className="myButton2">
                <a
                  href="https://www.youtube.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Youtube
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hello;
