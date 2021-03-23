import React from "react";
import { Link } from "react-router-dom";

export default function SingleProduct({ img, title, desc, price, product }) {
  // TODO: Poista propseista img, title, desc ja price, tee siten et kortti ottaa infot product objektista
  return (
    <div className="col-4">
      <Link to={`/tuote/${product.title}`} style={{ color: "inherit", textDecoration: "inherit" }}>
        {/* TODO: ☝☝☝ Laita linkkiin tuotteen ID äläkä title */}
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
      </Link>
    </div>
  );
}
