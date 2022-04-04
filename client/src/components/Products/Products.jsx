import React from "react";
import { productData } from "../../utils/fakedata";
import ProductRating from "../ProductRating/ProductRating";
import SectionTitle from "../SectionTitle/SectionTitle";

const Products = () => {
  return (
    <section className="products container-div">
      <SectionTitle
        title="Our Products"
        desc="Quam pellentesque nec nam aliquam sem et tortor consequat."
      />

      <div className="products__items grid">
        {productData.map(({ id, name, img, description, rating, price }) => (
          <div key={id} className="products__items__item">
            <img src={img} alt="" />
            <div className="products__items__item__content">
              <h2>{name}</h2>
              <ProductRating ratingValue={rating} />
              <h4>${price}.00</h4>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
