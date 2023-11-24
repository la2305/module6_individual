import { useState } from "react";
import {
  getInfoUserByUserName,
  getUserByJwtToken,
} from "../service/user/UserService";
import { useEffect } from "react";
import { getOrderBillListByUserId } from "../service/order/AddOrder";

const currency = (number) => {
  const roundedNumber = Math.floor(number);
  const formattedNumber = roundedNumber.toLocaleString("vi-VN");
  return formattedNumber;
};

const DetailAccount = () => {
  const [infoUser, setInfoUser] = useState();
  const [orderBillList, setOrderBillList] = useState([]);

  const getUser = async () => {
    const data = getUserByJwtToken();
    if (data != null) {
      const response = await getInfoUserByUserName(data.sub);
      setInfoUser(response);
    } else {
      return null;
    }
  };

  const getOrderBillList = async () => {
    const data = getUserByJwtToken();
    if (data != null) {
      const dataOrderBill = await getOrderBillListByUserId(data.sub);
      setOrderBillList(dataOrderBill);
    }else{
      return null;
    }
  };

  useEffect(() => {
    getUser();
    getOrderBillList();
  }, []);
  if (!infoUser) {
    return null;
  }

  if (!orderBillList) {
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
                    <th className="product-remove">STT</th>
                    <th className="product-image">Ngày đặt hàng</th>
                    <th className="product-image">Tên người nhận</th>
                    <th className="product-name">Địa chỉ giao hàng</th>
                    <th className="product-name">Số điện thoại</th>
                    <th className="product-price">Giá trị đơn hàng</th>
                  </tr>
                </thead>
                <tbody>
                  {orderBillList.map((order, index) => (
                    <tr className="table-body-row">
                      <td className="product-remove">
                        <span>{index + 1}</span>
                      </td>
                      <td className="product-image">{order.dateOfOder}</td>
                      <td className="product-quantity ">
                        {order.users.userName}
                      </td>
                      <td className="product-total">{order.address}</td>
                      <td className="product-price">{order.users.phone}</td>
                      <td className="product-price">
                        {currency(order.totalMoney)} VND
                      </td>
                    </tr>
                  ))}
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
