import { useEffect, useState } from "react";
import { getUserByJwtToken } from "../service/user/UserService";
import {
  deleteCartByCartId,
  getAllCartByUserName,
} from "../service/cart/CartService";
import { createCart } from "../service/cart/CartService";
import { Link } from "react-router-dom";

const Cart = ({ updateCartLength }) => {
  const [listCart, setListCart] = useState([]);
  const [totalMoney, setTotalMoney] = useState(1);

  //list sản phẩm + xóa
  const loadListCart = async () => {
    const userName = getUserByJwtToken();
    const data = await getAllCartByUserName(userName.sub);
    setListCart(data);
    updateCartLength(data.length);
  };
  const clickDeleteCartByCartId = async (productId, userId) => {
    await deleteCartByCartId(productId, userId);
    loadListCart();
  };
  useEffect(() => {
    loadListCart();
    getTotalMoney();
  }, [listCart.length,listCart]);

  //tăng giảm sản phẩm
  const clickIncreaseProduct = async (productId) => {
    const userName = getUserByJwtToken();
    await createCart(1, productId, userName.sub);
    loadListCart();
  };
  const clickDecreaseProduct = async (productId,quantityProductOrder) => {
    if(quantityProductOrder==1){
      return null;
    }
    const userName = getUserByJwtToken();
    await createCart(-1, productId, userName.sub);
    loadListCart();
  };

  //tính tổng tiền
  const getTotalMoney = () => {
    const total = listCart.reduce((accumulator, cart) => {
      const productTotal = cart.productPrice * cart.quantityProductOrder;
      return accumulator + productTotal;
    }, 0);
    setTotalMoney(total);
  };

  return (
    <>
      <>
        {/* cart */}
        <div className="cart-section mt-150 mb-150">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-12">
                <div className="cart-table-wrap">
                  <table className="cart-table">
                    <thead className="cart-table-head">
                      <tr className="table-head-row">
                        <th className="product-remove" />
                        <th className="product-image">Hình ảnh</th>
                        <th className="product-name">Tên</th>
                        <th className="product-quantity">Số lượng</th>
                        <th className="product-total">Cân Nặng</th>
                        <th className="product-price">Giá</th>
                      </tr>
                    </thead>
                    <tbody>
                      {listCart.map((cart) => (
                        <tr className="table-body-row">
                          <td className="product-remove">
                            <span
                              onClick={() =>
                                clickDeleteCartByCartId(
                                  cart.productId,
                                  cart.userId
                                )
                              }
                            >
                              <div className="far fa-window-close" />
                            </span>
                          </td>
                          <td className="product-image">
                            <img src={cart.imageAddress} alt="" />
                          </td>
                          <td className="product-name">{cart.productName}</td>
                          <td className="product-quantity">
                            <button
                              type="button"
                              className="quantity-button"
                              onClick={() =>
                                clickDecreaseProduct(cart.productId,cart.quantityProductOrder)
                              }
                            >
                              -
                            </button>
                            <input
                              className="quantity-input m-2"
                              id="valueQuantityProduct"
                              type="number"
                              disabled
                              value={cart.quantityProductOrder}
                            />
                            <button
                              type="button"
                              className="quantity-button"
                              onClick={() =>
                                clickIncreaseProduct(cart.productId)
                              }
                            >
                              +
                            </button>
                          </td>
                          <td className="product-total">
                            {(cart.quantityProductOrder*cart.weight)} Kg
                          </td>
                          <td className="product-price">
                            <strong>{(
                              cart.productPrice * cart.quantityProductOrder
                            ).toLocaleString("vi-VN")} VNĐ</strong>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="total-section">
                  <table className="total-table">
                    <thead className="total-table-head">
                      <tr className="table-total-row">
                        <th>Tổng</th>
                        <th>Giá</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="total-data">
                        <td>
                          Tổng tiền sản phẩm:
                        </td>
                        <td><strong>{totalMoney.toLocaleString("vi-VN")} VND</strong></td>
                      </tr>
                      <tr className="total-data">
                        <td>
                          Phí giao hàng:
                        </td>
                        <td><strong>0 VNĐ</strong></td>
                      </tr>
                      <tr className="total-data">
                        <td>
                          Thành tiền:
                        </td>
                        <td><strong>{totalMoney.toLocaleString("vi-VN")} VND</strong></td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="mt-4  d-flex justify-content-center">
                    <Link to={"/checkout"}>
                      <button className="btn btn-dark">Thanh toán</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end cart */}
      </>
    </>
  );
};
export default Cart;
