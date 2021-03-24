import React from "react";
import SingleProduct from "./SingleProduct";

export default function Products({ products }) {
  return (
    <div className="container">
      <div className="row">
        {products.map((product) => {
          // KEKSI  KEY TUOTTEILLE
          return <SingleProduct key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
}
