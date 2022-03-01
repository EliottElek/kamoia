import React from "react";
import "./About.css";
import aboutImage from "../../assets/images/about.png";
const About = () => {
  return (
    <div className="about__grid__container">
      <div className="about__grid">
        <div>
          <h1>About us</h1>
          <h3>Our team</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque convallis tristique metus, ac cursus purus placerat a.
            Phasellus laoreet, neque ac aliquet finibus, neque augue feugiat
            enim, vitae hendrerit dolor magna in erat. Interdum et malesuada
            fames ac ante ipsum primis in faucibus. Praesent sed erat molestie,
            auctor lacus eget, tempus ex. Donec dictum id ex id egestas. Quisque
            mauris dui, egestas in erat sit amet, dapibus accumsan neque. Nulla
            sagittis erat a lectus interdum euismod. Sed maximus lorem in tortor
            finibus, id ultrices velit hendrerit. Nulla porta pulvinar magna ut
            bibendum. Vestibulum iaculis leo sit amet vehicula ullamcorper.
            Class aptent taciti sociosqu ad litora torquent per conubia nostra,
            per inceptos himenaeos. Nam pretium ex in risus aliquam porttitor.
            Quisque lacinia tellus sem, eu auctor ipsum scelerisque ac. Morbi
            ornare interdum enim, sed gravida augue semper vitae. Nulla
            facilisi. Duis lacinia ac enim vel venenatis. Donec non orci turpis.
            Curabitur sagittis lectus sit amet mauris pellentesque, vitae
            pellentesque libero imperdiet. Phasellus in pharetra leo, ac ornare
            nisl. Proin semper orci vitae risus faucibus, quis pretium diam
            faucibus. Duis pretium ullamcorper aliquet. Duis libero orci,
            interdum in nunc eu, porta maximus quam.
          </p>
        </div>
        <img alt="pic" className="about__img" src={aboutImage} />
      </div>
    </div>
  );
};

export default About;
