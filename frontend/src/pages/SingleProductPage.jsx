import React from "react";
import { useState, useEffect } from "react";
import { useHistory } from "react-router";
import shoppingCart from "../util/ShoppingCart";
import ReactPlaceholder from "react-placeholder";
import imagePlaceholder from "../util/ImagePlaceholder";

export default function SingleProductPage({ match, user }) {
  const [product, setProduct] = useState({});
  const [discPrice, setDiscPrice] = useState();

  const URL = "http://localhost/astiakauppa/";

  const history = useHistory();

  useEffect(() => {
    let status = 0;
    fetch(URL + "getitem.php?id=" + match.params.id)
      .then((response) => {
        status = parseInt(response.status);
        return response.json();
      })
      .then(
        (response) => {
          console.log(response);
          if (status === 200) {
            setProduct(response[0]);
          } else {
            alert(response.error);
          }
        },
        (error) => {
          alert(error);
        }
      );
  }, [match.params.id]);

  const handleInputChange = (e) => {
    e.preventDefault();
    if (e.target.value > 0) {
      setDiscPrice(Number(e.target.value));
    }
  };

  const addSale = (e) => {
    let status = 0;
    e.preventDefault();
    fetch(`http://localhost/astiakauppa/addDiscount.php?discPrice=${discPrice}&id=${product.id}`)
      .then((response) => {
        status = parseInt(response.status);
        return response;
      })
      .then(
        (response) => {
          if (status === 200) {
            history.go(0);
          } else {
            alert(response.error);
          }
        },
        (error) => {
          alert(error);
        }
      );
  };

  const deleteSale = (e) => {
    let status = 0;
    e.preventDefault();
    fetch(`http://localhost/astiakauppa/addDiscount.php?discPrice=${0}&id=${product.id}`)
      .then((response) => {
        status = parseInt(response.status);
        return response;
      })
      .then(
        (response) => {
          if (status === 200) {
            history.go(0);
          } else {
            alert(response.error);
          }
        },
        (error) => {
          alert(error);
        }
      );
  };

  return (
    <div className="container card my-3">
      <div className="row">
        <div className="col-12 col-md-6">
          <ReactPlaceholder customPlaceholder={imagePlaceholder} ready={Object.keys(product).length > 0}>
            <img src={product.pic} alt={product.name} className="img-fluid mt-2" />
          </ReactPlaceholder>
        </div>
        <div className="col-12 col-md-6 mt-3 d-flex flex-column justify-content-between">
          <ReactPlaceholder type="text" rows={5} ready={Object.keys(product).length > 0}>
            <div>
              <h1 className="font-weight-bold">{product.name}</h1>
              <p>{product.description}</p>
            </div>
          </ReactPlaceholder>
          <div>
            <div className="row justify-content-between d-flex align-items-center my-3">
              <h3 className="rounded col-4 col-lg-3 text-center align-middle">{product.discprice || product.price || 12.34}€</h3>
              <button className="btn btn-primary col-7 col-lg-8 p-3 mr-3" onClick={() => shoppingCart.addItem(product)}>
                Lisää ostoskoriin <i className="fa fa-shopping-basket"></i>
              </button>
            </div>
            {user !== null && user.admin === "1" ? (
              product.discprice ? (
                <button className="btn btn-danger mb-2 col-12" onClick={deleteSale}>
                  Poista alennus
                </button>
              ) : (
                <div className="input-group mb-3">
                  <input
                    type="number"
                    onChange={handleInputChange}
                    placeholder="Alennettu hinta (€)"
                    aria-label="Alennettu hinta (€)"
                    className="form-control"
                  />
                  <div className="input-group-append">
                    <button className="btn btn-outline-secondary" onClick={addSale}>
                      Lisää alennukseen
                    </button>
                  </div>
                </div>
              )
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
