import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Header from "./components/Header";
import HeroBanner from "./components/HeroBanner";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";

import nam1 from "./Images/nam1.jpg";
import nam2 from "./Images/nam2.jpg";
import nam3 from "./Images/nam3.jpg";
import nu1 from "./Images/Nu1.jpg";
import nu2 from "./Images/Nu2.jpg";
import nu3 from "./Images/Nu3.jpg";

const initialProducts = [
  {
    id: 1,
    name: "Áo Phông Nam Casual",
    price: 250000,
    image: nam1,
    description: "Áo phông nam chất liệu cotton thoáng mát, phong cách trẻ trung."
  },
  {
    id: 2,
    name: "Áo Polo Nam Thanh Lịch",
    price: 350000,
    image: nam2,
    description: "Áo polo nam chất liệu cao cấp, kiểu dáng hiện đại."
  },
  {
    id: 3,
    name: "Áo Sơ Mi Nam Công Sở",
    price: 450000,
    image: nam3,
    description: "Áo sơ mi nam form chuẩn, lịch sự cho môi trường công sở."
  },
  {
    id: 4,
    name: "Đầm Nữ Dáng Xòe Thời Trang",
    price: 520000,
    image: nu1,
    description: "Đầm nữ thiết kế dịu dàng, tôn dáng, thích hợp đi chơi và dạo phố."
  },
  {
    id: 5,
    name: "Áo Kiểu Nữ Thanh Lịch",
    price: 320000,
    image: nu2,
    description: "Áo kiểu nữ thiết kế hiện đại, phối đồ dễ dàng."
  },
  {
    id: 6,
    name: "Váy Nữ Thời Trang",
    price: 480000,
    image: nu3,
    description: "Váy nữ thanh lịch, chất vải mềm mại, phong cách nữ tính."
  }
];

function App() {
  const [cartCount, setCartCount] = useState(0);
  const [toastMessage, setToastMessage] = useState("");
  const [showToast, setShowToast] = useState(false);

  const handleAddToCart = (product) => {
    setCartCount((prev) => prev + 1);
    setToastMessage(`Đã thêm "${product.name}" vào giỏ hàng!`);
    setShowToast(true);
  };

  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => {
        setShowToast(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showToast]);

  return (
    <div className="App">
      <Header cartCount={cartCount} />
      <HeroBanner />
      <ProductList products={initialProducts} onAddToCart={handleAddToCart} />
      <Footer />

      <div className={`toast-notification ${showToast ? "show" : ""}`}>
        <span>🛒 {toastMessage}</span>
        <button className="toast-close" onClick={() => setShowToast(false)}>
          &times;
        </button>
      </div>
    </div>
  );
}

export default App;
