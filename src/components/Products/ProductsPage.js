import React from "react";
import HeroMini from "../Hero/HeroMini";
import Products from "./Products";

import junior from "../data/junior";
import fun from "../data/fun";
import racing from "../data/racing";
import senior from "../data/senior";
import free from "../data/free";

const ProductsPage = () => {
  return (
    <div>
      <HeroMini title={"Products"} />
      <h2 id="news" style={{ marginLeft: "100px" }}>
        2024 upcomming !
      </h2>
      <Products products={free} newProduct />
      <h2 id="racing" style={{ marginLeft: "100px" }}>
        Racing surf
      </h2>
      <Products products={racing} />
      <h2 id="fun" style={{ marginLeft: "100px", marginTop: "40px" }}>
        Fun surf
      </h2>
      <Products products={fun} />
      <h2 id="junior" style={{ marginLeft: "100px", marginTop: "40px" }}>
        Junior
      </h2>
      <Products products={junior} />
      <h2 id="senior" style={{ marginLeft: "100px", marginTop: "40px" }}>
        Senior
      </h2>
      <Products products={senior} />
    </div>
  );
};

export default ProductsPage;
