import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./HealthyFoodSection.css";

const HealthyFoodSection = () => {
  const handleWatchVideo = () => {
    window.open("https://www.youtube.com/watch?v=VIDEO_ID", "_blank");
  };

  return (
    <div className="healthy-food-section pt-5 pb-5">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-5 text-center">
            <img
              src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/healthy-food-plate-img.png"
              className="healthy-food-section-img"
              alt="Healthy food"
            />
          </div>
          <div className="col-12 col-md-7">
            <h1 className="healthy-food-section-heading">
              Fresh, Healthy, Organic, Delicious Fruits
            </h1>
            <p className="healthy-food-section-description">
              Say no to harmful chemicals and go fully organic...
            </p>
            <button className="custom-button" onClick={handleWatchVideo}>Watch Video</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthyFoodSection;
