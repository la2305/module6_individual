import { Link, useNavigate } from "react-router-dom";
import "../css/login.css";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { loginAccount } from "../service/user/UserService";
import swal from "sweetalert2";

const Login = () => {
  const navigate = useNavigate();
  const handleSubmit = async (values) => {
    try {
      const jwt = await loginAccount(values);
      localStorage.setItem("JWT",jwt.data.token);
      swal.fire({
        icon: "success",
        title: "Hoàn tất",
        text: "Đăng nhập thành công",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate("/");
    } catch (e) {
      swal.fire({
        icon: "error",
        title: "Lỗi",
        text: "Sai tài khoản hoặc mật khẩu",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate("/login")
    }
  };
  return (
    <>
      <section className="vh-100" style={{ backgroundColor: "#f5f5f5" }}>
        <div className="py-1"></div>
        <div className="content">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <img
                  src="https://themewagon.github.io/foody2/img/about.jpg"
                  alt="Image"
                  className="img-fluid"
                  style={{ height: 610 }}
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
                    <Formik
                      initialValues={{
                        userName: "",
                        passWord: "",
                      }}
                      validationSchema={Yup.object({
                        userName: Yup.string().required(
                          "Tài khoản không để trống"
                        ),
                        passWord: Yup.string().required(
                          "Mật khẩu không để trống"
                        ),
                      })}
                      onSubmit={(values) => {
                        handleSubmit(values);
                      }}
                    >
                      <Form action="#" method="post">
                        <div className="form-group first">
                          <label htmlFor="userName">Tài khoản</label>
                          <Field
                            type="text"
                            className="form-control"
                            name="userName"
                          />
                        </div>
                        <div className="form-group last mb-4">
                          <label htmlFor="passWord">Mật khẩu</label>
                          <Field
                            type="passWord"
                            className="form-control"
                            name="passWord"
                          />
                        </div>
                        <div className="d-flex mb-5 align-items-center">
                          <label className="control control--checkbox ">
                            <input type="checkbox" defaultChecked="checked" />
                            <span className="caption">Ghi nhớ mật khẩu</span>
                            <div className="control__indicator" />
                          </label>
                          <span class="mx-1"></span>
                          <div class="d-inline mr-2">
                            <a href="#" class="forgot-pass">
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
                        <div class="d-inline mr-2">
                          Thực hiện việc đăng ký nếu bạn chưa có tài khoản
                          <span class="mx-1"></span>
                          <Link to={"/register"}>Đăng ký </Link>
                        </div>
                      </Form>
                    </Formik>
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
