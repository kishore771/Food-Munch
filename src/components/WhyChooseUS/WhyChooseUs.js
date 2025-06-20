import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './WhyChooseUs.css'; // Assuming you have a CSS file for styling

const WhyChooseUs = () => {
  const cards = [
    {
      img: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/food-serve.png",
      title: "Food Service",
      desc: "Experience fine dining at the comfort of your home. All our orders are carefully packed and arranged to give you the nothing less than perfect.",
    },
    {
      img: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/fruits-img.png",
      title: "Fresh Food",
      desc: "The Fresh Food group provides fresh-cut fruits and vegetables directly picked from our partner farms and farm houses.",
    },
    {
      img: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/offers-img.png",
      title: "Best Offers",
      desc: "Food Coupons & Offers up to 50% OFF and Exclusive Promo Codes on All Online Food Orders.",
    },
  ];

  return (
    <div className="wcu-section pt-5 pb-5" id="wcuSection">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="wcu-section-heading">Why Choose Us?</h1>
            <p className="wcu-section-description">
              We use both original recipes and classic versions of famous food items.
            </p>
          </div>
          {cards.map((card, index) => (
            <div className="col-12 col-md-4" key={index}>
              <div className="wcu-card p-3 mb-3">
                <img src={card.img} alt={card.title} className="wcu-card-image" />
                <h1 className="wcu-card-title mt-3">{card.title}</h1>
                <p className="wcu-card-description">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
// This component displays a section with three cards highlighting the reasons to choose the service.