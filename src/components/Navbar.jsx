import React, { useContext, useState } from "react";
import "../styles/navbar.css";
import "../styles/media.css";
import { NavLink, Link } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";
import { FiAlignRight } from "react-icons/fi";
import { FiHome } from "react-icons/fi";
import Media from "react-media";

import { ShoppingCartContext } from "../context/ShoppingCartContext";

const Navbar = () => {
  const active = ({ isActive }) => (isActive ? "active" : "non-active");
  const {
    cartItems,
    addToCart,
    removeFromCart,
    clearCart,
    getCartTotal,
    getTotalQuantity,
  } = useContext(ShoppingCartContext);

  let total = 0;
  cartItems.forEach((item) => {
    total += item.quantity;
  });

  const queries = {
    small: "(max-width: 780px)",
  };

  return (
    <Media query={queries.small}>
      {(matches) =>
        matches ? (
          <nav className="small-nav">
            <Link to="/">
              <div className="left">
                <FiHome className="home-icon" />
              </div>
            </Link>
            <Link to="/shop">
              <div className="middle">
                <div className="logo"></div>
              </div>
            </Link>
            <Link to="/cart">
              <div className="right">
                <FaCartPlus className="cart-icon" />
                <button className="cart-quantity">{total}</button>
              </div>
            </Link>
          </nav>
        ) : (
          <nav>
            <div className="left">
              <div className="logo"></div>Cart App
            </div>
            <div className="middle">
              <ul>
                <NavLink to="/" className={active}>
                  Home
                </NavLink>
                <NavLink className={active} to="/shop">
                  Shop
                </NavLink>
                <NavLink to="/cart" className={active}>
                  Cart
                </NavLink>
              </ul>
            </div>
            <Link to="/cart">
              <div className="right">
                <FaCartPlus className="cart-icon" />
                <button className="cart-quantity">{total}</button>
              </div>
            </Link>
          </nav>
        )
      }
    </Media>
  );

  return (
    <nav>
      <div className="left">
        <div className="logo"></div>Cart App
      </div>
      <div className="middle">
        <ul>
          <NavLink to="/" className={active}>
            Home
          </NavLink>
          <NavLink className={active} to="/shop">
            Shop
          </NavLink>
          <NavLink to="/cart" className={active}>
            Cart
          </NavLink>
        </ul>
      </div>
      <Link to="/cart">
        <div className="right">
          <FaCartPlus className="cart-icon" />
          <button className="cart-quantity">{total}</button>
        </div>
      </Link>
    </nav>
  );
};

export default Navbar;
