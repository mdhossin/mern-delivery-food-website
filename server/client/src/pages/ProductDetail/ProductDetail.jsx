import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getProductById } from "../../redux/actions/productActions";
import { Spinner } from "react-bootstrap";
import ProductRating from "../../components/ProductRating/ProductRating";
import Footer from "../../components/Footer/Footer";

const ProductDetail = () => {
  const { productId } = useParams();

  const dispatch = useDispatch();
  const { product, loading, error } = useSelector((state) => state.productById);

  useEffect(() => {
    dispatch(getProductById(productId));
  }, [productId, dispatch]);

  return (
    <>
      <section className="container-div section product">
        {loading ? (
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        ) : error ? (
          <h2>{error}</h2>
        ) : (
          <div className="product__detail grid">
            <div className="product__detail__img">
              <img src={product?.images?.url} alt="" />
            </div>

            <div className="product__detail__info">
              <h2 className="product__detail__info-name">{product.name}</h2>

              <div className="product__detial__info__price">
                <span className="product__detail__info__price-count">
                  ${product.price}.00
                </span>
              </div>
              <div className="product__detail__info-rating">
                <ProductRating ratingValue={product.rating} />({product.rating})
              </div>

              <div className="product__detail__info-stock">
                <p>Status: {product.stock < 0 ? "Out Of Stock" : "In Stock"}</p>
              </div>

              <div className="product__detail__info-btn">
                <Link to={`/placeorder/${product?._id}`}>
                  <button>Order Now</button>
                </Link>
              </div>

              <div className="product__detail__info-desc">
                <p>{product.description}</p>
              </div>
            </div>
          </div>
        )}
      </section>
      <Footer />
    </>
  );
};

export default ProductDetail;
