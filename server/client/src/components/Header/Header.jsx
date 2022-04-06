import React, { useEffect, useRef, useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { CgMenuRight } from "react-icons/cg";

import { MdRestaurantMenu } from "react-icons/md";

import { Link, useNavigate } from "react-router-dom";
import { NavDropdown } from "react-bootstrap";
import logo from "../../assets/images/logo.jpg";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../redux/actions/userActions";
import person from "../../assets/images/person.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef(null);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const { currentUser } = useSelector((state) => state.user);

  useEffect(() => {
    const shrinkHeader = () => {
      if (
        document.body.scrollTop > 60 ||
        document.documentElement.scrollTop > 60
      ) {
        headerRef.current.classList.add("scroll-header");
      } else {
        headerRef.current.classList.remove("scroll-header");
      }
    };
    window.addEventListener("scroll", shrinkHeader);
    return () => {
      window.removeEventListener("scroll", shrinkHeader);
    };
  }, []);

  const handleLogOut = () => {
    if (currentUser) {
      dispatch(logOut());
      setMenuOpen(false);
    }
    navigate("/");
  };

  return (
    <header ref={headerRef} className="header">
      <nav className="nav container-div">
        <a href="#home" className="nav__logo">
          <img src={logo} alt="Logo" />
        </a>

        <div className={"nav__menu " + (menuOpen && "show-menu")}>
          <ul className="nav__list nav__menu__list">
            <li className="nav__item">
              <Link
                to="/"
                className="nav__link"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li className="nav__item">
              <Link
                to="/shop"
                className="nav__link"
                onClick={() => setMenuOpen(false)}
              >
                Products
              </Link>
            </li>

            <li className="nav__item">
              <Link
                to="/contact"
                onClick={() => setMenuOpen(false)}
                className="nav__link"
              >
                Contact
              </Link>
            </li>

            <NavDropdown
              title={
                currentUser ? (
                  <img
                    title={currentUser.name}
                    style={{ borderRadius: "50%" }}
                    width="22"
                    height="22"
                    src={currentUser?.photoURL ? currentUser?.photoURL : person}
                    alt="user"
                  />
                ) : (
                  <AiOutlineUser className="nav__dropdown-icon" />
                )
              }
              id="collasible-nav-dropdown"
            >
              {currentUser ? (
                <>
                  <NavDropdown.Item
                    className="nav__dropdown__item"
                    onClick={() => {
                      navigate("/dashboard");
                      setMenuOpen(false);
                    }}
                  >
                    Dashboard
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    className="nav__dropdown__item"
                    onClick={handleLogOut}
                  >
                    Logout
                  </NavDropdown.Item>
                </>
              ) : (
                <>
                  <NavDropdown.Item
                    className="nav__dropdown__item"
                    // onClick={() => navigate("/login")}
                    onClick={() => {
                      navigate("/login");
                      setMenuOpen(false);
                    }}
                  >
                    Log in
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    className="nav__dropdown__item"
                    onClick={() => {
                      navigate("/register");
                      setMenuOpen(false);
                    }}
                    // onClick={() => navigate("/register")}
                  >
                    Register
                  </NavDropdown.Item>
                </>
              )}
            </NavDropdown>
          </ul>

          <div
            className="nav__close"
            id="nav-close"
            onClick={() => setMenuOpen(false)}
          >
            <MdRestaurantMenu />
          </div>
        </div>

        <div className="nav__btns">
          <div
            className="nav__btns__toggle"
            id="nav-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <CgMenuRight />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
