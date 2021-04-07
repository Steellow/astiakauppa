import React, { useState, useEffect, useCallback } from "react";
import shoppingCart from "../util/ShoppingCart";
import CheckOutCart from "../components/CheckOutCart";



export default function CheckOutPage(item) {
  const [items, setItems] = useState(shoppingCart.getItems());
  const [total, setTotal] = useState(0);

  const calcTotal = useCallback(() => {
    let i = 0;
    for (let ii = 0; ii < items.length; ii++) {
      const item = items[ii];
      i += item.amount * item.product.price;
    }
    setTotal(i);
  }, [items]);

  useEffect(() => {
    calcTotal();
  }, [calcTotal]);


  return (
    
    <div className="row">
          <div className="row col-12 m-3">
            <h3>Tilauksen yhteenveto</h3>
          </div>
    
          {/* asiakastiedot */}
          {/* TODO: Täytä valmiiksi jos kirjautun sisä */}
    
              <div className="card col-12 col-md-5 login-card p-4 ml-5 mt-2 mb-5">
                  <h4>Asiakastiedot</h4>
               <div>
    
              <form action="checkout.php" method="get">
                <div className="form-group">
                        <label for="fullname"><i className="fa fa-user"></i> Koko nimi</label>
                  <div className="row">
                    <div className="col-md-6">
                        <input type="text" className="form-control" id="firstname" placeholder="Etunimi"/>
                    </div>
                    <div className="form-group col-md-6">
                        <input type="text" className="form-control" id="lastname" placeholder="Sukunimi"/>
                    </div>
                  </div>
                </div>
    
                  <div className="form-group">
                      <div className="form-group">
                        <label for="email"><i className="fa fa-envelope"></i> Sähköposti</label>
                        <input type="email" className="form-control" id="email" placeholder="Sähköpostiosoite"/>
                      </div>
                  </div>
    
                  <div className="form-group ">
                      <label for="address"><i className="fa fa-address-card-o"></i> Osoite</label>
                      <input type="text" className="form-control" id="address" placeholder="Katuosoite"/>
                  </div>
    
                  <div className="row">
                  <div className="col-md-6 mb-3">
                      <label for="city">Kaupunki</label>
                      <input type="text" className="form-control" id="city"/>
                  </div>
                  <div className="form-group col-md-5">
                      <label for="zip">Postinumero</label>
                      <input type="text" className="form-control" id="zip"/>
                  </div>
                
                    <div className="form-group">
                      <div className="custom-control custom-checkbox">
                          <input type="checkbox" className="custom-control-input" id="same-address"/>
                          <label className="custom-control-label" for="same-address">Toimitusosoitteeni on sama kuin laskutus.</label>
                      </div>
                    </div>
    
                  {/* Maksutapa */}
    
                  <div className="form-group">
                    <h4>Maksutapa</h4>
    
                    <div className="form-group">
                        <div className="custom-control custom-radio">
                            <input id="credit" name="paymentMethod" type="radio" className="custom-control-input"  required=""/>
                            <label className="custom-control-label" for="credit">Maksukortti</label>
                        </div>
                        <div className="custom-control custom-radio">
                            <input id="paypal" name="paymentMethod" type="radio" className="custom-control-input" required=""/>
                            <label className="custom-control-label" for="paypal">PayPal</label>
                        </div>
                    </div>
    
                      <div className="form-group">
                          <label for="cname">Nimi kortilla</label>
                          <input type="text" className="form-control" id="cname" name="cardname" placeholder="Maija Mehiläinen" required=""/>
                          <small className="text-muted">Koko nimi kuten kortilla näkyy</small>
                            <div className="invalid-feedback"> Kortin nimi vaaditaan </div>
                      </div>   
                      <div className="form-group"> 
                          <label for="ccnum">Kortin numero</label>
                          <input type="text" className="form-control" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444" required=""></input>
                          <div className="invalid-feedback"> Luottokortin numero vaaditaan </div>
                     </div>
    
                    <div className="form-row">
                    <div className="col-md-3 mb-3">
                        <label for="expyyear">Vanhenee</label>
                        <input type="text" className="form-control" id="expyear" name="expyear" placeholder="KK/VV" required=""></input>
                        <div className="invalid-feedback"> Expiration date required </div>
                    </div>
                    <div className=" col-md-3">
                    <label for="cvv">CVV</label>
                     <input type="text" className="form-control" id="cvv" name="cvv" placeholder="352" required=""></input>
                     <div className="invalid-feedback"> Security code required </div>
                    </div>
                  </div>
                  </div>
                  <hr className="mb-4"/>
                    <button className="btn btn-success btn-lg btn-block" type="submit">Maksa tilaus</button>
                  </div>        
                </form>
                </div>
              </div>
              
               {/* Ostoskori  */}
               <div className="col-12 col-md-5 p-4 ml-5 mt-2 mb-5">
                  <h4 className="d-flex justify-content-between align-items-center mb-3">
                    <span >Ostoskori <i className="fa fa-shopping-cart"></i></span>
                  </h4>
                <ul className="list-group mb-3 sticky-top">
                  <div>
                    {items.map((item) => {
                      return (
                        <CheckOutCart key={item.product.id} item={item} callBack={() => setItems(shoppingCart.getItems)} />
                      );
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
