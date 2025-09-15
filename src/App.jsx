import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./page/Home/Home";
import Shop from "./page/Shop/Shop";
import Rated from "./page/Rated/Rated";
import Arrival from "./page/Arrival/Arrival";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Shop />
      <Rated />
      <Arrival />
      <Footer />
    </div>
  );
}

export default App;
