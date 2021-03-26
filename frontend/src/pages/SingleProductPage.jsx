import React from "react";
import { useState, useEffect } from "react";

export default function SingleProductPage({ match }) {
  const [product, setProduct] = useState({});

  const URL = "http://localhost/astiakauppa/";

  let status = 0;
  useEffect(() => {
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
  }, []);

  // // Example product
  // const product = {
  //   img: "https://www.finmug.fi/WebRoot/vilkasfi03/Shops/2018071202/5CC2/DB1F/DD4B/3035/48EA/0A28/1011/5793/Muumimuki_iltauinti_2.1.jpeg",
  //   title: "MUUMIMUKI",
  //   desc:
  //     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  //   price: 345,
  // };

  return (
    <div className="container card my-3">
      <div className="row">
        <div className="col-12 col-md-6">
          <img src={product.pic} alt={`Picture of ${product.name}`} className="img-fluid mt-2" />
        </div>
        <div className="col-12 col-md-6 mt-3 d-flex flex-column justify-content-between">
          <div>
            <h1 className="font-weight-bold">{product.name}</h1>
            <p>{product.description}</p>
          </div>
          <div className="row justify-content-between d-flex align-items-center my-3">
            <h3 className="rounded col-4 col-lg-3 text-center align-middle">{product.price}€</h3>
            <button className="btn btn-primary col-7 col-lg-8 p-3 mr-3">
              Lisää ostoskoriin <i className="fa fa-shopping-basket"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
