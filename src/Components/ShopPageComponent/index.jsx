import React from "react";
import HeaderComponent from "../HeaderComponent";
import BannerImg from "../../Assets/Images/BannerImage.jpg";
import BannerImg2 from "../../Assets/Images/Banner 2.png";
import FooterComponent from "../FooterComponent";
import CategoryList from "../CategoryList";
import BestSellerComponent from "../BestSellersComponent";
import AboutProduct from "../AboutProduct";

const ShopPage = () => {
  return (
    <>
      <div className="shop-page-congtainer">
        {/* //header comoponent// */}
        <div className="header-component">
          <HeaderComponent />
        </div>
        <div className="banner-image">
          <img src={BannerImg} alt="" />
          <div className="banner-content">
            <div className="banner-head">
              <h3>100% Healthy and Affordable</h3>
            </div>
            <div className="banner-title">
              <h2>Organic Products</h2>
            </div>
            <div className="banner-sub-title">
              <span>Small Changes Big Difference</span>
            </div>
            <div className="shop-btn">
              <button>Shop Now</button>
            </div>
          </div>
        </div>
        {/* //category list// */}
        <div className="shop-categories-list">
          <CategoryList />
        </div>

        <div className="banner-image-2">
          <img src={BannerImg2} alt="" />
          <div className="banner-content-2">
            <div className="banner-head">
              <h3>SAVE UPTO 20%</h3>
            </div>
            <div className="banner-title">
              <h2>Organic Foods</h2>
            </div>
            <div className="banner-sub-title">
              <span>Start your daily shopping with some Organic foods</span>
            </div>
            <div className="shop-btn">
              <button>Order Now</button>
            </div>
          </div>
        </div>
        {/* //best seller component// */}
        <div className="best-seller-container">
          <BestSellerComponent />
        </div>
        {/* //about product// */}
        <div className="about-product">
          <AboutProduct />
        </div>
        {/* //footer component// */}
        <div className="footer-component">
          <FooterComponent />
        </div>
      </div>
    </>
  );
};

export default ShopPage;
