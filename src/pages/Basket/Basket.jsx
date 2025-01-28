import React, { useContext } from "react";
import "./Basket.css";
import { StoreContext } from "../../context/StoreContext";
import CartTotal from "../../components/CartTotal/CartTotal";
import { Link } from "react-router-dom";
const Basket = () => {
  const { cartItems, food_list, removeFromCart, getTotalCartPrice } =
    useContext(StoreContext);

  if (getTotalCartPrice() === 0) {
    return (
      <div className="cart no-item">
        Sepetinizde hiç ürün yok
        <Link to={"/"}>
          <button>Ürünlere git</button>
        </Link>
      </div>
    );
  }
  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Ürünler</p>
          <p>Başlık</p>
          <p>Fiyat</p>
          <p>Adet</p>
          <p>Toplam</p>
          <p>Kaldır</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div key={index}>
                <div className="cart-items-title cart-items-item">
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>${item.price * cartItems[item._id]}</p>
                  <p onClick={() => removeFromCart(item._id)} className="cross">
                    x
                  </p>
                </div>
                <hr />
              </div>
            );
          }
        })}
      </div>
      <div className="cart-bottom">
        <CartTotal getTotalCartPrice={getTotalCartPrice} />
        <div className="cart-promocode">
          <div>
            <p>Eğer bir promosyon kodunuz varsa, buraya girin</p>
            <div className="cart-promocode-input">
              <input type="text" placeholder="promo code" />
              <button>Gönder</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Basket;
