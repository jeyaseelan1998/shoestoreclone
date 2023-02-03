import React from "react";

import Button from "../button/Button";

import "./Navigation.css";

const Navigation = () => {
  return (
    <nav className="nav-container">
      <div className="main-heading-container">
        <h3 className="main-heading">Shoe Store Clone</h3>
      </div>
      <div className="nav">
        <Button title="Home"/>
        <Button title="Wishlist"/>
        <Button title="Cart"/>
        <Button type="auth" title="Login"/>
      </div>
    </nav>
  );
};

export default Navigation;
