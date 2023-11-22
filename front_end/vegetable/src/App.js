import logo from "./logo.svg";
import "./App.css";
import Footer from "./component/Footer";
import Login from "./component/Login";
import { Route, Routes } from "react-router-dom";
import Header from "./component/Header";
import HomePage from "./component/HomePage";
import { useLocation } from 'react-router-dom';
import DetailProduct from "./component/ProductDetail";
import Cart from "./component/Cart";
import Register from "./component/Register";
import Shop from "./component/Shop";
import ProductDetail from "./component/ProductDetail";
import CheckOut from "./component/CheckOut";
import SearchProduct from "./component/SearchProduct";
import DetailAccount from "./component/DetailAccount";
import { useState } from "react";
import { useEffect } from "react";



function App() {
  const [cartLength, setCartLength] = useState(0); // Bước 1
  const updateCartLength = (length) => {
    setCartLength(length); // Bước 2
  };

  const location = useLocation();
  const noShowHeaderFooter = location.pathname !== '/login' && location.pathname !== '/register';

  return (
    <>
      {noShowHeaderFooter && (
        <>
          <Header cartLength={cartLength}></Header>
        </>
      )}

      <Routes>
        <Route path="/cart"  element={<Cart updateCartLength={updateCartLength}></Cart>}></Route>
        <Route path="/product-Detail/:id" element={<ProductDetail></ProductDetail>}></Route>
        <Route path="/" element={<HomePage updateCartLength={updateCartLength}></HomePage>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/shop" element={<Shop updateCartLength={updateCartLength}></Shop>}></Route>
        <Route path="/checkout" element={<CheckOut></CheckOut>}></Route>
        <Route path="/searchProduct" element={<SearchProduct></SearchProduct>}></Route>
        <Route path="/detailAccount" element={<DetailAccount></DetailAccount>}></Route>
      </Routes>

      {noShowHeaderFooter && (
        <>
          <Footer></Footer>
        </>
      )}
    </>
  );
}

export default App;
