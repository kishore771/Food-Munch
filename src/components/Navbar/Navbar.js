import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css'; // Optional: for custom styles

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top">
      <div className="container">
        <a className="navbar-brand" href="/">
          <img
            src="https://i.postimg.cc/Zn5nwXTf/logo-transparent-png.png"
            alt="logo"
            className="food-munch-logo"
          />
        </a>
        
        {/* Updated for Bootstrap 5 */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link active" href="#wcuSection">Why Choose Us?</a>
            <a className="nav-link" href="#exploreMenuSection">Explore Menu</a>
            <a className="nav-link" href="#deliveryPaymentSection">Delivery & Payment</a>
            <a className="nav-link" href="#followUsSection">Follow Us</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
