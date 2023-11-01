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


function App() {
  const showHeaderFooter = useLocation().pathname !== "/login";

  return (
    <>
      {showHeaderFooter && (
        <>
          <Header></Header>
        </>
      )}

      <Routes>
        <Route path="/cart" element={<Cart></Cart>}></Route>
        <Route path="/detailproduct" element={<DetailProduct></DetailProduct>}></Route>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
      </Routes>

      {showHeaderFooter && (
        <>
          <Footer></Footer>
        </>
      )}
    </>
  );
}

export default App;
