import React, { useState } from "react";
import logo from "../img/arabia_logo_big.png";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown.jsx";

export default function Header({ search }) {
  const [criteria, setCriteria] = useState("");

  function doSearch(e) {
    e.preventDefault();
    search(criteria);
  }
  return (
    <header className="row">
      <section className="col-12 text-center">
        <Link to="/">
          <img className="img-responsive text-center p-4" src={logo} alt="Logo"></img>
        </Link>
      </section>

      <section className="col-12">
        {/* <!-- hamburger menu ei toimi kunnolla --> */}
        <nav className="navbar navbar-expand-md navbar-dark bg-dark main-nav">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-center" id="navbarNavDropdown">
            <ul className="nav navbar-nav navbar-collapse flex-fill w-100 flex-nowrap">
              <li className="nav-item">
                <Link to="/lautaset" className="nav-link">
                  Lautaset
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/mukit" className="nav-link">
                  Mukit
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/lasit" className="nav-link">
                  Lasit
                </Link>
              </li>
            </ul>
            <Dropdown /> 
            <ul className="nav navbar-nav navbar-collapse flex-fill w-50 justify-content-end">
              <li className="nav-item">
                <Link to="/ostoskori" className="nav-link" style={{ color: "white" }}>
                  <i className="fa fa-lg fa-shopping-cart"></i>
                </Link>
              </li>
              <form onSubmit={doSearch} className="d-flex">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Hae"
                  aria-label="Hae"
                  value={criteria}
                  onChange={(e) => setCriteria(e.target.value)}
                ></input>
                <button className="btn btn-outline-light ml-2" type="submit">
                  Hae
                </button>
              </form>
            </ul>
          </div>
        </nav>
      </section>
    </header>
  );
}
