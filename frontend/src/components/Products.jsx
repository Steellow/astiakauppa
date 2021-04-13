import SingleProduct from "./SingleProduct";

export default function Products({ products }) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">

      <select style={{ marginTop: "10px", marginBottom: "10px" }} className="btn btn-outline-dark">
        <option value="1">Lajittele</option>
        <option value="2">Halvin ensin</option>
        <option value="3">Kallein ensin</option>
        <option value="4">Aakkosjärjestyksessä</option>
      </select>
        </div>
        
        {products.map((product) => {
          return <SingleProduct key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
}
