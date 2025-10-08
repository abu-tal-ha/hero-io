import React from "react";
import Navbar from "./componets/Navbar";
import ProductiveApps from "./componets/ProductiveApps";
import Footer from "./componets/Footer";
import TrendingApps from "./componets/TrendingApps";

export default function App() {
  return (
    <div>
      <Navbar />
      <ProductiveApps />
      <TrendingApps />
      <Footer />
    </div>
  );
}
