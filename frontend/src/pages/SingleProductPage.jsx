import React from "react";

export default function SingleProductPage({ match }) {
  console.log(match);
  // ☝ Ota matchista tuotteen ID ja fetchaa sen avulla tietokannasta oikee tuote

  // Example product
  const product = {
    img: "https://www.finmug.fi/WebRoot/vilkasfi03/Shops/2018071202/5CC2/DB1F/DD4B/3035/48EA/0A28/1011/5793/Muumimuki_iltauinti_2.1.jpeg",
    title: "MUUMIMUKI",
    desc: "ASDFASDFASDFASDF",
    price: 345,
  };

  return (
    <div className="container">
      <div className="col-12">
        <div className="my-1 card">
          <img className="card-img-top" src={product.img} alt="Muumimuki" />
          <div className="card-body">
            <div className="card-title font-weight-bold">{product.title}</div>
            <div className="card-text">
              <p>{product.desc}</p>
              <p>Hinta: {product.price}€</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
