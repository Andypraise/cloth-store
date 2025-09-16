import React, { useState } from "react";
import "./Payment.css";

function Payment({ cart, onClose }) {
  const [selectedAmount, setSelectedAmount] = useState(
    cart.reduce((acc, item) => acc + item.price, 0)
  );

  const quickAmounts = [1000, 2000, 5000, 10000, selectedAmount];

  const handlePayment = () => {
    alert(`Payment Successful! Amount: ₦${selectedAmount.toLocaleString()}`);
    onClose();
  };

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

        <p className="total">
          Total: ₦{cart.reduce((acc, item) => acc + item.price, 0).toLocaleString()}
        </p>

        <h3>Select Amount</h3>
        <div className="quick-amounts">
          {quickAmounts.map((amt, idx) => (
            <button key={idx} onClick={() => setSelectedAmount(amt)}>
              ₦{amt.toLocaleString()}
            </button>
          ))}
        </div>

        <div className="payment-buttons">
          <button className="cancel-btn" onClick={onClose}>Cancel</button>
          <button className="pay-btn" onClick={handlePayment}>Pay Now</button>
        </div>
      </div>
    </div>
  );
}

export default Payment;
