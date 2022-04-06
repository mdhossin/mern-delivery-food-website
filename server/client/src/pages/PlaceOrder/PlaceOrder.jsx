import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import { toast } from "react-toastify";
import { createOrders } from "../../redux/actions/orderActions";
import { CREATE_ORDER_RESET } from "../../redux/constants/orderConstants";
const PlaceOrder = () => {
  const { currentUser } = useSelector((state) => state?.user);
  const { orderId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [order, setOrder] = useState({
    country: "",
    city: "",
    phone: "",
  });

  const { orders, error } = useSelector((state) => state?.createOrder);

  // get the all input value update the state
  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setOrder({ ...order, [name]: value });
  };

  const { country, city, phone } = order;
  const handleSubmit = (e) => {
    e.preventDefault();
    order.email = currentUser?.email;
    order.displayName = currentUser?.displayName;
    order.productId = orderId;

    dispatch(createOrders({ ...order }, navigate, toast));
  };

  // show the toast message error or succes
  useEffect(() => {
    if (error) {
      dispatch({ type: CREATE_ORDER_RESET });
      toast.error(error);
    } else if (orders?.message) {
      dispatch({ type: CREATE_ORDER_RESET });
      toast.success(orders?.message);
      // navigate(redirect);
    }
  }, [orders, error, dispatch]);
  return (
    <section className="section shipping container-div">
      <h3>Shipping Information</h3>
      <form className="shipping__form  grid" onSubmit={handleSubmit}>
        <div className="shipping__form__left">
          <div className="contact__form__div">
            <label htmlFor="name" className="contact__form__div-tag">
              Name
            </label>
            <input
              type="text"
              name="name"
              className="contact__form__div-input"
              placeholder="Your name"
              defaultValue={currentUser?.displayName}
              readOnly
            />
          </div>

          <div className="contact__form__div">
            <label htmlFor="email" className="contact__form__div-tag">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="contact__form__div-input"
              placeholder="Your Email"
              defaultValue={currentUser?.email}
              readOnly
            />
          </div>
          <div className="contact__form__div pass">
            <label htmlFor="country" className="contact__form__div-tag">
              Country
            </label>
            <input
              className="contact__form__div-input"
              type="text"
              name="country"
              id="country"
              placeholder="Enter your country name"
              value={country}
              onChange={handleChangeInput}
            />
          </div>
        </div>
        <div className="shipping__form__right">
          <div className="contact__form__div pass">
            <label htmlFor="city" className="contact__form__div-tag">
              City
            </label>
            <input
              className="contact__form__div-input"
              type="text"
              name="city"
              id="city"
              placeholder="Enter your city name"
              value={city}
              onChange={handleChangeInput}
            />
          </div>
          <div className="contact__form__div pass">
            <label htmlFor="phone" className="contact__form__div-tag">
              Phone
            </label>
            <input
              className="contact__form__div-input"
              type="number"
              name="phone"
              id="phone"
              placeholder="Enter your phone number"
              value={phone}
              onChange={handleChangeInput}
            />
          </div>
          <div className="addproduct__form__button btn">
            <button style={{ fontSize: "15px" }} type="submit">
              Place Order
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default PlaceOrder;
