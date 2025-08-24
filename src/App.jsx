// src/App.jsx
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Pricing from "./Pages/Pricing";
import AboutUs from "./Pages/AboutUs";
import Footer from "./Components/Footer";
import Community from "./Pages/Community";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Pricing />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/community" element={<Community />} />
      </Routes>
      {/* <Footer /> */}
    </>
  );
}
