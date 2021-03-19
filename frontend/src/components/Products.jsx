import React from "react";
import SingleProduct from "./SingleProduct";

export default function Products({ products }) {
  return (
    <div className="container">
      <div className="row">
        {products.map((product) => {
          // KEKSI  KEY TUOTTEILLE
          return <SingleProduct img={product.img} title={product.title} desc={product.desc} price={product.price} />;
        })}
      </div>
    </div>
  );
}
