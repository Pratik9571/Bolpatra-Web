import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Pricing from "./Pages/Pricing";
import AboutUs from "./Pages/AboutUs";
import Community from "./Pages/Community";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import PublisherPolicy from "./Pages/PublisherPolicy";
import BidderPolicy from "./Pages/BidderPolicy";
import BidderTC from "./Pages/BidderTC";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/community" element={<Community />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/publisher-policy" element={<PublisherPolicy />} />
        <Route path="/bidder-policy" element={<BidderPolicy />} />
        <Route path="/bidder-terms-and-conditions" element={<BidderTC />} />
      </Routes>
    </>
  );
}
