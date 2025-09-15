import React from "react";
import "./Payment.css";

function Payment({ cart, onClose }) {
  const handlePayment = () => {
    alert("Payment Successful!");
    onClose();
  };

  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="payment-overlay">
      <div className="payment-box">
        <h2>Payment Summary</h2>

        <ul className="payment-items">
          {cart.map((item) => (
            <li key={item.id}>
              <span>{item.name}</span>
              <span>₦{item.price.toLocaleString()}</span>
            </li>
          ))}
        </ul>

        <p className="total">Total: ₦{total.toLocaleString()}</p>

        <div className="payment-buttons">
          <button className="cancel-btn" onClick={onClose}>Cancel</button>
          <button className="pay-btn" onClick={handlePayment}>Pay Now</button>
        </div>
      </div>
    </div>
  );
}

export default Payment;
