import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from "./pages/Home";
import Headers from "./components/Header";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Headers/>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}
