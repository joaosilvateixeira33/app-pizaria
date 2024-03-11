import React, { useState } from "react";
import "./HeaderStyles.css";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import { LoginModal } from "../LoginModal/index.tsx";
import { CartModal } from "../CartModal/index.tsx";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loginModal, setLoginModal] = useState(false);
  const [cartModalOpen, setCartModalOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleCartModal = () => {
    setCartModalOpen(!cartModalOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="#">
          <Link to={"/"}>
            <img src={logo} alt="logo-Pizza-Time" className="logoStyle" />
          </Link>
        </a>
        <button className="navbar-toggler" type="button" onClick={toggleMenu}>
          <span className={menuOpen ? "bi bi-x" : "bi bi-list"}></span>
        </button>
        <div className={`collapse navbar-collapse ${menuOpen ? "show" : ""}`}>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Menu
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About
              </a>
            </li>
            <form className="container-fluid form-button">
              <div className="cart-container" onClick={toggleCartModal}>
                <i className="bi bi-cart-fill btn-cart"></i>
                <span className="counter">0</span>
              </div>
              <button
                className="btn btn-sign btn-sm"
                type="button"
                onClick={() => setLoginModal(true)}
              >
                Sign-in
              </button>
            </form>
          </ul>
        </div>
      </div>
      {loginModal && <LoginModal closeModal={() => setLoginModal(false)} />}
      {cartModalOpen && <CartModal isOpen={cartModalOpen} onClose={toggleCartModal} />}
    </nav>
  );
};

export default Header;
