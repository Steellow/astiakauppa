import React from "react";
import { Link } from "react-router-dom";

export default function SingleProduct({ product }) {
  return (
    <div className="row justify-content-between p-3 border-bottom">
      <div>
      <img src={product.pic} alt="TODO" className="img-fluid" style={{maxWidth: "12vw", width: "100%"}} />
      <h2 className="d-inline align-top">{product.name}</h2> {/* TODO: LINKKI TUOTTEESEEN */}
      </div>
      
      <div className="d-flex justify-content-between flex-column">
      <h4 className="align-right">{product.price}€</h4>
      <div>
      <input type="button" value="-"/>
      <input style={{ maxWidth: "32px", textAlign: "center"}} type="number" value="1"/>
      <input type="button" value="+"/>
      </div>
      <input type="button" value="Poista" className="d-block"/>
        
      </div>

    </div>
  );
}
