import React from "react";
import Product from "./Product";
const Products = ({ products, newProduct }) => {
  return (
    <div className="products__grid">
      {products.map((product, i) => (
        <Product newProduct = {newProduct} product={product} key={i} />
      ))}
    </div>
  );
};

export default Products;
