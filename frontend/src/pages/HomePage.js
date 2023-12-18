import React from "react";
import Photos from "../components/Photos";
import Header from "../components/Layout/Header";

import "./HomePage.css";
import UploadButton from "../components/UploadImage/UploadButton";
import { Outlet } from "react-router-dom";

// Import Swiper React components

function HomePage() {
  return (
    <>
      <div className="homepage">
        <Outlet />
        <Header />
        <Photos />
        <UploadButton />
      </div>
    </>
  );
}

export default HomePage;
