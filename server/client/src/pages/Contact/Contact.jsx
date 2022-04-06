import React from "react";
import { BsTelephone, BsGlobe, BsFacebook, BsPinterest } from "react-icons/bs";
import { FaMapMarkerAlt } from "react-icons/fa";
import { AiFillInstagram, AiFillTwitterCircle } from "react-icons/ai";

const Contact = () => {
  return (
    <>
      <div className="contact-bg">
        <h2>Contact Us</h2>
      </div>
      <section className="contacts">
        <div className="contacts__content container-div grid">
          <div className="contacts__content__info">
            <div className="contacts__content__info__wrapper grid">
              <div className="contacts__content__info__wrapper__info">
                <div className="contacts__content__info__wrapper__info-icon">
                  <BsTelephone />
                </div>
                <div className="contacts__content__info__wrapper__info-dec">
                  <h6>Phone</h6>
                  <p>Free: 0000 - 123 - 456789</p>
                </div>
              </div>
              <div className="contacts__content__info__wrapper__info">
                <div className="contacts__content__info__wrapper__info-icon">
                  <BsGlobe />
                </div>
                <div className="contacts__content__info__wrapper__info-dec">
                  <h6>Email</h6>

                  <p>
                    <a href="mailto:sahadat.developer@gmail.com">
                      yummy@gmail.com
                    </a>
                  </p>
                </div>
              </div>
              <div className="contacts__content__info__wrapper__info">
                <div className="contacts__content__info__wrapper__info-icon">
                  <FaMapMarkerAlt />
                </div>
                <div className="contacts__content__info__wrapper__info-dec">
                  <h6>Address</h6>
                  <p>No: 58 A, East Madison Street</p>
                </div>
              </div>
              <div className="contacts__content__info__wrapper__social">
                <h3>Follow Us</h3>
                <ul>
                  <li>
                    <a target="_blank" rel="noopener noreferrer" href="#home">
                      <BsFacebook />
                    </a>
                  </li>
                  <li>
                    <a href="//pinterest.com">
                      <AiFillInstagram />
                    </a>
                  </li>
                  <li>
                    <a href="//thumblr.com">
                      <i className="fa fa-tumblr" />
                    </a>
                  </li>
                  <li>
                    <a href="//vimeo.com">
                      <BsPinterest />
                    </a>
                  </li>
                  <li>
                    <a href="//twitter.com">
                      <AiFillTwitterCircle />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="contacts__content__details">
            <div className="contacts__content__details__form">
              <div className="contacts__content__details__form__title">
                <h2>Get In Touch</h2>
              </div>
              <form className="contacts__content__details__form__desc">
                <div className="row">
                  <div className="contact__form__div contact-input">
                    <input
                      className="contact__form__div-input"
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email*"
                    />
                  </div>
                  <div className="contact__form__div contact-input">
                    <input
                      className="contact__form__div-input"
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Name*"
                    />
                  </div>
                  <div className="contact__form__div contact-input">
                    <input
                      className="contact__form__div-input"
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Phone*"
                    />
                  </div>
                  <div className="contact__form__div contact-input">
                    <textarea
                      className="contact__form__div-textarea"
                      name="Message"
                      id="message"
                      rows="7"
                      column="30"
                      placeholder="Message*"
                    />
                  </div>

                  <div className="col-lg-12">
                    <button className="submit" type="submit">
                      SEND
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
