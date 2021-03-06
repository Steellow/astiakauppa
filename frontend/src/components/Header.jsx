import React, { useState } from "react";
import logo from "../img/logo.png";
import { Link, useHistory } from "react-router-dom";

export default function Header({ user, totalProducts }) {
  const [criteria, setCriteria] = useState("");
  const history = useHistory();

  function doSearch(e) {
    e.preventDefault();
    if (criteria.length > 0) {
      history.push(`/haku/${criteria}`);
    }
  }

  return (
    <header className="row">
      <section className="col-12 text-center">
        <Link to="/">
          <img className=" text-center p-4 col-10 col-sm-6 col-md-5 col-lg-2" src={logo} alt="Logo"></img>
        </Link>
      </section>

      <section className="col-12">
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

          <div className="navbar-collapse collapse w-100" id="navbarNavDropdown">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Etusivu
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav ml-auto">
              <div className="input-group ml-2 ">
                <input
                  type="search"
                  className="form-control"
                  placeholder="Hakutermi"
                  aria-label="Hae"
                  value={criteria}
                  onChange={(e) => setCriteria(e.target.value)}
                />
                <div className="input-group-append">
                  <button className="btn btn-outline-light" onClick={doSearch}>
                    Hae
                  </button>
                </div>
              </div>
              <li className="nav-item ">
                <div className="d-flex justify-content-center">
                  <Link to="/ostoskori" className="nav-link position-relative" style={{ color: "white" }}>
                    <i className="fa fa-lg fa-lg fa-shopping-cart mx-2 " aria-label="Ostoskori"></i>
                    {totalProducts > 0 ? (
                      <span className="badge badge-pill badge-success position-absolute" style={{ top: 0, right: 0 }}>
                        {totalProducts.toString()}
                      </span>
                    ) : (
                      <></>
                    )}
                  </Link>
                  {user !== null ? (
                    <Link to="/uloskirjautuminen" className="nav-link" style={{ color: "white" }}>
                      <i className="fa fa-lg fa-sign-out mx-2" aria-label="Kirjaudu ulos"></i>
                    </Link>
                  ) : (
                    <Link to="/kirjaudu" className="nav-link" style={{ color: "white" }}>
                      <i className="fa fa-lg fa-sign-in mx-2" aria-label="Kirjaudu sis????n"></i>
                    </Link>
                  )}
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </section>
    </header>
  );
}
