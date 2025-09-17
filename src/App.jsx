import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import PromoVideo from "./components/PromoVideo/PromoVideo";
import Navbar from "./components/Navbar/Navbar";
import Home from "./page/Home/Home";
import Shop from "./page/Shop/Shop";
import Rated from "./page/Rated/Rated";
import Arrival from "./page/Arrival/Arrival";
import Payment from "./components/Payment/Payment";
import ChatBot from "./components/ChatBot/ChatBot";
import Footer from "./components/Footer/Footer";

function App() {
  const [cart, setCart] = useState([]);
  const [showPayment, setShowPayment] = useState(false);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const openPayment = () => {
    setShowPayment(true);
  };

  return (
    <Router>
      <PromoVideo />
      <Navbar addToCart={addToCart} />

      {/* Routes for different pages */}
      <Routes>
        <Route
          path="/"
          element={<Home onShopNow={openPayment} />}
        />
        <Route path="/shop" element={<Shop />} />
        <Route path="/rated" element={<Rated />} />
        <Route path="/arrival" element={<Arrival onShopNow={openPayment} />} />
      </Routes>

      {/* Payment modal (shown only when triggered) */}
      {showPayment && (
        <Payment cart={cart} onClose={() => setShowPayment(false)} />
      )}

      <ChatBot />
      <Footer />
    </Router>
  );
}

export default App;
