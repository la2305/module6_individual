import { useEffect, useState } from "react";
import {
  getInfoUserByUserName,
  getUserByJwtToken,
} from "../service/user/UserService";
import { getAllCartByUserName } from "../service/cart/CartService";
import Paypal from "./Paypal";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

const CheckOut = () => {
  const [listCart, setListCart] = useState([]);
  const [totalMoney, setTotalMoney] = useState(0);
  const [infoUser, setInfoUser] = useState();
  const [checkOut, setCheckOut] = useState(false);
  const [order, setOrder] = useState();
  const navigate = useNavigate();

  //Load giỏ hàng
  const loadListCart = async () => {
    const userName = getUserByJwtToken();
    const data = await getAllCartByUserName(userName.sub);
    setListCart(data);
  };
  //Load thông tin khách hàng
  const loadUserByUserName = async () => {
    const userName = getUserByJwtToken();
    const data = await getInfoUserByUserName(userName.sub);
    setInfoUser(data);
  };
  //tính tổng tiền
  const getTotalMoney = () => {
    const total = listCart.reduce((accumulator, cart) => {
      const productTotal = cart.productPrice * cart.quantityProductOrder;
      return accumulator + productTotal;
    }, 0);
    setTotalMoney(total);
  };

  useEffect(() => {
    loadListCart();
    loadUserByUserName();
    getTotalMoney();
  }, [listCart.length]);

  if (!infoUser) {
    return null;
  }

  const addToOrder = async (values) => {
    if (infoUser.userName) {
      setCheckOut(true);
      setOrder(values)
      navigate("/checkout");
    } else {
      Swal.fire("Cập nhật đủ thông tin cá nhân");
    }
  };


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
            onSubmit={(values) =>{
              addToOrder(values)}  
            }
            
          >
            <Form>
              <div className="row">
                <div className="col-lg-8">
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
                                  <Field type="text" id="address" name="address" placeholder="Địa chỉ" />
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
                <div className="col-lg-4">
                  <div className="order-details-wrap">
                    <table className="order-details">
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
                    <div className="mt-3"></div>
                    {checkOut ? (
                      <Paypal
                        propData1={totalMoney}
                        propData2={order}
                      ></Paypal>
                    ) : (
                      <button
                        className="boxed-btn"
                        type="submit"
                      >
                        Thanh toán
                      </button>
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
