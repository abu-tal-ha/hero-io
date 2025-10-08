import React from "react";
import ProductiveApps from "../../components/banner/ProductiveApps";
import TrendingApps from "../../components/trending/TrendingApps";

export default function Home() {
  return (
    <div>
      <ProductiveApps />
      <TrendingApps />
    </div>
  );
}
