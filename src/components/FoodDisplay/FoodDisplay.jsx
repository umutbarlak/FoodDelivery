import React, { useContext, useEffect, useState } from "react";
import "./FoodDisplay.css";
import { StoreContext } from "../../context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";

const FoodDisplay = ({ search }) => {
  const { category, filterList, filteredList } = useContext(StoreContext);

  useEffect(() => {
    filterList(search || "");
  }, [search, category]);

  console.log(filteredList);

  if (filteredList.length === 0) {
    return (
      <div className="food-display no-item">Aradığınız ürün bulunamadı</div>
    );
  }

  return (
    <div className="food-display" id="food-display">
      <h2>Sana yakın en iyi yemekler</h2>
      {!search && (
        <div className="food-display-categories">
          <span>Kategoriler:</span>
          {category.length === 0 && <span>Tümü</span>}
          {category?.map((item, index) => (
            <span key={index}>{item},</span>
          ))}
        </div>
      )}
      <div className="food-display-list">
        {filteredList?.map((item, index) => {
          return <FoodItem key={index} item={item} />;
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
