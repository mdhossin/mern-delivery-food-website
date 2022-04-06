import React, { useEffect } from "react";

import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";
import { getAllProduct } from "../../redux/actions/productActions";
import { SectionTitle } from "../../components";
import Loading from "../../components/Loading/Loading";
import ProductRating from "../../components/ProductRating/ProductRating";
import Footer from "../../components/Footer/Footer";
const Shop = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector(
    (state) => state.allProducts
  );

  useEffect(() => {
    dispatch(getAllProduct());
  }, [dispatch]);
  return (
    <>
      <section className="products container-div shop">
        <SectionTitle title="All Products" />

        <motion.div
          transition={{ duration: 0.5, delayChildren: 0.5 }}
          className="products__items grid"
        >
          {loading ? (
            <Loading />
          ) : error ? (
            <h3>{error}</h3>
          ) : (
            <>
              {products?.map(({ _id, name, images, rating, price }) => (
                <motion.div
                  whileInView={{ opacity: [0, 1] }}
                  transition={{ duration: 0.5 }}
                  key={_id}
                  className="products__items__item"
                >
                  <img src={images?.url} alt="" />
                  <div className="products__items__item__buttons">
                    <div>
                      <Link to={`/placeorder/${_id}`}>
                        <button>Order Now</button>
                      </Link>
                      <Link to={`/products/${_id}`}>
                        <button>View Details</button>
                      </Link>
                    </div>
                  </div>
                  <div className="products__items__item__content">
                    <h2>{name}</h2>
                    <ProductRating ratingValue={rating} />
                    <h4>${price}.00</h4>
                  </div>
                </motion.div>
              ))}
            </>
          )}
        </motion.div>
      </section>
      <Footer />
    </>
  );
};

export default Shop;
