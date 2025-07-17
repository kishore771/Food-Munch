import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css'; // Assuming you have a CSS file for styling

const Footer = () => (
  <footer className="footer-section pt-5 pb-5 text-center">
    <img
      src="https://i.postimg.cc/fbSr9bmC/logo-png.png"
      className="food-munch-logo"
      alt="footer logo"
    />
    <h1 className="footer-section-mail-id">orderfood@foodmunch.com</h1>
    <p className="footer-section-address">123 Ayur Vigyan Nagar, New Delhi, India.</p>
  </footer>
);

export default Footer;
