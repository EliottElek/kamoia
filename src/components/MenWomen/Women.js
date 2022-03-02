import React from "react";
import { useNavigate } from "react-router";
import "./MenWomen.css";
const Women = () => {
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate("/products")} className="image__button">
      <img
        alt="pic"
        src={
          "https://media.istockphoto.com/photos/female-skier-on-track-picture-id514645406?k=20&m=514645406&s=612x612&w=0&h=V3dQiFjSk3c8vME0hzukKg2mJVMCx1yD_N4ErtnGQVc="
        }
      />
      <h4>Women</h4>
    </div>
  );
};

export default Women;
