import React, { useState, useEffect, useCallback } from "react";
import ShoppingCartItem from "../components/ShoppingCartItem";
import { Link } from "react-router-dom";
import shoppingCart from "../util/ShoppingCart";

function ShoppingCartPage({ user, updateTotalProducts }) {
  const [items, setItems] = useState(shoppingCart.getItems());
  const [total, setTotal] = useState(0);

  const handleRemove = (product) => {
    shoppingCart.deleteItem(product);
    setItems(shoppingCart.getItems());
    updateTotalProducts();
    calcTotal();
  };

  const calcTotal = useCallback(() => {
    let i = 0;
    for (let ii = 0; ii < items.length; ii++) {
      const item = items[ii];
      i += item.amount * (item.product.discprice || item.product.price);
    }
    setTotal(i);
  }, [items]);

  useEffect(() => {
    calcTotal();
  }, [calcTotal]);

  const callBack = () => {
    setItems(shoppingCart.getItems);
    updateTotalProducts();
  };

  return (
    <div className="container card my-3">
      <div className="row">
        <div className="col-12">
          {items.map((item) => {
            return <ShoppingCartItem key={item.product.id} item={item} handleRemove={handleRemove} callBack={callBack} />;
          })}
        </div>
        <div className="bg-dark col-12 text-white">
          <p className="h3 col-6 col-md-4 d-inline-block my-4 text-md-center align-middle">Yhteensä</p>
          <p className="h3 col-6 col-md-4 d-inline-block my-4 text-right text-md-center align-middle">{total.toFixed(2)}€</p>
          {user ? (
            <Link to="/checkout" className="my-3 btn btn-success py-3 col-12 col-md-4" type="button">
              Jatka tilaukseen
            </Link>
          ) : (
            <Link to="/asiakastiedot" className="my-3 btn btn-success py-3 col-12 col-md-4" type="button">
              Jatka tilaukseen
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default ShoppingCartPage;
