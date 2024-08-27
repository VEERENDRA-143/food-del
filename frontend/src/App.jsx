import React, { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import Footer from "./components/Footer/Footer";
import LoginpopUp from "./components/LoginPopUp/LoginpopUp";

const App = () => {
  const [showLoin,setShowLogin] =useState(false);

  return (
    <>
      {showLoin ? <LoginpopUp setShowLogin = {setShowLogin }/>:<></>}
      <div className="app">
        <Navbar setShowLogin = {setShowLogin} />

        {/* Routings */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
