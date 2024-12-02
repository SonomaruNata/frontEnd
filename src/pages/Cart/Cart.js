

import React, { useState } from 'react';

function Cart() {

  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'product1', price: 120, quantity: 1 },
    { id: 2, name: 'product2', price: 85, quantity: 2 },
    { id: 3, name: 'product3', price: 45, quantity: 1 },
  ]);


  const [paymentMode, setPaymentMode] = useState('Credit Card');

  
  const totalSum = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  
  const increaseQuantity = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  
  const decreaseQuantity = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  // Delete an item from the cart
  const deleteItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  // Handle payment action
  const handlePayment = () => {
    alert(`Proceeding to payment with ${paymentMode}. Total: $${totalSum}`);
    // Implement payment processing logic here
  };

  return (
    <div className="container my-5">
      <h2>Your Cart</h2>

      {/* Cart Items Table */}
      <table className="table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Subtotal</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>${item.price}</td>
              <td>
                <button
                  className="btn btn-outline-secondary btn-sm me-2"
                  onClick={() => decreaseQuantity(item.id)}
                >
                  -
                </button>
                {item.quantity}
                <button
                  className="btn btn-outline-secondary btn-sm ms-2"
                  onClick={() => increaseQuantity(item.id)}
                >
                  +
                </button>
              </td>
              <td>${item.price * item.quantity}</td>
              <td>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => deleteItem(item.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Total Sum */}
      <div className="d-flex justify-content-between align-items-center mt-4">
        <h4>Total: ${totalSum}</h4>

        {/* Payment Mode Selection */}
        <div className="d-flex align-items-center">
          <label className="me-2">Payment Mode:</label>
          <select
            className="form-select"
            value={paymentMode}
            onChange={(e) => setPaymentMode(e.target.value)}
          >
            <option value="Credit Card">Credit Card</option>
            <option value="Debit Card">Debit Card</option>
            <option value="PayPal">PayPal</option>
            <option value="Cash on Delivery">Cash on Delivery</option>
          </select>
        </div>

        {/* Pay Now Button */}
        <button className="btn btn-success btn-lg" onClick={handlePayment}>
          Pay Now
        </button>
      </div>
    </div>
  );
}

export default Cart;
