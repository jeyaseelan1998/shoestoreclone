import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div class="bg-container d-flex flex-column justify-content-end">
      <div class="tourism-card">
        <h1 class="main-heading">Tourism</h1>
        <p class="paragraph">Plan your trip wherever ypu want to go.</p>
        <button class="button">Get Started</button>
      </div>
    </div>
  );
};

export default Home;
