import React from "react";
import About from "./About";
import HeroMini from "../Hero/HeroMini";
const AboutPage = () => {
  return (
    <div>
      <HeroMini title={"About"} />
      <About />
    </div>
  );
};

export default AboutPage;
