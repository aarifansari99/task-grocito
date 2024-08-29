import React from "react";
import { Col, Row } from "react-bootstrap";
import CartIcon from "../../Assets/Images/cart-3-svgrepo-com.svg";
import WishIcon from "../../Assets/Images/wishlist-svgrepo-com.svg";
import Chilli from "../../Assets/Images/Chilli.avif";

const BestSellerComponent = () => {
  const BestSellerListCard = [
    {
      image: require("../../Assets/Images/Onion.avif"),
      name: "Onion (Pyaz)",
      weight: "0.95  - 1.05 kg",
      offerprice: "₹54",
      price: "₹73",
    },
    {
      image: require("../../Assets/Images/Potato.avif"),
      name: "Potato - Pack of 2 (Aloo)",
      weight: "2 x 0.95 kg - 1.05 kg",
      offerprice: "₹93",
      price: "₹124",
    },
    {
      image: require("../../Assets/Images/Cucumber.avif"),
      name: "Green Cucumber (Kheera)",
      weight: "500g",
      offerprice: "₹37",
      price: "₹47",
    },
    {
      image: require("../../Assets/Images/brinjal.avif"),
      name: "Brinjal Bharta (Baingan)",
      weight: "500g",
      offerprice: "₹46",
      price: "₹63",
    },
    {
      image: require("../../Assets/Images/Garlic.avif"),
      name: "Garlic (Lehsun)",
      weight: "200g",
      offerprice: "₹90",
      price: "₹124",
    },
    {
      image: require("../../Assets/Images/Garlic.avif"),
      name: "Garlic (Lehsun)",
      weight: "200g",
      offerprice: "₹90",
      price: "₹124",
    },
  ];

  return (
    <>
      <div className="seller-container">
        <div className="seller-head">
          <span>Best Seller</span>
        </div>
        <div className="container">
          <Row className="product-card-container">
            {BestSellerListCard.map((value, index) => (
              <Col
                xs={4}
                sm={6}
                md={2}
                key={index}
                className="product-category-main-card"
              >
                <div className="product-category-card">
                  <div className="card-image">
                    <img src={value.image} alt="" />
                  </div>
                  <div className="product-category-detail">
                    <span>{value.name}</span>
                    <span>{value.weight}</span>
                  </div>
                  <div class="price-container">
                    <span class="offer-price">{value.offerprice}</span>
                    <span class="original-price">{value.price}</span>
                  </div>
                  <div className="card-btn">
                    <button>ADD</button>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </>
  );
};

export default BestSellerComponent;
