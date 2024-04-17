import React, { useState, useContext, useEffect } from "react";
import "../styles/view.css";
import Media from "react-media";

import { ShoppingCartContext } from "../context/ShoppingCartContext";

const Cart = () => {
  const { cartItems, addToCart, removeFromCart, clearCart, getCartTotal } =
    useContext(ShoppingCartContext);

  const queries = {
    small: "(max-width: 780px)",
  };

  let total = 0;
  cartItems.forEach((item) => {
    total += item.quantity;
  });

  return (
    <Media query={queries.small}>
      {(matches) =>
        matches ? (
          <>
            <section className="small-cart">
              {cartItems.map((item) => (
                <div key={item.id} className="view">
                  <div className="top">
                    <img src={item.pic} alt="" />
                  </div>
                  <div className="bottom">
                    <h4>{item.name}</h4>
                    <div className="p-1">Price: ${item.price}</div>
                    <div className="p-1">
                      Total: ${item.price * item.quantity}
                    </div>
                    <div className="bottom-cart">
                      <button
                        className="cart-button"
                        onClick={() => {
                          addToCart(item);
                        }}
                      >
                        +1
                      </button>
                      <p>{item.quantity} in cart</p>
                      <button
                        className="cart-button"
                        onClick={() => {
                          removeFromCart(item);
                        }}
                      >
                        -1
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </section>
            <div className="small-price-display">
              <h3>
                Total Amount: <br /> ${getCartTotal()}
              </h3>
              <p>
                Quantity: <br /> {total} items
              </p>
              <button className="payment">Payment</button>
              <button
                className="payment"
                onClick={() => {
                  clearCart();
                }}
              >
                Clear
              </button>
            </div>
          </>
        ) : (
          <>
            <section className="cart-page">
              <div className="bottom-display">
                {cartItems.map((item) => (
                  <section key={item.id} className="view">
                    <div className="top">
                      <img src={item.pic} alt="" />
                    </div>
                    <div className="bottom">
                      <h4>{item.name}</h4>
                      <div className="p-1">Price: ${item.price}</div>
                      <div className="p-1">
                        Total: ${item.price * item.quantity}
                      </div>
                      <div className="bottom-cart">
                        <button
                          className="cart-button"
                          onClick={() => {
                            addToCart(item);
                          }}
                        >
                          +1
                        </button>
                        <p>{item.quantity} in cart</p>
                        <button
                          className="cart-button"
                          onClick={() => {
                            removeFromCart(item);
                          }}
                        >
                          -1
                        </button>
                      </div>
                    </div>
                  </section>
                ))}
              </div>
            </section>
            {cartItems.length > 0 ? (
              <div className="small-price-display">
                <h3>
                  Total Amount: <br /> ${getCartTotal()}
                </h3>
                <p>
                  Quantity: <br /> {total} items
                </p>
                <button className="payment">Payment</button>
                <button
                  className="payment"
                  onClick={() => {
                    clearCart();
                  }}
                >
                  Clear
                </button>
              </div>
            ) : (
              <h1>Your Cart is empty</h1>
            )}
          </>
        )
      }
    </Media>
  );

  return (
    <section className="cart-page">
      <div className="bottom-display">
        {cartItems.map((item) => (
          <section key={item.id} className="view">
            <div className="top">
              <img src={item.pic} alt="" />
            </div>
            <div className="bottom">
              <h4>{item.name}</h4>
              <div className="p-1">Price: ${item.price}</div>
              <div className="p-1">Total: ${item.price * item.quantity}</div>
              <div className="bottom-cart">
                <button
                  className="cart-button"
                  onClick={() => {
                    setCount((prevCount) => prevCount + 1);
                    addToCart(item);
                  }}
                >
                  +1
                </button>
                <p>{item.quantity} in cart</p>
                <button
                  className="cart-button"
                  onClick={() => {
                    removeFromCart(item);
                    setCount((prevCount) => prevCount - 1);
                  }}
                >
                  -1
                </button>
              </div>
            </div>
          </section>
        ))}
      </div>
      {cartItems.length > 0 ? (
        <div className="cart-display">
          <h4>Total Price: ${getCartTotal()}</h4>
          <button className="payment">Make Payment</button>
          <button
            className="payment"
            onClick={() => {
              clearCart();
            }}
          >
            Clear Cart
          </button>
        </div>
      ) : (
        <h1>Your Cart is empty</h1>
      )}
    </section>
  );
};

export default Cart;
