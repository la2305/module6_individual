import { useState } from "react";
import {
  getInfoUserByUserName,
  getUserByJwtToken,
} from "../service/user/UserService";
import { useEffect } from "react";

const DetailAccount = () => {
  const [infoUser, setInfoUser] = useState();
  const getUser = async () => {
    const data = getUserByJwtToken();
    const response = await getInfoUserByUserName(data.sub);
    setInfoUser(response);
  };
  useEffect(() => {
    getUser();
  }, []);
  if (!infoUser) {
    return null;
  }
  return (
    <>
      <hr></hr>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h3>Thông tin tài khoản </h3>
          </div>
          <h6>
            <i>- Xin chào, {infoUser.userName}</i>
          </h6>
          <h6>
            <i>- Số điện thoại liên hệ: {infoUser.phone}</i>
          </h6>
          <div className="mt-3"></div>
          <div className="col-md-12">
            <h3>Đơn hàng gần nhất</h3>
          </div>
          <div className=" col-md-12">
            <div className="cart-table-wrap">
              <table className="cart-table">
                <thead className="cart-table-head">
                  <tr className="table-head-row">
                    <th className="product-remove" >STT</th>
                    <th className="product-image">Ngày đặt hàng</th>
                    <th className="product-image">Thời gian đặt hàng</th>
                    <th className="product-image">Tên người nhận</th>
                    <th className="product-name">Địa chỉ giao hàng</th>
                    <th className="product-name">Số điện thoại</th>
                    <th className="product-price">Giá trị đơn hàng</th>
                  </tr>
                </thead>
                <tbody>
                  {/* {listCart.map((cart) => ( */}
                    <tr className="table-body-row">
                      <td className="product-remove">
                        <span
                         
                        >
                          <div className="far fa-window-close" />
                        </span>
                      </td>
                      <td className="product-image">
                        {/* <img src={cart.imageAddress} alt="" /> */}
                      </td>
                      <td className="product-name">
                        {/* {cart.productName} */}
                        </td>
                      <td className="product-quantity">
                        
                      </td>
                      <td className="product-total">
                        {/* {cart.quantityProductOrder} */}
                      </td>
                      <td className="product-price">
                        {/* <strong>
                          {(
                            cart.productPrice * cart.quantityProductOrder
                          ).toLocaleString("vi-VN")}{" "}
                          VNĐ
                        </strong> */}
                      </td>
                      <td className="product-price">
                        {/* <strong>
                          {(
                            cart.productPrice * cart.quantityProductOrder
                          ).toLocaleString("vi-VN")}{" "}
                          VNĐ
                        </strong> */}
                      </td>
                    </tr>
                  {/* ))} */}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default DetailAccount;
