import React, { useContext } from "react";
import "./ExploreMenu.css";
import { menu_list } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";
const ExploreMenu = () => {
  const { category, setCategory } = useContext(StoreContext);
  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Menümüzü Keşfedin</h1>
      <p className="explore-menu-text">
        Menümüzü keşfedin ve her damak zevkine hitap eden lezzetlerle dolu bir
        dünyayı keşfedin. Klasik favorilerden heyecan verici yeni tatlara kadar,
        sizi bekleyen birbirinden lezzetli seçenekler var!
      </p>
      <div className="explore-menu-list">
        {menu_list.map((item, index) => (
          <div
            key={index}
            onClick={() =>
              setCategory((prev) =>
                prev.includes(item.menu_name)
                  ? prev.filter((category) => category !== item.menu_name)
                  : [...prev, item.menu_name]
              )
            }
            className="explore-menu-list-item"
          >
            <img
              className={category.includes(item.menu_name) ? "active" : ""}
              src={item.menu_image}
              alt=""
            />
            <p>{item.menu_name}</p>
          </div>
        ))}
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;
