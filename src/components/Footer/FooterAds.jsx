import React, { useState, useEffect } from "react";
import "./FooterAds.css";

const footerAds = [
  { id: 1, text: "🎁 Get ₦5,000 Amazon Card when you shop today!" },
  { id: 2, text: "🔥 20% OFF all T-Shirts – Limited Time!" },
  { id: 3, text: "💥 Free Shipping on Orders Above ₦10,000!" }
];

function FooterAds() {
  const [currentAd, setCurrentAd] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAd((prev) => (prev + 1) % footerAds.length);
    }, 4000); // Change ad every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="footer-ads">
      <p>{footerAds[currentAd].text}</p>
    </div>
  );
}

export default FooterAds;
