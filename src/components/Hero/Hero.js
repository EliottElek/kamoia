import React from "react";
import { useNavigate } from "react-router";
import "./Hero.css";
const Hero = ({ text, caption }) => {
  const navigate = useNavigate();
  return (
    <div className="hero_container">
      <div className="hero_text">
        <h1>{text}</h1>
        <h5>{caption}</h5>
        <div className="hero_button_container">
          <button
            onClick={() => navigate("/products/#senior")}
            className="type1_button"
          >
            See products
          </button>
          <button
            className="type2_button"
            onClick={() => navigate("/products")}
          >
            View our 2024 new products !
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
