import { useEffect, useState } from "react";
import { FaDownload, FaStar } from "react-icons/fa";

export default function TrendingApps() {
  const [apps, setApps] = useState([]);

  useEffect(() => {
    fetch("/public/data.json")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch apps data");
        return res.json();
      })
      .then((data) => setApps(data.slice(0, 8)))
      .catch((err) => console.error(err));
  }, []);

  return (
    <section className="px-4">
      <div className="max-w-7xl mx-auto text-center mb-10">
        <h2 className="text-3xl font-bold text-[#0A1F33]">Trending Apps</h2>
        <p className="text-gray-500 mt-2">
          Explore all trending apps on the market developed by us
        </p>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {apps.map((app) => (
          <div
            key={app.id}
            className="bg-white rounded-xl shadow-sm hover:shadow-md transition border border-gray-100 overflow-hidden group"
          >
            <div className="relative w-full aspect-square bg-gray-100 flex items-center justify-center overflow-hidden">
              <img
                src={app.image}
                alt={app.title}
                className="w-full h-full cursor-pointer object-cover group-hover:scale-105 transition duration-500"
              />
            </div>

            <div className="p-4 flex flex-col justify-between">
              <h3 className="font-medium text-sm text-gray-800 mb-3 line-clamp-2">
                {app.title}
              </h3>

              <div className="flex items-center justify-between text-xs">
                <span className="flex items-center gap-2 bg-green-50 text-green-700 px-2 py-1 rounded">
                  <FaDownload size={12} />
                  {(app.downloads / 1000000).toFixed(1)}M
                </span>
                <span className="flex items-center gap-1.5  bg-orange-50 text-orange-600 px-2 py-1 rounded">
                  <FaStar size={12} />
                  {app.ratingAvg}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Button */}
      <div className="flex justify-center mt-10">
        <button className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-6 py-2 mb-4 rounded-md hover:scale-105 transition">
          Show All
        </button>
      </div>
    </section>
  );
}
