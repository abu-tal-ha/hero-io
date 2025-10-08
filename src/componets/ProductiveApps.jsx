import React from "react";
import phoneImg from "../assets/hero.png"; // <-- your image path
import { FaGooglePlay, FaApple } from "react-icons/fa";
import StatsSection from "./StatsSection";
const ProductiveApps = () => {
  return (
    <section className="  py-28   text-center">
      {/* Title */}
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
        We Build <span className="text-purple-600">Productive</span> Apps
      </h2>

      {/* Subtitle */}
      <p className="text-gray-500 max-w-4xl mx-auto mb-8  py-2">
        At HERO.IO, we craft innovative apps designed to make everyday life
        simpler, smarter, and more exciting. Our goal is to turn your ideas into
        digital experiences that truly make an impact.
      </p>

      {/* Store Buttons */}
      <div className="flex justify-center gap-6 mb-10 flex-wrap">
        <button className="flex items-center gap-2 bg-white border border-gray-200 shadow-sm px-6 py-3 cursor-pointer rounded hover:bg-gray-100 transition">
          <img src="/src/assets/play.png" alt="play " className="w-6 h-6" />
          <span className="font-medium">Google Play</span>
        </button>

        <button className="flex items-center gap-2 bg-white border border-gray-200 shadow-sm px-6 py-3 cursor-pointer rounded  hover:bg-gray-100 transition">
          <FaApple className="text-gray-800 text-2xl" />
          <span className="font-medium">App Store</span>
        </button>
      </div>

      {/* Image Section */}
      <div className="relative flex justify-center">
        <img
          src={phoneImg}
          alt="App Preview"
          className="w-full max-w-sm md:max-w-md lg:max-w-lg drop-shadow-2xl"
        />
      </div>

      {/* statsSection */}
      <StatsSection />
    </section>
  );
};

export default ProductiveApps;
