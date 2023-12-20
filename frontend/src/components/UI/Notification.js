import React from "react";
import ReactDOM, { createPortal } from "react-dom";

import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { MdOutlineError } from "react-icons/md";

import "./Notification.css";
function Notification({ status, title, message }) {
  if (!status || !title || !message) {
    return null;
  }
  let bgColor;
  switch (status) {
    case "success":
      bgColor = "green";
      break;
    case "error":
      bgColor = "red";
      break;

    default:
      bgColor = "yellow";
      break;
  }
  const portalElement = document.getElementById("notifications");

  return createPortal(
    <>
      <div
        className="notification-container"
        style={{ backgroundColor: bgColor }}
      >
        {status == "success" && <IoMdCheckmarkCircleOutline size={"3rem"} />}
        {status == "error" && <MdOutlineError size={"3rem"} />}

        <div className="content">
          <p className="title">{title}</p>
          <p>{message}</p>
        </div>
      </div>
    </>,
    portalElement
  );
}

export default Notification;
