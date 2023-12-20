import React from "react";
import Modal from "./../UI/Modal";
import UploadForm from "./UploadForm";
import { useNavigate } from "react-router-dom";
import { uploadPhoto } from "../../services/photoServices";
import { useMutation } from "@tanstack/react-query";

import { queryClient } from "./../../utils/queryClient";
import Notification from "../UI/Notification";
import { useDispatch } from "react-redux";
import { uiActions } from "../../store/ui-slice";

function Upload(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleCancel = () => {
    navigate("/");
  };

  const handleShowNotification = () => {
    dispatch(
      uiActions.showNotification({
        status: "success",
        title: "Image uploaded",
        message: "Your image was uploaded succesfully!",
      })
    );
  };
  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: uploadPhoto,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["photos"] });
      navigate("/");
      handleShowNotification();
    },
    onError: () => {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Your image was not uploaded. Please try again later.",
        })
      );
    },
  });
  const handleSubmit = async (data) => {
    mutate(data);
  };

  return (
    <Modal>
      <h1>{props.text}</h1>
      <div className="upload-container">
        {true && (
          <Notification
            type="success"
            title="Image uploaded successfully!"
            message="Your image was uploaded."
          />
        )}
        <h1>Upload your image!</h1>
        <UploadForm onSubmit={handleSubmit}>
          {!isPending ? (
            <>
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
            </>
          ) : (
            <p>Submiting...</p>
          )}
        </UploadForm>
      </div>
    </Modal>
  );
}

export default Upload;
