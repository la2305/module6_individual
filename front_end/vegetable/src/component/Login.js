import "../css/login.css";
const Login = () => {
  return (
    <>
      <section className="vh-100" style={{ backgroundColor: "#f5f5f5" }}>
        <div className="py-2"></div>
        <div className="content">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <img
                  src="https://themewagon.github.io/foody2/img/about.jpg"
                  alt="Image"
                  className="img-fluid"
                  style={{ height: 590 }}
                />
              </div>
              <div className="col-md-6 contents">
                <div className="row justify-content-center">
                  <div className="col-md-8">
                    <div className="mb-4">
                      <h3>Đăng nhập</h3>
                      <p className="mb-4">
                        Eating Well luôn là nơi cung cấp đến cho bạn những sản
                        phẩm tốt nhất
                      </p>
                    </div>
                    <form action="#" method="post">
                      <div className="form-group first">
                        <label htmlFor="username">Tài khoản</label>
                        <input
                          type="text"
                          className="form-control"
                          id="username"
                        />
                      </div>
                      <div className="form-group last mb-4">
                        <label htmlFor="password">Mật khẩu</label>
                        <input
                          type="password"
                          className="form-control"
                          id="password"
                        />
                      </div>
                      <div className="d-flex mb-5 align-items-center">
                        <label className="control control--checkbox mb-0">
                          <input type="checkbox" defaultChecked="checked" />
                          <span className="caption">Ghi nhớ mật khẩu</span>
                          <div className="control__indicator" />
                        </label>
                        <div className="ml-auto">
                          <a href="#" className="forgot-pass ">
                            Quên mật khẩu
                          </a>
                        </div>
                      </div>
                      <div className="d-flex justify-content-center flex-column">
                        <button
                          className="btn btn-block btn-primary"
                          type="submit"
                        >
                          Đăng nhập
                        </button>
                      </div>
                      <div className="d-flex justify-content-center">
                        <span className="d-block text-left my-4 text-muted">
                          — or login with —
                        </span>
                      </div>
                      <div className="d-flex justify-content-center">
                        <div className="social-login">
                          <a href="#" className="facebook">
                            <span className="fa-brands fa-facebook-f" />
                          </a>
                          <a href="#" className="twitter">
                            <span className="fa-brands fa-twitter" />
                          </a>
                          <a href="#" className="google">
                            <span className="fa-brands fa-google" />
                          </a>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Login;
