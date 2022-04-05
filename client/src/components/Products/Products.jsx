import React from "react";
import { productData } from "../../utils/fakedata";
import ProductRating from "../ProductRating/ProductRating";
import SectionTitle from "../SectionTitle/SectionTitle";
import { motion } from "framer-motion";

const Products = () => {
  return (
    <section className="products container-div">
      <SectionTitle
        title="Our Products"
        desc="Quam pellentesque nec nam aliquam sem et tortor consequat."
      />

      <motion.div
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="products__items grid"
      >
        {productData.map(({ id, name, img, description, rating, price }) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            key={id}
            className="products__items__item"
          >
            <img src={img} alt="" />
            <div className="products__items__item__content">
              <h2>{name}</h2>
              <ProductRating ratingValue={rating} />
              <h4>${price}.00</h4>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Products;
