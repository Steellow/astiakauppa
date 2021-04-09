import React from "react";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

export default function AdminDashboard() {
  const [orders, setOrders] = useState([]);

  const URL = "http://localhost/astiakauppa/getOrders.php";

  useEffect(() => {
    let status = 0;
    fetch(URL)
      .then((response) => {
        status = parseInt(response.status);
        return response.json();
      })
      .then(
        (response) => {
          if (status === 200) {
            setOrders(response);
          } else {
            alert(response.error);
          }
        },
        (error) => {
          alert(error);
        }
      );
  }, []);

  return (
    <div className="card container my-2">
      <div className="row">
        <h1 className="col-12 m-3">Hallintapaneeli</h1>
        <table className="table col-11 mx-auto">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Käyttäjä</th>
              <th scope="col">Päivämäärä</th>
              <th scope="col">Tila</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => {
              return <TableRow key={order.ordernum} order={order} />;
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function TableRow({ order }) {
  const history = useHistory();

  // Using history.push instead of <Link /> because <Link> didn't work on table
  const handleRowClick = (ordernum) => {
    history.push(`/admin/tilaus/${order.ordernum}`);
  };

  return (
    <tr className="clickableRow" onClick={() => handleRowClick(order.ordernum)}>
      <th scope="row">{order.ordernum}</th>
      <td>{order.userid}</td>
      <td>{order.orderdate}</td>
      <td>{order.status}</td>
    </tr>
  );
}
