import React from "react";
import styles from '../styles/styles.css';

export default function Footer() {
  return (
    <footer className="footer row bg-dark">
      <p className="col-sm-12, col-md-3 text-white">
          <ul class="footer_list">
            <li class="footer_list_fi">Ota yhteyttä</li>
            <li>puhelinnumero</li>
            <li>sähköpostiosoite</li>
            <li>osoite</li>
          </ul>
      </p>
      <p className="col-sm-12, col-md-3 text-white">
        Seuraa meitä somessa <br />
        <a href="https://fi-fi.facebook.com/" target="1" class="fa fa-facebook"></a>
        <a href="https://www.instagram.com/" target="2" class="fa fa-instagram"></a>
        <a href="https://twitter.com/?lang=fi" target="3" class="fa fa-twitter"></a>
      </p>
      <p className="col-sm-12, col-md-6 text-white">
        Tekstiä...
      </p>
      <p className="col-12 text-center bg-secondary text-white">
        Hannes Kinnunen | Aleksi Ervasti | Milla Viitapohja | Sanni Ristimella | Arttu Heikkinen
      </p>
    </footer>
  );
}
