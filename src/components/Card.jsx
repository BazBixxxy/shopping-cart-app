import React, { useState, useContext, useEffect } from "react";
import photo from "../assets/images/backpack.jpg";
import { Link } from "react-router-dom";
import { FaGripVertical } from "react-icons/fa";
import { formatCurrency } from "../utilities/formatCurrency";

import { ShoppingCartContext } from "../context/ShoppingCartContext";

const Card = ({ item }) => {
  const [count, setCount] = useState(0);
  const [fullDescription, setFullDescription] = useState(false);

  const { cartItems, addToCart, removeFromCart, clearCart, getCartTotal, getTotalQuantity } =
    useContext(ShoppingCartContext);
  
  // console.log(getTotalQuantity);
  // console.log(getCartTotal);

  let description = item.description;

  if (!fullDescription) {
    description = description.substring(0, 120);
  }

  const remove = () => {
    if (count > 0) {
      setCount((prevCount) => prevCount - 1);
    }
  };

  const add = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div className="container">
      <Link to="/cart">
        <div className="chev">...</div>
      </Link>
      <h4>{item.name}</h4>
      <img src={item.pic} alt="" />
      <div className="description">
        {description}
        <button
          className="desc"
          onClick={() => setFullDescription((prevState) => !prevState)}
        >
          {fullDescription ? "...Less" : "...more"}
        </button>
      </div>
      <div className="price">
        <div className="p-1">Price: ${item.price}</div>
      </div>
      <div className="bottom">
        <button
          className="cart-button"
          onClick={() => {
            addToCart(item)
          }}
        >
          Add Item To Cart
        </button>
      </div>
    </div>
  );
};

export default Card;
