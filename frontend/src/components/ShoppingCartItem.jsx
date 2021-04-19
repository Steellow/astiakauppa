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
      <h2 className="d-inline align-top col-9 col-md-7 h-min">
        <Link to={`/tuote/${product.id}`} style={{ color: "inherit", textDecoration: "inherit" }}>
          {product.name}
        </Link>
      </h2>
      <div className="col-3 col-md-2 d-flex justify-content-between flex-column align-end text-right p-0">
        <h4 className="align-right">{product.discprice || product.price}€</h4>
        <div className="form-group">
          <div className="mr-0 ml-auto input-group">
            <div className="input-group-prepend">
              <button className="btn btn-outline-secondary" onClick={decrease}>
                -
              </button>
            </div>
            <input readOnly type="number" style={{ backgroundColor: "transparent" }} value={amount} className="form-control text-center" />
            <div className="input-group-append">
              <button className="btn btn-outline-secondary" onClick={increase}>
                +
              </button>
            </div>
          </div>
          <input type="button" value="Poista" className="mt-1 btn btn-outline-secondary w-100" onClick={() => handleRemove(product)} />
        </div>
      </div>
    </div>
  );
}
