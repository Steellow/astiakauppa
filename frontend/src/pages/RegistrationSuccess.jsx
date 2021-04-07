import React from "react";
// import { Link } from "react-router-dom";

export default function RegistrationSuccess() {
  return (
    <div className="col-12 p-4 mx-auto mt-2 mb-5">
        <h1 className="text-center">Rekisteröinti onnistui!</h1>
      <form className="card col-12 col-md-5 login-card p-4 mx-auto mt-2 mb-5">
        <h4>Kirjaudu sisään</h4>
        <div className="form-group text-left">
          <label htmlFor="InputEmail">Sähköposti</label>
          <input
            type="email"
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
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Salasana"
            // value={state.password}
            // onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-success">
          Kirjaudu
        </button>
      </form>
    </div>
  );
}