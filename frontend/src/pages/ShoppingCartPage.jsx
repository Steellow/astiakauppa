import React from "react";
import ShoppingCartItem from "../components/ShoppingCartItem";

function ShoppingCartPage() {
  const products = [
    {
      amount: 1,
      id: 1,
      name: "TUOTE",
      price: 12.34,
      pic:
        "https://arabia.fi/var/rorstrand/storage/images/frontpage/astiasarjat/muumi-muki-listaus/2015-nuuskamuikkunen-vihrea/listaus-listing/26865-1-fin-FI/listaus-listing.png",
    },
    {
      amount: 1,
      id: 3,
      name: "TUOTE2",
      price: 31.34,
      pic:
        "https://arabia.fi/var/rorstrand/storage/images/frontpage/astiasarjat/muumi-muki-listaus/2015-nuuskamuikkunen-vihrea/listaus-listing/26865-1-fin-FI/listaus-listing.png",
    },
    {
      amount: 1,
      id: 3,
      name: "TUOTE3",
      price: 12,
      pic:
        "https://arabia.fi/var/rorstrand/storage/images/frontpage/astiasarjat/muumi-muki-listaus/2015-nuuskamuikkunen-vihrea/listaus-listing/26865-1-fin-FI/listaus-listing.png",
    },
    {
      amount: 1,
      id: 4,
      name: "TUOTE4",
      price: 444,
      pic:
        "https://arabia.fi/var/rorstrand/storage/images/frontpage/astiasarjat/muumi-muki-listaus/2015-nuuskamuikkunen-vihrea/listaus-listing/26865-1-fin-FI/listaus-listing.png",
    },
  ];

  return (
    <div className="container card my-3">
      <div className="row">
        <div className="col-9">
          {products.map((product) => {
            return <ShoppingCartItem key={product.id} product={product} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default ShoppingCartPage;
