import React from "react";
import LogIn from "../components/LogIn";
import { Link } from "react-router-dom";

export default function PromptLogin() {
  return (
    <div className="row">
      <div className="row col-12 m-3">
        <h3>1. Asiakastiedot</h3>
      </div>
      <LogIn></LogIn>
      <div className="card col-12 col-md-5 p-4 mx-auto mt-2 mb-5">
        <h4>Jatka kirjautumatta</h4>
        <p className="mt-3">
          Huomaa, että emme voi tallentaa tietojasi seuraavaa ostoskertaasi varten. Jos luot profiilin, voit myös tarkastella tilaushistoriaasi sekä
          muuttaa tilaustasi tai peruuttaa sen verkossa.
        </p>
        <Link to="/checkout" className="mt-3 btn btn-success" type="button">
          Jatka tilaukseen
        </Link>
      </div>
    </div>
  );
}
