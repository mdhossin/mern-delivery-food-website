// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useParams } from "react-router-dom";
// import { AiOutlineHeart } from "react-icons/ai";
// import Footer from "../Footer/Footer";
// import ProductRating from "../../components/Common/ProductRating/ProductRating";
// import { getProductById } from "../../redux/actions/productAction";
// import Loading from "../../components/Common/Loading/Loading";
// import { addItemsToCart } from "../../redux/actions/cartActions";

// import { useToasts } from "react-toast-notifications";

// const ProductDetail = () => {
//   const { productId } = useParams();
//   const dispatch = useDispatch();
//   const { product, loading } = useSelector((state) => state.productById);

//   const { cartItems } = useSelector((state) => state.cart);

//   const addOrNot = cartItems?.find((item) => item.product === product._id);

//   const { addToast } = useToasts();

//   useEffect(() => {
//     dispatch(getProductById(productId));
//   }, [productId, dispatch]);

//   const [quantity, setQuantity] = useState(1);

//   const increaseQuantity = () => {
//     if (product.Stock <= quantity) return;

//     const qty = quantity + 1;
//     setQuantity(qty);
//   };

//   const decreaseQuantity = () => {
//     if (1 >= quantity) return;

//     const qty = quantity - 1;
//     setQuantity(qty);
//   };

//   const addToCartHandler = () => {
//     dispatch(addItemsToCart(productId, quantity, addToast));
//   };

//   return (
//     <>
//       <section className="container-div section product">
//         {loading ? (
//           <Loading />
//         ) : (
//           <div className="product__detail grid">
//             <div className="product__detail__img">
//               <img src={product?.images?.url} alt="" />
//             </div>

//             <div className="product__detail__info">
//               <h2 className="product__detail__info-name">{product.name}</h2>

//               <div className="product__detial__info__price">
//                 <span className="product__detail__info__price-count">
//                   ${product.price}.00
//                 </span>
//               </div>
//               <div className="product__detail__info-rating">
//                 <ProductRating ratingValue={product.ratings} />(
//                 {product.ratings})
//               </div>

//               <div className="product__detail__info-stock">
//                 <p>Status: {product.Stock < 0 ? "Out Of Stock" : "In Stock"}</p>
//               </div>

//               <div className="product__detail__info__buttons">
//                 <div className="product__detail__info__buttons-quantity">
//                   <button onClick={decreaseQuantity} className="minus">
//                     -
//                   </button>
//                   <input
//                     className="input"
//                     readOnly
//                     type="number"
//                     value={quantity}
//                   />
//                   <button onClick={increaseQuantity} className="add">
//                     +
//                   </button>
//                 </div>
//                 <div className="product__detail__info__buttons-add">
//                   <button
//                     disabled={addOrNot?.quantity > 0}
//                     onClick={addToCartHandler}
//                   >
//                     {addOrNot?.quantity > 0 ? "Added" : "Add"}
//                   </button>
//                 </div>
//                 <div className="product__detail__info__buttons-wishlist">
//                   <button>
//                     <AiOutlineHeart />
//                   </button>
//                 </div>
//               </div>

//               <div className="product__detail__info-desc">
//                 <p>{product.description}</p>
//               </div>
//             </div>
//           </div>
//         )}
//       </section>
//       <Footer />
//     </>
//   );
// };

// export default ProductDetail;
