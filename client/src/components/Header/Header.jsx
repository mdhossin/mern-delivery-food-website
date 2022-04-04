import React, { useEffect, useRef, useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { CgMenuRight } from "react-icons/cg";

import { MdRestaurantMenu } from "react-icons/md";

import { Link } from "react-router-dom";
import { NavDropdown } from "react-bootstrap";
import logo from "../../assets/images/logo.jpg";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef(null);

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
            {false && (
              <>
                <li className="nav__item">
                  <Link
                    to="/myorders"
                    onClick={() => setMenuOpen(false)}
                    className="nav__link"
                  >
                    My Orders
                  </Link>
                </li>
                <li className="nav__item">
                  <Link
                    to="/manageorder"
                    onClick={() => setMenuOpen(false)}
                    className="nav__link"
                  >
                    Manage All Orders
                  </Link>
                </li>
                <li className="nav__item">
                  <Link
                    to="/addTour"
                    onClick={() => setMenuOpen(false)}
                    className="nav__link"
                  >
                    Add New Item
                  </Link>
                </li>
              </>
            )}
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
                false ? (
                  <img
                    style={{ borderRadius: "50%" }}
                    width="22"
                    height="22"
                    src=""
                    alt="user"
                  />
                ) : (
                  <AiOutlineUser className="nav__dropdown-icon" />
                )
              }
              id="collasible-nav-dropdown"
            >
              {false ? (
                <>
                  <NavDropdown.Item
                    className="nav__dropdown__item"
                    // onClick={() => navigate("/dashboard")}
                  >
                    Profile
                  </NavDropdown.Item>
                  <NavDropdown.Item className="nav__dropdown__item">
                    Logout
                  </NavDropdown.Item>
                </>
              ) : (
                <>
                  <NavDropdown.Item
                    className="nav__dropdown__item"
                    // onClick={() => navigate("/login")}
                    onClick={() => {
                      setMenuOpen(false);
                    }}
                  >
                    Log in
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    className="nav__dropdown__item"
                    onClick={() => {
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
