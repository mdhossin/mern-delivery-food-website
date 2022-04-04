import React, { useState } from "react";
import { Link } from "react-router-dom";

import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Spinner } from "react-bootstrap";
import { validRegister } from "../../utils/validation";

const Register = () => {
  // const navigate = useNavigate();
  // let location = useLocation();

  const [newUser, setNewUser] = useState({
    email: "",
    password: "",
    name: "",
    cf_password: "",
  });

  // const redirect = location.state?.path || "/";

  const { name, email, password, cf_password } = newUser;

  const [typePass, setTypePass] = useState(false);
  const [typeCfPass, setTypeCfPass] = useState(false);

  const handleChangeInput = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = validRegister(newUser);
    console.log(result);
  };

  return (
    <section className="section">
      <div className="contact">
        <div className="contact__container">
          <h3 className="contact__title">Register</h3>

          <form className="contact__form" onSubmit={handleSubmit}>
            <div className="contact__form__div">
              <label htmlFor="email" className="contact__form__div-tag">
                Name
              </label>
              <input
                className="contact__form__div-input"
                type="text"
                name="name"
                value={name}
                onChange={handleChangeInput}
                placeholder="Your name"
              />
            </div>
            <div className="contact__form__div">
              <label htmlFor="email" className="contact__form__div-tag">
                Email
              </label>
              <input
                className="contact__form__div-input"
                type="email"
                name="email"
                value={email}
                onChange={handleChangeInput}
                placeholder="Your Email"
              />
            </div>
            <div className="contact__form__div pass">
              <label htmlFor="password" className="contact__form__div-tag">
                Password
              </label>
              <input
                className="contact__form__div-input"
                type={typePass ? "text" : "password"}
                name="password"
                value={password}
                id="password"
                onChange={handleChangeInput}
                placeholder="Your Password"
              />
              <small onClick={() => setTypePass(!typePass)}>
                {typePass ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
              </small>
            </div>
            <div className="contact__form__div pass">
              <label htmlFor="cf_password" className="contact__form__div-tag">
                Confirm Password
              </label>
              <input
                className="contact__form__div-input"
                type={typeCfPass ? "text" : "password"}
                name="cf_password"
                value={cf_password}
                id="cf_password"
                onChange={handleChangeInput}
                placeholder="Confrim Password"
              />
              <small onClick={() => setTypeCfPass(!typeCfPass)}>
                {typeCfPass ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
              </small>
            </div>

            <button
              className="button"
              type="submit"
              disabled={email && password ? false : true}
            >
              {false ? <Spinner animation="border" size="sm" /> : "Register"}
            </button>
            <div
              className="contact__form__forgot"
              style={{ textAlign: "start" }}
            >
              <Link to="/login"> Already have an account ? Login</Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Register;
