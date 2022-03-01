import React from "react";
import Hero from "../Hero/Hero";
import "./Landing.css";
import MenWomen from "../MenWomen/MenWomen";
import Products from "../Products/Products";
import About from "../About/About";

const text = "Exceed the limit.";
const caption = "Performance, exception, elegance, durability.";
const Landing = () => {
  return (
    <div className="landing_container">
      <Hero text={text} caption={caption} />
      {/* <img className="screen_image" src={screen} alt="screen" /> */}
      <MenWomen />
      <Products />
      <About />
    </div>
  );
};

export default Landing;
