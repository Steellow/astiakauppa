import React from "react";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

export default function AdminDashboard() {
  const [orders, setOrders] = useState([]);

  const URL = "http://localhost/astiakauppa/getOrders.php";
  const history = useHistory();

  useEffect(() => {
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
            setOrders(response);
          } else {
            history.push("/");
          }
        },
        (error) => {
          history.push("/");
        }
      );
  }, [history]);

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
  const [rowStatus, setRowStatus] = useState(order.status);

  // Using history.push instead of <Link /> because <Link> didn't work on table
  const handleRowClick = () => {
    history.push(`/admin/tilaus/${order.ordernum}`);
  };

  const updateStatus = (e) => {
    e.preventDefault();

    setRowStatus(e.target.value);

    let fetchStatus = 0;
    fetch(`http://localhost/astiakauppa/changeOrderStatus.php?orderNum=${order.ordernum}&status=${e.target.value}`, {
      method: "POST",
      credentials: "include",
    })
      .then((response) => {
        fetchStatus = response.status;
        return response;
      })
      .then(
        (response) => {
          if (fetchStatus !== 200) {
            alert(response);
          }
        },
        (error) => {
          alert(error);
        }
      );
  };

  return (
    <tr className="clickableRow" onClick={handleRowClick}>
      <th scope="row">{order.ordernum}</th>
      <td>{order.userid}</td>
      <td>{order.orderdate}</td>
      <td onClick={(e) => e.stopPropagation()}>
        {/* stopPropagation ettei selectistä painaessa tapahtu handleRowClick*/}
        <select value={rowStatus} onChange={updateStatus}>
          <option value="M">Maksettu</option>
          <option value="L">Lähetetty</option>
          <option value="T">Toimitettu</option>
        </select>
      </td>
    </tr>
  );
}
