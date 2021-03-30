import Header from "./components/Header";
import Footer from "./components/Footer";
import Products from "./components/Products";
import SingleProductPage from "./pages/SingleProductPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import ShoppingCartPage from "./pages/ShoppingCartPage";
import LogInPage from "./pages/LogInPage";
import RegistrationForm from "./components/RegistrationForm";
import CheckOutPage from "./pages/CheckOutPage";

function App() {
  const [allProducts, setItems] = useState([]);
  const [shoppingCart, setShoppingCart] = useState([]);

  const URL = "http://localhost/astiakauppa/";

  let status = 0;

  const [searchCriteria,setSearchCriteria] = useState(null);

  function search(criteria) {
    // console.log(criteria);
    setSearchCriteria(criteria);
    
  }
  
  useEffect(() => {

    let address = URL + 'retrieve.php';
    // console.log (searchCriteria);
    if (searchCriteria !=null) {
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

  const addToCart = (product) => {
    setShoppingCart(shoppingCart.concat(product));
  };

  return (
    <Router>
      <div className="container">
        <Header search={search}/>
        <Switch>
          <Route exact path="/" render={(props) => <Products products={allProducts} {...props} />} />
          <Route path="/ostoskori" component={ShoppingCartPage} />
          <Route path="/kirjaudu" component={LogInPage} />
          <Route path="/rekisteri" component={RegistrationForm} />
          <Route path="/checkout" component={CheckOutPage} />
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
          <Route path="/tuote/:id" render={(props) => <SingleProductPage addToCart={addToCart} {...props} />} />
          {/* <Route path="/tuote/:id" component={SingleProductPage} /> */}
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
