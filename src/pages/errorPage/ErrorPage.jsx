import React from "react";
import { Link } from "react-router-dom";
import errorImg from "../../assets/error-404.png";

export default function ErrorPage({ error }) {
  return (
    <div className="flex flex-col items-center justify-center text-center py-32 text-gray-700">
      <img className="py-20" src={errorImg} alt="" />
      <h2 className="text-4xl font-semibold mt-2">Oops, page not found!</h2>
      <p className="text-gray-500 py-5">
        The page you are looking for is not available.
      </p>
      {error && (
        <p className="mt-2 text-gray-500">
          {error.statusText || error.message}
        </p>
      )}
      <Link
        to="/"
        className="flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-8 py-2 rounded font-medium hover:opacity-90 transition"
      >
        Go Back!
      </Link>
    </div>
  );
}
