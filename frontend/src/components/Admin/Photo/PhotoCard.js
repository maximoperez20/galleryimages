import React from "react";
import styles from "./PhotoCard.module.css";
import CardActions from "./CardActions";

function PhotoCard({ path, description, id, status }) {
  let bgColor;
  switch (status) {
    case 0:
      bgColor = "lightgray";
      break;
    case 1:
      bgColor = "lightgreen";
      break;
    case 2:
      bgColor = "red";
      break;

    default:
      bgColor = "lightgray";

      break;
  }
  return (
    <div className={styles["photo-card"]} style={{ backgroundColor: bgColor }}>
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
