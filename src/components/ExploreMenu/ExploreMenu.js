import React from "react";
import './ExploreMenu.css'; // Assuming you have a CSS file for styling
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS for styling

const menuItems = [
  {
    img: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/em-ginger-fried-img.png",
    title: "Non-Veg Starters"
  },
  {
    img: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/em-veg-starters-img.png",
    title: "Veg Starters"
  },
  {
    img: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/em-soup-img.png",
    title: "Soups"
  },
  {
    img: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/em-grilled-seafood-img.png",
    title: "Fish & Sea food"
  },
  {
    img: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/em-hyderabadi-biryani-img.png",
    title: "Main Course"
  },
  {
    img: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/em-mushroom-noodles-img.png",
    title: "Noodles"
  },
  {
    img: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/em-gluten-img.png",
    title: "Salads"
  },
  {
    img: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/em-coffee-bourbon-img.png",
    title: "Desserts"
  }
];

const ExploreMenu = () => (
  <div className="explore-menu-section pt-5 pb-5" id="exploreMenuSection">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h1 className="menu-section-heading">Explore Menu</h1>
        </div>
        {menuItems.map((item, index) => (
          <div className="col-12 col-md-6 col-lg-3" key={index}>
            <div className="shadow menu-item-card p-3 mb-3">
              <img src={item.img} className="menu-item-image w-100" alt={item.title} />
              <h1 className="menu-card-title">{item.title}</h1>
              <a className="menu-item-link">
                View All
                <svg width="16" height="16" viewBox="0 0 16 16" fill="#d0b200" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default ExploreMenu;
