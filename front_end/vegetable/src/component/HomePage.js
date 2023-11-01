import "../css/homapage.css";
const HomePage = () => {
  return (
    <>


      {/* shop banner */}
      <section className="shop-banner"  style={{
          backgroundImage: 'url(https://img.freepik.com/free-photo/top-view-delicious-fruits-with-copy-space_23-2148501490.jpg?size=626&ext=jpg&ga=GA1.1.386372595.1698537600&semt=ais)',
          width: '100%',
          height: '400px',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}>
        <div className="container">
          <h3>
            December sale is on! <br /> with big{" "}
            <span className="orange-text">Discount...</span>
          </h3>
          <div className="sale-percent">
            <span>
              Sale! <br /> Upto
            </span>
            50% <span>off</span>
          </div>
          <a href="shop.html" className="cart-btn btn-lg">
            Shop Now
          </a>
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
                  <span className="orange-text">Our</span> Products
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
                    <img
                      src="https://themewagon.github.io/fruitkha/assets/img/products/product-img-1.jpg"
                      alt=""
                    />
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
                    <img
                      src="https://themewagon.github.io/fruitkha/assets/img/products/product-img-2.jpg"
                      alt=""
                    />
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
            <div className="col-lg-4 col-md-6 offset-md-3 offset-lg-0 text-center">
              <div className="single-product-item">
                <div className="product-image">
                  <a href="single-product.html">
                    <img
                      src="https://themewagon.github.io/fruitkha/assets/img/products/product-img-3.jpg"
                      alt=""
                    />
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
      {/* end product section */}

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
                  <h3>Free Shipping</h3>
                  <p>When order over $75</p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 mb-4 mb-lg-0">
              <div class="list-box d-flex align-items-center">
                <div class="list-icon">
                  <i class="fas fa-phone-volume"></i>
                </div>
                <div class="content">
                  <h3>24/7 Support</h3>
                  <p>Get support all day</p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="list-box d-flex justify-content-start align-items-center">
                <div class="list-icon">
                  <i class="fas fa-sync"></i>
                </div>
                <div class="content">
                  <h3>Refund</h3>
                  <p>Get refund within 3 days!</p>
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
                      <strong>30%</strong> <br /> off per kg
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
                <span className="orange-text">Deal</span> of the month
              </h3>
              <h4>Hikan Strwaberry</h4>
              <div className="text">
                Quisquam minus maiores repudiandae nobis, minima saepe id, fugit
                ullam similique! Beatae, minima quisquam molestias facere ea.
                Perspiciatis unde omnis iste natus error sit voluptatem accusant
              </div>
              {/*Countdown Timer*/}
              <div className="time-counter">
                <div
                  className="time-countdown clearfix"
                  data-countdown="2020/2/01"
                >
                  <div className="counter-column">
                    <div className="inner">
                      <span className="count">00</span>Days
                    </div>
                  </div>{" "}
                  <div className="counter-column">
                    <div className="inner">
                      <span className="count">00</span>Hours
                    </div>
                  </div>{" "}
                  <div className="counter-column">
                    <div className="inner">
                      <span className="count">00</span>Mins
                    </div>
                  </div>{" "}
                  <div className="counter-column">
                    <div className="inner">
                      <span className="count">00</span>Secs
                    </div>
                  </div>
                </div>
              </div>
              <a href="cart.html" className="cart-btn mt-3">
                <i className="fas fa-shopping-cart" /> Add to Cart
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* end cart banner section */}

      {/* advertisement section */}
      <div className="abt-section mb-150">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="abt-bg">
                <img
                  className="w-75 h-75"
                  src="https://toquoc.mediacdn.vn/280518851207290880/2023/8/3/trung-thu-3-1691047780336994522889.png"
                  alt="Mô tả hình ảnh"
                ></img>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="abt-text">
                <p className="top-sub">Since Year 1999</p>
                <h2>
                  We are <span className="orange-text">Fruitkha</span>
                </h2>
                <p>
                  Etiam vulputate ut augue vel sodales. In sollicitudin neque et
                  massa porttitor vestibulum ac vel nisi. Vestibulum placerat
                  eget dolor sit amet posuere. In ut dolor aliquet, aliquet
                  sapien sed, interdum velit. Nam eu molestie lorem.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Sapiente facilis illo repellat veritatis minus, et labore
                  minima mollitia qui ducimus.
                </p>
                <a href="about.html" className="boxed-btn mt-4">
                  know more
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end advertisement section */}

      {/* latest news */}
      <div className="latest-news pt-150 pb-150">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 text-center">
              <div className="section-title">
                <h3>
                  <span className="orange-text">Our</span> News
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Aliquid, fuga quas itaque eveniet beatae optio.
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
                  className="h-75 w-100"
                  src="https://c.pxhere.com/photos/e1/0e/strawberry_fruit_red_fruits_sweet_food_summer_strawberry_plant-604592.jpg!s2"
                ></img>
                <div className="news-text-box">
                  <h3>
                    <a href="single-news.html">
                      You will vainly look for fruit on it in autumn.
                    </a>
                  </h3>
                  <p className="blog-meta">
                    <span className="author">
                      <i className="fas fa-user" /> Admin
                    </span>
                    <span className="date">
                      <i className="fas fa-calendar" /> 27 December, 2019
                    </span>
                  </p>
                  <p className="excerpt">
                    Vivamus lacus enim, pulvinar vel nulla sed, scelerisque
                    rhoncus nisi. Praesent vitae mattis nunc, egestas viverra
                    eros.
                  </p>
                  <a href="single-news.html" className="read-more-btn">
                    read more <i className="fas fa-angle-right" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-latest-news">
                <a href="single-news.html">
                  <div className="latest-news-bg news-bg-2" />
                </a>
                <img
                  className="h-75 w-100"
                  src="https://cdn.britannica.com/06/186306-050-93C41044/blackberries-blackberry-fruit-aggregate-drupelets-flower-carpels.jpg"
                ></img>
                <div className="news-text-box">
                  <h3>
                    <a href="single-news.html">
                      A man's worth has its season, like tomato.
                    </a>
                  </h3>
                  <p className="blog-meta">
                    <span className="author">
                      <i className="fas fa-user" /> Admin
                    </span>
                    <span className="date">
                      <i className="fas fa-calendar" /> 27 December, 2019
                    </span>
                  </p>
                  <p className="excerpt">
                    Vivamus lacus enim, pulvinar vel nulla sed, scelerisque
                    rhoncus nisi. Praesent vitae mattis nunc, egestas viverra
                    eros.
                  </p>
                  <a href="single-news.html" className="read-more-btn">
                    read more <i className="fas fa-angle-right" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 offset-md-3 offset-lg-0">
              <div className="single-latest-news">
                <a href="single-news.html">
                  <div className="latest-news-bg news-bg-3" />
                </a>
                <img
                  className="h-75 w-100"
                  src="https://png.pngtree.com/thumb_back/fw800/background/20220226/pngtree-papaya-fruit-on-the-tree-in-garden-tropical-color-fruit-photo-image_35481134.jpg"
                ></img>
                <div className="news-text-box">
                  <h3>
                    <a href="single-news.html">
                      Good thoughts bear good fresh juicy fruit.
                    </a>
                  </h3>
                  <p className="blog-meta">
                    <span className="author">
                      <i className="fas fa-user" /> Admin
                    </span>
                    <span className="date">
                      <i className="fas fa-calendar" /> 27 December, 2019
                    </span>
                  </p>
                  <p className="excerpt">
                    Vivamus lacus enim, pulvinar vel nulla sed, scelerisque
                    rhoncus nisi. Praesent vitae mattis nunc, egestas viverra
                    eros.
                  </p>
                  <a href="single-news.html" className="read-more-btn">
                    read more <i className="fas fa-angle-right" />
                  </a>
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
