import { Link } from "react-router-dom";
import "../css/homapage.css";
import { useState } from "react";
import { getProductList } from "../service/product/ProductService";
import { useEffect } from "react";
import { getUserByJwtToken } from "../service/user/UserService";
import { createCart, getAllCartByUserName } from "../service/cart/CartService";
import swal from "sweetalert2";

const HomePage = ({updateCartLength}) => {
  const [productList, setProductList] = useState([]);
  const [page, setPage] = useState(0);
  const [searchType, setSearchType] = useState("");
  const [sort, setSort] = useState("productId");

  const loadProductList = async () => {
    const data = await getProductList(page, searchType, sort);
    setProductList(data.content);
    console.log(data.content);
  };
  useEffect(() => {
    loadProductList();
  }, []);

  const clickCreateCart = async (productId) =>{
    const userName = getUserByJwtToken();
    await createCart(1,productId,userName.sub);
    loadListCart();
    swal.fire({
      icon: "success",
      title: "Hoàn tất",
      text: "Sản phẩm đã được thêm vào giỏ hàng hãy tiến hành thanh toán",
      showConfirmButton: false,
      timer: 1500,
    });
  }
  const loadListCart = async () =>{
    const userName = getUserByJwtToken();
    const data = await getAllCartByUserName(userName.sub);
    updateCartLength(data.length);
  }

  return (
    <>
      {/* shop banner */}
      <section
        className="shop-banner"
        style={{
          backgroundImage:
            "url(https://www.ugaoo.com/cdn/shop/articles/feature.jpg?v=1661867782&width=1100)",
          width: "100%",
          height: "400px",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container">
          <div>
            <br></br>
          </div>
          <h3>
            Tháng 11 khuyến <br /> mãi khủng <br></br>
            {/* <span className="orange-text">Discount...</span> */}
          </h3>
          <div className="sale-percent">
            <span>
              Giảm! <br /> Đến
            </span>
            50% <span>cửa hàng</span>
          </div>
          <Link to={"/shop"} className="cart-btn btn-lg">
            Mua hàng
          </Link>
        </div>
      </section>
      {/* end shop banner */}

      {/* product section */}
      <div className="product-section mt-150 mb-150">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 text-center">
              <div className="section-title">
                <h3>
                  <span className="orange-text">Sản phẩm</span> mới nhất
                </h3>
                <p>
                  Điều quan trọng ở Eating Well là luôn đặt lợi ích của khách
                  hàng lên hàng đầu khách hàng
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end product section */}

      {/* Carousel */}
      <div id="carouselExampleIndicators" className="carousel slide">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={0}
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={1}
            aria-label="Slide 2"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={2}
            aria-label="Slide 3"
          />
        </div>

        <div className="carousel-inner">
          <div className="container">
            {productList
              .reduce((groups, product, index) => {
                if (index % 3 === 0) {
                  groups.push([]);
                }
                groups[groups.length - 1].push(product);
                return groups;
              }, [])
              .map((group, groupIndex) => (
                <div
                  className={`carousel-item ${
                    groupIndex === 0 ? "active" : ""
                  }`}
                  key={groupIndex}
                >
                  <div className="row">
                    {group.map((product, productIndex) => (
                      <div
                        className="col-lg-4 col-md-6 text-center"
                        key={productIndex}
                      >
                        <div className="single-product-item">
                          <div className="product-image">
                            <a href="single-product.html">
                              <Link to={`/product-detail/${product.productId}`}>
                              <img
                                src={product.imageAddress}
                                alt={product.productName}
                              />
                              </Link>
                            </a>
                          </div>
                          <h3>{product.productName}</h3>
                          <p className="product-price">
                            {product.productPrice.toLocaleString("vi-VN")} VND
                          </p>
                          <button
                            onClick={() => clickCreateCart(product.productId)}
                            className=" btn btn-outline-dark"
                          >
                            <i className="fas fa-shopping-cart" /> Thêm vào giỏ
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* Carousel */}

      {/* <!-- features list section --> */}
      <div
        class="list-section pt-80 pb-80 "
        style={{ backgroundColor: "#F5F5F5" }}
      >
        <div class="container">
          <div class="row">
            <div class="col-lg-4 col-md-6 mb-4 mb-lg-0">
              <div class="list-box d-flex align-items-center">
                <div class="list-icon">
                  <i class="fas fa-shipping-fast"></i>
                </div>
                <div class="content">
                  <h3>Chi phí vận chuyển</h3>
                  <p>1 Kg cũng miễn phí ship</p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 mb-4 mb-lg-0">
              <div class="list-box d-flex align-items-center">
                <div class="list-icon">
                  <i class="fas fa-phone-volume"></i>
                </div>
                <div class="content">
                  <h3>Hổ trợ 24/7</h3>
                  <p>Hổ trợ khách hàng bất cứ khi nào</p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="list-box d-flex justify-content-start align-items-center">
                <div class="list-icon">
                  <i class="fas fa-sync"></i>
                </div>
                <div class="content">
                  <h3>Hoàn trả</h3>
                  <p>Hoàn trả sản phẩm trong vòng 24h!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- end features list section --> */}

      {/* cart banner section */}
      <section className="cart-banner pt-100 pb-100">
        <div className="container">
          <div className="row clearfix">
            {/*Image Column*/}
            <div className="image-column col-lg-6">
              <div className="image">
                <div className="price-box">
                  <div className="inner-price">
                    <span className="price">
                      <strong>30%</strong> <br /> mỗi kg
                    </span>
                  </div>
                </div>
                <img
                  className=" w-100"
                  src="https://i.ex-cdn.com/nongnghiep.vn/files/dungct/2021/04/06/tong-quan-ve-cay-ou_nongnghiep_2-204542_356.jpg"
                  alt=""
                />
              </div>
            </div>
            {/*Content Column*/}
            <div className="content-column col-lg-6">
              <h3>
                <span className="orange-text">Khuyến mãi</span> của tháng
              </h3>
              <h4>Ổi canada</h4>
              <div className="text">
                Ổi canada được trồng trên những khu vườn siêu sạch với tiêu
                chuẩn thế giới sẽ đem đến trãi nghiệm tuyệt vời{" "}
              </div>
              {/*Countdown Timer*/}
              <div className="time-counter">
                <div
                  className="time-countdown clearfix"
                  data-countdown="2020/2/01"
                >
                  <div className="counter-column">
                    <div className="inner">
                      <span className="count">03</span>Ngày
                    </div>
                  </div>{" "}
                  <div className="counter-column">
                    <div className="inner">
                      <span className="count">00</span>Giờ
                    </div>
                  </div>{" "}
                  <div className="counter-column">
                    <div className="inner">
                      <span className="count">00</span>Phút
                    </div>
                  </div>{" "}
                  <div className="counter-column">
                    <div className="inner">
                      <span className="count">00</span>Giây
                    </div>
                  </div>
                </div>
              </div>
              <a href="cart.html" className="cart-btn mt-3">
                <i className="fas fa-shopping-cart" /> Thêm vào giỏ
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* end cart banner section */}

      {/* latest news */}
      <div className="latest-news pt-150 pb-150">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 text-center">
              <div className="section-title">
                <h3>
                  <span className="orange-text">Tin</span> Mới
                </h3>
                <p>
                  Ăn uống lành mạnh không chỉ quan tâm đến sức khỏe cuộc sống mà
                  còn quan tâm đến yếu tố tinh thần.{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single-latest-news">
                <a href="single-news.html">
                  <div className="latest-news-bg news-bg-1" />
                </a>
                <img
                  className="image-description w-100"
                  src="https://c.pxhere.com/photos/e1/0e/strawberry_fruit_red_fruits_sweet_food_summer_strawberry_plant-604592.jpg!s2"
                ></img>
                <div className="news-text-box">
                  <h3>
                    <a>
                      Bạn sẽ vô ích nếu tìm kiếm trái cây trên đó vào mùa thu.{" "}
                    </a>
                  </h3>
                  <p className="blog-meta">
                    <span className="author">
                      <i className="fas fa-user" /> Admin
                    </span>
                    <span className="date">
                      <i className="fas fa-calendar" /> 24 Tháng 10, 2022
                    </span>
                  </p>
                  <p className="excerpt">
                    Trong những ngày se lạnh của mùa thu, bạn sẽ tìm kiếm một
                    cách vô ích những trái cây bội thu đã từng tô điểm cho cành
                    của nó.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 offset-md-3 offset-lg-0">
              <div className="single-latest-news">
                <a href="single-news.html">
                  <div className="latest-news-bg news-bg-3" />
                </a>
                <img
                  className="image-description w-100"
                  src="https://png.pngtree.com/thumb_back/fw800/background/20220226/pngtree-papaya-fruit-on-the-tree-in-garden-tropical-color-fruit-photo-image_35481134.jpg"
                ></img>
                <div className="news-text-box">
                  <h3>
                    <a>Những ý nghĩ tốt sẽ mang lại trái ngọt tươi ngon. </a>
                  </h3>
                  <p className="blog-meta">
                    <span className="author">
                      <i className="fas fa-user" /> Admin
                    </span>
                    <span className="date">
                      <i className="fas fa-calendar" /> 07 Tháng 10, 2022
                    </span>
                  </p>
                  <p className="excerpt">
                    Như một vườn cây ăn quả được chăm sóc tốt mang lại mùa màng
                    bội thu, một tâm hồn tràn đầy những suy nghĩ tốt đẹp sẽ tạo
                    ra một cuộc sống tràn đầy niềm vui.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-latest-news">
                <a href="single-news.html">
                  <div className="latest-news-bg news-bg-2" />
                </a>
                <img
                  className="image-description w-100"
                  src="https://www.thespruce.com/thmb/W2lWirI5TbUIM5LxC4hPSzudAv8=/1024x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1200140202-dd9f2c40edc14d338f9bac20471369ba.jpg"
                ></img>
                <div className="news-text-box">
                  <h3>
                    <a>
                      Giá trị của một người đàn ông có mùa, như quả cà chua.{" "}
                    </a>
                  </h3>
                  <p className="blog-meta">
                    <span className="author">
                      <i className="fas fa-user" /> Admin
                    </span>
                    <span className="date">
                      <i className="fas fa-calendar" /> 27 Tháng 4, 2023
                    </span>
                  </p>
                  <p className="excerpt">
                    Cũng giống như quả cà chua, giá trị của một người đàn ông
                    chín muồi theo thời gian và sự kiên nhẫn, đạt đến đỉnh cao
                    vào đúng thời điểm của cuộc đời.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end latest news */}
    </>
  );
};
export default HomePage;
