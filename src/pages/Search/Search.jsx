import React, { useState } from "react";
import "./Search.css";
import FoodDisplay from "../../components/FoodDisplay/FoodDisplay";

const Search = () => {
  const [search, setSearch] = useState("");

  const handleSumbit = (e) => {
    e.preventDefault();
    console.log("tıklamdı");
    setSearch(e.target[0].value);
  };

  return (
    <div className="search">
      <form onSubmit={handleSumbit} className="search-input">
        <input type="text" placeholder="örn:tavuk" />
        <button type="submit">Gönder</button>
      </form>
      <FoodDisplay search={search} />
    </div>
  );
};

export default Search;
