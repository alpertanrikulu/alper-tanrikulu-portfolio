import { useState, useRef, useEffect } from "react";
import Stack from "../animations/stack/Stack";
import Ship from "../animations/ship/Ship";

function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (width < 425) return 250;
  if (width < 576) return 300;
  if (width < 768) return 350;
  if (width < 992) {
    return 400;
  } else {
    return 450;
  }
}

const Experiences = () => {
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
    rootMargin: "0px",
    threshold: 0.8,
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

  const hwSize = useWindowWidth();

  return (
    <>
      <section
        id="workexperiences"
        className="text-white px-6 lg:px-20 md:min-h-[900px]"
      >
        <div className="hidden md:block translate-y-30">
          <Ship />
        </div>
        <div className="space-y-20 md:space-y-30 my-10">
          <div className="h-0 m-0 p-0" ref={containerRef1}></div>
          <h3
            className={`text-center text-4xl xs:text-5xl md:text-6xl lg:text-8xl font-playfair mb-9 ${
              isVisible1 ? "textInAbove" : "textOutAbove"
            }`}
          >
            Work Experinces
          </h3>
          <div className="flex flex-wrap">
            <div className="w-full md:w-6/12">
              <div className="flex justify-center items-center">
                <Stack
                  randomRotation={false}
                  sensitivity={180}
                  sendToBackOnClick={true}
                  cardDimensions={{ width: hwSize, height: hwSize }}
                />
              </div>
            </div>
            <div className="hidden md:block w-full md:w-6/12"></div>
          </div>
        </div>
      </section>
      <hr className="opacity-25 text-white my-o py-0" />
    </>
  );
};

export default Experiences;
