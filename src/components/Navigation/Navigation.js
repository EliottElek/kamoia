import React from "react";
import { Link, useNavigate } from "react-router-dom";
import HamburgerIcon from "./HambugerIcon/HamburgerIcon";
import "./Navigation.css";
const Navigation = ({ links, logo, size }) => {
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();
  React.useEffect(() => {
    if (size.x >= 700) setOpen(false);
  }, [size.x, setOpen]);

  const MobileNavigation = () => (
    <div
      className={
        open
          ? "mobile_navigation_container open"
          : "mobile_navigation_container"
      }
    >
      <ul className="mobile_links_list">
        {links.map((link) => (
          <li key={link.label}>
            <Link to={link.path}>{link.label}</Link>
          </li>
        ))}
      </ul>
      <button
        onClick={() => navigate("/products")}
        id={"navbtn"}
        className="type2_button"
      >
        Products
      </button>
    </div>
  );
  return (
    <>
      <nav className="main_navigation">
        <Link to="/">
          <img src={logo} alt="logo" className="logo_navigation" />
        </Link>
        <ul className="links_list">
          {links.map((link) => (
            <li key={link.label}>
              <Link to={link.path}>{link.label}</Link>
            </li>
          ))}
        </ul>
        <button
          onClick={() => navigate("/products")}
          id={"navbtn"}
          className="type2_button"
        >
          Products
        </button>
        <HamburgerIcon open={open} setOpen={setOpen} />
      </nav>
      <MobileNavigation />
    </>
  );
};

export default Navigation;
