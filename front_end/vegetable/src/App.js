import logo from "./logo.svg";
import "./App.css";
import Footer from "./component/Footer";
import Login from "./component/Login";
import { Route, Routes } from "react-router-dom";
import Header from "./component/Header";
import HomePage from "./component/HomePage";
import { useLocation } from 'react-router-dom';
import DetailProduct from "./component/DetailProduct";
import Cart from "./component/Cart";
import Register from "./component/Register";
import Shop from "./component/Shop";


function App() {
  const location = useLocation();
  const noShowHeaderFooter = location.pathname !== '/login' && location.pathname !== '/register';

  return (
    <>
      {noShowHeaderFooter && (
        <>
          <Header></Header>
        </>
      )}

      <Routes>
        <Route path="/cart" element={<Cart></Cart>}></Route>
        <Route path="/detailproduct" element={<DetailProduct></DetailProduct>}></Route>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/shop" element={<Shop></Shop>}></Route>
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
