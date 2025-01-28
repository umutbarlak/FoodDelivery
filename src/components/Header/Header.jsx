import React from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="header">
      <div className="header-contents">
        <h2>Favori yemeğinizi buradan sipariş edin</h2>
        <p>
          Lezzetli yemeklerle açlığınızı tatmin edebileceğiniz mükemmel yeri
          keşfedin, yemekler kapınıza kadar teslim edilsin. Hızlı
          atıştırmalıklardan keyifli tatlara kadar, sadece bir tık uzaklıkta
          birçok farklı lezzet ve mutfak türünü keşfedin!
        </p>
        <button onClick={() => navigate("/search")}>Menüyü Görüntüle</button>
      </div>
    </div>
  );
};

export default Header;
