import React from "react";
// 👇👇👇 react valitti jotain turhaa niin disablasin sen varotuksen t. hanki
// eslint-disable-next-line
import styles from "../styles/styles.css";

export default function Footer() {
  return (
    <footer className="footer row bg-dark">
      <div className="col-sm-12, col-md-3 text-white">
        <ul className="footer_list">
          <li className="footer_list_fi">Ota yhteyttä</li>
          <li>puhelinnumero</li>
          <li>sähköpostiosoite</li>
          <li>osoite</li>
        </ul>
      </div>
      <p className="col-sm-12, col-md-3 text-white">
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
      </p>
      <p className="col-sm-12, col-md-6 text-white">Tekstiä...</p>
      <p className="col-12 text-center bg-secondary text-white">
        Hannes Kinnunen | Aleksi Ervasti | Milla Viitapohja | Sanni Ristimella | Arttu Heikkinen
      </p>
    </footer>
  );
}
