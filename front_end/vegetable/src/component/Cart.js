import { useEffect, useState } from "react";
import { getUserByJwtToken } from "../service/user/UserService";
import { deleteCartByCartId, getAllCartByUserName } from "../service/cart/CartService";

const Cart = () => {
  const [listCart,setListCart] = useState([]);
  const loadListCart = async () =>{
    const userName = getUserByJwtToken();
    const data = await getAllCartByUserName(userName.sub);
    setListCart(data);
  }
  const clickDeleteCartByCartId = async (productId,userId) =>{
    console.log(productId,userId);
    await deleteCartByCartId(productId,userId);
    loadListCart();
  }
  useEffect(()=>{
    loadListCart();
  },[])

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
                      {listCart.map((cart)=>(
                        <tr className="table-body-row">
                        <td className="product-remove">
                          <span onClick={() =>clickDeleteCartByCartId(cart.productId,cart.userId)}>
                            <div className="far fa-window-close" />
                          </span>
                        </td>
                        <td className="product-image">
                          <img
                            src={cart.imageAddress}
                            alt=""
                          />
                        </td>
                        <td className="product-name">{cart.productName}</td>
                        <td className="product-quantity">
                          <input type="number" value={cart.quantityProductOrder} />
                        </td>
                        <td className="product-total">{cart.quantityProductOrder}</td>
                        <td className="product-price">{cart.productPrice.toLocaleString("vi-VN")}VND</td>
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
                          <strong>Tổng tiền sản phẩm: </strong>
                        </td>
                        <td>$500</td>
                      </tr>
                      <tr className="total-data">
                        <td>
                          <strong>Phí giao hàng: </strong>
                        </td>
                        <td>0 VND</td>
                      </tr>
                      <tr className="total-data">
                        <td>
                          <strong>Thành tiền: </strong>
                        </td>
                        <td>$545</td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="cart-buttons d-flex justify-content-center">
                    <a href="checkout.html" className="boxed-btn black">
                      <button className="btn btn-warning">Thanh toán</button>
                    </a>
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
