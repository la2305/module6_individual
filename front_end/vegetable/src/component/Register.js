import { Field, Form, Formik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { registerAccount } from "../service/user/UserService";
import swal from "sweetalert2";
import { useEffect } from "react";

const Register = () => {
  const navigate = useNavigate();
  useEffect(() => {
    console.log("alosdf");
  }, []);

  const handleSubmit = async (values) => {
    await registerAccount(values);
    swal.fire({
      icon: "success",
      title: "Hoàn tất",
      text: "Đăng ký thành công",
      showConfirmButton: false,
      timer: 1500,
    });
    navigate("/login");
  };
  return (
    <>
      <Formik
        initialValues={{
          userName: "",
          passWord: "",
          email: "",
          phone: "",
        }}
        validationSchema={Yup.object({
          userName: Yup.string().required("User name can not empty"),
          passWord: Yup.string().required("Pass word can not empty"),
          email: Yup.string().required("Email can not empty"),
          phone: Yup.string().required("Phone can not empty"),
        })}
        onSubmit={(values) => {
          console.log(values);
          handleSubmit(values);
        }}
      >
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
                        <h3>Đăng ký</h3>
                        <p className="mb-4">
                          Eating Well luôn là nơi cung cấp đến cho bạn những sản
                          phẩm tốt nhất
                        </p>
                      </div>
                      <Form>
                        <div className="form-group first">
                          <label htmlFor="userName">Tài khoản</label>
                          <Field
                            type="text"
                            className="form-control"
                            name="userName"
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="passWord">Mật khẩu</label>
                          <Field
                            type="passWord"
                            className="form-control"
                            name="passWord"
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="email">Email</label>
                          <Field
                            type="email"
                            className="form-control"
                            name="email"
                          />
                        </div>
                        <div className="form-group last mb-4">
                          <label htmlFor="phone">Số điện thoại</label>
                          <Field
                            type="phone"
                            className="form-control"
                            name="phone"
                          />
                        </div>

                        <div className="d-flex justify-content-center flex-column">
                          <button
                            className="btn btn-block btn-primary"
                            type="submit"
                          >
                            Đăng ký
                          </button>
                        </div>
                      </Form>
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
                        Thực hiện việc đăng nhập nếu bạn đã có tài khoản
                        <span class="mx-1"></span>
                        <Link to={"/login"}>Đăng nhập</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Formik>
    </>
  );
};
export default Register;
