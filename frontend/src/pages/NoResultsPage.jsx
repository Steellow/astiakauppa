import React from "react";
import { Link } from "react-router-dom";
import img from "../img/surukuppi.jpg";

export default function NoResultsPage() {
  return (
    <div className="container">
      <div className="row text-center my-4">
        <h1 className="col-12 text-danger mt-3">Voi ei! Hakusanalla ei löytynyt yhtään tulosta :(</h1>
      </div>
      <div className="row justify-content-center mt-5 border">
        <h2 className="col-12 text-center">Hakuvinkkejä:</h2>
        <ul className="">
          <li>Tarkista oikeinkirjoitus</li>
          <li>Kokeile yksinkertaisempaa hakusanaa</li>
        </ul>
      </div>
      <div className="row justify-content-center">
        <img className="img-fluid text-center p-4" src={img} style={{ width: "100%", maxWidth: "300px" }} alt="Logo"></img>
      </div>
      <div className="row justify-content-center text-success text-center mb-3">
        <p>Eikö haku tuota tulosta? Ota yhteyttä!</p>
      </div>
      <div className="row justify-content-center mb-3">
        <h2 className="col-12 text-center">Selaa valikoimaa tuoteryhmittäin</h2>
      </div>
      <div className="row justify-content-center mb-1">
        <ul className="list-group list-group-horizontal col-12 text-center text-secondary">
          <span className="col-4">Mukit</span>
          <span className="col-4">Lautaset</span>
          <span className="col-4">Lasit</span>
        </ul>
      </div>
      <div className="row justify-content-center mb-3">
        <ul className="list-group list-group-horizontal text-center col-12">
          <Link to="/mukit" className="list-group-item list-group-item-action bg-secondary text-white rounded">
            <span className="fa fa-coffee" style={{ fontSize: "60px" }}></span>
          </Link>
          <Link to="/lautaset" className="list-group-item list-group-item-action bg-secondary text-white mx-1 rounded">
            <span className="fa fa-circle-o" style={{ fontSize: "60px" }}></span>
          </Link>
          <Link to="/lasit" className="list-group-item list-group-item-action bg-secondary text-white rounded">
            <span className="fa fa-glass" style={{ fontSize: "60px" }}></span>
          </Link>
        </ul>
      </div>
    </div>
  );
}
