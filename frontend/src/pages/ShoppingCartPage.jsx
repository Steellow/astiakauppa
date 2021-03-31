import React, { useState, useEffect } from "react";
import ShoppingCartItem from "../components/ShoppingCartItem";
import { Link } from "react-router-dom";
import shoppingCart from "../util/ShoppingCart";

function ShoppingCartPage() {
  const [items, setItems] = useState(shoppingCart.getItems());
  const [total, setTotal] = useState(0);

  const handleRemove = (product) => {
    shoppingCart.deleteItem(product);
    setItems(shoppingCart.getItems());
    calcTotal();
  };

  const calcTotal = () => {
    let i = 0;
    for (let ii = 0; ii < items.length; ii++) {
      const item = items[ii];
      i += item.amount * item.product.price;
    }
    setTotal(i);
  };

  useEffect(() => {
    calcTotal();
  }, [items]);

  return (
    <div className="container card my-3">
      <div className="row">
        <div className="col-12">
          {items.map((item) => {
            return <ShoppingCartItem key={item.product.id} item={item} handleRemove={handleRemove} callBack={calcTotal} />;
          })}
        </div>
        <div className="bg-secondary col-12 justify-content-between d-flex summary">
          <p className="d-inline-block p-3">Yhteensä</p>
          <p className="d-inline-block p-3">{total}€</p>
          {/* TODO: update total sum on item add/remove without refreshing page */}
          <Link to="/tilaussivu" className="my-3 btn btn-success pt-3" type="button">
            Jatka tilaukseen
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCartPage;
