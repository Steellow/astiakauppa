import React from "react";
import logo from "../img/arabia_logo_big.png";

export default function Header() {
  return (
    <header className="row">
      <section className="col-12 text-center">
        <img className="img-responsive text-center p-4" src={logo} alt="Logo"></img>
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
                <a className="nav-link" href="/">
                  Lautaset
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Mukit
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Lasit
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Tuotesarjat
                </a>
              </li>
            </ul>
            <ul className="nav navbar-nav navbar-collapse flex-fill w-100 justify-content-end">
              <li className="nav-item">
                <a href="/" className="nav-link" style={{ color: "white" }}>
                  <i className="fa fa-lg fa-shopping-cart"></i>
                </a>
              </li>
              <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Hae" aria-label="Hae"></input>
                <button className="btn btn-outline-light" type="submit">
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
