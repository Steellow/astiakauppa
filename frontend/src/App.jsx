import Header from "./components/Header";
import Footer from "./components/Footer";
import Products from "./components/Products";
import SingleProductPage from "./pages/SingleProductPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import ShoppingCartPage from "./pages/ShoppingCartPage";
import LogInPage from "./pages/LogInPage";
import RegistrationPage from "./pages/RegistrationPage";
import CheckOutPage from "./pages/CheckOutPage";
import PromptLogin from "./pages/PromptLogin";
import RegistrationSuccess from "./pages/RegistrationSuccess";
import SearchResults from "./pages/SearchResults";
import AdminDashboard from "./pages/AdminDashboard";
import AdminSingleOrder from "./pages/AdminSingleOrder";

function App() {
  const [allProducts, setItems] = useState([]);

  const URL = "http://localhost/astiakauppa/retrieve.php";

  useEffect(() => {
    let status = 0;
    fetch(URL)
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
  }, []);

  return (
    <Router>
      <div className="container">
        <Header />
        <Switch>
          <Route exact path="/" render={(props) => <Products products={allProducts} {...props} />} />
          <Route path="/ostoskori" component={ShoppingCartPage} />
          <Route path="/kirjaudu" component={LogInPage} />
          <Route path="/asiakastiedot" component={PromptLogin} />
          <Route path="/rekisteri" component={RegistrationPage} />
          <Route path="/checkout" component={CheckOutPage} />
          <Route path="/rekisteriok" component={RegistrationSuccess} />
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
          <Route path="/haku/:searchterm" component={SearchResults} />
          <Route path="/tuote/:id" component={SingleProductPage} />
          <Route exact path="/admin" component={AdminDashboard} />
          <Route path="/admin/tilaus/:ordernum" component={AdminSingleOrder} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
