import React from "react";
import { Link } from "react-router-dom";
import ReactPlaceholder from "react-placeholder";
import { RectShape } from "react-placeholder/lib/placeholders";

export default function SingleProduct({ product }) {
  const imagePlaceholder = (
    <div className="card-img-top p-2 ">
      <RectShape color="#CDCDCD" className="rounded" />
    </div>
  );

  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 my-2">
      <Link to={`/tuote/${product.id}`} style={{ color: "inherit", textDecoration: "inherit" }}>
        <div className="card h-100">
          <ReactPlaceholder customPlaceholder={imagePlaceholder} ready={!product.placeholder}>
            <img className="card-img-top p-2" src={product.pic} alt="Tuotekuva" />
          </ReactPlaceholder>
          <div className="card-body pb-1 pt-0 d-flex flex-column justify-content-between">
            <div className="card-title">
              <ReactPlaceholder type="text" rows={2} ready={!product.placeholder}>
                <h6 className="text-uppercase font-weight-bold hyphenate" style={{ overflowWrap: "normal" }}>
                  {product.name}
                </h6>
              </ReactPlaceholder>
            </div>
            <div className="card-text">
              <p className="font-weight-bold text-danger h5">{product.discprice || product.price || 12.34}€</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
