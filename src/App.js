import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./routes/Home/Home";
import FavoritePlaces from "./routes/FavoritePlaces/FavoritePlaces";
import DetailedView from "./routes/DetailedView/DetailedView";
import Nav from "./components/naigation/Nav";

import "./App.css";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Nav />} />
          <Route path="/0" element={<Home />} />
          <Route path="/1" element={<FavoritePlaces />} />
          <Route path="/2" element={<DetailedView />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
