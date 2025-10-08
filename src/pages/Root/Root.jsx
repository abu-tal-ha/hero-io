import React from "react";
import Navbar from "../../components/navbar/Navbar";
import { Outlet } from "react-router";
import Footer from "../../components/footer/Footer";

export default function Root() {
  return (
    <div className="">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
}
