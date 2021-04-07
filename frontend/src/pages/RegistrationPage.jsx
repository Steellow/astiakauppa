import React from 'react';

export default function RegistrationPage() {
    const URL = "http://localhost/astiakauppa/register.php";
  return(
      <div className="row d-flex justify-content-center">
          <div className="col-12 text-center mt-2">
            <h3>Rekisteröidy asiakkaaksi</h3>
          </div>
            <div className="card col-12 col-md-8 login-card p-4 mt-2 mb-3 text-center">
            <form action={URL} method="POST">
            <div className="form-row justify-content-center">
                <div className="form-group">
                    <label for="inputFname">Etunimi*</label>
                    <input  type="text" 
                            className="form-control mr-1" 
                            id="inputFname"
                            name="firstname"
                            placeholder="Etunimi"
                            required
                    />
                </div>
                <div className="form-group">
                    <label for="inputLname">Sukunimi*</label>
                    <input  type="text" 
                            className="form-control ml-1" 
                            id="inputLname"
                            name="lastname"
                            placeholder="Sukunimi"
                            required
                    />
                </div>
            </div>
                <div className="form-group">
                    <label htmlFor="InputEmail">Sähköpostiosoite*</label>
                    <input  type="email" 
                            className="form-control text-center" 
                            id="InputEmail"
                            name="email" 
                            placeholder="Syötä sähköpostiosoitteesi"
                            required
                        //    value={state.email}
                        //    onChange={handleChange}
                    />
                </div>
                <div className="form-row justify-content-center">
                <div className="form-group col-md-5">
                    <label htmlFor="inputAddress">Osoite*</label>
                    <input  type="text" 
                            className="form-control text-center" 
                            id="inputAddress" 
                            name="address"
                            placeholder="Katuosoite ja talonnumero"
                            required
                        //    value={state.email}
                        //    onChange={handleChange}
                    />
                </div>
                </div>
            <div className="form-row justify-content-center">
                <div className="form-group">
                    <label for="inputCity">Kaupunki*</label>
                    <input  type="text" 
                            className="form-control" 
                            id="inputCity"
                            name="city"
                            placeholder="Tampere"
                            required
                    />
                </div>
                <div className="form-group col-md-2">
                    <label for="inputZip">Postinumero*</label>
                    <input  type="text" 
                            className="form-control" 
                            id="inputZip"
                            name="postalcode"
                            placeholder="33100"
                            required
                    />
                </div>
            </div>
                <div className="form-group">
                    <label htmlFor="RegisterPassword">Salasana*</label>
                    <input type="password" 
                        className="form-control text-center" 
                        id="registerPassword"
                        name="password" 
                        placeholder="Vähintään 6 merkkiä"
                        required
                        // value={state.password}
                        // onChange={handleChange} 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="ConfirmPassword">Kirjoita salasana uudelleen*</label>
                    <input type="password" 
                        className="form-control" 
                        id="ConfirmPassword" 
                        required
                    />
                </div>
                 <button 
                    type="submit" 
                    className="btn btn-success">
                    Rekisteröidy
          </button>
            </form>
        </div>
        </div>
    );
}
