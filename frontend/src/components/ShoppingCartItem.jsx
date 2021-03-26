import React from "react";
import { Link } from "react-router-dom";

export default function SingleProduct({ product }) {
  return (
    <div className="d-flex justify-content-between">
      <img src={product.pic} alt="TODO" className="img-fluid" style={{ maxWidth: "20vw" }} />
      <h2>{product.name}</h2> {/* TODO: LINKKI TUOTTEESEEN */}
      <h4>{product.price}</h4>
    </div>
  );
}
