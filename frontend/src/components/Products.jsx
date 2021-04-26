import { useState, useEffect } from "react";
import SingleProduct from "./SingleProduct";

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
          <select onChange={handleChange} value={dropdownValue} style={{ marginTop: "10px", marginBottom: "10px" }} className="btn btn-outline-dark">
            <option value="1">Suosituimmat</option>
            <option value="2">Halvin ensin</option>
            <option value="3">Kallein ensin</option>
            <option value="4">Aakkosjärjestyksessä</option>
          </select>
        </div>

        {sortedProducts.map((product, index) => {
          return <SingleProduct key={index} product={product} />;
        })}
      </div>
    </div>
  );
}
