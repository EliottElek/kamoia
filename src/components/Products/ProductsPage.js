import React from "react";
import HeroMini from "../Hero/HeroMini";
import Products from "./Products";
const ProductsPage = () => {
  return (
    <div>
      <HeroMini title={"Products"} />
      <Products />
    </div>
  );
};

export default ProductsPage;
