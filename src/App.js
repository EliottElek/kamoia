import React, { useState, useEffect } from "react";
import Navigation from "./components/Navigation/Navigation";
import Landing from "./components/Landing/Landing";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import logo from "./assets/images/logo.png";
import "./App.css";
const links = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "Products",
    path: "/products",
  },
  {
    label: "About",
    path: "/about",
  },
  {
    label: "Contact",
    path: "/contact",
  },
];
function App() {
  const [size, setSize] = useState({
    x: window.innerWidth,
    y: window.innerHeight,
  });
  const updateSize = () =>
    setSize({
      x: window.innerWidth,
      y: window.innerHeight,
    });
  useEffect(() => (window.onresize = updateSize), []);
  return (
    <div className="App">
      <Router>
        <Navigation size={size} links={links} logo={logo} />
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route path="*" element={<h1>404 error</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
