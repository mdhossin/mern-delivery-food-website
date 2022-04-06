import axios from "axios";
import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { createProduct } from "../../redux/actions/productActions";
import { CREATE_PRODUCT_RESET } from "../../redux/constants/productConstants";

const initialstate = {
  name: "",
  price: 0,
  description: "",
};
const AddProduct = () => {
  const navigate = useNavigate();
  const [product, setProduct] = useState(initialstate);
  const dispatch = useDispatch();

  const { products, error } = useSelector((state) => state?.createProduct);
  const { name, description, price } = product;

  const [images, setImages] = useState(false);
  const [uploadError, setUploadError] = useState("");
  const [uploadSuccess, setUploadSuccess] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // image upload here
  const handleUpload = async (e) => {
    e.preventDefault();
    try {
      const file = e.target.files[0];
      let formData = new FormData();
      formData.append("file", file);
      setIsLoading(true);
      setUploadError("");
      const res = await axios.post("/api/upload", formData, {
        headers: {
          "content-type": "multipart/form-data",
        },
      });
      setIsLoading(false);
      setImages(res.data);
      setUploadSuccess(res.data.message);
    } catch (error) {
      setUploadSuccess("");
      setIsLoading(false);
      setUploadError(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      );
    }
  };

  // delete image
  const handleDestroy = async () => {
    try {
      setIsLoading(true);
      setUploadError("");
      const res = await axios.post("/api/destroy", {
        public_id: images.public_id,
      });
      setIsLoading(false);
      setImages(false);
      setUploadSuccess(res.data.message);
    } catch (error) {
      setIsLoading(false);
      setUploadSuccess("");
      setUploadError(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      );
    }
  };

  // get the all input value update the state
  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // create product api call here
    dispatch(createProduct({ ...product, images }, navigate, toast));
  };

  // show the toast message error or succes
  useEffect(() => {
    if (error) {
      dispatch({ type: CREATE_PRODUCT_RESET });
      toast.error(error);
    } else if (products?.message) {
      dispatch({ type: CREATE_PRODUCT_RESET });
      toast.success(products?.message);
    }
  }, [products, error, dispatch]);

  useEffect(() => {
    if (uploadError) {
      toast.error(uploadError);
    } else if (uploadSuccess) {
      toast.success(uploadSuccess);
    }
  }, [uploadSuccess, uploadError]);

  const styleUpload = {
    display: images ? "block" : "none",
  };

  return (
    <section className="addproduct section container-div">
      <h3 className="addproduct__title">Add Product</h3>
      <div className="addproduct__container">
        <form className="addproduct__form  grid" onSubmit={handleSubmit}>
          <div className="addproduct__form__left">
            <div className="contact__form__div">
              <label htmlFor="name" className="contact__form__div-tag">
                Product Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Product name here"
                value={name}
                onChange={handleChangeInput}
              />
            </div>

            <div className="contact__form__div pass">
              <label htmlFor="price" className="contact__form__div-tag">
                Price
              </label>
              <input
                className="contact__form__div-input"
                type="number"
                name="price"
                id="price"
                placeholder="Product price here"
                value={price}
                onChange={handleChangeInput}
              />
            </div>

            <div className="contact__form__div pass">
              <label htmlFor="description" className="contact__form__div-tag">
                Product Description
              </label>
              <textarea
                style={{ width: "100% !important" }}
                className="contact__form__div-textarea"
                name="description"
                id="description"
                rows="7"
                column="30"
                placeholder="Product description"
                value={description}
                onChange={handleChangeInput}
              />
            </div>
          </div>

          <div className="addproduct__form__right">
            <div className="addproduct__form__right__box">
              <div className="addproduct__form__right__box__upload">
                <input
                  type="file"
                  name="file"
                  id="file_up"
                  onChange={handleUpload}
                />
                {isLoading ? (
                  <div id="file_img">
                    <div className="loader">
                      <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                      </Spinner>
                    </div>
                  </div>
                ) : (
                  <div id="file_img" style={styleUpload}>
                    <img src={images ? images.url : ""} alt="" />
                    <span onClick={handleDestroy}>X</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="addproduct__form__button">
            <button style={{ fontSize: "15px" }} type="submit">
              Public Now
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AddProduct;
