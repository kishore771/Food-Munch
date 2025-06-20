import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './FollowUs.css'; // Assuming you have a CSS file for styling

const FollowUs = () => (
  <div className="follow-us-section pt-5 pb-5" id="followUsSection">
    <div className="container text-center">
      <h1 className="follow-us-section-heading">Follow Us</h1>
      <div className="d-flex justify-content-center mt-3">
        {["twitter", "instagram", "facebook"].map((platform, i) => (
          <div className="follow-us-icon-container mx-2" key={i}>
            <i className={`fab fa-${platform} icon`}></i>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default FollowUs;
