import React from "react";
import Modal from "./../UI/Modal";
import UploadForm from "./UploadForm";
import { useNavigate } from "react-router-dom";
import { uploadPhoto } from "../../services/photoServices";
function Upload() {
  const navigate = useNavigate();
  const handleCancel = () => {
    navigate("/..");
  };
  const handleSubmit = async (data) => {
    uploadPhoto(data);
  };
  return (
    <Modal>
      <div className="upload-container">
        <h1>Upload a new image</h1>
        <UploadForm onSubmit={handleSubmit}>
          <button
            className="btn btn-secondary"
            type="button"
            onClick={handleCancel}
          >
            Cancel
          </button>
          <button className="btn btn-primary" type="submit">
            Submit
          </button>
        </UploadForm>
      </div>
    </Modal>
  );
}

export default Upload;
