import React, { useState } from "react";
import { Link } from "react-router-dom";
import shoppingCart from "../util/ShoppingCart";

export default function SingleProduct({ item, handleRemove, callBack }) {
  const [amount, setAmount] = useState(item.amount);
  const product = item.product;

  const decrease = () => {
    if (amount > 1) {
      setAmount(amount - 1);
      shoppingCart.changeAmount(product, -1);
      callBack();
    }
  };

  const increase = () => {
    setAmount(amount + 1);
    shoppingCart.changeAmount(product, +1);
    callBack();
  };

  return (
    <div className="row p-3 border-bottom">
      <img src={product.pic} alt={product.name} className="img-fluid col-12 col-md-3" />
      <Link className="d-inline align-top col-9 col-md-7 h-min" to={`/tuote/${product.id}`} style={{ color: "inherit", textDecoration: "inherit" }}>
        <h2>{product.name}</h2>
      </Link>
      <div className="col-3 col-md-2 d-flex justify-content-between flex-column align-end text-right p-0">
        <h4 className="align-right">{product.price}€</h4>
        <div>
          <div className="mr-0 ml-auto">
            <input type="button" value="-" className="d-inline " onClick={decrease} />
            <input readOnly style={{ maxWidth: "32px" }} className="text-center" type="number" value={amount} />
            <input type="button" value="+" className="d-inline " onClick={increase} />
          </div>
          <input type="button" value="Poista" className="w-75" onClick={() => handleRemove(product)} />
        </div>
      </div>
    </div>
  );
}
