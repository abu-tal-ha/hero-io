import { useEffect, useState } from "react";
import { FaDownload, FaStar } from "react-icons/fa";
import { Link } from "react-router";
import { CiSearch } from "react-icons/ci";

export default function Apps() {
  const [apps, setApps] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("/data.json")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch apps data");
        return res.json();
      })
      .then((data) => setApps(data.slice(0, 28)))
      .catch((err) => console.error(err));
  }, []);

  const filteredApps = apps.filter((app) =>
    app.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="px-4 py-30">
      <div className="max-w-7xl mx-auto text-center mb-10">
        <h2 className="text-3xl font-bold text-[#0A1F33]">
          Our All Applications
        </h2>
        <p className="text-gray-500 mt-2">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>

      {/* Search Bar */}
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between mb-6 px-2">
        <h3 className="font-semibold text-gray-800 text-lg mb-3 sm:mb-0">
          ({filteredApps.length}) Apps Found
        </h3>

        <div className="relative w-full sm:w-64">
          <CiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
          <input
            type="text"
            placeholder="Search Apps"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border border-gray-300 rounded-md pl-10 pr-4 py-2 text-sm w-full focus:ring-2 focus:ring-indigo-400 outline-none"
          />
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto">
        {filteredApps.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredApps.map((app) => (
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
                    <span className="flex items-center gap-1.5 bg-orange-50 text-orange-600 px-2 py-1 rounded">
                      <FaStar size={12} />
                      {app.ratingAvg}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          // No Apps Found Message
          <div className="text-center py-20">
            <h3 className="text-2xl font-semibold text-gray-700">
              🚫 No Apps Found
            </h3>
            <p className="text-gray-500 mt-2">
              Try searching with a different name or keyword.
            </p>
          </div>
        )}
      </div>

      {/* Button */}
      {filteredApps.length > 0 && (
        <div className="flex justify-center mt-10">
          <Link
            to="/apps"
            className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-6 py-2 mb-4 rounded-md hover:scale-105 transition"
          >
            Show All
          </Link>
        </div>
      )}
    </section>
  );
}
