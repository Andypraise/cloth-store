import React, { useState, useEffect } from "react";
import "./PromoBanner.css";

const promos = [
  "🔥 Summer Sale! Get 20% off all T-Shirts",
  "💥 Buy 2 Jeans, Get 1 Free!",
  "🎉 New Jackets Collection Out Now!",
  "👟 Sneakers Promo: ₦5000 Only!",
];

function PromoBanner() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % promos.length);
    }, 4000); // Change promo every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="promo-banner">
      <p>{promos[current]}</p>
    </div>
  );
}

export default PromoBanner;
