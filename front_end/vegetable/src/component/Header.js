import "../css/header.css";
const Header = () => {
  return (
    <>
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
                      <i class="fa-solid fa-phone fa-xs"></i> + 1235 2355 98
                    </span>
                  </div>
                  <div className="col-md pr-4 d-flex topper align-items-center">
                    <div className="icon mr-2 d-flex justify-content-center align-items-center">
                      <span className="icon-paper-plane" />
                    </div>
                    <span className="text-white">
                      <i class="fa-regular fa-paper-plane fa-xs "></i>{" "}
                      youremail@email.com
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
                <a className="navbar-brand" href="index.html">
                  Vegefoods
                </a>
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
                      <div
                        className="dropdown-menu"
                        aria-labelledby="dropdown04"
                      >
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
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
        {/* END nav */}
      </>
    </>
  );
};
export default Header;
