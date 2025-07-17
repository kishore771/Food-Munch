import React from "react";
import './ExploreMenu.css'; // Assuming you have a CSS file for styling
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS for styling

const menuItems = [
  {
    img: "https://i.postimg.cc/wx4JNBBS/crilled-chicken-bread-piece-greens-pepper-sauce-spices-side-view.jpg",
    title: "Non-Veg Starters"
  },
  {
    img: "https://i.postimg.cc/pL3M5KNp/veg-starters.webp",
    title: "Veg Starters"
  },
  {
    img: "https://i.postimg.cc/sDBW4RQ1/close-up-wholesome-delicious-christmas-meal.jpg",
    title: "Soups"
  },
  {
    img: "https://i.postimg.cc/qvDMbNPT/sea-food.jpg",
    title: "Fish & Sea food"
  },
  {
    img: "https://i.postimg.cc/RCps04x0/main-course.jpg",
    title: "Main Course"
  },
  {
    img: "https://i.postimg.cc/4dL5nbM0/noodles.jpg",
    title: "Noodles"
  },
  {
    img: "https://i.postimg.cc/Wp0GBVpK/closeup-shot-bowl-delicious-vegan-salad.jpg",
    title: "Salads"
  },
  {
    img: "https://i.postimg.cc/tJnhJ0F1/desserts.jpg",
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
