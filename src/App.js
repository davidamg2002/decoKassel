import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import IconBox from "./components/IconBox";
import Home from "./pages/Home";
import Decorations from "./pages/Decorations";
import Cosmetics from "./pages/Cosmetics";
import Accessories from "./pages/Accessories";
import Contact from "./pages/Contact";
import Promo from "./pages/Promo";

function App() {
  return (
    <Router>
      <Navbar />
      <IconBox />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/decorations" element={<Decorations />} />
        <Route path="/cosmetics" element={<Cosmetics />} />
        <Route path="/accessories" element={<Accessories />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/promo" element={<Promo />} />
      </Routes>
    </Router>
  );
}
export default App;
