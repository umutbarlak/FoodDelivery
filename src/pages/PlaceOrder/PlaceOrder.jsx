import React, { useContext } from "react";
import "./PlaceOrder.css";
import CartTotal from "../../components/CartTotal/CartTotal";
import { StoreContext } from "../../context/StoreContext";

const PlaceOrder = () => {
  const { getTotalCartPrice } = useContext(StoreContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Siparişiniz alındı");
  };
  return (
    <form onSubmit={handleSubmit} className="place-order">
      <div className="place-order-left">
        <p className="title">Teslimat Bilgileri</p>
        <div className="multi-fields">
          <input type="text" placeholder="First name" required />
          <input type="text" placeholder="Last name" required />
        </div>
        <input type="email" placeholder="Email address" required />
        <input type="text" placeholder="Street" required />
        <div className="multi-fields">
          <input type="text" placeholder="City" required />
          <input type="text" placeholder="State" required />
        </div>
        <div className="multi-fields">
          <input type="text" placeholder="Zip code" required />
          <input type="text" placeholder="Country" required />
        </div>
        <input type="text" placeholder="Phone" required />
      </div>
      <div className="place-order-right">
        <CartTotal getTotalCartPrice={getTotalCartPrice} payment={true} />
      </div>
    </form>
  );
};

export default PlaceOrder;
