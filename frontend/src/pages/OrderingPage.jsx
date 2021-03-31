import React from "react";


export default function OrderingPage() {
    return (
        <form>
          <h3>Oletko rekisteröitynyt käyttäjä?</h3>
        <label>
          Kirjaudu sisään
          <input
            name="kirjauduSisään"
            type="radio"></input>
        </label>
        <label>
          Jatka rekisteröitymättä
          <input
            name="rekisteröitymättä"
            type="radio"></input>
        </label>
        <br />
        <label>
          Sähköpostiosoite:
          <input
            name="s-posti"
            type="text"></input>
        </label>
        <label>
          Salasana:
          <input
            name="salasana"
            type="text"></input>
        </label>
        

        {/* Maksutavan aloitus
            <div classname="container card my-3">
                <div classname="row">
                  <div classname="col-12">
                    <h3>Maksutapa</h3>
                      <label>
                      Verkkopankki
                      <input
                      name="verkkopankki"
                      type="radio"></input>
                      </label>
                      <br />
                      <label>
                      Korttimaksu
                      <input
                      name="korttimaksu"
                      type="radio"></input>
                      </label>
                      <br />
                      <label>
                      Lasku
                      <input
                      name="lasku"
                      type="radio"></input>
                      </label>
                </div>
                </div>
            </div> */}
      </form>

       
    );
    
}
