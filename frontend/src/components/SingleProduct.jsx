import React from "react";
import { Link } from "react-router-dom";

export default function SingleProduct({ product }) {
  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 my-2">
      <Link to={`/tuote/${product.id}`} style={{ color: "inherit", textDecoration: "inherit" }}>
        {/* TODO: ☝☝☝ Laita linkkiin tuotteen ID äläkä title */}
        <div className="card h-100">
          <img className="card-img-top p-2" src={product.pic} alt="Tuotekuva" />
          <div className="card-body pb-1 d-flex flex-column justify-content-between">
            <div className="card-title h4 text-uppercase">{product.name}</div>
            <div className="card-text">
              <p>{product.description}</p>
              <p className="font-weight-bold text-danger h5">{product.price}€</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
