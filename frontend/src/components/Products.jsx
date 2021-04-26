import SingleProduct from "./SingleProduct";
import img from '../img/banneri.png';
import {Link} from 'react-router-dom';

export default function Products({ products }) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <p className="text-center">
            <img className="img-fluid p-4 text-center" src={img} style={{width:'100%'}} alt="Banner"></img>
          </p>
        </div>
        <div className="col-12">
          <ul className="list-group list-group-horizontal">
            <Link to="/lautaset" className=" btn btn-outline-dark my-2">
              Lautaset
            </Link>
            <Link to="/mukit" className="btn btn-outline-dark my-2 mx-1">
              Mukit
            </Link>
            <Link to="/lasit" className="btn btn-outline-dark my-2 mr-1">
              Lasit
            </Link>
            <select style={{ marginTop: "10px", marginBottom: "10px" }} className="btn btn-outline-dark">
              <option value="1">Lajittele</option>
              <option value="2">Halvin ensin</option>
              <option value="3">Kallein ensin</option>
              <option value="4">Aakkosjärjestyksessä</option>
            </select>
          </ul>
        </div>

        {products.map((product) => {
          return <SingleProduct key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
}
