// App.js
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./App.css"; // You can use this for global styles if needed

import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import WhyChooseUs from "./components/WhyChooseUS/WhyChooseUs";
import ExploreMenu from "./components/ExploreMenu/ExploreMenu";
import HealthyFoodSection from "./components/HealthyFoodSection/HealthyFoodSection";
import DeliverySection from "./components/DeliverySection/DeliverySection";
import ThankingSection from "./components/ThankingSection/ThankingSection";
import FollowUs from "./components/FollowUs/FollowUs";
import Footer from "./components/Footer/Footer";
const App = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <WhyChooseUs />
      <ExploreMenu />
      <HealthyFoodSection />
      <DeliverySection />
      <ThankingSection />
      <FollowUs />
      <Footer />
    </>
  );
};

export default App;
