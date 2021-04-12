import Dropdown from "./Dropdown";
import SingleProduct from "./SingleProduct";

export default function Products({ products }) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <Dropdown />
        </div>
        {products.map((product) => {
          return <SingleProduct key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
}
