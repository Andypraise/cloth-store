import React, { useState } from "react";
import "./Footer.css";
import footerImage from "../../assets/image3.png";
import locateImage from "../../assets/image15.png";
import mailImage from "../../assets/image12.png";
import phoneImage from "../../assets/image14.png";
import FooterAds from "./FooterAds";

function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = () => {
    if (!email) return alert("Please enter your email!");
    setSubscribed(true);
    setEmail(""); // clear input
  };

  return (
    <div>
      <FooterAds />

      <div className="footer-link">
        <div className="footer-img">
          <h4>PROMO</h4>
          <img src={footerImage} alt="" />
          <p className="sup">
            Find Your Perfect Shirt This <br />
            Summer
          </p>
          <p>Promo from October 10-20,2025</p>
        </div>

        <div className="footer-link-2">
          <h4>QUICK LINKS</h4>
          <div className="link">
            <ul>
              <li><a href="">Sell online</a></li>
              <li><a href="">Feature</a></li>
              <li><a href="">Store builder</a></li>
            </ul>
            <ul>
              <li><a href="">Mobile commerce</a></li>
              <li><a href="">Dropshipping</a></li>
              <li><a href="">Website development</a></li>
            </ul>
            <ul>
              <li><a href="">Learn Sewing from Scratch</a></li>
              <li><a href="">Simple design</a></li>
            </ul>
          </div>
        </div>

        <div className="contact">
          <h4>CONTACT INFO</h4>
          <div className="contact-img">
            <img src={locateImage} alt="" width="20px" height="20px" />
            <p>35 Road & 3rd Avenue, <br />Gwarinpa, Abuja,</p>
          </div>
          <div className="contact-img">
            <img src={phoneImage} alt="" width="20px" height="20px" />
            <p>+2349133277350</p>
          </div>
          <div className="contact-img">
            <img src={mailImage} alt="" width="20px" height="20px" />
            <p>andypraise890@gmail.com</p>
          </div>

          {/* Subscribe Section */}
          <div className="input-detail">
            <h4>SUBSCRIBE</h4>
            {subscribed ? (
              <p className="thank-you">🎉 Thanks for subscribing!</p>
            ) : (
              <div className="detail">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button onClick={handleSubscribe}>SEND</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
