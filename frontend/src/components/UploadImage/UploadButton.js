import React from "react";
import { GoPlus } from "react-icons/go";
import "./Upload.css";
import { useNavigate } from "react-router-dom";
function UploadButton() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/upload");
  };

  return (
    <div className="upload-image_button" onClick={handleClick}>
      <GoPlus size={"2rem"} />
    </div>
  );
}

export default UploadButton;
