import React from "react";
import "../styles/about.css";
import { Link } from "react-router-dom";
import Media from "react-media";

const HomePage = () => {
  return (
    <section className="about">
      <div className="home-container">
        <h2>
          Welcome To My Shopping Cart App <br /> Designed Exclusively in React
        </h2>
        <p>Explore the different functionalities of my site</p>
        <Link to="/shop">
          <button className="shop">Shop now</button>
        </Link>
      </div>
    </section>
  );
};

export default HomePage;
