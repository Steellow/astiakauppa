import React from 'react';

export default function RegistrationForm() {

  return(
      <div className="row d-flex justify-content-center">
          <div className="col-12 text-center mt-2">
          <h3>Rekisteröidy asiakkaaksi</h3>
          </div>
        <div className="card col-12 col-md-8 login-card p-4 mt-2 mb-3 text-center">
            <form>
                <div className="form-group">
                <label htmlFor="RegisterEmail">Sähköpostiosoite</label>
                <input type="email" 
                       className="form-control" 
                       id="email" 
                       aria-describedby="emailHelp" 
                    //    value={state.email}
                    //    onChange={handleChange}
                />
                </div>
                <div className="form-group">
                    <label htmlFor="RegisterPassword">Salasana</label>
                    <input type="password" 
                        className="form-control" 
                        id="registerPassword" 
                        // value={state.password}
                        // onChange={handleChange} 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Kirjoita salasana uudelleen</label>
                    <input type="password" 
                        className="form-control" 
                        id="confirmPassword" 
                    />
                </div>
                 <button 
                    type="submit" 
                    className="btn btn-primary">
                    Rekisteröidy
          </button>
            </form>
        </div>
        </div>
    )
}
