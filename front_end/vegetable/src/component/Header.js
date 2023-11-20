import "../css/header.css";
import swal from "sweetalert2";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getUserByJwtToken } from "../service/user/UserService";

const Header = () => {
  const [JwtToken, setJwtToken] = useState(localStorage.getItem("JWT"));
  const [userName, setUserName] = useState(null);
  const navigate = useNavigate();

  const getUsername = () => {
    const res = getUserByJwtToken();
    if (res != null) {
      setUserName(res.sub);
    }
  };

  const handleLogOut = () => {
    localStorage.removeItem("JWT");
    setJwtToken(undefined);
    setUserName(undefined);
    swal.fire({
      icon: "success",
      title: "Hoàn tất",
      text: "Đăng xuất thành công",
      showConfirmButton: false,
      timer: 1500,
    });
    navigate("/");
  };

  useEffect(() => {
    getUsername();
  }, []);

  

  return (
    <>
      <div className="py-1 bg-header">
        <div className="container">
          <div className="row no-gutters d-flex align-items-start align-items-center px-md-0">
            <div className="col-lg-12 d-block">
              <div className="row d-flex">
                <div className="col-md pr-4 d-flex topper align-items-center">
                  <div className="icon mr-2 d-flex justify-content-center align-items-center">
                    <span className="icon-phone2" />
                  </div>
                  <span className="text-white">
                    <i class="fa-solid fa-phone fa-xs"></i> +84338210411
                  </span>
                </div>
                <div className="col-md pr-4 d-flex topper align-items-center">
                  <div className="icon mr-2 d-flex justify-content-center align-items-center">
                    <span className="icon-paper-plane" />
                  </div>
                  <span className="text-white">
                    <i class="fa-regular fa-paper-plane fa-xs "></i>{" "}
                    lequangphuoc2305@email.com
                  </span>
                </div>
                <div className="col-md-5 pr-4 d-flex topper align-items-center text-lg-right">
                  <span className="text-white">
                    Giao hàng miễn phí trong 3-5 ngày làm việc
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <nav
            className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light"
            id="ftco-navbar"
          >
            <div className="col-md">
              <img
                className="logo"
                src="https://png.pngtree.com/png-vector/20191018/ourmid/pngtree-tree-logo-design-png-image_1824170.jpg"
              />
              <Link className="navbar-brand" to={"/"}>
                Eating Well
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#ftco-nav"
                aria-controls="ftco-nav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="oi oi-menu" /> Menu
              </button>
            </div>
            <div className="">
              <div className="collapse navbar-collapse ">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <Link to={"/shop"} className="nav-link">
                      Mua hàng
                    </Link>
                  </li>
                  <li className="nav-item">
                      <input className="nav-link" type="text" id="searchProduct" placeholder="Tìm sản phẩm" style={{color:'#00000'}}></input>
                  </li>
                  <li className="nav-item">
                    <a href="blog.html" className="nav-link">
                      Blog
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="contact.html" className="nav-link">
                      Liên lạc
                    </a>
                  </li>
                  <li className="nav-item">
                    <Link to={"/checkout"} className="nav-link">
                      Thanh toán
                    </Link>
                  </li>
                  <li className="nav-item cta cta-colored">
                    <Link to={"/cart"} className="nav-link">
                      <i class="fa-solid fa-cart-shopping"></i>
                      [0]
                    </Link>
                  </li>
                  {JwtToken ? (
                    <li className="nav-item">
                      <Link class="nav-link" data-toggle="dropdown">
                        {userName}
                      </Link>
                      <div
                        class="dropdown-menu"
                        aria-labelledby="dropdownMenuButton"
                      >
                        <Link class="dropdown-item" >
                          Tài khoản
                        </Link>
                        <a class="dropdown-item" >
                        <Link
                              to={`/`}
                              className="user-info text-dark"
                              style={{ textDecoration: "none" }}
                              onClick={() => handleLogOut()}
                            >
                              Thoát
                            </Link>
                        </a>
                      </div>
                    </li>
                  ) : (
                    <li className="nav-item">
                    <div className="nav-link">
                    <Link to={`/login`} className="user-info text-dark" style={{ textDecoration: "none" }}>
                      Đăng nhập
                    </Link>
                    </div>
                    </li>
                  )}
                  <li className="nav-item">
                    <div className="nav-link">
                      <img
                        src="https://cdn.landesa.org/wp-content/uploads/default-user-image.png"
                        alt="user-img"
                        className="user-img"
                      />
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
      {/* END nav */}
    </>
  );
};
export default Header;
