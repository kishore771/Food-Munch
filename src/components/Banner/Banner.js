import React from "react";
import "./Banner.css";

const Banner = () => {
  const handleViewMenu = () => {
    document.getElementById("exploreMenuSection")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleOrderNow = () => {
    document.getElementById("deliveryPaymentSection")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="banner-section-bg-container d-flex justify-content-center flex-column">
      <div className="text-center">
        <h1 className="banner-heading mb-3">Get Delicious Food Anytime</h1>
        <p className="banner-caption mb-4">Eat Smart & Healthy</p>
        <button className="custom-button" onClick={handleViewMenu}>View Menu</button>
        <button className="custom-outline-button" onClick={handleOrderNow}>Order Now</button>
      </div>
    </div>
  );
};

export default Banner;
