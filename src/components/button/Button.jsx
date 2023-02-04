import React from "react";
import { useNavigate } from "react-router-dom";

import "./Button.css";

const Button = ({ type, title, status, onClick }) => {
  const navigate = useNavigate();
  let extraStyle = title !== "Home" && "default-btn-extra";

  const handleClick = (name) => {
    if (name !== "Cart")
      navigate(name === "Home" || name === "Cart" ? "/" : name);
    else onClick();
  };

  return type === "auth" ? (
    <div className="auth-btn">
      <span className="auth-btn-txt">{title}</span>
    </div>
  ) : (
    <div
      className={`default-btn ${extraStyle}`}
      onClick={() => handleClick(title)}
    >
      <Icon name={title} />
      <span className="btn-txt">{title}</span>
    </div>
  );
};

export default Button;

const Icon = ({ name }) => {
  let icon =
    name === "Home"
      ? "fa-sharp fa-solid fa-house"
      : name === "Wishlist"
      ? "fa-sharp fa-solid fa-heart"
      : "fa-solid fa-cart-shopping";
  return <i className={icon}></i>;
};
