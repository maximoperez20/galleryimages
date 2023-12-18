import React from "react";
import "./Photos.css";

function Photo({ path, description }) {
  let descriptionFormated =
    description.length < 80 ? description : description.substr(0, 80) + "...";

  return (
    <div className="photo__container">
      <div className="image-container">
        <img className="photo" src={path} alt={description} />
      </div>
      <p>{descriptionFormated}</p>
    </div>
  );
}

export default Photo;
