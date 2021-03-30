import React from "react";


export default function CheckOut() {
    return (
        <div className="card col-12 login-card p-4 mt-2 mb-2 hv-center">
    <form>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmail">Sähköposti</label>
      <input type="email" class="form-control" id="inputEmail" placeholder="Sähköpostiosoite"/>
    </div>
  </div>
  <div class="form-group">
    <label for="inputAddress">Osoite</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="Katuosoite ja talonnumero"/>
  </div>
  <div class="form-group">
    <label for="inputAddress2">Osoite 2</label>
    <input type="text" class="form-control" id="inputAddress2" placeholder="C/O-osoite"/>
  </div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputCity">Kaupunki</label>
      <input type="text" class="form-control" id="inputCity"/>
    </div>
    <div class="form-group col-md-2">
      <label for="inputZip">Postinumero</label>
      <input type="text" class="form-control" id="inputZip"/>
    </div>
  </div>
 
  <button type="submit" class="btn btn-primary">Jatka toimitukseen</button>
</form>
</div>
);
}