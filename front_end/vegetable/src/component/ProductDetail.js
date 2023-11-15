import { useEffect, useState } from "react";
import "../css/productdetail.css"
import {  getProductDetailById } from "../service/product/ProductService";
import { useParams } from "react-router-dom";
import { createCart } from "../service/cart/CartService";
import swal from "sweetalert2";
import { getUserByJwtToken } from "../service/user/UserService";


const ProductDetail = () => {
  const [product,setProduct] = useState();
  const params = useParams();

  //load sản phẩm
  const loadProduct = async (values) =>{
    const data = await getProductDetailById(values);
    setProduct(data);
  }
  useEffect(()=>{
    if(params.id){
      loadProduct(params.id);
    }
  },[params])
  if(!product){
    return null;
  }

  //thêm sản phẩm vào giỏ hàng
  const clickCreateCart = async () =>{
    const quantityProductOrder = document.getElementById("quantityProductOrder").value;
    const userName = getUserByJwtToken();
    console.log(quantityProductOrder);
    console.log(product.productId);
    console.log(userName.sub);

    await createCart(quantityProductOrder,product.productId,userName.sub);
    swal.fire({
      icon: "success",
      title: "Hoàn tất",
      text: "Sản phẩm đã được thêm vào giỏ hàng hãy tiến hành thanh toán",
      showConfirmButton: false,
      timer: 1500,
    });
  } 


  return (
    <>
      <>
        <hr></hr>
        {/* single product */}
        <div className="single-product mt-150 mb-150">
          <div className="container">
            <div className="row">
              <div className="col-md-5">
                <div className="single-product-img">
                  <img className="w-100" src={product.imageAddress}  alt=""/>
                </div>
              </div>
              <div className="col-md-7">
                <div className="single-product-content">
                  <h3>{product.productName}</h3>
                  <p className="single-product-pricing">
                    {/* <span>Per Kg</span> $50 */}
                    <span></span> {product.productPrice.toLocaleString("vi-VN")} VNĐ
                  </p>
                  <p>
                    {product.description}
                  </p>
                  <div className="single-product-form">
                    <form action="index.html">
                      <input type="number" id="quantityProductOrder" min="1" placeholder={1}/>
                    </form>
                    <button className="cart-btn" onClick={()=>clickCreateCart()}>
                      <i className="fas fa-shopping-cart" /> Thêm vào giỏ
                    </button>
                    <p>
                      <strong>Categories: </strong>Fruits, Organic
                    </p>
                  </div>
                  <h4>Share:</h4>
                  <ul className="product-share">
                    <li>
                      <a href="">
                        <i className="fab fa-facebook-f" />
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <i className="fab fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <i className="fab fa-google-plus-g" />
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <i className="fab fa-linkedin" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end single product */}




        {/* more products */}
        <div className="py-5"></div>
        <div className="mt-3"></div>
        <div className="more-products mb-150">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 offset-lg-2 text-center">
                <div className="section-title">
                  <h3>
                    <span className="orange-text">Related</span> Products
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Aliquid, fuga quas itaque eveniet beatae optio.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6 text-center">
                <div className="single-product-item">
                  <div className="product-image">
                    <a href="single-product.html">
                      <img src="https://themewagon.github.io/fruitkha/assets/img/products/product-img-1.jpg" alt="" />
                    </a>
                  </div>
                  <h3>Strawberry</h3>
                  <p className="product-price">
                    <span>Per Kg</span> 85${" "}
                  </p>
                  <a href="cart.html" className="cart-btn">
                    <i className="fas fa-shopping-cart" /> Add to Cart
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 text-center">
                <div className="single-product-item">
                  <div className="product-image">
                    <a href="single-product.html">
                      <img src="https://themewagon.github.io/fruitkha/assets/img/products/product-img-1.jpg" alt="" />
                    </a>
                  </div>
                  <h3>Berry</h3>
                  <p className="product-price">
                    <span>Per Kg</span> 70${" "}
                  </p>
                  <a href="cart.html" className="cart-btn">
                    <i className="fas fa-shopping-cart" /> Add to Cart
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3 text-center">
                <div className="single-product-item">
                  <div className="product-image">
                    <a href="single-product.html">
                      <img src="https://themewagon.github.io/fruitkha/assets/img/products/product-img-1.jpg" alt="" />
                    </a>
                  </div>
                  <h3>Lemon</h3>
                  <p className="product-price">
                    <span>Per Kg</span> 35${" "}
                  </p>
                  <a href="cart.html" className="cart-btn">
                    <i className="fas fa-shopping-cart" /> Add to Cart
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end more products */}
      </>
    </>
  );
};
export default ProductDetail;
