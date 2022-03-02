import React from "react";
import { useNavigate } from "react-router";
import "./MenWomen.css";
const Men = () => {
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate("/products")} className="image__button">
      <img
        alt="pic"
        src={
          "https://contents.mediadecathlon.com/s798688/k$ac318bcfc0802417d14c626e99a5f8ea/page%20sport%20collection%20homme.jpg"
        }
      />
      <h4>Men</h4>
    </div>
  );
};

export default Men;
