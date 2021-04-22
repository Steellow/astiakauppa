import React from "react";
import { useState, useEffect } from "react";
import { useHistory } from "react-router";

export default function AdminSingleOrder({ match }) {
  const [orderRows, setOrderRows] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const URL = "http://localhost/astiakauppa/getSingleOrder.php?ordernum=" + match.params.ordernum;
    let status = 0;
    fetch(URL, {
      credentials: "include",
    })
      .then((response) => {
        status = parseInt(response.status);
        return response.json();
      })
      .then(
        (response) => {
          if (status === 200) {
            setOrderRows(response);
          } else {
            history.push("/");
          }
        },
        (error) => {
          history.push("/");
        }
      );
  }, [match.params.ordernum, history]);

  return (
    <div className="card container my-2">
      <div className="row">
        <h1 className="col-12 m-3">Tilaus {match.params.ordernum}</h1>
        <table className="table col-11 mx-auto">
          <thead>
            <tr>
              <th scope="col">Rivinro.</th>
              <th scope="col">Tuote</th>
              <th scope="col">Määrä</th>
            </tr>
          </thead>
          <tbody>
            {orderRows.map((row) => {
              return <TableRow key={row.ordernum} row={row} />;
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function TableRow({ row }) {
  return (
    <tr>
      <th scope="row">{row.rownum}</th>
      <td>{row.productid}</td>
      <td>{row.amount}</td>
    </tr>
  );
}
