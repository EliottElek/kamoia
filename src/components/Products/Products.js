import React from "react";
import Product from "./Product";
const Products = () => {
  const products = [
    {
      name: "Model 1",
      price: "529$",
      description: "best skis ever.",
      url: "https://www.salomon.com/fr-fr/shop-emea/media/catalog/product/l/4/l41137400_jnwarjpujqganzqw.jpg?dpr=3&fit=cover&orient=1&quality=80&optimize=high&format=pjpg&auto=webp&width=650",
    },
    {
      name: "Model 2",
      price: "429$",
      description: "best skis ever.",
      url: "https://www.salomon.com/fr-fr/shop-emea/media/catalog/product/l/4/l41494200_qadpyi3pdscks59b.jpg?dpr=3&fit=cover&orient=1&quality=80&optimize=high&format=pjpg&auto=webp&width=650",
    },
    {
      name: "Model 3",
      price: "129$",
      description: "best skis ever.",
      url: "https://www.salomon.com/fr-fr/shop-emea/media/catalog/product/L/4/L41494100_f1ce68e61c7eda8a8211e152dc22a6ae.jpg?dpr=3&fit=cover&orient=1&quality=80&optimize=high&format=pjpg&auto=webp&width=650",
    },
    {
      name: "Model 4",
      price: "529$",
      description: "best skis ever.",
      url: "https://www.salomon.com/fr-fr/shop-emea/media/catalog/product/l/4/l41137300_mydgxvakyimbe2py.jpg?dpr=3&fit=cover&orient=1&quality=80&optimize=high&format=pjpg&auto=webp&width=650",
    },
    {
      name: "Model 5",
      price: "929$",
      description: "best skis ever.",
      url: "https://www.salomon.com/fr-fr/shop-emea/media/catalog/product/l/4/l41493800_yigwteqjf0zdhaco.jpg?dpr=3&fit=cover&orient=1&quality=80&optimize=high&format=pjpg&auto=webp&width=650",
    },
    {
      name: "Model 6",
      price: "129$",
      description: "best skis ever.",
      url: "https://www.salomon.com/fr-fr/shop-emea/media/catalog/product/L/4/L41494400_8440029481051c3c340db1c6f95fff0b.jpg?dpr=3&fit=cover&orient=1&quality=80&optimize=high&format=pjpg&auto=webp&width=650",
    },
    {
      name: "Model 7",
      price: "129$",
      description: "best skis ever.",
      url: "https://www.salomon.com/fr-fr/shop-emea/media/catalog/product/l/4/l41137200_pbbbs165son1r5af.jpg?dpr=3&fit=cover&orient=1&quality=80&optimize=high&format=pjpg&auto=webp&width=650",
    },
    {
      name: "Model 8",
      price: "129$",
      description: "best skis ever.",
      url: "https://www.salomon.com/fr-fr/shop-emea/media/catalog/product/l/4/l41496500_xfnzbmcvjmjdru18.jpg?dpr=3&fit=cover&orient=1&quality=80&optimize=high&format=pjpg&auto=webp&width=650",
    },
    {
      name: "Model 3",
      price: "129$",
      description: "best skis ever.",
      url: "https://www.salomon.com/fr-fr/shop-emea/media/catalog/product/L/4/L41494100_f1ce68e61c7eda8a8211e152dc22a6ae.jpg?dpr=3&fit=cover&orient=1&quality=80&optimize=high&format=pjpg&auto=webp&width=650",
    },
    {
      name: "Model 4",
      price: "529$",
      description: "best skis ever.",
      url: "https://www.salomon.com/fr-fr/shop-emea/media/catalog/product/l/4/l41137300_mydgxvakyimbe2py.jpg?dpr=3&fit=cover&orient=1&quality=80&optimize=high&format=pjpg&auto=webp&width=650",
    },
    {
      name: "Model 6",
      price: "129$",
      description: "best skis ever.",
      url: "https://www.salomon.com/fr-fr/shop-emea/media/catalog/product/L/4/L41494400_8440029481051c3c340db1c6f95fff0b.jpg?dpr=3&fit=cover&orient=1&quality=80&optimize=high&format=pjpg&auto=webp&width=650",
    },
    {
      name: "Model 7",
      price: "129$",
      description: "best skis ever.",
      url: "https://www.salomon.com/fr-fr/shop-emea/media/catalog/product/l/4/l41137200_pbbbs165son1r5af.jpg?dpr=3&fit=cover&orient=1&quality=80&optimize=high&format=pjpg&auto=webp&width=650",
    },
  ];
  return (
    <div className="products__grid">
      {products.map((product) => (
        <Product product={product} />
      ))}
    </div>
  );
};

export default Products;
