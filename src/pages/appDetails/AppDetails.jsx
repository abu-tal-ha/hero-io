import React from "react";
import { useLoaderData, useParams } from "react-router";
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

export default function AppDetails() {
  const { id } = useParams();
  const appId = parseInt(id);
  const data = useLoaderData();
  const app = data.find((item) => item.id === appId);

  if (!app) {
    return (
      <div className="py-40 text-center text-gray-500">App not found.</div>
    );
  }

  return (
    <section className="container mx-auto px-4 py-16">
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

          <button className="mt-8 cursor-pointer bg-green-500 hover:bg-green-700 text-white font-semibold px-6 py-2 rounded-lg transition">
            Install Now ({app.size} MB)
          </button>
        </div>
      </div>

      <div className="border-t border-gray-700/40"></div>

      {/* === Ratings Distribution with Recharts === */}
      <div className="mt-10 bg-white p-6 rounded-2xl shadow-sm">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Ratings</h3>

        <div className="w-full h-72">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={[...app.ratings].reverse()}
              layout="vertical"
              margin={{ top: 10, right: 30, left: 30, bottom: 10 }}
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
                fill="#10b981" // Tailwind green-500
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
