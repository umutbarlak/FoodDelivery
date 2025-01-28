import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";
const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Voluptatibus, error facilis nesciunt quam eius culpa odit doloribus
            saepe necessitatibus sapiente quos nam accusantium voluptatum
            accusamus ab cum reiciendis voluptas quia.
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>ŞİRKET</h2>
          <ul>
            <li>Ana Sayfa</li>
            <li>Hakkımızda</li>
            <li>Teslimat</li>
            <li>Gizlilik Politikası</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>İLETİŞİME GEÇİN</h2>
          <ul>
            <li>+90-555-555-55-55</li>
            <li>contact@tomoto.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Telif Hakkı 2025 &#9400; - Tüm Hakları Saklıdır
      </p>
    </div>
  );
};

export default Footer;
