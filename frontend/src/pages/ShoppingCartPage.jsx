import React, { useState, useEffect, useCallback } from "react";
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

  const calcTotal = useCallback(() => {
    let i = 0;
    for (let ii = 0; ii < items.length; ii++) {
      const item = items[ii];
      i += item.amount * item.product.price;
    }
    setTotal(i);
  }, [items]);

  useEffect(() => {
    calcTotal();
  }, [calcTotal]);

  return (
    <div className="container card my-3">
      <div className="row">
        <div className="col-12">
          {items.map((item) => {
            return (
              <ShoppingCartItem key={item.product.id} item={item} handleRemove={handleRemove} callBack={() => setItems(shoppingCart.getItems)} />
            );
          })}
        </div>
        <div className="bg-dark col-12 justify-content-between d-flex summary align-middle">
          <p className="d-inline-block m-4">Yhteensä</p>
          <p className="d-inline-block m-4">{total.toFixed(2)}€</p>
          <Link to="/kirjaudu" className="my-3 btn btn-success pt-3" type="button">
            Jatka tilaukseen
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCartPage;
