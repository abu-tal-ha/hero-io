import React from "react";
import TrendingApps from "../trending/TrendingApps";

export default function StatsSection() {
  return (
    <section className="relative bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-16 shadow-lg w-full">
      <div className="text-center max-w-6xl mx-auto px-6">
        <h2 className="text-2xl md:text-4xl font-semibold mb-10">
          Trusted By Millions, Built For You
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
          {/* Stat 1 */}
          <div>
            <p className="text-purple-200 text-sm font-medium">
              Total Downloads
            </p>
            <h3 className="text-4xl md:text-5xl font-extrabold mb-2 py-2">
              29.6M
            </h3>
            <p className="text-purple-200 text-xs mt-1">
              21% More Than Last Month
            </p>
          </div>

          {/* Stat 2 */}
          <div>
            <p className="text-purple-200 text-sm font-medium py-2">
              Total Reviews
            </p>
            <h3 className="text-4xl md:text-5xl font-extrabold mb-2">906K</h3>
            <p className="text-purple-200 text-xs mt-1">
              46% More Than Last Month
            </p>
          </div>

          {/* Stat 3 */}
          <div>
            <p className="text-purple-200 text-sm font-medium  py-2">
              Active Apps
            </p>
            <h3 className="text-4xl md:text-5xl font-extrabold mb-2 ">132+</h3>
            <p className="text-purple-200 text-xs mt-1">31 More Will Launch</p>
          </div>
        </div>
      </div>
    </section>
  );
}
