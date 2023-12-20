import React, { useEffect, useState } from "react";
import styles from "./PhotoCard.module.css";
import { useMutation } from "@tanstack/react-query";
import { approvePhoto, rejectPhoto } from "../../../services/adminServices";
import { queryClient } from "./../../../utils/queryClient";
import LoadingFullScreen from "./../../UI/LoadingFullScreen";

function CardActions({ id }) {

  const {
    mutate: mutateApprove,
    isPending: isPedingApprove,
    isError: isErrorApprove,
    error: errorAppove,
  } = useMutation({
    mutationFn: approvePhoto,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["photos"] });
    },
  });
  const {
    mutate: mutateReject,
    isPending: isPedingReject,
    isError: isErrorReject,
    error: errorReject,
  } = useMutation({
    mutationFn: rejectPhoto,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["photos"] });
    },
  });

  const handleApprovePhoto = () => {
    mutateApprove(id);
  };
  const handleRejectPhoto = () => {
    mutateReject(id);
  };

  return (
    <div className={styles["photo-card__actions"]}>
      {isPedingApprove || (isPedingReject && <LoadingFullScreen />)}
      <button className="btn btn-secondary" onClick={handleApprovePhoto}>
        Approve
      </button>
      <button className="btn btn-danger" onClick={handleRejectPhoto}>
        Reject
      </button>
    </div>
  );
}

export default CardActions;
