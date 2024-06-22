import React from "react";
import { Link } from "react-router-dom";
import cartIcon from "../assets/cart-icon.svg";
import wishListIcon from "../assets/iconmonstr-favorite-9.svg";
import { useSelector } from "react-redux";

export default function Header() {
  const items = useSelector((state) => state.cartItems);

  return (
    <header>
      <div className="header-contents">
        <h1>
          <Link to="/">My Redux Store</Link>
        </h1>

        <div className="header-right">
          <Link className="cart-icon" to="/wishlist">
            <img src={wishListIcon} alt="cart-icon" />
            <div className="cart-items-count">
              {items.reduce((accu, curr) => accu + curr.quantity, 0)}
            </div>
          </Link>
          <Link className="cart-icon" to="/cart">
            <img src={cartIcon} alt="cart-icon" />
            <div className="cart-items-count">
              {items.reduce((accu, curr) => accu + curr.quantity, 0)}
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
}
