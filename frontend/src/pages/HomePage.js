import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

import Photos from "../components/Photos";
import Header from "../components/Layout/Header";
import UploadButton from "../components/UploadImage/UploadButton";
import Notification from "../components/UI/Notification";
import { uiActions } from "../store/ui-slice";

import "./HomePage.css";
import uiSlice from "../store/ui-slice";

// Import Swiper React components

function HomePage() {
  const notification = useSelector((state) => state.ui.notification);
  const dispatch = useDispatch();

  useEffect(() => {
    const closeModal = setTimeout(() => {
      dispatch(uiActions.showNotification({ status: null }));
    }, 5000);
    return () => {
      clearTimeout(closeModal);
    };
  }, [notification]);
/*
  const handleShowNotification = () => {
    dispatch(
      uiActions.showNotification({
        status: "error",
        title: "Error!",
        message: "Fetching cart data failed!",
      })
    );
  };*/

  return (
    <>
      <div className="homepage">
        {notification && (
          <Notification
            status={notification.status}
            title={notification.title}
            message={notification.message}
          />
        )}
        {/* <button onClick={handleShowNotification}>asdasd</button> */}
        <Outlet />
        <Header />
        <Photos />
        <UploadButton />
      </div>
    </>
  );
}

export default HomePage;
