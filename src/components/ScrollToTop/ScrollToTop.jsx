import React, { useState, useEffect, useContext } from "react";
import "./ScrollToTop.css"; // CSS dosyasını ekliyoruz
import { SlArrowUp } from "react-icons/sl";
import { StoreContext } from "../../context/StoreContext";

const ScrollToTop = () => {
  const { setActiveNavbar } = useContext(StoreContext);
  const [isVisible, setIsVisible] = useState(false);

  // Kaydırma durumunu kontrol eden fonksiyon
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Sayfayı en üste kaydırma fonksiyonu
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    window.history.replaceState(null, null, " ");
    setActiveNavbar("Ana Sayfa");
  };

  // Sayfa kaydırıldığında toggleVisibility'i tetikle
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="scroll-to-top"
          aria-label="Başa Dön"
        >
          <SlArrowUp size={18} />
        </button>
      )}
    </>
  );
};

export default ScrollToTop;
