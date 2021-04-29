import React, { useState, useEffect, useCallback } from "react";
import shoppingCart from "../util/ShoppingCart";
import CheckOutCart from "../components/CheckOutCart";
import { useHistory } from "react-router";

export default function CheckOutPage({ user, updateTotalProducts, empty }) {
  const URLI = "http://localhost/astiakauppa/checkout.php";
  const [items, setItems] = useState(shoppingCart.getItems());
  const [total, setTotal] = useState(0);
  const [finished, setFinished] = useState(false);
  const [firstname, setFirstname] = useState(user !== null ? user.firstname : "");
  const [lastname, setLastname] = useState(user !== null ? user.lastname : "");
  const [email, setEmail] = useState(user !== null ? user.email : "");
  const [address, setAddress] = useState(user !== null ? user.address : "");
  const [city, setCity] = useState(user !== null ? user.city : "");
  const [postalcode, setPostalcode] = useState(user !== null ? user.postalcode : "");

  const history = useHistory();

  const calcTotal = useCallback(() => {
    let i = 0;
    for (let ii = 0; ii < items.length; ii++) {
      const item = items[ii];
      i += item.amount * (item.product.discprice || item.product.price);
    }
    setTotal(i);
  }, [items]);

  useEffect(() => {
    calcTotal();
  }, [calcTotal]);

  function checkout(e) {
    e.preventDefault();
    console.log(items);
    fetch(URLI, {
      method: "POST",
      header: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        cart: items,
        firstname: firstname,
        lastname: lastname,
        email: email,
        address: address,
        city: city,
        postalcode: postalcode,
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then(
        (res) => {
          console.log(res);
          // tilaus onnistui, seuraavaksi ostoskorin tyhjennys, jos ostoskori tyhjä->ei anna tehdä tilausta
          // empty();
          setFinished(true);
        },
        (error) => {
          // alert(error);
          alert("Tilaus onnistui!");
          shoppingCart.clearShoppingCart();
          updateTotalProducts();
          history.push("/");
        }
      );
  }
  return (
    <div className="row">
      <div className="col-12 my-3">
        <h3>Tilauksen yhteenveto</h3>
      </div>

      {/* asiakastiedot */}

      <div className="card col-12 col-md-5 login-card p-4 mt-2 mb-5 ml-md-5">
        <h4 className="col-12">Asiakastiedot</h4>
        <div>
          <form onSubmit={checkout}>
            <div>
              <div className="col-md-6 col-12 form-group d-inline-block">
                <label htmlFor="fullname">
                  <i className="fa fa-user"></i> Koko nimi
                </label>
                <input
                  value={firstname}
                  type="text"
                  className="form-control"
                  id="firstname"
                  name="firstname"
                  onChange={(e) => setFirstname(e.target.value)}
                  required
                  placeholder="Etunimi"
                />
              </div>
              <div className="form-group col-12 col-md-6 d-inline-block">
                <input
                  value={lastname}
                  type="text"
                  className="form-control"
                  id="lastname"
                  name="lastname"
                  onChange={(e) => setLastname(e.target.value)}
                  required
                  placeholder="Sukunimi"
                />
              </div>
            </div>

            <div className="form-group col-12">
              <label htmlFor="email">
                <i className="fa fa-envelope"></i> Sähköposti
              </label>
              <input
                value={email}
                type="email"
                className="form-control"
                id="email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Sähköpostiosoite"
              />
            </div>

            <div className="form-group col-12">
              <label htmlFor="address">
                <i className="fa fa-address-card-o"></i> Osoite
              </label>
              <input
                value={address}
                type="text"
                className="form-control"
                id="address"
                name="address"
                onChange={(e) => setAddress(e.target.value)}
                required
                placeholder="Katuosoite"
              />
            </div>

            <div className="col-md-6 mb-3 form-group d-inline-block">
              <label htmlFor="city">Kaupunki</label>
              <input type="text" value={city} className="form-control" id="city" name="city" onChange={(e) => setCity(e.target.value)} required />
            </div>

            <div className="form-group col-md-5 d-inline-block">
              <label htmlFor="zip">Postinumero</label>
              <input
                type="text"
                value={postalcode}
                className="form-control"
                id="zip"
                name="postalcode"
                onChange={(e) => setPostalcode(e.target.value)}
                required
              />
            </div>

            <div className="form-group col-12">
              <div className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" id="same-address" />
                <label className="custom-control-label" htmlFor="same-address">
                  Toimitusosoitteeni on sama kuin laskutus.
                </label>
              </div>
            </div>

            {/* Toimitustapa */}
            <div className="form-group col-12">
              <h4>Toimitustapa</h4>

              <div className="form-group">
                <div className="custom-control custom-radio">
                  <input id="toimitusKotiin" name="toimitusTapa" type="radio" className="custom-control-input" />
                  <label className="custom-control-label" htmlFor="toimitusKotiin">
                    Toimitus kotiin
                  </label>
                </div>
                <div className="custom-control custom-radio">
                  <input id="postitoimiPaikka" name="toimitusTapa" type="radio" className="custom-control-input" />
                  <label className="custom-control-label" htmlFor="postitoimiPaikka">
                    Toimitus postitoimipaikkaan
                  </label>
                </div>
              </div>

              {/* Maksutapa */}

              <h4>Maksutapa</h4>

              <div className="form-group">
                <div className="custom-control custom-radio">
                  <input id="credit" name="paymentMethod" type="radio" className="custom-control-input" />
                  <label className="custom-control-label" htmlFor="credit">
                    Maksukortti
                  </label>
                </div>
                <div className="custom-control custom-radio">
                  <input id="paypal" name="paymentMethod" type="radio" className="custom-control-input" />
                  <label className="custom-control-label" htmlFor="paypal">
                    PayPal
                  </label>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="cname">Nimi kortilla</label>
                <input type="text" className="form-control" id="cname" name="status" placeholder="Maija Mehiläinen" />
                <small className="text-muted">Koko nimi kuten kortilla näkyy</small>
                <div className="invalid-feedback"> Kortin nimi vaaditaan </div>
              </div>
              <div className="form-group">
                <label htmlFor="ccnum">Kortin numero</label>
                <input type="text" className="form-control" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444"></input>
                <div className="invalid-feedback"> Luottokortin numero vaaditaan </div>
              </div>

              <div className="form-row">
                <div className="col-md-3 mb-3">
                  <label htmlFor="expyyear">Vanhenee</label>
                  <input type="text" className="form-control" id="expyear" name="expyear" placeholder="KK/VV"></input>
                  <div className="invalid-feedback"> Expiration date required </div>
                </div>
                <div className=" col-md-3">
                  <label htmlFor="cvv">CVV</label>
                  <input type="text" className="form-control" id="cvv" name="cvv" placeholder="352"></input>
                  <div className="invalid-feedback"> Security code required </div>
                </div>
              </div>
            </div>
            <hr className="mb-4" />

            <input className="btn btn-success btn-lg btn-block" value="Maksa tilaus" type="submit" />
          </form>
        </div>
      </div>

      {/* Ostoskori  */}
      <div className="col-12 col-md-5 p-4  mt-2 mb-5">
        <h4 className="d-flex justify-content-between align-items-center mb-3">
          <span>
            Ostoskori <i className="fa fa-shopping-cart"></i>
          </span>
        </h4>
        <ul className="list-group mb-3 sticky-top">
          <div>
            {items.map((item) => {
              return <CheckOutCart key={item.product.id} item={item} callBack={() => setItems(shoppingCart.getItems)} />;
            })}
          </div>
          <li className="list-group-item d-flex justify-content-between">
            <span>Yhteensä</span>
            <strong>{total.toFixed(2)}€</strong>
          </li>
        </ul>
      </div>
    </div>
  );
}
