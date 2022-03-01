import React from "react";
import Men from "./Men";
import Women from "./Women";
import "./MenWomen.css"
const MenWomen = () => {
  return (
    <div className="grid__container">
      <Men />
      <Women />
    </div>
  );
};

export default MenWomen;
