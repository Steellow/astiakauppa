import React from 'react';
import { Link } from "react-router-dom";

export default function LogIn() {

  return(
    <div className="card col-12 col-md-5 login-card p-4 ml-5 mt-2 mb-5">
        <form>
            <h4>Kirjaudu sisään</h4>
            <div className="form-group text-left">
                <label htmlFor="InputEmail">Sähköposti</label>
                <input type="email" 
                       className="form-control" 
                       id="email" 
                       aria-describedby="emailHelp" 
                       placeholder="Syötä sähköpostiosoite" 
                    //    value={state.email}
                    //    onChange={handleChange}
                />
                </div>
                <div className="form-group text-left">
                    <label htmlFor="InputPassword">Salasana</label>
                    <input type="password" 
                        className="form-control" 
                        id="password" 
                        placeholder="Salasana"
                        // value={state.password}
                        // onChange={handleChange} 
                    />
                </div>
                 <button 
                    type="submit" 
                    className="btn btn-primary">
                    Kirjaudu
                </button>
                <small id="Rekisteröidy" className="form-text text-muted">Etkö ole vielä asiakas? <Link to="/rekisteri">Rekisteröidy tästä
                </Link></small>
            </form>
        </div>
        
    )
}