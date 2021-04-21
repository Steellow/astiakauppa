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
    <div>
      <p>Olet kirjautunut ulos.</p>
      <Link to="/kirjaudu">Kirjaudu sisään</Link>
    </div>
  );
}
