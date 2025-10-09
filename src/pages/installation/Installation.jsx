import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaDownload, FaStar } from "react-icons/fa";

const Installation = () => {
  const [apps, setApps] = useState([]);
  const [sortBy, setSortBy] = useState("");

  // প্রথমবার পেজ লোডে localStorage থেকে ইনস্টল করা অ্যাপগুলো লোড করো
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("installedApps")) || [];
    setApps(saved);
  }, []);

  // Uninstall করা
  const handleUninstall = (id) => {
    const updated = apps.filter((app) => app.id !== id);
    setApps(updated);
    localStorage.setItem("installedApps", JSON.stringify(updated));
    toast.info("App uninstalled successfully!", {
      position: "top-center",
      autoClose: 2000,
    });
  };

  // Sort ফাংশন
  const handleSort = (value) => {
    setSortBy(value);
    let sortedApps = [...apps];
    if (value === "size") {
      sortedApps.sort((a, b) => a.size - b.size);
    } else if (value === "rating") {
      sortedApps.sort((a, b) => b.ratingAvg - a.ratingAvg);
    } else if (value === "downloads") {
      sortedApps.sort((a, b) => b.downloads - a.downloads);
    }
    setApps(sortedApps);
  };

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-30">
      <ToastContainer />
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">
        Your Installed Apps
      </h1>
      <p className="text-center text-gray-500 mb-8">
        Explore All Trending Apps on the Market developed by us
      </p>

      <div className="max-w-6xl mx-auto py-9">
        {/* Top Filter Section */}
        <div className="flex justify-between items-center mb-5">
          <p className="text-gray-600 md:text-xl font-bold">
            {apps.length} Apps Found
          </p>
          <select
            value={sortBy}
            onChange={(e) => handleSort(e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-2 text-sm"
          >
            <option value="">Sort By</option>
            <option value="size">Sort By Size</option>
            <option value="rating">Sort By Rating</option>
            <option value="downloads">Sort By Downloads</option>
          </select>
        </div>

        {/* Installed App List */}
        <div className="grid gap-4">
          {apps.map((app) => (
            <div
              key={app.id}
              className="bg-white p-4 rounded-xl shadow flex flex-col sm:flex-row sm:items-center justify-between hover:shadow-lg transition"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={app.image}
                  alt={app.title}
                  className="w-16 h-16 rounded-lg object-cover"
                />
                <div>
                  <h2 className="font-semibold text-gray-800 text-lg">
                    {app.title}
                  </h2>
                  <div className="flex items-center md:gap-8 gap-2 text-sm text-gray-500 mt-3">
                    <span className="flex gap-2">
                      <FaDownload className="text-[#10b981c4] text-xl mb-1" />
                      {(app.downloads / 1000000).toFixed(1)}M
                    </span>
                    <span className="flex gap-2">
                      <FaStar className="text-yellow-500 text-xl mb-1" />
                      {app.ratingAvg}
                    </span>
                    <span>{app.size} MB</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => handleUninstall(app.id)}
                className="mt-3 sm:mt-0 cursor-pointer bg-[#10b981c5] hover:bg-[#10b981ec] text-white px-4 py-2 rounded-lg font-medium"
              >
                Uninstall
              </button>
            </div>
          ))}

          {apps.length === 0 && (
            <p className="text-center text-2xl text-gray-500 py-20">
              No apps installed yet.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Installation;
