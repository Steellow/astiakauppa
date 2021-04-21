import React, { useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";

export default function LogIn({ setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let location = useLocation();
  const history = useHistory();

  async function login(e) {
    e.preventDefault();
    const formData = new FormData();

    formData.append("email", email);
    formData.append("password", password);

    const config = {
      method: "POST",
      credentials: "include",
      headers: {
        Accept: "application/json",
      },
      body: formData,
    };
    const response = await fetch("http://localhost/astiakauppa/login.php", config);
    const json = await response.json();
    // console.log(json);
    if (response.ok) {
      setUser(json);
      alert("Kirjautuminen onnistui!");
      if (typeof location.state !== "undefined" && location.state.ordering) {
        history.push("/checkout");
      } else {
        history.push("/");
      }
    } else {
      alert("Error logging in.");
    }
  }
  return (
    <div className="card col-12 col-md-5 login-card p-4 mx-auto mt-2 mb-5">
      <form onSubmit={login}>
        <h4>Kirjaudu sisään</h4>
        <div className="form-group text-left">
          <label htmlFor="InputEmail">Sähköposti</label>
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            placeholder="Syötä sähköpostiosoite"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group text-left">
          <label htmlFor="InputPassword">Salasana</label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Salasana"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-success">
          Kirjaudu
        </button>
        <small id="Rekisteröidy" className="form-text text-muted">
          Etkö ole vielä asiakas? <Link to="/rekisteri">Rekisteröidy tästä</Link>
        </small>
      </form>
    </div>
  );
}
