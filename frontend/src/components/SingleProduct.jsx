import React from "react";

export default function SingleProduct({ img, title, desc, price }) {
  return (
    <div className="col-4">
      <div className="my-1 card">
        <img className="card-img-top" src={img} alt="Muumimuki" />
        <div className="card-body">
          <div className="card-title">{title}</div>
          <div className="card-text">
            <p>{desc}</p>
            <p>Hinta: {price}€</p>
          </div>
        </div>
      </div>
    </div>
  );
}
