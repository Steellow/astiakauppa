import React, {useState} from 'react';

export default function RegistrationPage() {
    const URL = "http://localhost/astiakauppa/register.php";

    const [password, setPassword] = useState('');
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [postalcode, setPostalcode] = useState('');

    async function register(e) {
        e.preventDefault();
        const formData = new FormData();

        formData.append('password',password);
        formData.append('firstname',firstname);
        formData.append('lastname',lastname);
        formData.append('email',email);
        formData.append('address',address);
        formData.append('city',city);
        formData.append('postalcode',postalcode);

        const config = {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Accept' : 'application/json',

            },
            body: formData
        }
        const response = await fetch(URL,config);
        //const json = await response.json();

        if (response.ok) {
            alert("rekisteröinti onnistui.");
        } else {
            alert("sähköposti on jo käytössä.");
        }
    }
  return(
      <div className="row d-flex justify-content-center">
          <div className="col-12 text-center mt-2">
            <h3>Rekisteröidy asiakkaaksi</h3>
          </div>
            <div className="card col-12 col-md-8 login-card p-4 mt-2 mb-3 text-center">
            <form onSubmit={register}>
            <div className="form-row justify-content-center">
                <div className="form-group">
                    <label htmlFor="inputFname">Etunimi*</label>
                    <input  type="text" 
                            value={firstname}
                            onChange={e => setFirstname(e.target.value)}
                            className="form-control mr-1" 
                            id="inputFname"
                            name="firstname"
                            placeholder="Etunimi"
                            required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="inputLname">Sukunimi*</label>
                    <input  type="text"
                            value={lastname}
                            onChange={e => setLastname(e.target.value)}
                            className="form-control ml-1" 
                            id="inputLname"
                            name="lastname"
                            placeholder="Sukunimi"
                            required
                    />
                </div>
            </div>
                <div className="form-group">
                    <label htmlFor="InputEmail">Sähköpostiosoite*</label>
                    <input  type="email" 
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            className="form-control text-center" 
                            id="InputEmail"
                            name="email" 
                            placeholder="Syötä sähköpostiosoitteesi"
                            required
                    />
                </div>
                <div className="form-row justify-content-center">
                <div className="form-group col-md-5">
                    <label htmlFor="inputAddress">Osoite*</label>
                    <input  type="text" 
                            value={address}
                            onChange={e => setAddress(e.target.value)}
                            className="form-control text-center" 
                            id="inputAddress" 
                            name="address"
                            placeholder="Katuosoite ja talonnumero"
                            required
                        //    value={state.email}
                        //    onChange={handleChange}
                    />
                </div>
                </div>
            <div className="form-row justify-content-center">
                <div className="form-group">
                    <label htmlFor="inputCity">Kaupunki*</label>
                    <input  type="text" 
                            value={city}
                            onChange={e => setCity(e.target.value)}
                            className="form-control" 
                            id="inputCity"
                            name="city"
                            placeholder="Tampere"
                            required
                    />
                </div>
                <div className="form-group col-md-2">
                    <label htmlFor="inputZip">Postinumero*</label>
                    <input  type="text" 
                            value={postalcode}
                            onChange={e => setPostalcode(e.target.value)}
                            className="form-control" 
                            id="inputZip"
                            name="postalcode"
                            placeholder="33100"
                            required
                    />
                </div>
            </div>
                <div className="form-group">
                    <label htmlFor="RegisterPassword">Salasana*</label>
                    <input type="password" 
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            className="form-control text-center" 
                            id="registerPassword"
                            name="password" 
                            placeholder="Vähintään 6 merkkiä"
                            required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="ConfirmPassword">Kirjoita salasana uudelleen*</label>
                    <input type="password" 
                        className="form-control" 
                        id="ConfirmPassword" 
                        required
                    />
                </div>
                 <button 
                    type="submit" 
                    className="btn btn-success">
                    Rekisteröidy
          </button>
            </form>
        </div>
        </div>
    );
}
