import React from "react";
import "./Hero.css";
const HeroMini = ({ title }) => {
  return (
    <div className="hero_container_mini">
      <div className="hero_text">
        <h3>{title}</h3>
      </div>
    </div>
  );
};

export default HeroMini;
