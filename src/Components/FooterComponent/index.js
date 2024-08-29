import React from "react";
import { Col, Row } from "react-bootstrap";
import ShipIcon from "../../Assets/Images/truck-speed-svgrepo-com.svg";
import MoneyReturnIcon from "../../Assets/Images/money-refund-svgrepo-com.svg";
import SupportIcon from "../../Assets/Images/24-hours-phone-attention-service-svgrepo-com.svg";
import PaymentIcon from "../../Assets/Images/lock-payment-card-svgrepo-com.svg";
import googlePlayStore from "../../Assets/Images/google.jpg";
import AppleStore from "../../Assets/Images/ios.jpg";
import FaceBook from "../../Assets/Images/facebook-176-svgrepo-com.svg";
import Twitter from "../../Assets/Images/twitter-svgrepo-com.svg";
import InstaGram from "../../Assets/Images/instagram-svgrepo-com.svg";
import LinkedIn from "../../Assets/Images/linkedin-svgrepo-com.svg";
import Threads from "../../Assets/Images/threads-icon.svg";

const FooterComponent = () => {
  return (
    <>
      <div className="footer-main-container">
        <div className="footer-top">
          <div className="container">
            <Row>
              <Col md={3}>
                <div className="shipping">
                  <div className="ship-icon">
                    <img src={ShipIcon} alt="" />
                  </div>
                  <div className="ship-tilte">
                    <span>Free Shipping</span>
                    <p>on order over 499/-</p>
                  </div>
                </div>
              </Col>
              <Col md={3}>
                <div className="money-return">
                  <div className="money-icon">
                    <img src={MoneyReturnIcon} alt="" />
                  </div>
                  <div className="money-tilte">
                    <span>Money Return</span>
                    <p>30 days money return</p>
                  </div>
                </div>
              </Col>
              <Col md={3}>
                <div className="money-return">
                  <div className="money-icon">
                    <img src={SupportIcon} alt="" />
                  </div>
                  <div className="money-tilte">
                    <span>Support 24/7</span>
                    <p>call: 91+ 9876544321</p>
                  </div>
                </div>
              </Col>
              <Col md={3}>
                <div className="money-return">
                  <div className="money-icon">
                    <img src={PaymentIcon} alt="" />
                  </div>
                  <div className="money-tilte">
                    <span>Safe Payment</span>
                    <p>protect online payment</p>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <Row>
              <Col md={3}>
                <div className="Quick-links list">
                  <span>Quick Links</span>
                  <ul>
                    <a href="#">
                      <li>Home</li>
                    </a>
                    <a href="#">
                      <li>Shop</li>
                    </a>
                    <a href="#">
                      <li>Orders</li>
                    </a>
                    <a href="#">
                      <li>Shopping Card</li>
                    </a>
                    <a href="#">
                      <li>Wishlist</li>
                    </a>
                  </ul>
                </div>
              </Col>
              <Col md={3}>
                <div className="more-info list">
                  <span>Information</span>
                  <ul>
                    <a href="#">
                      <li>About Us</li>
                    </a>
                    <a href="#">
                      <li>Privacy Policy</li>
                    </a>
                    <a href="#">
                      <li>Refund Policy</li>
                    </a>
                    <a href="#">
                      <li>Terms and Services</li>
                    </a>
                    <a href="#">
                      <li>Contact Us</li>
                    </a>
                  </ul>
                </div>
              </Col>
              <Col md={6}>
                <div className="category list">
                  <span>Categories</span>
                  <div className="category-all-list">
                    <ul>
                      <a href="#">
                        <li>Vegetables & Fruits</li>
                      </a>
                      <a href="#">
                        <li>Cold Drinks & Juices</li>
                      </a>
                      <a href="#">
                        <li>Bakery & Biscuits</li>
                      </a>
                      <a href="#">
                        <li>Dry Fruits, Masala & Oil</li>
                      </a>
                      <a href="#">
                        <li>Organic & Premium</li>
                      </a>
                      <a href="#">
                        {" "}
                        <li>Pharma & Wellness</li>
                      </a>
                    </ul>
                    <ul>
                      <a href="#">
                        <li>Ice Creams & Frozen Desserts</li>
                      </a>
                      <a href="#">
                        <li>Beauty & Cosmetics</li>
                      </a>
                      <a href="#">
                        <li>Toys & Games</li>
                      </a>
                      <a href="#">
                        <li>Personal Care</li>
                      </a>
                      <a href="#">
                        <li>Magazines</li>
                      </a>
                      <a href="#">
                        <li>Print Store</li>
                      </a>
                    </ul>
                    <ul>
                      <a href="#">
                        <li>Dairy & Breakfast</li>
                      </a>
                      <a href="#">
                        <li>Instant & Frozen Food</li>
                      </a>
                      <a href="#">
                        <li>Sweet Tooth</li>
                      </a>
                      <a href="#">
                        <li>Sauces & Spreads</li>
                      </a>
                      <a href="#">
                        <li>Paan Corner</li>
                      </a>
                      <a href="#">
                        <li>Cleaning Essentials</li>
                      </a>
                    </ul>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
        <div className="app-link-reference">
          <div className="app-links">
            <div className="google">
              <a href="#">
                <img src={googlePlayStore} alt="" />
              </a>
            </div>
            <div className="apple">
              <a href="#">
                <img src={AppleStore} alt="" />
              </a>
            </div>
          </div>
          <div className="social-links">
            <div className="fb">
              <a href="#">
                <img src={FaceBook} alt="" />
              </a>
            </div>
            <div className="twitter">
              <a href="#">
                <img src={Twitter} alt="" />
              </a>
            </div>
            <div className="insta">
              <a href="#">
                <img src={InstaGram} alt="" />
              </a>
            </div>
            <div className="linkedIN">
              <a href="#">
                <img src={LinkedIn} alt="" />
              </a>
            </div>
            <div className="threads">
              <a href="#">
                <img src={Threads} alt="" />
              </a>
            </div>
          </div>
        </div>
        <div className="footer-copy-rights">
          <span>© Blink Commerce Private Limited, 2016-2024</span>
        </div>
      </div>
    </>
  );
};

export default FooterComponent;
