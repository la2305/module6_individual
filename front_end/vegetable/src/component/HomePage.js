import "../css/homapage.css";
const HomePage = () => {
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
          <div className="carousel-item active">
            <div className="container">
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
          <div className="carousel-item">
            <div className="container">
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
          <div className="carousel-item">
            <div className="container">
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
              Our guavas are grown in the arctic, where the mountains are covered with snow all year round. There's nothing better than enjoying it
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
                Eating well not only cares about the health of your life but also cares about spiritual factors.
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
                      You will vainly look for fruit on it in autumn.
                    </a>
                  </h3>
                  <p className="blog-meta">
                    <span className="author">
                      <i className="fas fa-user" /> Admin
                    </span>
                    <span className="date">
                      <i className="fas fa-calendar" /> 24 October, 2022
                    </span>
                  </p>
                  <p className="excerpt">
                  In the crisp days of autumn, you'll search in vain for the bountiful fruit that once adorned its branches.
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
                    <a>
                      Good thoughts bear good fresh juicy fruit.
                    </a>
                  </h3>
                  <p className="blog-meta">
                    <span className="author">
                      <i className="fas fa-user" /> Admin
                    </span>
                    <span className="date">
                      <i className="fas fa-calendar" /> 07 November, 2022
                    </span>
                  </p>
                  <p className="excerpt">
                  Just as a well-tended orchard yields a bountiful harvest, a mind filled with good thoughts produces a life rich in joy.
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
                      A man's worth has its season, like tomato.
                    </a>
                  </h3>
                  <p className="blog-meta">
                    <span className="author">
                      <i className="fas fa-user" /> Admin
                    </span>
                    <span className="date">
                      <i className="fas fa-calendar" /> 27 December, 2023
                    </span>
                  </p>
                  <p className="excerpt">
                    Just like a tomato, a man's worth ripens with time and patience, reaching its peak in the right season of his life.
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
