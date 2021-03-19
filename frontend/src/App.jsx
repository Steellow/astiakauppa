import Header from "./components/Header";
import Footer from "./components/Footer";
import Products from "./components/Products";

function App() {
  const products = [
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
    <div className="container">
      <Header />
      <Products products={products} />
      <Footer />
    </div>
  );
}

export default App;
