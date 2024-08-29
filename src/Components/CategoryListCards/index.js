import React from "react";
import CartIcon from "../../Assets/Images/cart-3-svgrepo-com.svg";
import WishIcon from "../../Assets/Images/wishlist-svgrepo-com.svg";
import { Col, Row } from "react-bootstrap";

const CategoryListCard = () => {
  const ListCardData = [
    {
      image: require("../../Assets/Images/Onion.avif"),
      name: "Onion (Pyaz)",
      weight: "250g",
      offerprice: "₹54",
      price: "₹73",
    },
    {
      image: require("../../Assets/Images/Potato.avif"),
      name: "Potato - Pack of 2 (Aloo)",
      weight: "250g",
      offerprice: "₹93",
      price: "₹124",
    },
    {
      image: require("../../Assets/Images/Cucumber.avif"),
      name: "Green Cucumber (Kheera)",
      weight: "250g",
      offerprice: "₹37",
      price: "₹47",
    },
    {
      image: require("../../Assets/Images/brinjal.avif"),
      name: "Brinjal Bharta (Baingan)",
      weight: "250g",
      offerprice: "₹46",
      price: "₹63",
    },
    {
      image: require("../../Assets/Images/Garlic.avif"),
      name: "Garlic (Lehsun)",
      weight: "250g",
      offerprice: "₹90",
      price: "₹124",
    },
    {
      image: require("../../Assets/Images/Gourd.avif"),
      name: "Pointed Gourd (Parwal)",
      weight: "250g",
      offerprice: "₹24",
      price: "₹30",
    },
    {
      image: require("../../Assets/Images/Coriander Bunch.avif"),
      name: "Coriander Bunch (Dhaniya)",
      weight: "250g",
      offerprice: "₹74",
      price: "₹102",
    },
    {
      image: require("../../Assets/Images/Mixed Sprouds.avif"),
      name: "Mixed Sprouts",
      weight: "250g",
      offerprice: "₹48",
      price: "₹75",
    },
    {
      image: require("../../Assets/Images/Iceberg Lettuce.avif"),
      name: "Iceberg Lettuce",
      weight: "250g",
      offerprice: "₹146",
      price: "₹204",
    },
    {
      image: require("../../Assets/Images/Lady Finger.avif"),
      name: "Lady Finger",
      weight: "250g",
      offerprice: "₹15",
      price: "₹20",
    },
    {
      image: require("../../Assets/Images/Ginger.avif"),
      name: "Ginger (Adrak)",
      weight: "250g",
      offerprice: "₹28",
      price: "₹38",
    },
    {
      image: require("../../Assets/Images/Chilli.avif"),
      name: "Chilli",
      weight: "250g",
      offerprice: "₹27",
      price: "₹35",
    },
    {
      image: require("../../Assets/Images/Arvi Patta (Arvi Patta).avif"),
      name: "Arvi Patta (Arvi Patta)",
      weight: "250g",
      offerprice: "₹24",
      price: "₹37",
    },
    {
      image: require("../../Assets/Images/Giloy Stick.avif"),
      name: "Giloy Stick",
      weight: "250g",
      offerprice: "₹36",
      price: "₹75",
    },
    {
      image: require("../../Assets/Images/Green Peas (Peeled).avif"),
      name: "Green Peas (Peeled)",
      weight: "250g",
      offerprice: "₹134",
      price: "₹200",
    },
  ];

  return (
    <>
      <div className="container">
        <div className="list-head">
          <span>Featured Products</span>
        </div>
        <div className="list-cards">
          <Row className="product-card-container">
            {ListCardData.map((value, index) => (
              <Col xs={4} sm={6} md={2} key={index}>
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

export default CategoryListCard;
