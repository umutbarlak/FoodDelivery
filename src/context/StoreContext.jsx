import { createContext, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState({});
  const [activeNavbar, setActiveNavbar] = useState("home");

  const [category, setCategory] = useState([]);
  const [filteredList, setFilteredList] = useState(food_list);

  const addToCart = (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
  };
  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const getTotalAmount = () => {
    return Object.values(cartItems).reduce((acc, value) => acc + value, 0);
  };

  const getTotalCartPrice = () => {
    let totalAmount = 0;

    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = food_list.find((product) => product._id === item);
        totalAmount += itemInfo.price * cartItems[item];
      }
    }

    return totalAmount;
  };

  const filterList = (search) => {
    const list = food_list.filter((item) => {
      const matchesCategory =
        category.length === 0 || category.includes(item.category);
      const matchesSearch =
        search === "" ||
        item.name.toLowerCase().includes(search?.toLowerCase());
      return matchesCategory && matchesSearch;
    });

    console.log(list);
    setFilteredList(list);
  };

  const contextVAlue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalCartPrice,
    getTotalAmount,
    setCategory,
    filterList,
    setActiveNavbar,
    activeNavbar,
    category,
    filteredList,
  };

  return (
    <StoreContext.Provider value={contextVAlue}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
