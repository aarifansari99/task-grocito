import React from "react";
import { Col, Row } from "react-bootstrap";

const AboutProduct = () => {
  const priceListData = [
    {
      name: "Onion (Pyaz)",
      price: "	Rs.55",
    },
    {
      name: " Desi Tomato (Tamatar)",
      price: "	Rs.36",
    },
    {
      name: "Orange Carrot (Gajar)",
      price: "	Rs.23",
    },
    {
      name: "Green Chilli (Hari Mirch)",
      price: "	Rs.18",
    },
    {
      name: " Lemon",
      price: "	Rs.57",
    },
    {
      name: "Green Capsicum (Shimla Mirch)",
      price: "	Rs.23",
    },
    {
      name: " Lady Finger",
      price: "	Rs.17",
    },
    {
      name: "Ginger (Adrak)",
      price: "	Rs.26",
    },
    {
      name: " Hybrid Tomato (Tamatar)",
      price: "	Rs.35",
    },
    {
      name: " Green Cucumber (Kheera)",
      price: "	Rs.34",
    },
    {
      name: "Brinjal Bharta (Baingan)",
      price: "	Rs.46",
    },
  ];

  return (
    <>
      <div className="product-container">
        <div className="about-product-container container">
          <Row>
            <Col md={7}>
              <div className="product-detail">
                <div className="product-head">
                  <h2>Fresh Vegetables</h2>
                </div>
                <div className="product-content">
                  <h3>Importance of Fresh Vegetables:</h3>
                  <ul>
                    <li>
                      <i className="icon-nutrients"></i>
                      Nutrient-Rich: Provide essential vitamins (A, C, K,
                      B-complex), minerals (iron, potassium, calcium), and
                      dietary fiber.
                    </li>
                    <li>
                      <i className="icon-disease"></i>
                      Disease Prevention: May reduce risk of chronic diseases
                      like heart disease, cancer, and obesity.
                    </li>
                    <li>
                      <i className="icon-weight"></i>
                      Weight Management: Low in calories and high in fiber,
                      aiding in weight control.
                    </li>
                    <li>
                      <i className="icon-digestive"></i>
                      Digestive Health: Fiber promotes healthy digestion and
                      regular bowel movements.
                    </li>
                  </ul>
                  <h3>Nutritional Value:</h3>
                  <ul>
                    <li>
                      <i className="icon-leafy"></i>
                      Leafy Greens: High in vitamins A, C, K, folate, iron, and
                      calcium.
                    </li>
                    <li>
                      <i className="icon-cruciferous"></i>
                      Cruciferous Vegetables: Rich in vitamin C, fiber, and
                      anti-cancer phytochemicals.
                    </li>
                    <li>
                      <i className="icon-root"></i>
                      Root Vegetables: Good sources of vitamin A, potassium, and
                      fiber.
                    </li>
                    <li>
                      <i className="icon-allium"></i>
                      Allium Vegetables: Contain immune-boosting sulfur
                      compounds.
                    </li>
                    <li>
                      <i className="icon-colorful"></i>
                      Colorful Vegetables: Rich in vitamins, antioxidants, and
                      phytochemicals.
                    </li>
                  </ul>
                  <h3>Selection and Storage:</h3>
                  <ul>
                    <li>
                      <i className="icon-selection"></i>
                      Choosing Fresh: Look for vibrant colors, firm texture, and
                      minimal blemishes.
                    </li>
                    <li>
                      <i className="icon-organic"></i>
                      Organic and Local: Opt for organic and local produce for
                      fewer pesticides and fresher options.
                    </li>
                    <li>
                      <i className="icon-storage"></i>
                      Storage: Most vegetables should be stored in the fridge;
                      tomatoes, onions, and potatoes are best kept at room
                      temperature.
                    </li>
                    <li>
                      <i className="icon-handling"></i>
                      Handling: Handle gently to avoid damage and wash just
                      before consumption.
                    </li>
                  </ul>
                  <h3>Additional Tips:</h3>
                  <ul>
                    <li>
                      <i className="icon-freezing"></i>
                      Freezing: Blanch and freeze vegetables for later use,
                      though texture may change.
                    </li>
                    <li>
                      <i className="icon-incorporation"></i>
                      Incorporation: Add vegetables to salads, stir-fries,
                      soups, and smoothies. Experiment with different cooking
                      methods.
                    </li>
                    <li>
                      <i className="icon-canned"></i>
                      Canned/Frozen Vegetables: Can be nutritious, but opt for
                      those with minimal processing and no added salt or sugars.
                    </li>
                  </ul>
                  <p>
                    Fresh vegetables are crucial for a balanced diet, offering a
                    range of health benefits and essential nutrients.
                  </p>
                </div>
              </div>
            </Col>
            <Col md={5}>
              <div className="product-buy-price">
                <div className="buy-veg">
                  <h4>Buy Fresh Vegetables</h4>
                  <p>
                    Are you super fond of online shopping because you hate
                    crowded supermarkets? Now you don't need to worry as Blinkit
                    is delivering Fresh Vegetables at your doorstep superfast
                    with easy returns for your complete peace of mind.
                  </p>
                  <p>
                    Get Fresh Vegetables delivered to your home in minutes. You
                    can check Fresh Vegetables price before buying.
                  </p>
                  <p>
                    We deliver Fresh Vegetables in HR-NCR, Gurugram, UP-NCR,
                    Noida, Mumbai, Kolkata, Lucknow, Bengaluru, Ahmedabad, North
                    Delhi, and more.
                  </p>
                </div>
                <div className="price-lists">
                  <h5>Fresh Vegetables Price List</h5>
                  <div className="price-list-head">
                    <div className="left-head">Vegetables</div>
                    <div className="right-head">Price</div>
                  </div>
                  {priceListData.map((value, index) => (
                    <div key={index} className="veg-name-price">
                      <div className="name-veg">
                        <ul>
                          <li>
                            {index + 1}.{value.name}
                          </li>
                        </ul>
                      </div>
                      <div className="price-veg">
                        <ul>{value.price}</ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default AboutProduct;
