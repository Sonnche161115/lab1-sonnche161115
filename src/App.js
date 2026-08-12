import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Header from "./components/Header";
import HeroBanner from "./components/HeroBanner";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";



  return (
    <div className="App">
      <Header cartCount={cartCount} />
      <HeroBanner />
      <ProductList />
      <Footer />
    </div>
  );


export default App;
