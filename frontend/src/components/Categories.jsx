import React from "react";
import SingleProduct from "./SingleProduct";

//ALUSTAVA POHJA

import {Route, BrowserRouter as Router} from "react-router-dom";

import mukit from "./?"
import lasit from "./?"
import lautaset from "./?"

export default function Categories({ products }) {
  return (

      <Router>         
    <div className="container">
        <Header />
            {/* All Products */}
            <Route exact path="/" render={(props) => <Products products={allProducts} {...props} />} />

            {/* Mukit */}
            <Route exact path="/mukit" render={(props) => <Products products={mukit} {...props} />} />

            {/* Lasit */}
            <Route exact path="/lasit" render={(props) => <Products products={lasit} {...props} />} />

            {/* Lautaset */}
            <Route exact path="/lautaset" render={(props) => <Products products={lautaset} {...props} />} />

        <Footer />
    </div>

    </Router>
  );
}