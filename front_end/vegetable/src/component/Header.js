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
                    3-5 Business days delivery &amp; Free Returns
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
            <img className="logo" src="https://png.pngtree.com/png-vector/20191018/ourmid/pngtree-tree-logo-design-png-image_1824170.jpg"/>
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
                    <a href="index.html" className="nav-link">
                      Home
                    </a>
                  </li>
                  {/* ////////////// */}
                  <li className="nav-item active dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      data-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Shop
                    </a>
                    <div className="dropdown-menu" aria-labelledby="dropdown04">
                      <ul class="dropdown-menu">
                        <li>
                          <a class="dropdown-item" href="#">
                            Action
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            Another action
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            Something else here
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  {/* ////////////// */}
                  <li className="nav-item">
                    <a href="about.html" className="nav-link">
                      About
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="blog.html" className="nav-link">
                      Blog
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="contact.html" className="nav-link">
                      Contact
                    </a>
                  </li>
                  <li className="nav-item cta cta-colored">
                    <a href="cart.html" className="nav-link">
                      <i class="fa-solid fa-cart-shopping"></i>
                      [0]
                    </a>
                  </li>
                  <li className="nav-item">
                    <div className="nav-link">
                      <img
                        src="https://cdn.landesa.org/wp-content/uploads/default-user-image.png"
                        alt="user-img"
                        className="user-img"
                      />
                    </div>
                    {/* User */}
                    <div>{/* Add your user-related content here */}</div>
                  </li>
                  <li className="nav-item">
                    <div className="nav-link">
                      <a className="user">
                        {JwtToken ? (
                          <>
                            <Link
                              to={`/`}
                              className="user-info text-dark"
                              onClick={() => handleLogOut()}
                            >
                              {userName} Logout
                            </Link>
                          </>
                        ) : (
                          <Link to={`/login`} className="user-info text-dark">
                            Login
                          </Link>
                        )}
                      </a>
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
