import React, { useContext, useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { navItems } from "../../utils/constant";
import { Link } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
import { BiSearch } from "react-icons/bi";
import { FaBasketShopping } from "react-icons/fa6";

const Navbar = ({ setShowlogin }) => {
  const { getTotalAmount, activeNavbar, setActiveNavbar } =
    useContext(StoreContext);
  console.log(getTotalAmount());
  return (
    <div className="navbar">
      <Link to={"/"}>
        <img src={assets.logo} alt="logo" className="logo" />
      </Link>
      <ul className="navbar-menu">
        <Link
          to={"/"}
          onClick={() => setActiveNavbar("Ana Sayfa")}
          className={`${activeNavbar === "Ana Sayfa" ? "active" : ""} link `}
        >
          Ana Sayfa
        </Link>
        {navItems.map((item) => (
          <a
            onClick={() => setActiveNavbar(item.name)}
            href={item.scroll}
            className={`${activeNavbar === item.name ? "active" : ""} link `}
            key={item.name}
          >
            {item.name}
          </a>
        ))}
      </ul>
      <div className="navbar-right">
        <Link to={"/search"}>
          <BiSearch size={25} className="search-icon" />
        </Link>
        <div className="navbar-basket-wrapper">
          <Link to={"/basket"}>
            <FaBasketShopping className="basket-icon" />
          </Link>
          <div className="badge">{getTotalAmount()}</div>
        </div>
        <button onClick={() => setShowlogin(true)}>Giriş Yap</button>
      </div>
    </div>
  );
};

export default Navbar;
