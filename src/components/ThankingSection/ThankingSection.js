import React, { useState } from "react";
import "./ThankingSection.css";

const ThankingSection = () => {
  const [showGift, setShowGift] = useState(false);

  return (
    <div className="thanking-customers-section pt-5 pb-5">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-7 d-flex flex-column justify-content-center">
            <h1 className="thanking-customers-section-heading">
              Thank you for being a valuable customer to us.
            </h1>
            <p className="thanking-customers-section-description">We have a surprise gift for you</p>

            {showGift && (
              <div className="mb-3">
                <img
                  src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/gift-voucher-img.png"
                  className="thanking-customers-section-img"
                  alt="Gift Voucher"
                />
              </div>
            )}

            <button
              className="btn btn-primary custom-button"
              onClick={() => setShowGift(true)}
            >
              Redeem Gift
            </button>
          </div>

          <div className="col-12 col-md-5 d-none d-md-block">
            <img
              src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/thanking-customers-section-img.png"
              className="thanking-customers-section-img"
              alt="Thank You"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankingSection;
