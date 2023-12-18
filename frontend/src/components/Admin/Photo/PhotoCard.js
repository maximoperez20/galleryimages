import React from "react";
import styles from "./PhotoCard.module.css";
import CardActions from "./CardActions";

function PhotoCard({ path, description, id }) {
  return (
    <div className={styles["photo-card"]}>
      <img
        className={styles["photo-card__image"]}
        src={path}
        alt={description}
      />

      <p className={styles["photo-card__text"]}>
        {id} - {description}
      </p>
      <CardActions id={id} />
    </div>
  );
}

export default PhotoCard;
