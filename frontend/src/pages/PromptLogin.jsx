import React from "react";
import { Link } from "react-router-dom";
import LogIn from "../components/LogIn";

export default function PromptLogin() {
  return (
    <div>
      <div className="row m-3">
        <h3>1. Asiakastiedot</h3>
      </div>
      <div className="row justify-content-center">
        <div className="card col-12 col-md-5 p-4 mx-auto mt-2 mb-5">
          <h4 className="text-center">Kirjaudu</h4>
          <Link to={{ pathname: "/kirjaudu", state: { ordering: true } }} className="col-12 p-3 mt-3 btn btn-primary" type="button">
            Kirjaudu sisään
          </Link>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-12 col-md-5 card p-4 mx-auto mt-2 mb-5">
          <h4>Jatka kirjautumatta</h4>
          <p className="mt-3">
            Huomaa, että emme voi tallentaa tietojasi seuraavaa ostoskertaasi varten. Jos luot profiilin, voit myös tarkastella tilaushistoriaasi sekä
            muuttaa tilaustasi tai peruuttaa sen verkossa.
          </p>
          <Link to="/checkout" className="mt-3 btn btn-success p-3" type="button">
            Jatka tilaukseen
          </Link>
        </div>
      </div>
    </div>
  );
}
