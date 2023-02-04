import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Cart from "../../Routes/cart/Cart";

import Button from "../button/Button";

import "./Navigation.css";

const Navigation = () => {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle((state) => !state);
    console.log(toggle)
  };

  return (
    <>
      <nav className="nav-container">
        <div className="main-heading-container">
          <Link to="/" className="main-heading">
            Shoe Store Clone
          </Link>
        </div>
        <div className="nav">
          <Button title="Home" />
          <Button title="Wishlist" />
          <Button title="Cart" onClick={handleClick} />
          <Button type="auth" title="Login" />
        </div>
      </nav>
      <div className="page">
        <Outlet />
        {toggle && <Cart toggler={handleClick} />}
      </div>
    </>
  );
};

export default Navigation;
