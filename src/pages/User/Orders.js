// client/src/pages/User/Orders.js

import React, { useState, useEffect } from 'react';

function Orders() {
  const [orders, setOrders] = useState([
    { id: 'ORD001', date: '2023-10-01', total: 150, status: 'Shipped' },
    { id: 'ORD002', date: '2023-10-05', total: 85, status: 'Delivered' },
  ]);

  useEffect(() => {
    // TODO: Fetch orders from backend API
  }, []);

  return (
    <div className="container my-5">
      <h2>Order History</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Date</th>
            <th>Total</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.date}</td>
              <td>${order.total}</td>
              <td>{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Orders;
