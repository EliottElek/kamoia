import React from "react";
import "./Products.css";
const Product = ({ product }) => {
  return (
    <div className="products__grid__item">
      <img src={product.url} alt="pic" />
      <h3>{product.name}</h3>
      <h4>{product.description}</h4>
      <h5>{product.price}</h5>
    </div>
  );
};

export default Product;
