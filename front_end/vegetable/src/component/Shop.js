import { useState } from "react";
import { getProductList } from "../service/product/ProductService";
import { useEffect } from "react";
import "../css/shop.css";
import { getProductTypeList } from "../service/product/ProductTypeService";
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert2";
import { getUserByJwtToken } from "../service/user/UserService";
import { createCart, getAllCartByUserName } from "../service/cart/CartService";

const Shop = ({ updateCartLength }) => {
  const [productList, setProductList] = useState([]);
  const [productTypeList, setProductTypeList] = useState([]);
  const [page, setPage] = useState(0);
  const [totalPage, setTotalPage] = useState(1);
  const [searchType, setSearchType] = useState("");
  const [sort, setSort] = useState("productId");
  const navigate = useNavigate();
  const [selectedType, setSelectedType] = useState("");

  const loadProductTypeList = async () => {
    const data = await getProductTypeList();
    setProductTypeList(data);
  };
  useEffect(() => {
    loadProductTypeList();
  }, []);

  const loadProductList = async () => {
    const data = await getProductList(page, searchType, sort);
    setProductList(data.content);
    setTotalPage(data.totalPages);
  };
  useEffect(() => {
    loadProductList();
  }, [page, searchType, sort]);

  //paging
  const nextPage = () => {
    if (page < totalPage - 1) {
      setPage((Prev) => Prev + 1);
    }
  };
  const previousPage = () => {
    if (page > 0) {
      setPage((Prev) => Prev - 1);
    }
  };
  //search
  const searchTypeProduct = (values) => {
    setSearchType(values);
    setPage(0);
    setSelectedType(values);
  };

  //sort
  const sortProduct = (values) => {
    console.log(values);
    setSort(values);
  };

  const clickCreateCart = async (productId) => {
    const userName = getUserByJwtToken();
    if (userName != null) {
      await createCart(1, productId, userName.sub);
      loadListCart();
      swal.fire({
        icon: "success",
        title: "Hoàn tất",
        text: "Sản phẩm đã được thêm vào giỏ hàng hãy tiến hành thanh toán",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      navigate("/login");
      swal.fire({
        icon: "error",
        title: "Đăng nhập",
        text: "Để thêm sản phẩm vào giỏ hàng!",
      });
    }
  };
  const loadListCart = async () => {
    const userName = getUserByJwtToken();
    const data = await getAllCartByUserName(userName.sub);
    updateCartLength(data.length);
  };

  return (
    <>
      {/* products */}
      <div className="product-section mt-150 mb-150">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="product-filters">
                <ul>
                  <li
                    className={selectedType === "" ? "active" : ""}
                    onClick={() => searchTypeProduct("")}
                  >
                    Tất cả
                  </li>
                  {productTypeList.map((productType) => (
                    <li
                      className={
                        selectedType === productType.name ? "active" : ""
                      }
                      key={productType.typeId}
                      onClick={() => searchTypeProduct(productType.name)}
                    >
                      {productType.name}
                    </li>
                  ))}
                  {/* Example single danger button */}
                  <li className="active dropdown-toggle" data-toggle="dropdown">
                    Sắp xếp theo
                  </li>
                  <div className="dropdown-menu">
                    <button
                      className="dropdown-item btn btn-light"
                      onClick={() => sortProduct("productId")}
                    >
                      Sản phẩm mới nhất
                    </button>
                    <button
                      className="dropdown-item btn btn-light"
                      onClick={() => sortProduct("ASC")}
                    >
                      Giá tăng
                    </button>
                    <button
                      className="dropdown-item btn btn-light"
                      onClick={() => sortProduct("DESC")}
                    >
                      Giá giảm
                    </button>
                  </div>
                </ul>
              </div>
            </div>
          </div>

          <div className="row product-lists">
            {productList.map((product) => (
              <div className="col-lg-4 col-md-6 text-center strawberry">
                <div className="single-product-item">
                  <div className="product-image">
                    <Link to={`/product-detail/${product.productId}`}>
                      <img src={product.imageAddress} />
                    </Link>
                  </div>
                  <h3>{product.productName}</h3>
                  <p className="product-price">
                    {product.productPrice.toLocaleString("vi-VN")} VND
                  </p>
                  <button
                    onClick={() => clickCreateCart(product.productId)}
                    className="btn btn-outline-dark"
                  >
                    <i className="fas fa-shopping-cart" /> Thêm vào giỏ
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="pagination-wrap">
                <ul>
                  <li>
                    <button
                      className="btn button-shop"
                      onClick={() => {
                        previousPage();
                      }}
                    >
                      Prev
                    </button>
                  </li>
                  {/* <li>
                    <a href="#">1</a>
                  </li> */}
                  <li>
                    <a style={{ backgroundColor: "#82ae46" }}>
                      {page + 1}/{totalPage}
                    </a>
                  </li>
                  {/* <li>
                    <a href="#">3</a>
                  </li> */}
                  <li>
                    <button
                      className="btn button-shop"
                      onClick={() => {
                        nextPage();
                      }}
                    >
                      Next
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end products */}
    </>
  );
};
export default Shop;
