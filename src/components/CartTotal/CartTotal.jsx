import React from "react";
import { useNavigate } from "react-router-dom";
import "./CartTotal.css";

const CartTotal = ({ getTotalCartPrice, payment }) => {
  const navigate = useNavigate();
  return (
    <div className="cart-total">
      <h2>Sepet Toplamı</h2>
      <div>
        <div className="cart-total-details">
          <p>Ara Toplam</p>
          <p>${getTotalCartPrice()}</p>
        </div>
        <hr />
        <div className="cart-total-details">
          <p>Teslimat Ücreti</p>
          <p>${getTotalCartPrice() === 0 ? 0 : 2}</p>
        </div>
        <hr />
        <div className="cart-total-details">
          <b>Toplam</b>
          <b>${getTotalCartPrice() === 0 ? 0 : getTotalCartPrice() + 2}</b>
        </div>
      </div>
      <button
        onClick={() => !payment && navigate("/order")}
        type="submit"
        className={payment ? "payment" : ""}
      >
        {payment ? "Ödeme" : "Satın Al"}
      </button>
    </div>
  );
};

export default CartTotal;
