import React from "react";
import { Link } from "react-router-dom";
// 👇👇👇 react valitti jotain turhaa niin disablasin sen varotuksen t. hanki
// eslint-disable-next-line
import styles from "../styles/styles.css";

export default function Footer({user}) {
  return (
    <footer className="footer row bg-dark">
      <div className="col-6 text-white">
        <ul className="footer_list">
          <li className="footer_list_fi">Ota yhteyttä</li>
          <li>Jorma Jermula</li>
          <li>jormajermu@hotmail.com</li>
          <li>Jormankatu 24</li>
        </ul>
      </div>
      <p className="col-6 text-white">
        Seuraa meitä somessa <br />
        <a href="https://fi-fi.facebook.com/" target="1">
          <i className="fa fa-facebook"></i>
        </a>
        <a href="https://www.instagram.com/" target="2">
          <i className="fa fa-instagram"></i>
        </a>
        <a href="https://twitter.com/?lang=fi" target="3">
          <i className="fa fa-twitter"></i>
        </a>
        {/* pitää katsoa lisäksi onko user.admin 1 */}
        {(user !== null) ?
          (user['admin'] === 1) ? 
          <Link to="/admin" className="nav-link" style={{ color: "white" }}>
            Hallintapaneeli
          </Link> : <div></div>
          : <div></div>
        }
        
      </p>

      <p className="col-12 text-center bg-secondary text-white">
        Hannes Kinnunen | Aleksi Ervasti | Milla Viitapohja | Sanni Ristimella | Arttu Heikkinen
      </p>
    </footer>
  );
}
