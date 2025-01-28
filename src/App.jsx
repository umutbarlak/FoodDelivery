import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Basket from "./pages/Basket/Basket";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import Footer from "./components/Footer/Footer";
import LoginPopup from "./components/LoginPopup/LoginPopup";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Search from "./pages/Search/Search";
import NotFound from "./pages/NotFound/NotFound";

const App = () => {
  const [showLOgin, setShowlogin] = useState(false);
  return (
    <>
      {showLOgin ? <LoginPopup setShowlogin={setShowlogin} /> : <></>}
      <Navbar setShowlogin={setShowlogin} />
      <div className="app">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="/order" element={<PlaceOrder />} />
          <Route path="/search" element={<Search />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
