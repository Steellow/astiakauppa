import React, { useState, useEffect } from 'react';
import SingleProduct from "./SingleProduct";

export default function Products({ products }) {
  const [data, setData] = useState([]);
  const [sortType, setSortType] = useState('1');

  useEffect(() => {
    const sortArray = type => {
      const types = {
        1: '1',
        2: '2',
        3: '3',
      };
      const sortProperty = types[type];
      const sorted = [...products].sort((a, b) => b[sortProperty] - a[sortProperty]);
      setData(sorted);
    };

    sortArray(sortType);
  }, [sortType]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">

      <select onChange={(e) => setSortType(e.target.value)} 
      style={{ marginTop: "10px", marginBottom: "10px" }} className="btn btn-outline-dark">
        <option value="1">Lajittele</option>
        <option value="2">Halvin ensin</option>
        <option value="3">Kallein ensin</option>
      </select>

        </div>
        
        {products.map((product) => {
          return <SingleProduct key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
}
