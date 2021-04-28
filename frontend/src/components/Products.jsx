import { useState, useEffect } from "react";
import SingleProduct from "./SingleProduct";
import img from "../img/banneri.png";
import { Link } from "react-router-dom";

export default function Products({ products }) {
  const [sortedProducts, sortProducts] = useState([]);
  const [dropdownValue, setdropdownValue] = useState("1");

  const handleChange = (e) => {
    if (e.target.value === "1") {
      setdropdownValue("1");
      sortProducts([
        ...products.sort((a, b) => {
          if (a.id < b.id) {
            return -1;
          }
          if (a.id > b.id) {
            return 1;
          }
          return 0;
        }),
      ]);
    } else if (e.target.value === "2") {
      setdropdownValue("2");
      sortProducts([
        ...products.sort((a, b) => {
          if (a.price < b.price) {
            return -1;
          }
          if (a.price > b.price) {
            return 1;
          }
          return 0;
        }),
      ]);
    } else if (e.target.value === "3") {
      setdropdownValue("3");
      sortProducts([
        ...products.sort((a, b) => {
          if (a.price > b.price) {
            return -1;
          }
          if (a.price < b.price) {
            return 1;
          }
          return 0;
        }),
      ]);
    } else if (e.target.value === "4") {
      setdropdownValue("4");
      sortProducts([...products.sort((a, b) => a.name.localeCompare(b.name))]);
    }
  };

  useEffect(() => {
    sortProducts(products);
    setdropdownValue("1"); // Using hook on dropdown so it defaults to 1 when changing category
  }, [products]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <p className="text-center">
            <img className="img-fluid p-4 text-center" src={img} style={{ width: "100%" }} alt="Banner"></img>
          </p>
        </div>
        <div className="col-12">
          <ul className="list-group list-group-horizontal">
            <Link to="/lautaset" className=" btn btn-outline-dark my-2">
              Lautaset
            </Link>
            <Link to="/mukit" className="btn btn-outline-dark my-2 mx-1">
              Mukit
            </Link>
            <Link to="/lasit" className="btn btn-outline-dark my-2 mr-1">
              Lasit
            </Link>
            <select onChange={handleChange} value={dropdownValue} className="btn btn-outline-dark my-2 col-4 col-md-3 col-lg-2">
              <option value="1">Suosituimmat</option>
              <option value="2">Halvin ensin</option>
              <option value="3">Kallein ensin</option>
              <option value="4">Aakkosjärjestyksessä</option>
            </select>
          </ul>
        </div>

        {sortedProducts.map((product, index) => {
          return <SingleProduct key={index} product={product} />;
        })}
      </div>
    </div>
  );
}
