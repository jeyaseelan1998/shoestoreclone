import React from "react";

import "./Button.css";

const Button = ({ type, title, status }) => {
  let extraStyle = title !== "Home" && "default-btn-extra";

  return type === "auth" ? (
    <div className="auth-btn">
      <span className="auth-btn-txt">{title}</span>
    </div>
  ) : (
    <div className={`default-btn ${extraStyle}`}>
      <Icon name={title} />
      <span className="btn-txt">{title}</span>
    </div>
  );
};

export default Button;

const Icon = ({name}) => {
    let icon =
    name === "Home"
      ? "fa-sharp fa-solid fa-house"
      : name === "Wishlist"
      ? "fa-sharp fa-solid fa-heart"
      : "fa-solid fa-cart-shopping";
  return <i className={icon}></i>;
};
