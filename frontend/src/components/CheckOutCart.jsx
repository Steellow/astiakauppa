import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function SingleProduct({ item }) {
  const product = item.product;
  const [amount] = useState(item.amount);

  return (
    <li className="list-group-item d-flex justify-content-between lh-condensed">
      <Link className="" to={`/tuote/${product.id}`} style={{ color: "inherit", textDecoration: "inherit" }}>
        <div className="row">
          <h6 className="my-0">{product.name}</h6>
          <span className="text-muted ml-2">x{amount}</span>
        </div>
      </Link>
      <span className="text-muted">{product.discprice || product.price}€</span>
    </li>
  );
}
