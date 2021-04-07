import React from "react";
import NoResultsPage from "../pages/NoResultsPage";
import { useState, useEffect } from "react";
import SingleProduct from "../components/SingleProduct";

export default function SearchResults({ match }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const URL = "http://localhost/astiakauppa/search.php/?criteria=" + match.params.searchterm;
  useEffect(() => {
    let status = 0;
    fetch(URL)
      .then((response) => {
        status = parseInt(response.status);
        return response.json();
      })
      .then(
        (response) => {
          if (status === 200) {
            setProducts(response);
          } else {
            alert(response.error);
          }
          setLoading(false);
        },
        (error) => {
          alert(error);
        }
      );
  }, [URL]);

  if (loading) {
    return <div style={{ height: "20rem" }}></div>;
  } else {
    if (products === undefined || products.length === 0) {
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
      );
    }
  }
}
