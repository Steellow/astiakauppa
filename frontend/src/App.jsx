import Header from "./components/Header";
import Footer from "./components/Footer";
import Products from "./components/Products";
import SingleProductPage from "./pages/SingleProductPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import ShoppingCartPage from "./pages/ShoppingCartPage";
import OrderingPage from "./pages/OrderingPage";

function App() {
  const [allProducts, setItems] = useState([]);

  const URL = "http://localhost/astiakauppa/";

  let status = 0;

  const [searchCriteria,setSearchCriteria] = useState(null);

  function search(criteria) {
    console.log(criteria);
    setSearchCriteria(criteria);
    
  }
  
  useEffect(() => {

    let address = URL + 'retrieve.php';
    console.log (searchCriteria);
    if (searchCriteria != null) {
        address = URL + 'search.php/?criteria=' + searchCriteria;
    }
    fetch(address)
      .then((response) => {
        status = parseInt(response.status);
        return response.json();
      })
      .then(
        (response) => {
          if (status === 200) {
            setItems(response);
          } else {
            alert(response.error);
          }
        },
        (error) => {
          alert(error);
        }
      );
  }, [searchCriteria]);

  return (
    <Router>
      <div className="container">
        <Header search={search}/>
        <Switch>
          <Route exact path="/" render={(props) => <Products products={allProducts} {...props} />} />
          <Route path="/ostoskori" component={ShoppingCartPage} />
          <Route path="/tilaussivu" component={OrderingPage} />
          <Route
            path="/lautaset"
            render={(props) => <Products products={allProducts.filter((prod) => Number(prod.groupid) === Number(1))} {...props} />}
          />
          <Route
            path="/mukit"
            render={(props) => <Products products={allProducts.filter((prod) => Number(prod.groupid) === Number(2))} {...props} />}
          />
          <Route
            path="/lasit"
            render={(props) => <Products products={allProducts.filter((prod) => Number(prod.groupid) === Number(3))} {...props} />}
          />
          <Route path="/tuote/:id" component={SingleProductPage} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
