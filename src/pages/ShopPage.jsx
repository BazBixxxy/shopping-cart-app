import React, { useState } from "react";
import "../styles/home.css";
import items from "../db.json";

import Card from "../components/Card";

const ShopPage = () => {
  return (
    <section className="home">
      <div className="grid-container">
        {items.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default ShopPage;
