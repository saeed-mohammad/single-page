import React from "react";
import "./style/App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Nav";
import Hero from "./Hero";
import Best from "./Best";
import Feature from "./Feature";
import Footer from "./Footer";

const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      {/* <Hero /> */}
      <Routes>
        <Route path="/" element={<Hero />} />
      </Routes>
      <Best />
      <Feature />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
