import React, { useState } from "react";
import { Link, useLoaderData, useParams } from "react-router";
import { FaDownload, FaStar, FaCommentDots } from "react-icons/fa";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { toast, Toaster } from "react-hot-toast"; // ✅ Toast Import
import errorImg from "../../assets/App-Error.png";

export default function AppDetails() {
  const { id } = useParams();
  const appId = parseInt(id);
  const data = useLoaderData();
  const app = data.find((item) => item.id === appId);

  const [installed, setInstalled] = useState(false); // ✅ Track installation state

  if (!app) {
    return (
      <div className="flex flex-col items-center justify-center text-center py-32 text-gray-700">
        <img className="py-20" src={errorImg} alt="" />
        <h2 className="text-4xl font-semibold mt-2">Oops, page not found!</h2>
        <p className="text-gray-500 py-5">
          The page you are looking for is not available.
        </p>

        <Link
          to="/"
          className="flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-8 py-2 rounded font-medium hover:opacity-90 transition"
        >
          Go Back!
        </Link>
      </div>
    );
  }

  // ✅ Handle install click
  const handleInstall = () => {
    setInstalled(true);
    toast.success(`${app.title} installed successfully!`, {
      duration: 3000,
      position: "top-center",
    });
  };

  return (
    <section className="container mx-auto px-4 py-16">
      <Toaster /> {/* ✅ Toast Container */}
      {/* === Main App Card === */}
      <div className="p-6 md:p-10 flex flex-col md:flex-row items-center gap-24">
        {/* App Icon */}
        <div className="w-32 h-32 md:w-44 md:h-44 flex-shrink-0">
          <img
            src={app.image}
            alt={app.title}
            className="w-full h-full object-cover rounded-2xl border shadow-sm"
          />
        </div>

        {/* Info */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl font-bold text-gray-800">{app.title}</h2>
          <p className="text-gray-500 mt-1">
            Developed by{" "}
            <span className="text-purple-600 font-medium">
              {app.companyName}
            </span>
          </p>
          <div className="border-t border-gray-700/40 my-6"></div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center md:justify-start gap-12 mt-6">
            <div>
              <FaDownload className="text-green-600 text-xl mb-1" />
              <p className="text-gray-500 text-sm">Downloads</p>
              <p className="font-semibold text-gray-800 text-lg">
                {(app.downloads / 1000000).toFixed(1)}M
              </p>
            </div>

            <div>
              <FaStar className="text-yellow-500 text-xl mb-1" />
              <p className="text-gray-500 text-sm">Average Rating</p>
              <p className="font-semibold text-gray-800 text-lg">
                {app.ratingAvg}
              </p>
            </div>

            <div>
              <FaCommentDots className="text-indigo-500 text-xl mb-1" />
              <p className="text-gray-500 text-sm">Total Reviews</p>
              <p className="font-semibold text-gray-800 text-lg">
                {app.reviews.toLocaleString()}
              </p>
            </div>
          </div>

          {/* ✅ Install Button */}
          <button
            onClick={handleInstall}
            disabled={installed}
            className={`relative overflow-hidden mt-8 font-semibold px-6 py-2 rounded-lg transition-all duration-300 ${
              installed
                ? "bg-[#10b981c4] text-white cursor-not-allowed"
                : "bg-[#10b981] hover:bg-[#10b981c4] text-white cursor-pointer"
            }`}
          >
            {/* ✨ Animated Gradient Overlay */}
            {!installed && (
              <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shine" />
            )}

            <span className="relative z-10">
              {installed ? "Installed" : `Install Now (${app.size} MB)`}
            </span>
          </button>
        </div>
      </div>
      <div className="border-t border-gray-700/40"></div>
      {/* === Ratings Distribution === */}
      <div className="mt-10 bg-white p-6 rounded-2xl shadow-sm">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Ratings</h3>

        <div className="w-full h-72">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={[...app.ratings].reverse()}
              layout="vertical"
              margin={{ top: 10, right: 30, bottom: 10 }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis type="number" />
              <YAxis
                dataKey="name"
                type="category"
                tick={{ fill: "#374151", fontSize: 12 }}
              />
              <Tooltip
                cursor={{ fill: "rgba(0,0,0,0.05)" }}
                contentStyle={{
                  background: "#fff",
                  borderRadius: "8px",
                  border: "1px solid #ddd",
                }}
                labelStyle={{ color: "#111", fontWeight: 600 }}
                formatter={(value, name, props) => [
                  `count: ${value}`,
                  props.payload.name,
                ]}
              />
              <Bar
                dataKey="count"
                fill="#10b981"
                barSize={20}
                radius={[0, 6, 6, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      {/* === Description === */}
      <div className="mt-10 p-6 rounded-2xl">
        <h3 className="text-lg font-semibold text-gray-800 mb-3">
          Description
        </h3>
        <p className="text-gray-700 leading-relaxed">{app.description}</p>
      </div>
    </section>
  );
}
