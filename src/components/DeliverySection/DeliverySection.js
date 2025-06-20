import React from "react";
import "./DeliverySection.css";

const DeliverySection = () => {
  const handleOrder = () => {
    alert("Order placed successfully!");
  };

  return (
    <div className="delivery-and-payment-section pt-5 pb-5" id="deliveryPaymentSection">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-5 text-center order-1 order-md-2">
            <img
              src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/delivery-payment-section-img.png"
              className="delivery-and-payment-section-img"
              alt="Delivery"
            />
          </div>
          <div className="col-12 col-md-7 order-2 order-md-1">
            <h1 className="delivery-and-payment-section-heading">Delivery and Payment</h1>
            <p className="delivery-and-payment-section-description">
              Enjoy hassle-free payment with the plenitude...
            </p>
            <button className="custom-button" onClick={handleOrder}>Order Now</button>
            {/* payment icons */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliverySection;

