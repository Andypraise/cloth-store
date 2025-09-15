
import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./page/Home/Home";
import Shop from "./page/Shop/Shop";
import Rated from "./page/Rated/Rated";
import Arrival from "./page/Arrival/Arrival";
import Payment from "./components/Payment/Payment";
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
    <div>
      <Navbar addToCart={addToCart} />  {/* Navbar no longer triggers payment */}
      <Home onShopNow={openPayment} />   {/* Only Home triggers modal */}

      {showPayment && <Payment cart={cart} onClose={() => setShowPayment(false)} />}
      <Shop />
      <Rated />
      <Arrival onShopNow={openPayment}/>
    
      <Footer />
    </div>
  );
}

export default App;
