import { useEffect, useState } from "react";
import {
  getInfoUserByUserName,
  getUserByJwtToken,
} from "../service/user/UserService";
import { getAllCartByUserName } from "../service/cart/CartService";
import Paypal from "./Paypal";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

const CheckOut = () => {
  const [listCart, setListCart] = useState([]);
  const [totalMoney, setTotalMoney] = useState(0);
  const [infoUser, setInfoUser] = useState();
  const [checkOut, setCheckOut] = useState(false);
  const [order, setOrder] = useState(null);
  const navigate = useNavigate();

  //Load giỏ hàng
  const loadListCart = async () => {
    const userName = getUserByJwtToken();
    if (userName != null) {
      const data = await getAllCartByUserName(userName.sub);
      setListCart(data);
    } else {
      return null;
    }
  };

  //Load thông tin khách hàng
  const loadUserByUserName = async () => {
    const userName = getUserByJwtToken();
    if (userName != null) {
      const data = await getInfoUserByUserName(userName.sub);
      setInfoUser(data);
    } else {
      return null;
    }
  };

  //tính tổng tiền
  const getTotalMoney = () => {
    const total = listCart.reduce((accumulator, cart) => {
      const productTotal = cart.productPrice * cart.quantityProductOrder;
      return accumulator + productTotal;
    }, 0);
    if (total > 0) {
      setTotalMoney(total);
    }
  };

  useEffect(() => {
    loadListCart();
    loadUserByUserName();
    getTotalMoney();
  }, [listCart.length, order]);

  if (!infoUser) {
    return null;
  }

  const addToOrder = async (values) => {
    if (infoUser.userName) {
      setCheckOut(true);
      setOrder(values);
      navigate("/checkout");
    } else {
      Swal.fire("Cập nhật đủ thông tin cá nhân");
    }
  };

  if (totalMoney === 0) {
    return (
      <>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="card text-center">
                <div className="card-body">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="150"
                    height="200"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#28a745"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M8 14.5l3 3L18 10" />
                  </svg>
                  <h2 className="card-title">Thanh toán thành công!</h2>
                  <p className="card-text">Cảm ơn bạn đã thanh toán.</p>
                  <p className="card-text">
                    Đơn hàng của bạn đã được xác nhận và đang được xử lý. Chúng
                    tôi sẽ thông báo cho bạn khi đơn hàng được gửi đi.
                  </p>
                  <Link to="/shop" className="btn btn-dark">
                    Tiếp tục mua sắm
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      {/* check out section */}
      <div className="checkout-section mt-150 mb-150">
        <div className="container">
          <Formik
            initialValues={{
              address: "",
              note: "",
              totalMoney: totalMoney,
              cartDtoList: listCart,
            }}
            validationSchema={Yup.object({
              address: Yup.string("").required("Địa chỉ không để trống"),
            })}
            onSubmit={(values) => {
              addToOrder(values);
            }}
          >
            <Form>
              <div className="row">
                <div className="col-lg-8 col-md-12">
                  <div className="checkout-accordion-wrap">
                    <div className="accordion" id="accordionExample">
                      <div className="card single-accordion">
                        <div className="card-header" id="headingOne">
                          <h5 className="mb-0">
                            <button
                              className="btn btn-link"
                              type="button"
                              data-toggle="collapse"
                              data-target="#collapseOne"
                              aria-expanded="true"
                              aria-controls="collapseOne"
                            >
                              Thông tin giao hàng
                            </button>
                          </h5>
                        </div>
                        <div
                          id="collapseOne"
                          className="collapse show"
                          aria-labelledby="headingOne"
                          data-parent="#accordionExample"
                        >
                          <div className="card-body">
                            <div className="billing-address-form">
                              <form action="index.html">
                                <p>
                                  <input
                                    type="text"
                                    value={infoUser.userName}
                                  />
                                </p>
                                <p>
                                  <input
                                    type="email"
                                    disabled
                                    value={infoUser.email}
                                  />
                                </p>
                                <p>
                                  <Field
                                    type="text"
                                    id="address"
                                    name="address"
                                    placeholder="Địa chỉ"
                                  />
                                  <ErrorMessage
                                    name="address"
                                    className="text-danger"
                                    component="span"
                                  ></ErrorMessage>
                                </p>
                                <p>
                                  <input type="tel" value={infoUser.phone} />
                                </p>
                                <p>
                                  <Field
                                    type="textarea"
                                    name="note"
                                    id="note"
                                    cols={30}
                                    rows={10}
                                    placeholder="Thông tin bổ sung thêm cho đơn hàng"
                                    defaultValue={""}
                                  />
                                </p>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="order-details-wrap">
                    <table className="order-details w-100">
                      <thead>
                        <tr>
                          <th>Sản phẩm</th>
                          <th>Giá</th>
                        </tr>
                      </thead>
                      <tbody className="order-details-body">
                        {listCart.map((card) => (
                          <tr>
                            <td>{card.productName}</td>
                            <td>
                              {(
                                card.quantityProductOrder * card.productPrice
                              ).toLocaleString("vi-VN")}{" "}
                              VNĐ
                            </td>
                          </tr>
                        ))}
                      </tbody>
                      <tbody className="checkout-details">
                        <tr>
                          <td>
                            <strong>Tổng tiền</strong>
                          </td>
                          <td>
                            <strong>
                              {totalMoney.toLocaleString("vi-VN")} VNĐ
                            </strong>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <strong>Phí giao hàng</strong>
                          </td>
                          <td>
                            <strong>0 VNĐ</strong>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <strong>Thành tiền</strong>
                          </td>
                          <td>
                            <strong>
                              {totalMoney.toLocaleString("vi-VN")} VNĐ
                            </strong>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    {checkOut && order.totalMoney > 0 ? (
                      <Paypal propData1={totalMoney} propData2={order}></Paypal>
                    ) : (
                      <div className="mt-4 d-flex justify-content-center">
                        <button className="btn btn-dark" type="submit">
                          Thanh toán
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
      {/* end check out section */}
    </>
  );
};
export default CheckOut;
