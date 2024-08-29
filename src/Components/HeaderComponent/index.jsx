import React, { useState } from "react";
import UserIcon from "../../Assets/Images/user-circle-svgrepo-com.svg";
import LocationIcon from "../../Assets/Images/location-pin-svgrepo-com.svg";
import Logo from "../../Assets/Images/asset 1.svg";
import CartIcon from "../../Assets/Images/cart-3-svgrepo-com.svg";
import WishIcon from "../../Assets/Images/wishlist-svgrepo-com.svg";
import SearchIcon from "../../Assets/Images/search-svgrepo-com.svg";

const HeaderComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="header-main-container">
        <div className="top-header">
          <div className="left-nav d-flex gap-5">
            <div className="co-logo">
              <a href="#">
                <img src={Logo} alt="" />
              </a>
            </div>
            <div className="location-time">
              <div className="deliver-in">Delivery in 8 minutes...</div>
              <div className="location-select">
                <div className="location-icon">
                  <img src={LocationIcon} alt="" />
                </div>
                <span>Set Location</span>
              </div>
            </div>
          </div>
          <div className="search-items">
            <input type="text" placeholder="Search here..." />
            <div className="search-icon">
              <img src={SearchIcon} alt="" />
            </div>
          </div>
          <div className="signup-btn">
            <div className="user-icon">
              <img src={UserIcon} alt="" />
            </div>
            <span>
              <a href="#">Login/Registger</a>
            </span>
          </div>
          <div className="right-nav">
            <div className="add-cart d-flex">
              <div className="cart-icon" data-count="0">
                <img src={WishIcon} alt="" />
              </div>
              <div className="cart-icon" data-count="2">
                <img src={CartIcon} alt="" />
              </div>
            </div>
          </div>
          <div className="hamburger-menu" onClick={handleToggle}>
            <span>&#9776;</span>
          </div>
        </div>
        <div className="navbar-container">
          <nav className={`desktop-navbar ${isOpen ? "hidden" : ""}`}>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Shop</a>
              </li>
              <li>
                <a href="#">Products</a>
              </li>
              <li>
                <a href="#">Offers</a>
              </li>
              <li>
                <a href="#">Info Page</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </nav>
          <div className="help-line">
            <a href="tel:+919900887788">Call Us: +91 9900887788</a>
          </div>
        </div>
        {isOpen && (
          <div className="mobile-nav">
            <nav class="navbar-list">
              <ul class="nav-list">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Shop</a>
                </li>
                <li>
                  <a href="#">Products</a>
                </li>
                <li>
                  <a href="#">Offers</a>
                </li>
                <li>
                  <a href="#">Info Page</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
              </ul>
            </nav>
            <div className="mobile-signup-btn">
              <div className="user-icon">
                <img src={UserIcon} alt="" />
              </div>
              <span>
                <a href="#">Login/Registger</a>
              </span>
            </div>
            <hr />
            <div className="mobile-help-line">
              <span>Call Us: +91 9900887788</span>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default HeaderComponent;
