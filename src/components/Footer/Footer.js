import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer__container">
      <img className="footer__logo" src={logo} alt="logo" />
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <p>KAMOIA© 2022. All rights reserved.</p>
    </div>
  );
};

export default Footer;
