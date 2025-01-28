import React, { useState } from "react";
import "./LoginPopup.css";
import { assets } from "../../assets/assets";
const LoginPopup = ({ setShowlogin }) => {
  const [currState, setCurrState] = useState("Giriş Yap");
  return (
    <div className="login-popup">
      <form className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img
            onClick={() => setShowlogin(false)}
            src={assets.cross_icon}
            alt=""
          />
        </div>
        <div className="login-popup-inputs">
          {currState === "Giriş Yap" ? (
            <></>
          ) : (
            <input type="text" placeholder="İsim" required />
          )}
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Şifre" required />
        </div>
        <button>
          {currState === "Kayıt Ol" ? "Hesap oluştur" : "Giriş Yap"}
        </button>

        {currState === "Kayıt Ol" ? (
          <>
            <div className="login-popup-condition">
              <input type="checkbox" required />
              <p>
                Devam ederek kullanım koşullarını ve gizlilik politikasını kabul
                ediyorum.
              </p>
            </div>
            <p>
              Zaten bir hesabınız var mı?
              <span onClick={() => setCurrState("Giriş Yap")}>Login here</span>
            </p>
          </>
        ) : (
          <p>
            Yeni bir hesap mı oluşturacaksınız?
            <span onClick={() => setCurrState("Kayıt Ol")}>Tıkla</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;
