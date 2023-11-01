import logo from "./logo.svg";
import "./App.css";
import Footer from "./component/Footer";
import Login from "./component/Login";
import { Route, Routes } from "react-router-dom";
import Header from "./component/Header";
import HomePage from "./component/HomePage";
import { useLocation } from 'react-router-dom';


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
