import React, { useState, useRef, useEffect } from "react";
import "./styles/education.css";
import Logouu from "../assets/svg/logouu.svg";
import Logogtu from "../assets/svg/logogtu.svg";
import Hatmanhome from "../animations/hatmanhome/Hatmanhome";

function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (width < 992) {
    return false;
  } else {
    return true;
  }
}

const Education = () => {
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
    threshold: 0.8,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options);
    if (containerRef1.current) observer.observe(containerRef1.current);

    return () => {
      if (containerRef1.current) observer.unobserve(containerRef1.current);
    };
  }, [containerRef1, options]);

  const isMedium = useWindowWidth();

  // ✅ Seçili radio butonunu tutan state
  const [selected, setSelected] = useState("c1");

  // ✅ Radio buton değişimini yöneten fonksiyon
  const handleChange = (event) => {
    setSelected(event.target.id);
  };

  return (
    <>
      <section id="education" className="flex justify-center h-[800px]">
        <div className="px-6 lg:px-20 space-y-20 md:space-y-30 my-10">
          <div className="h-0 m-0 p-0" ref={containerRef1}></div>
          <h3
            className={`text-center text-4xl xs:text-5xl md:text-6xl lg:text-8xl font-playfair mb-0 text-white ${
              isVisible1 ? "textInAbove" : "textOutAbove"
            }`}
          >
            Education
          </h3>

          {isMedium ? (
            <>
              <div className="education-wrapper d-flex justify-content-center align-items-center mb-0">
                <div className="education-container pb-5">
                  {/* İlk radio butonu */}
                  <input
                    type="radio"
                    name="slide"
                    id="c1"
                    checked={selected === "c1"}
                    onChange={handleChange}
                  />
                  <label className="education-card" htmlFor="c1">
                    <div className="education-row">
                      <div className="education-icon">
                        <img src={Logouu} alt="Uludag University Logo" />
                      </div>
                      <div className="education-description mb-3">
                        <h4 className="fs-2 fw-bold ffRoboto text-black">
                          Uludağ University
                        </h4>
                        <p className="ffRoboto !text-black fs-5">
                          Faculty of Arts and Sciences (2017-2021) <br />
                          Bachelor of Molecular Biology and Genetics
                        </p>
                        <p className="ffRoboto !text-black fs-5">
                          GPA: 3.61 - Earned 3rd Place in the Department
                        </p>
                      </div>
                    </div>
                  </label>

                  {/* İkinci radio butonu */}
                  <input
                    type="radio"
                    name="slide"
                    id="c2"
                    checked={selected === "c2"}
                    onChange={handleChange}
                  />
                  <label className="education-card" htmlFor="c2">
                    <div className="education-row">
                      <div className="education-icon">
                        <img
                          src={Logogtu}
                          alt="Gebze Technical University Logo"
                        />
                      </div>
                      <div className="education-description ffRoboto text-black mb-3">
                        <h4 className="fs-2 fw-bold">
                          Gebze Technical University
                        </h4>
                        <p className="fs-5 !text-black">
                          Institute of Science (2023-Ongoing) <br />
                          Master of Bioinformatics and System Biology
                        </p>
                        <p className="fs-5 !text-black">GPA: 3.21</p>
                      </div>
                    </div>
                  </label>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="wrapper1">
                <div className="container1">
                  <input
                    type="radio"
                    name="slide"
                    id="c1"
                    checked={selected === "c1"}
                    onChange={handleChange}
                  />
                  <label htmlFor="c1" className="card1">
                    <div className="row1">
                      <div className="icon1">
                        <img src={Logouu} alt="Uludağ Üniversiteesi Logo" />
                      </div>
                      <div className="description1">
                        <h4 className="text-xl font-bold font-roboto text-black mb-2">
                          Uludağ University
                        </h4>
                        <p className="text-md font-bold font-roboto text-black mb-1">
                          Faculty of Arts and Sciences (2017-2021) <br />
                          Bachelor of Molecular Biology and Genetics
                        </p>
                        <p className="text-sm font-normal font-roboto text-black mb-5">
                          GPA: 3.61 - Earned 3rd Place in the Department
                        </p>
                      </div>
                    </div>
                  </label>
                  <input
                    type="radio"
                    name="slide"
                    id="c2"
                    checked={selected === "c2"}
                    onChange={handleChange}
                  />
                  <label htmlFor="c2" className="card1">
                    <div className="row1">
                      <div className="icon1 !bg-white">
                        <img src={Logogtu} alt="Uludağ Üniversiteesi Logo" />
                      </div>
                      <div className="description1">
                        <h4 className="text-xl font-bold font-roboto text-black mb-2">
                          Gebze Technical University
                        </h4>
                        <p className="text-md font-bold font-roboto text-black mb-1">
                          Institute of Science (2023-Ongoing) <br />
                          Master of Bioinformatics and System Biology
                        </p>
                        <p className="text-sm font-normal font-roboto text-black mb-5">
                          GPA: 3.21
                        </p>
                      </div>
                    </div>
                  </label>
                </div>
              </div>
            </>
          )}
        </div>
      </section>
      <hr className="my-0 py-0 opacity-25 text-white" />
      <div className="hidden md:block w-[300px]">
        <Hatmanhome />
      </div>
    </>
  );
};

export default Education;
