import Header from "./components/Header";
import Footer from "./components/Footer";
import Products from "./components/Products";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const allProducts = [
    {
      img: "https://www.finmug.fi/WebRoot/vilkasfi03/Shops/2018071202/5CC2/DB1F/DD4B/3035/48EA/0A28/1011/5793/Muumimuki_iltauinti_2.1.jpeg",
      title: "MUUMIMUKI",
      desc: "ASDFASDFASDFASDF",
      price: 345,
    },
    {
      img: "https://www.finmug.fi/WebRoot/vilkasfi03/Shops/2018071202/5CC2/DB1F/DD4B/3035/48EA/0A28/1011/5793/Muumimuki_iltauinti_2.1.jpeg",
      title: "MUUMIMUKI",
      desc: "ASDFASDFASDFASDF",
      price: 345,
    },
    {
      img: "https://www.finmug.fi/WebRoot/vilkasfi03/Shops/2018071202/5CC2/DB1F/DD4B/3035/48EA/0A28/1011/5793/Muumimuki_iltauinti_2.1.jpeg",
      title: "MUUMIMUKI",
      desc: "ASDFASDFASDFASDF",
      price: 345,
    },
    {
      img: "https://www.finmug.fi/WebRoot/vilkasfi03/Shops/2018071202/5CC2/DB1F/DD4B/3035/48EA/0A28/1011/5793/Muumimuki_iltauinti_2.1.jpeg",
      title: "MUUMIMUKI",
      desc: "ASDFASDFASDFASDF",
      price: 345,
    },
    {
      img: "https://www.finmug.fi/WebRoot/vilkasfi03/Shops/2018071202/5CC2/DB1F/DD4B/3035/48EA/0A28/1011/5793/Muumimuki_iltauinti_2.1.jpeg",
      title: "MUUMIMUKI",
      desc: "ASDFASDFASDFASDF",
      price: 345,
    },
  ];

  return (
    <Router>
      <div className="container">
        <Header />
        <Switch>
          <Route exact path="/" render={(props) => <Products products={allProducts} {...props} />} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
