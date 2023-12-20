import React from "react";
import "./LoadingFullScreen.css";
import LoadingSpinner from "./LoadingSpinner";
function LoadingFullScreen() {
  return (
    <div className="back">
      <LoadingSpinner />
    </div>
  );
}

export default LoadingFullScreen;
