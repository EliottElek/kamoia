import React from "react";
import "./Hero.css";
const Hero = ({ text, caption }) => {
  return (
    <div className="hero_container">
      <div className="hero_text">
        <h1>{text}</h1>
        <h5>{caption}</h5>
        <div className="hero_button_container">
          <button className="type1_button">See products</button>
          <button className="type2_button">Contact our experts</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
