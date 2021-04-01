import React, { useState, useEffect } from "react";
import shoppingCart from "../util/ShoppingCart";

export default function CheckOutPage() {
  const [items] = useState(shoppingCart.getItems());
  const [total, setTotal] = useState(0);


  const calcTotal = () => {
    let i = 0;
    for (let ii = 0; ii < items.length; ii++) {
      const item = items[ii];
      i += item.amount * item.product.price;
    }
    setTotal(i);
  };

  useEffect(() => {
    calcTotal();
  }, [items]);

  return (
    <div className="row">
      <div className="row col-12 m-1">
        <h3 className="p-2">1. Asiakastiedot</h3>
      <div className="card col-12 pt-3">
      <form>
        <div className="form-group col-md-6">
      <div className="form-row">
        <div className="form-group">
          <label for="inputFname">Etunimi*</label>
          <input  type="text" 
                  className="form-control mr-1" 
                  id="inputFname"
                  placeholder="Etunimi"
          />
        </div>
        <div className="form-group">
          <label for="inputLname">Sukunimi*</label>
          <input  type="text" 
                  className="form-control ml-1" 
                  id="inputLname"
                  placeholder="Sukunimi"
          />
        </div>
      </div>
        <div className="form-row">
        <div className="form-group col-12">
          <label for="inputEmail">Sähköposti*</label>
          <input  type="email" 
                  className="form-control" 
                  id="inputEmail" 
                  placeholder="Sähköpostiosoite"
            />
        </div>
        </div>
        <div className="form-group">
            <label for="inputAddress">Osoite*</label>
            <input  type="text" 
                    className="form-control col-12" 
                    id="inputAddress" 
                    placeholder="Katuosoite ja talonnumero"
              />
        </div>
      <div className="form-row">
        <div className="form-group">
            <label for="inputCity">Kaupunki*</label>
            <input  type="text" 
                    className="form-control" 
                    id="inputCity"
                    placeholder="Tampere"
            />
        </div>
        <div className="form-group col-md-2">
            <label for="inputZip">Postinumero*</label>
            <input  type="text" 
                    className="form-control" 
                    id="inputZip"
                    placeholder="33100"
            />
        </div>
      </div>     
        <button type="submit" className="btn btn-success">Jatka toimitukseen</button>
        </div>
      </form>
      <div className="row pt-2">
        <div className="bg-secondary col-12 justify-content-between d-flex summary">
          <p>Yhteensä</p>
          <p>{total}€</p>          
        </div>
      </div>
      </div>
      
        
      </div>
      
    </div>
<<<<<<< HEAD
  );
}
=======
    
  );
}
>>>>>>> 86d9f33c9923ec8453447b3261e0c0e0fd5a76dd
