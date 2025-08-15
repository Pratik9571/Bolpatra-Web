// src/App.jsx
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Pricing from "./Pages/Pricing";
import AboutUs from "./Pages/AboutUs";
import Footer from "./Components/Footer";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Pricing />} />
        <Route path="/aboutus" element={<AboutUs />} />
      </Routes>
      <Footer />
    </>
  );
}
