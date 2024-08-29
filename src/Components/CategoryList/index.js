import React, { useState } from "react";
import CategoryListCard from "../CategoryListCards";

const CategoryList = () => {
  const Categories = [
    {
      name: "Fresh Vegetables",
      image: require("../../Assets/Images/pngegg.png"),
    },
    {
      name: "Fresh Fruits",
      image: require("../../Assets/Images/pngegg(1).png"),
    },
    {
      name: "Mangoes & Melons",
      image: require("../../Assets/Images/pngegg(2).png"),
    },
    { name: "Seasonal", image: require("../../Assets/Images/pngegg(3).png") },
    { name: "Exotic", image: require("../../Assets/Images/pngegg(4).png") },
    {
      name: "Freshly Cuts & Sprouts",
      image: require("../../Assets/Images/pngegg(5).png"),
    },
    { name: "Frozen Veg", image: require("../../Assets/Images/pngegg(6).png") },
    {
      name: "Leafies & Herbs",
      image: require("../../Assets/Images/pngegg(7).png"),
    },
    {
      name: "Certified Organic",
      image: require("../../Assets/Images/pngegg(8).png"),
    },
    {
      name: "Flowers & Leaves",
      image: require("../../Assets/Images/pngegg(9).png"),
    },
    {
      name: "Hydroponic",
      image: require("../../Assets/Images/pngegg(10).png"),
    },
    {
      name: "combo & Recipies",
      image: require("../../Assets/Images/pngegg(1).png"),
    },
    {
      name: "All Fruits & Vegetables",
      image: require("../../Assets/Images/pngegg(2).png"),
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [selected, setSelected] = useState(null);

  const handleCardClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <>
      <div className="category-cards">
        {Categories.map((val, index) => (
          <div
            className={`category-card ${index === activeIndex ? "active" : ""}`}
            key={index}
            onClick={() => handleCardClick(index)}
          >
            <div className="category-image">
              <img src={val.image} alt={val.name} />
            </div>
            <div className="category-name">{val.name}</div>
          </div>
        ))}
      </div>
      {/* //category list card component// */}
      <div className="category-list-card">
        <CategoryListCard />
      </div>
    </>
  );
};

export default CategoryList;
