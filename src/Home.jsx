import React from "react";
import Hello from "./components/Hello";
import Banner from "./components/Banner";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Waves from "./animations/waves/Waves";
import Animatedlines from "./animations/animated-lines/Animatedlines";
import Animatedrlines from "./animations/animated-rlines/Animatedrlines";
import Technologies from "./components/Technologies";
import Experiences from "./components/Experiences";

const Home = () => {
  return (
    <div className="relative">
      <Waves />
      <Animatedlines />
      <Animatedrlines />
      <Hello />
      <Banner />
      <Skills />
      <Technologies />
      <Experiences />
      <Education />
    </div>
  );
};

export default Home;
