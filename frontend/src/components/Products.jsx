import React from "react";
import SingleProduct from "./SingleProduct";
import NoResultsPage from "../pages/NoResultsPage";

export default function Products({ products }) {
  if (products===undefined || products.length == 0) {
    return <NoResultsPage />;
  } else {
  return (
    <div className="container">
      <div className="row">
        {products.map((product) => {
          return <SingleProduct key={product.id} product={product} />;
        })}
      </div>
    </div>
  );}
}
