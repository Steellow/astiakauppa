import React from "react";

export default function CheckOutPage() {
  return (
    
    <div className="row">
          <div className="row col-12 m-3">
            <h3>Tilauksen yhteenveto</h3>
          </div>
    
          {/* asiakastiedot */}
    
              <div className="card col-12 col-md-5 login-card p-4 ml-5 mt-2 mb-5">
                  <h4>Asiakastiedot</h4>
               <div>
    
              <form>
                <div class="form-group">
                      <div >
                        <label for="fullname"><i class="fa fa-user"></i> Koko nimi</label>
                        <input type="fullName" class="form-control" id="inputEmail" placeholder="Etunimi ja sukunimi" value="" required=""/>
                        <div class="invalid-feedback"> Valid last name is required. </div>
                      </div>
                </div>
    
                  <div class="form-group">
                      <div class="form-group">
                        <label for="inputEmail"><i class="fa fa-envelope"></i> Sähköposti</label>
                        <input type="email" class="form-control" id="inputEmail" placeholder="Sähköpostiosoite"/>
                      </div>
                  </div>
    
                  <div class="form-group ">
                      <label for="inputAddress"><i class="fa fa-address-card-o"></i> Osoite</label>
                      <input type="text" class="form-control" id="inputAddress" placeholder="Katuosoite"/>
                  </div>
    
                  <div class="form-group">
                      <label for="inputAddress2">Osoite 2</label>
                      <input type="text" class="form-control" id="inputAddress2" placeholder="C/O-osoite"/>
                  </div>
    
                  <div class="row">
                  <div class="col-md-6 mb-3">
                      <label for="inputCity">Kaupunki</label>
                      <input type="text" class="form-control" id="inputCity"/>
                  </div>
                  <div class="form-group col-md-5">
                      <label for="inputZip">Postinumero</label>
                      <input type="text" class="form-control" id="inputZip"/>
                  </div>
                
                    <div class="form-group">
                      <div class="custom-control custom-checkbox">
                          <input type="checkbox" class="custom-control-input" id="same-address"/>
                          <label class="custom-control-label" for="same-address">Toimitusosoitteeni on sama kuin laskutus.</label>
                      </div>
                    </div>
    
                  {/* Maksutapa */}
    
                  <div class="form-group">
                    <h4>Maksutapa</h4>
    
                    <div class="form-group">
                        <div class="custom-control custom-radio">
                            <input id="credit" name="paymentMethod" type="radio" class="custom-control-input"  required=""/>
                            <label class="custom-control-label" for="credit">Credit card</label>
                        </div>
                        <div class="custom-control custom-radio">
                            <input id="debit" name="paymentMethod" type="radio" class="custom-control-input" required=""/>
                            <label class="custom-control-label" for="debit">Debit card</label>
                        </div>
                        <div class="custom-control custom-radio">
                            <input id="paypal" name="paymentMethod" type="radio" class="custom-control-input" required=""/>
                            <label class="custom-control-label" for="paypal">PayPal</label>
                        </div>
                    </div>
    
                      <div class="form-group">
                          <label for="cname">Nimi kortilla</label>
                          <input type="text" class="form-control" id="cname" name="cardname" placeholder="Maija Mehiläinen" required=""/>
                          <small class="text-muted">Koko nimi kuten kortilla näkyy</small>
                            <div class="invalid-feedback"> Kortin nimi vaaditaan </div>
                      </div>   
                      <div class="form-group"> 
                          <label for="ccnum">Luottokortin numero</label>
                          <input type="text" class="form-control" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444" required=""></input>
                          <div class="invalid-feedback"> Luottokortin numero vaaditaan </div>
                     </div>
    
                    <div class="form-row">
                    <div class="col-md-3 mb-3">
                        <label for="expyyear">Vanhenee</label>
                        <input type="text" class="form-control" id="expyear" name="expyear" placeholder="KK/VV" required=""></input>
                        <div class="invalid-feedback"> Expiration date required </div>
                    </div>
                    <div class=" col-md-3">
                    <label for="cvv">CVV</label>
                     <input type="text" class="form-control" id="cvv" name="cvv" placeholder="352" required=""></input>
                     <div class="invalid-feedback"> Security code required </div>
                    </div>
                  </div>
                  </div>
                  <hr class="mb-4"/>
                    <button class="btn btn-primary btn-lg btn-block" type="submit">Maksa tilaus</button>
                  </div>        
                </form>
                </div>
              </div>
              
               {/* Ostoskori  */}
               <div className="col-12 col-md-5 p-4 ml-5 mt-2 mb-5">
                  <h4 class="d-flex justify-content-between align-items-center mb-3">
                    <span >Ostoskori <i class="fa fa-shopping-cart"></i></span>
                    
                    <span class="badge badge-secondary badge-pill">3</span>
                </h4>
                <ul class="list-group mb-3 sticky-top">
                    <li class="list-group-item d-flex justify-content-between lh-condensed">
                        <div>
                            <h6 class="my-0">Tuotteen nimi</h6>
                            <small class="text-muted">Tuotteen lyhyt kuvaus</small>
                        </div>
                        <span class="text-muted">12.90 €</span>
                    </li>
                    <li class="list-group-item d-flex justify-content-between lh-condensed">
                        <div>
                            <h6 class="my-0">Tuotteen nimi 2</h6>
                            <small class="text-muted">Tuotteen lyhyt kuvaus</small>
                        </div>
                        <span class="text-muted">8.00 €</span>
                    </li>
                    <li class="list-group-item d-flex justify-content-between lh-condensed">
                        <div>
                            <h6 class="my-0">Tuotteen nimi 3</h6>
                            <small class="text-muted">Tuotteen lyhyt kuvaus</small>
                        </div>
                        <span class="text-muted">12.90 €</span>
                    </li>
                    <li class="list-group-item d-flex justify-content-between">
                        <span>Yhteensä (€)</span>
                        <strong>40.90</strong>
                    </li>
                </ul>
              </div>
              </div>
  );
}
