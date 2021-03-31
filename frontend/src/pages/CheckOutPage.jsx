import React from "react";


export default function CheckOutPage() {
  return (
    <div className="row">
      <div className="row col-12 m-3">
        <h3>1. Asiakastiedot</h3>
      <div className="card col-12 login-card p-4 mt-2 mb-2 hv-center">
      <form>
      <div className="form-row">
        <div className="form-group">
          <label for="inputFname">Etunimi*</label>
          <input  type="text" 
                  className="form-control mr-1" 
                  id="inputFname"
                  placeholder="Etunimi"
          />
        </div>
        <div className="form-group">
          <label for="inputLname">Sukunimi*</label>
          <input  type="text" 
                  className="form-control ml-1" 
                  id="inputLname"
                  placeholder="Sukunimi"
          />
        </div>
      </div>
        <div className="form-row">
        <div className="form-group col-md-6">
          <label for="inputEmail">Sähköposti*</label>
          <input  type="email" 
                  className="form-control" 
                  id="inputEmail" 
                  placeholder="Sähköpostiosoite"
            />
        </div>
        </div>
        <div className="form-group">
            <label for="inputAddress">Osoite*</label>
            <input  type="text" 
                    className="form-control col-md-6" 
                    id="inputAddress" 
                    placeholder="Katuosoite ja talonnumero"
              />
        </div>
      <div className="form-row">
        <div className="form-group">
            <label for="inputCity">Kaupunki*</label>
            <input  type="text" 
                    className="form-control" 
                    id="inputCity"
                    placeholder="Tampere"
            />
        </div>
        <div className="form-group col-md-2">
            <label for="inputZip">Postinumero*</label>
            <input  type="text" 
                    className="form-control" 
                    id="inputZip"
                    placeholder="33100"
            />
        </div>
      </div>
        <button type="submit" className="btn btn-primary">Jatka toimitukseen</button>
      </form>
      </div>
      </div>
    </div>
  );
}