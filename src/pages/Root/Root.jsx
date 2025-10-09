import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { Outlet } from "react-router";
import ErrorPage from "../errorPage/ErrorPage";

export default function Root() {
  // const error = useRouteError();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* <main className="flex-grow container mx-auto px-4 py-10">
        {error ? <ErrorPage error={error} /> : <Outlet />}
      </main> */}
      <Outlet />

      <Footer />
    </div>
  );
}
