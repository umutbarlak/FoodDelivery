import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";
const NotFound = () => {
  return (
    <div className="not-found">
      <p>Üzgünüz aradığınız sayfa bulunamadı</p>
      <Link to={"/"}>
        <button>Ana sayfa</button>
      </Link>
    </div>
  );
};

export default NotFound;
