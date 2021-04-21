import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Logout({ setUser }) {
  useEffect(() => {
    async function logOut() {
      const config = {
        method: "GET",
        credentials: "include",
      };

      const url = "http://localhost/astiakauppa/logout.php";
      try {
        await fetch(url, config);
        setUser(null);
      } catch (error) {
        alert(error);
      }
    }
    logOut();
  }, [setUser]);

  return (
    <div className="row justify-content-center text-center">
      <h3 className="col-12 mt-3">Olet kirjautunut ulos.</h3>
      <Link to="/kirjaudu" className="my-3 btn btn-success p-3" type="button">
        Kirjaudu sisään
      </Link>
    </div>
  );
}
